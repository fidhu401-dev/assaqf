import os

d = 'src/assets/images'
files = [f for f in os.listdir(d) if f.endswith('.jpeg')]
for i, f in enumerate(files, 1):
    os.rename(os.path.join(d, f), os.path.join(d, f'img{i}.jpeg'))
