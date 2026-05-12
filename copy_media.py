import os
import shutil

source_dir = r"c:\Users\Administrator\.gemini\antigravity\brain\f5379717-1e75-44fb-820b-3120fc8a43ed"
target_dir = r"c:\Users\Administrator\Downloads\assaqf\assaqf\src\assets\images"

files = []
for f in os.listdir(source_dir):
    path = os.path.join(source_dir, f)
    if os.path.isfile(path) and f.startswith("media__") and f.endswith(".jpg"):
        mtime = os.path.getmtime(path)
        files.append((mtime, f, path))

# Sort by modification time to get all of them
files.sort(key=lambda x: x[0])

for i, (_, f, path) in enumerate(files, 1):
    new_name = f"new_image_{i}.jpg"
    shutil.copy(path, os.path.join(target_dir, new_name))
    print(f"Copied {f} to {new_name}")

