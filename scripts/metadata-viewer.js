//get elements needed
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const metadataDisplay = document.getElementById('metadataDisplay');

// when user selects a file
fileInput.addEventListener('change', function() {
  // Get the selected file
  let file = fileInput.files[0];
  
  // Show the image preview
  imagePreview.src = URL.createObjectURL(file);
  imagePreview.style.display = 'block';

  // Display the metadata in Python's format
  metadataDisplay.innerHTML = `
      <div class="metadata-item">File name: ${file.name}</div>
      <div class="metadata-item" id="dimensions"></div>
      <div class="metadata-item">The image format is in ${file.type.split('/')[1].toUpperCase()}</div>
      <div class="metadata-item">The color mode of the image is in RGB</div>
  `;

  // Get and show image dimensions in Python's format
  imagePreview.onload = function() {
      document.getElementById('dimensions').textContent = 
          `Width: ${imagePreview.width} pixels, Height: ${imagePreview.height} pixels`;
  };
});