    function next() {
      let mrms = document.querySelector('#mrms').value;
      let fname = document.querySelector('#fname').value;
      let lname = document.querySelector('#lname').value;
      let post = document.querySelector('#post').value;
      let date = document.querySelector('#date').value;
      
      // Display full name and batch
      document.querySelector('#fullname').innerHTML = mrms + " " + fname;
      document.querySelector('#posts').innerHTML = post + " Batch " + date;
      
      // Convert lname to a number
      lname = parseFloat(lname);
      
      // Check if lname is a valid number
      if (isNaN(lname)) {
        document.querySelector('#dates').innerHTML = "NG";
        return; // Exit the function early
      }
      
      // Grade assignment
      
      if (lname >= 3.6) {
        document.querySelector('#dates').innerHTML = "A+";
      }
      else if (lname >= 3.2) {
        document.querySelector('#dates').innerHTML = "A";
      }
      else if (lname >= 2.8) {
        document.querySelector('#dates').innerHTML = "B+";
      }
      else if (lname >= 2.4) {
        document.querySelector('#dates').innerHTML = "B";
      }
      else if (lname >= 2) {
        document.querySelector('#dates').innerHTML = "C+";
      }
      else if (lname >= 1.6) {
        document.querySelector('#dates').innerHTML = "C";
      }
      else {
        document.querySelector('#dates').innerHTML = "NG";
      }
      let qrText = `Name : ${mrms} ${fname} GPA : ${lname} ${post} Student ${date} North Point Academy `;
      
      document.getElementById("qrcode").innerHTML = ""; // Clear previous QR code
      
      if (fname.trim() !== "") {
        new QRCode(document.getElementById("qrcode"), {
          text: qrText,
          width: 70,
          height: 70
        });
      } else {
        alert("Please enter a password to generate a QR code");
      }
    }
    
    
    
    function back() {
      window.history.back();
    }