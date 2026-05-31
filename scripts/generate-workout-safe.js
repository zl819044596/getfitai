#!/usr/bin/env node
/**
 * Generate workout images via ComfyUI API - Mac mini M4 16G Safe Version
 * Rules: SD1.5 only, 512x512 max, batch=1, 16 frames max
 */

const http = require('http');

const COMFY_HOST = '127.0.0.1';
const COMFY_PORT = 8188;

// === CONFIGURATION ===
const EXERCISE = {
  name: 'goblet_squat_v2',
  // 精简正向词，减少模型压力
  prompt: 'photorealistic man doing goblet squat, holding dumbbell with both hands at chest level, elbows tucked, feet shoulder-width apart, knees tracking over toes, studio lighting, plain gray background, high detail, sharp focus, professional sports photography',
};

// 精简反向词，只保留核心过滤
const negativePrompt = 'blurry, low quality, distorted hands, extra fingers, missing fingers, deformed anatomy, extra limbs, bad proportions, pixelated, ugly, text, watermark, logo';

// 16G安全参数
const CONFIG = {
  width: 512,
  height: 512,
  batch_size: 16,      // 动画帧数 (max 16)
  steps: 20,           // 采样步数 (别超25)
  cfg: 7,              // CFG scale
  sampler: 'euler_ancestral',  // 轻量采样器
  scheduler: 'normal',
  fps: 8,              // 输出帧率
  quality: 85,         // WebP质量
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
      "inputs": {
        "width": CONFIG.width,
        "height": CONFIG.height,
        "batch_size": CONFIG.batch_size
      },
      "class_type": "EmptyLatentImage",
      "_meta": { "title": "Empty Latent" }
    },
    "7": {
      "inputs": {
        "seed": Math.floor(Math.random() * 1000000000),
        "steps": CONFIG.steps,
        "cfg": CONFIG.cfg,
        "sampler_name": CONFIG.sampler,
        "scheduler": CONFIG.scheduler,
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
        "fps": CONFIG.fps,
        "lossless": false,
        "quality": CONFIG.quality,
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
  console.log('=== Mac mini M4 16G Safe Workout Generator ===\n');
  console.log(`Exercise: ${EXERCISE.name}`);
  console.log(`Resolution: ${CONFIG.width}x${CONFIG.height}`);
  console.log(`Frames: ${CONFIG.batch_size}`);
  console.log(`Steps: ${CONFIG.steps}`);
  console.log(`Sampler: ${CONFIG.sampler}`);
  console.log('\nQueueing...');

  try {
    const workflow = buildWorkflow(EXERCISE);
    const res = await queuePrompt(workflow);
    if (res.error) {
      console.log(`\n❌ Error: ${res.error.message || JSON.stringify(res.error)}`);
    } else {
      console.log(`\n✅ Prompt ID: ${res.prompt_id}`);
      console.log(`\n⏱️  Estimated time: ~5-8 minutes (16G M4)`);
      console.log(`📁 Output: /Volumes/Data/ComfyUI/output/workout_${EXERCISE.name}_00001_.webp`);
    }
  } catch (err) {
    console.error(`\n❌ Failed: ${err.message}`);
  }
}

main().catch(console.error);
