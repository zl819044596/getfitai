#!/usr/bin/env node
const http = require('http');
const REF_IMAGE = '/Users/zhl/.hermes/image_cache/img_ec82db2213f2.jpg';

function postJSON(path, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request({
      hostname: '127.0.0.1', port: 8188, path, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => { try { resolve(JSON.parse(body)); } catch (e) { resolve(body); } });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  const workflow = {
    "1": {
      "inputs": { "ckpt_name": "v1-5-pruned-emaonly.safetensors" },
      "class_type": "CheckpointLoaderSimple"
    },
    "2": {
      "inputs": {
        "text": "photorealistic muscular man performing perfect goblet squat, holding kettlebell by horns at chest level, bell against upper chest, elbows tucked inside knees, thighs parallel to ground, deep squat, upright torso, neutral spine, feet shoulder-width, knees tracking over toes, professional gym, gray background, soft studio lighting from left, side view, 8k, RAW photo, realistic skin texture, photorealistic fitness photography, professional gym scene, natural lighting, high detail, sharp focus, realistic human anatomy",
        "clip": ["1", 1]
      },
      "class_type": "CLIPTextEncode"
    },
    "3": {
      "inputs": {
        "text": "cartoon, anime, illustration, blurry, low quality, deformed body, extra limbs, distorted hands, ugly, text, watermark, logo, bad proportions, pixelated",
        "clip": ["1", 1]
      },
      "class_type": "CLIPTextEncode"
    },
    "4": {
      "inputs": { "image": REF_IMAGE },
      "class_type": "LoadImage"
    },
    "5": {
      "inputs": { "pixels": ["4", 0], "vae": ["1", 2] },
      "class_type": "VAEEncode"
    },
    "6": {
      "inputs": {
        "seed": Math.floor(Math.random() * 1000000000),
        "steps": 20,
        "cfg": 6.5,
        "sampler_name": "dpmpp_2m",
        "scheduler": "karras",
        "denoise": 0.45,
        "model": ["1", 0],
        "positive": ["2", 0],
        "negative": ["3", 0],
        "latent_image": ["5", 0]
      },
      "class_type": "KSampler"
    },
    "7": {
      "inputs": { "samples": ["6", 0], "vae": ["1", 2] },
      "class_type": "VAEDecode"
    },
    "8": {
      "inputs": { "filename_prefix": "img2img_goblet", "images": ["7", 0] },
      "class_type": "SaveImage"
    }
  };

  console.log('Queueing img2img goblet squat v2...');
  const res = await postJSON('/prompt', { prompt: workflow });
  if (res.error) {
    console.log(`Error: ${JSON.stringify(res.error)}`);
  } else {
    console.log(`✅ Prompt ID: ${res.prompt_id}`);
    console.log(`⏱️  ~3-5 minutes`);
    console.log(`📁 Output: /Volumes/Data/ComfyUI/output/img2img_goblet_*.png`);
  }
}

main().catch(console.error);
