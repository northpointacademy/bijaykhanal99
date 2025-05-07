const nameElement = document.querySelector('.result h1');
const classElement = document.querySelector('.result h4');
const dateElement = document.querySelector('.result h5');
const fontss = document.querySelector('#fontss');
const fontsss = document.querySelector('#fontsss');
const ncolor = document.querySelector('#ncolor');
const cpcolor = document.querySelector('#cpcolor');
const dtcolor = document.querySelector('#dtcolor');
ncolor.addEventListener('input', () => {
  nameElement.style.color = ncolor.value;
});

cpcolor.addEventListener('input', () => {
  classElement.style.color = cpcolor.value;
});
dtcolor.addEventListener('input', () => {
  dateElement.style.color = dtcolor.value;
});



function boldn(){
  const nameElement = document.querySelector('.result h1');
  if (nameElement.style.fontWeight == "bold") {
    nameElement.style.fontWeight = "100";
  }
  else{nameElement.style.fontWeight = "bold"}
}
function undern() {
  const nameElement = document.querySelector('.result h1');
  if (nameElement.style.textDecoration === "underline") {
    nameElement.style.textDecoration = "none";
  } else {
    nameElement.style.textDecoration = "underline";
  }
}

function aan(){
  const nameElement = document.querySelector('.result h1');
  if (nameElement.style.textTransform == "uppercase") {
    nameElement.style.textTransform = "capitalize";
  }
  else{nameElement.style.textTransform = "uppercase"}
}
function boldc(){
  const nameElement = document.querySelector('.result h4');
  if (nameElement.style.fontWeight == "bold") {
    nameElement.style.fontWeight = "100";
  }
  else{nameElement.style.fontWeight = "bold"}
}
function aac(){
  const nameElement = document.querySelector('.result h4');
  if (nameElement.style.textTransform == "uppercase") {
    nameElement.style.textTransform = "capitalize";
  }
  else{nameElement.style.textTransform = "uppercase"}
}


// Update the font of the name element
fontss.addEventListener('change', function () {
    const selectedFont = fontss.value.replace(/-/g, ' ');
    nameElement.style.fontFamily = `'${selectedFont}', sans-serif`;
});

// Update the font of the class/position element
fontsss.addEventListener('change', function () {
    const selectedFont = fontsss.value.replace(/-/g, ' ');
    classElement.style.fontFamily = `'${selectedFont}', sans-serif`;
});


// size 
const nameSlider = document.getElementById("namesize");
  const nameValue = document.getElementById("namesize-value");

  const classSlider = document.getElementById("classsize");
  const classValue = document.getElementById("classsize-value");

  // Update values on input
  nameSlider.addEventListener("input", () => {
    nameValue.textContent = nameSlider.value;
    nameElement.style.fontSize = nameSlider.value*2 + "%";
  });

  classSlider.addEventListener("input", () => {
    classValue.textContent = classSlider.value;
    classElement.style.fontSize = classSlider.value*2 + "%";
  });
