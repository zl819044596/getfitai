#!/usr/bin/env python3
"""Generate OG images for workout pages"""

from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "/root/getfitai/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

WORKOUTS = [
    ("beginner", "Beginner Workout", "Start Your Fitness Journey"),
    ("home", "Home Workout", "No Equipment Needed"),
    ("gym", "Gym Workout", "Maximize Your Training"),
]

def create_og_image(filename, title, subtitle):
    # 1200x630 OG image size
    img = Image.new('RGB', (1200, 630), (15, 15, 15))
    draw = ImageDraw.Draw(img)
    
    # Try to load font
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ]
    
    title_font = None
    subtitle_font = None
    for path in font_paths:
        if os.path.exists(path):
            title_font = ImageFont.truetype(path, 72)
            subtitle_font = ImageFont.truetype(path, 40)
            break
    
    if not title_font:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Draw title
    bbox = draw.textbbox((0, 0), title, font=title_font)
    title_w = bbox[2] - bbox[0]
    title_x = (1200 - title_w) // 2
    draw.text((title_x, 200), title, font=title_font, fill=(255, 255, 255))
    
    # Draw subtitle
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    sub_w = bbox[2] - bbox[0]
    sub_x = (1200 - sub_w) // 2
    draw.text((sub_x, 320), subtitle, font=subtitle_font, fill=(200, 200, 200))
    
    # Draw brand
    brand_font = ImageFont.truetype(font_paths[0], 28) if font_paths[0] and os.path.exists(font_paths[0]) else ImageFont.load_default()
    draw.text((50, 560), "getfitai.io", font=brand_font, fill=(150, 150, 150))
    
    # Save
    filepath = os.path.join(OUTPUT_DIR, filename)
    img.save(filepath, "PNG")
    print(f"Created: {filepath}")

for workout_type, title, subtitle in WORKOUTS:
    create_og_image(f"og-{workout_type}.png", title, subtitle)

print("All OG images generated!")
