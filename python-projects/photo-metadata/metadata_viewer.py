#import the Image module from PIL (Python Imaging Library) to handle and process image files
from PIL import Image 

#input
#asking user if they want to analyze an image
imageAnalyze = input("Do you want to analyze an image? (yes/no): ")

while imageAnalyze.lower() in ["yes", "y"]: #lower will accept any case of "Yes", "yes", "YES"
  fileName = input("Enter the name of your photo file: ") #asking for file name

  #process: loop to test if file is valid with correct extensions
  while not fileName.endswith(('.jpg','.jpeg','.png')):
    print("file error")
    fileName = input("Enter the name of your photo file: ")

  #output: if file is valid then the data will print
  img = Image.open(fileName)
  print(f'\nFile name: {fileName}')
  print(f'Width: {img.size[0]} pixels, Height: {img.size[1]} pixels')
  print(f'The image format is in {img.format}')
  print(f'The color mode of the image is in {img.mode}')

  #ask user if they want to analyze another image
  imageAnalyze = input("\nDo you want to analyze another image? (yes/no): ")


