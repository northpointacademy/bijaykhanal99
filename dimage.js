  const rangeInput = document.getElementById('myRange');
  const valueDisplay = document.getElementById('rangeValue');
  const rangeInputs = document.getElementById('myRanges');
  const valueDisplays = document.getElementById('rangeValues');
  const imgsh = document.getElementById("tbirt");
  
  
  rangeInput.addEventListener('input', function() {
    const currentValue = rangeInput.value;
    valueDisplay.textContent = currentValue + "%";
    imgsh.style.borderRadius = currentValue + "%";
    
    
  });
  
  
  
  
  rangeInputs.addEventListener('input', function() {
    const currentValues = rangeInputs.value;
    valueDisplays.textContent = currentValues + "%";
    imgsh.style.width = 2 * currentValues + "%";
    imgsh.style.height = 2 * currentValues + "%";
    
    
  });
  const borderC = document.getElementById('bColor');
  const borderD = document.getElementById('oColor');
  
  
  
  borderC.addEventListener('input', function() {
    imgsh.style.borderColor = borderC.value;
  });
  borderD.addEventListener('input', function() {
    imgsh.style.outlineColor = borderD.value;
  });