#!/usr/bin/env node
/**
 * Generate workout images via ComfyUI API - Fixed version with better prompts
 */

const http = require('http');

const COMFY_HOST = '127.0.0.1';
const COMFY_PORT = 8188;

const exercises = [
  {
    name: 'goblet_squat',
    prompt: 'photorealistic fitness photo, muscular man doing goblet squat, holding a dumbbell with both hands at chest level, elbows tucked in, feet shoulder-width apart, knees tracking over toes, perfect anatomy, correct hands and fingers, detailed facial features, gym studio, plain gray background, soft studio lighting from left side, high detail, sharp focus, 8k, professional sports photography, RAW photo',
  },
];

const negativePrompt = 'blurry, low quality, distorted hands, extra fingers, missing fingers, deformed anatomy, ugly, text, watermark, logo, bad proportions, pixelated, mutated, disfigured, poorly drawn face, cloned face, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, cross-eyed, mutated hands, polar lowres, bad face';

function postJSON(path, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request({
      hostname: COMFY_HOST,
      port: COMFY_PORT,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); } catch (e) { resolve(body); }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function buildWorkflow(exercise) {
  return {
    "1": {
      "inputs": { "ckpt_name": "v1-5-pruned-emaonly.safetensors" },
      "class_type": "CheckpointLoaderSimple",
      "_meta": { "title": "Load Checkpoint" }
    },
    "2": {
      "inputs": {
        "model": ["1", 0],
        "model_name": "mm_sd_v15_v2.ckpt",
        "beta_schedule": "autoselect"
      },
      "class_type": "ADE_AnimateDiffLoaderGen1",
      "_meta": { "title": "AnimateDiff Loader" }
    },
    "3": {
      "inputs": {
        "text": exercise.prompt,
        "clip": ["1", 1]
      },
      "class_type": "CLIPTextEncode",
      "_meta": { "title": "Positive Prompt" }
    },
    "4": {
      "inputs": {
        "text": negativePrompt,
        "clip": ["1", 1]
      },
      "class_type": "CLIPTextEncode",
      "_meta": { "title": "Negative Prompt" }
    },
    "5": {
      "inputs": { "width": 768, "height": 768, "batch_size": 16 },
      "class_type": "EmptyLatentImage",
      "_meta": { "title": "Empty Latent" }
    },
    "7": {
      "inputs": {
        "seed": Math.floor(Math.random() * 1000000000),
        "steps": 30,
        "cfg": 7,
        "sampler_name": "dpmpp_2m",
        "scheduler": "karras",
        "denoise": 1,
        "model": ["2", 0],
        "positive": ["3", 0],
        "negative": ["4", 0],
        "latent_image": ["5", 0]
      },
      "class_type": "KSampler",
      "_meta": { "title": "KSampler" }
    },
    "8": {
      "inputs": {
        "samples": ["7", 0],
        "vae": ["1", 2]
      },
      "class_type": "VAEDecode",
      "_meta": { "title": "VAE Decode" }
    },
    "9": {
      "inputs": {
        "filename_prefix": `workout_${exercise.name}`,
        "fps": 8,
        "lossless": false,
        "quality": 85,
        "method": "default",
        "images": ["8", 0]
      },
      "class_type": "SaveAnimatedWEBP",
      "_meta": { "title": "Save Animated WebP" }
    }
  };
}

async function queuePrompt(workflow) {
  return await postJSON('/prompt', { prompt: workflow });
}

async function main() {
  console.log('Generating fixed goblet squat animation...\n');

  const exercise = exercises[0];
  try {
    console.log(`Queueing: ${exercise.name}...`);
    const workflow = buildWorkflow(exercise);
    const res = await queuePrompt(workflow);
    if (res.error) {
      console.log(`  Error: ${res.error.message || JSON.stringify(res.error)}`);
    } else {
      console.log(`  Prompt ID: ${res.prompt_id}`);
    }
  } catch (err) {
    console.error(`  Failed: ${err.message}`);
  }

  console.log('\nAnimation queued!');
  console.log('Check output at: /Volumes/Data/ComfyUI/output/');
}

main().catch(console.error);
