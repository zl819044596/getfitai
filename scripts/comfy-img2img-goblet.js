#!/usr/bin/env node
/**
 * ComfyUI img2img - Use reference pose to generate realistic goblet squat
 * Mac mini M4 16G Safe: 512x768, steps 20, CFG 6.5, denoise 0.4
 */

const http = require('http');
const fs = require('fs');

const COMFY_HOST = '127.0.0.1';
const COMFY_PORT = 8188;

const CONFIG = {
  width: 512,
  height: 768,
  steps: 20,
  cfg: 6.5,
  sampler: 'dpmpp_2m',
  scheduler: 'karras',
  denoise: 0.4,  // Low denoise to preserve pose
};

const POSITIVE_BASE = 'photorealistic fitness photography, professional gym scene, natural lighting, high detail, sharp focus, realistic human anatomy';
const NEGATIVE_BASE = 'cartoon, anime, illustration, blurry, low quality, deformed body, extra limbs, distorted hands, ugly, text, watermark, logo, bad proportions, pixelated';

const REF_IMAGE = '/Users/zhl/.hermes/image_cache/img_ec82db2213f2.jpg';

const EXERCISE = {
  name: 'goblet_squat_img2img',
  prompt: 'muscular man performing perfect goblet squat, holding kettlebell by the horns at chest level, bell resting against upper chest, elbows tucked inside knees, thighs parallel to ground, deep squat position, upright torso, neutral spine, feet shoulder-width apart, knees tracking over toes, professional gym with gray background, soft studio lighting from left side, side view angle, 8k, RAW photo, realistic skin texture, detailed facial features',
};

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
        "text": `${exercise.prompt}, ${POSITIVE_BASE}`,
        "clip": ["1", 1]
      },
      "class_type": "CLIPTextEncode",
      "_meta": { "title": "Positive Prompt" }
    },
    "3": {
      "inputs": {
        "text": NEGATIVE_BASE,
        "clip": ["1", 1]
      },
      "class_type": "CLIPTextEncode",
      "_meta": { "title": "Negative Prompt" }
    },
    "4": {
      "inputs": { "image": REF_IMAGE },
      "class_type": "LoadImage",
      "_meta": { "title": "Load Reference Image" }
    },
    "5": {
      "inputs": {
        "width": CONFIG.width,
        "height": CONFIG.height,
        "interpolation": "lanczos",
        "method": "fit",
        "condition": "always",
        "image": ["4", 0]
      },
      "class_type": "ImageScale",
      "_meta": { "title": "Scale Reference" }
    },
    "6": {
      "inputs": { "pixels": "fit", "image": ["5", 0] },
      "class_type": "VAEEncode",
      "_meta": { "title": "Encode Reference" }
    },
    "7": {
      "inputs": {
        "seed": Math.floor(Math.random() * 1000000000),
        "steps": CONFIG.steps,
        "cfg": CONFIG.cfg,
        "sampler_name": CONFIG.sampler,
        "scheduler": CONFIG.scheduler,
        "denoise": CONFIG.denoise,
        "model": ["1", 0],
        "positive": ["2", 0],
        "negative": ["3", 0],
        "latent_image": ["6", 0]
      },
      "class_type": "KSampler",
      "_meta": { "title": "KSampler img2img" }
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
        "filename_prefix": `img2img_${exercise.name}`,
        "images": ["8", 0]
      },
      "class_type": "SaveImage",
      "_meta": { "title": "Save Image" }
    }
  };
}

async function queuePrompt(workflow) {
  return await postJSON('/prompt', { prompt: workflow });
}

async function main() {
  console.log('=== ComfyUI img2img Goblet Squat ===\n');
  console.log(`Reference: ${REF_IMAGE}`);
  console.log(`Resolution: ${CONFIG.width}x${CONFIG.height}`);
  console.log(`Denoise: ${CONFIG.denoise} (preserve pose)`);
  console.log('\nQueueing...');

  try {
    const workflow = buildWorkflow(EXERCISE);
    const res = await queuePrompt(workflow);
    if (res.error) {
      console.log(`\n❌ Error: ${res.error.message || JSON.stringify(res.error)}`);
    } else {
      console.log(`\n✅ Prompt ID: ${res.prompt_id}`);
      console.log(`\n⏱️  Estimated time: ~3-5 minutes`);
      console.log(`📁 Output: /Volumes/Data/ComfyUI/output/img2img_${EXERCISE.name}_*.png`);
    }
  } catch (err) {
    console.error(`\n❌ Failed: ${err.message}`);
  }
}

main().catch(console.error);
