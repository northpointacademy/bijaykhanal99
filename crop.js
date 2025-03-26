let cropper;
const cropContainer = document.getElementById('crop-container');
const cropImage = document.getElementById('crop-image');
const cropButton = document.getElementById('crop-button');
const imageInput = document.getElementById('img');
const birtImage = document.getElementById('tbirt');

imageInput.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      cropImage.src = event.target.result;
      cropContainer.style.display = 'block';
  

      cropper = new Cropper(cropImage, {
        aspectRatio: 1,
        viewMode: 1,
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

cropButton.addEventListener('click', () => {
  const croppedCanvas = cropper.getCroppedCanvas();
  birtImage.src = croppedCanvas.toDataURL('image/png');
  cropContainer.style.display = 'none';
  cropper.destroy();
  cropper = null;
});

