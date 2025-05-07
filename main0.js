
function opencolor(){
  document.querySelector('.color').style.display = 'block';
}
function closecolor() {
  document.querySelector('.color').style.display = 'none';
}
function openfonts(){
  document.querySelector('.fonts').style.display = 'block';
}
function closefonts() {
  document.querySelector('.fonts').style.display = 'none';
}
function openform(){
  document.querySelector('#form').style.display = 'block';
}
function closeform() {
  document.querySelector('#form').style.display = 'none';
}
function openother(){
  document.querySelector('.other').style.display = 'block';
}
function closeother() {
  document.querySelector('.other').style.display = 'none';
}
function opentemp(){
  document.querySelector('.templetes').style.display = 'block';
}
function closetemp() {
  document.querySelector('.templetes').style.display = 'none';
}
function opensize(){
  document.querySelector('.size').style.display = 'block';
}
function closesize() {
  document.querySelector('.size').style.display = 'none';
}
function position(){

    const position = document.getElementById("position").value.toLowerCase();
    const studentField = document.getElementById("student");
     const sectionField = document.getElementById("section");
    const staffField = document.getElementById("staff");
 if (position === "staff") {
      staffField.style.display = "inline";
      studentField.style.display = "none";
      sectionField.style.display = "none";
    } else {
      studentField.style.display = "inline";
       sectionField.style.display = "inline";
      staffField.style.display = "none";
    }
  }
    window.onload = function() {
      var mainInput = document.getElementById("dates");
      mainInput.nepaliDatePicker();

      
    }
      function back() {
        window.history.back();
      }


      document.getElementById('Down').addEventListener('click', function () {
      const card = document.querySelector('.result');
      html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        const timestamp = new Date().getTime();
        link.href = canvas.toDataURL('image/png');
        link.download = `birthday_card_${timestamp}.png`;
        link.click();
      });
    });
