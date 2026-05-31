#!/usr/bin/env node
/**
 * Generate workout animations via ComfyUI API using AnimateDiff
 */

const http = require('http');

const COMFY_HOST = '127.0.0.1';
const COMFY_PORT = 8188;

const exercises = [
  { name: 'squat', prompt: 'masterpiece, best quality, a fitness athlete performing a perfect barbell squat exercise, side view, full body, gym background, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'bench_press', prompt: 'masterpiece, best quality, a fitness athlete performing a perfect bench press exercise, top view, lying on bench, gym background, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'deadlift', prompt: 'masterpiece, best quality, a fitness athlete performing a perfect deadlift exercise, side view, full body, gym background, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'pushup', prompt: 'masterpiece, best quality, a fitness athlete performing perfect push-ups, side view, bodyweight exercise, gym floor, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'lunge', prompt: 'masterpiece, best quality, a fitness athlete performing perfect lunges, side view, full body, gym background, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'plank', prompt: 'masterpiece, best quality, a fitness athlete holding a perfect plank position, side view, core exercise, gym floor, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'bicep_curl', prompt: 'masterpiece, best quality, a fitness athlete performing dumbbell bicep curls, front view, upper body, gym background, professional lighting, detailed anatomy, 4k, smooth motion' },
  { name: 'shoulder_press', prompt: 'masterpiece, best quality, a fitness athlete performing dumbbell shoulder press, side view, upper body, gym background, professional lighting, detailed anatomy, 4k, smooth motion' },
];

const negativePrompt = 'worst quality, low quality, blurry, distorted, deformed, bad anatomy, watermark, signature, text, multiple people, discontinuous motion, jittery';

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
      "inputs": { "width": 512, "height": 512, "batch_size": 16 },
      "class_type": "EmptyLatentImage",
      "_meta": { "title": "Empty Latent" }
    },
    "7": {
      "inputs": {
        "seed": Math.floor(Math.random() * 1000000000),
        "steps": 20,
        "cfg": 7.5,
        "sampler_name": "euler_ancestral",
        "scheduler": "normal",
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
        "quality": 80,
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
  console.log(`Generating ${exercises.length} workout animations...\n`);

  for (const exercise of exercises) {
    try {
      console.log(`Queueing: ${exercise.name}...`);
      const workflow = buildWorkflow(exercise);
      const res = await queuePrompt(workflow);
      if (res.error) {
        console.log(`  Error: ${res.error.message || JSON.stringify(res.error)}`);
      } else {
        console.log(`  Prompt ID: ${res.prompt_id}`);
      }
      await new Promise(r => setTimeout(r, 3000));
    } catch (err) {
      console.error(`  Failed: ${err.message}`);
    }
  }

  console.log('\nAll animations queued!');
  console.log('Check output at: /Volumes/Data/ComfyUI/output/');
}

main().catch(console.error);