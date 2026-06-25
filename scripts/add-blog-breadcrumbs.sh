#!/bin/bash
set -e
cd /Volumes/Data/GitHub/getfitai

pages=()
while IFS= read -r page; do
  if ! grep -q "breadcrumbList\|BreadcrumbList" "$page"; then
    pages+=("$page")
  fi
done < <(find src/app/blog -mindepth 2 -name "page.tsx" | sort)

echo "Found ${#pages[@]} pages missing breadcrumbs"

process_page() {
  local page="$1"
  local slug
  slug=$(basename "$(dirname "$page")")
  
  # Extract title from metadata (first title: line)
  local title
  title=$(grep "^[[:space:]]*title:" "$page" | head -1 | sed "s/.*\"\(.*\)\".*/\1/" | sed 's/ | GetFitAI//')
  
  echo "Processing: $slug - $title"
  
  # Check if the breadcrumb def already exists
  if grep -q "breadcrumb = breadcrumbList" "$page"; then
    echo "  -> Already has breadcrumb, skipping"
    return
  fi
  
  # Find insertion lines
  local import_line
  import_line=$(grep -n "lucide-react" "$page" | head -1 | cut -d: -f1)
  
  local schema_line
  schema_line=$(grep -n "const articleSchema" "$page" | head -1 | cut -d: -f1)
  
  # 1. Add import after lucide-react
  sed -i '' "${import_line}a\\
import { breadcrumbList } from \"@/lib/schema\";" "$page"
  
  # Lines shifted by 1
  schema_line=$((schema_line + 1))
  
  # 2. Add breadcrumb const before articleSchema
  local breadcrumb_def='const breadcrumb = breadcrumbList([\
  { name: "Home", url: "https://www.getfitai.io" },\
  { name: "Blog", url: "https://www.getfitai.io/blog/" },\
  { name: "'"$title"'", url: "https://www.getfitai.io/blog/'"$slug"'/" },\
]);'
  
  sed -i '' "${schema_line}i\\
$breadcrumb_def" "$page"
  
  # 3. Find the <main line (shifted by 3 now - import + breadcrumb def)
  local main_line
  main_line=$(grep -n "^    <main" "$page" | head -1 | cut -d: -f1)
  
  sed -i '' "${main_line}a\\
        <JsonLd data={breadcrumb} />" "$page"
  
  echo "  -> Done"
}

for page in "${pages[@]}"; do
  process_page "$page"
done

echo "=== All done ==="
