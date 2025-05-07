function submit(){

const genders = document.querySelector('#genders').value;
const fullname = document.querySelector('#fullname').value;
  const studentFieldd = document.getElementById("student").value;
   const sectionFieldd = document.getElementById("section").value;
    const staffFieldd = document.getElementById("staff").value;
 document.querySelector('.result h1').innerHTML = genders+" "+fullname;
 const position = document.getElementById("position").value.toLowerCase();
 document.querySelector('.result h5').innerHTML="BS. "+ document.getElementById('dates').value;
 if(position === "staff") {
 document.querySelector('.result h4').innerHTML=staffFieldd;
}
else{
   document.querySelector('.result h4').innerHTML="Class :- " + studentFieldd+" ("+sectionFieldd+")";
}

}


const listItems = document.querySelectorAll('.templetes ul li');
const apImage = document.getElementById('ap');

// Add a click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener('click', function() {
    // Get the src of the image inside the clicked li
    const imgSrc = item.querySelector('img').src;

    // Set the src of the apImage to the selected image src
    apImage.src = imgSrc;
  });
});

let cropper;
const input = document.querySelector("#upimage");
const cropperModal = document.getElementById('cropperModal');
const cropperImage = document.getElementById('cropperImage');
const resultImage = document.getElementById('img');

input.addEventListener("change", () => {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      cropperImage.src = reader.result;
      cropperModal.style.display = 'block';

      // Initialize Cropper.js with smaller dimensions
      cropper = new Cropper(cropperImage, {
        aspectRatio: 1, // Adjust as needed
        viewMode: 2,
        minCropBoxWidth: 100, // Minimum crop box width
        minCropBoxHeight: 100, // Minimum crop box height
        autoCropArea: 0.8 // Set the initial crop box size smaller
      });
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('cropButton').addEventListener('click', () => {
  const croppedCanvas = cropper.getCroppedCanvas({
    width: 150, // You can adjust the output size here if needed
    height: 150
  });
  resultImage.src = croppedCanvas.toDataURL();
  cropperModal.style.display = 'none';
  cropper.destroy(); // Clean up the cropper instance
});

document.getElementById('cancelCrop').addEventListener('click', () => {
  cropperModal.style.display = 'none';
  cropper.destroy();
});