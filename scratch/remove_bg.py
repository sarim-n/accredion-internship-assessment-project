from PIL import Image

# Load the original image
img = Image.open('public/strategic-skills.png').convert('RGBA')
datas = img.getdata()

new_data = []
for item in datas:
    # Check if pixel is white or near-white (R, G, B > 240)
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        # Make transparent
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('public/strategic-skills.png', 'PNG')
print('Successfully removed white background and created transparent PNG!')
