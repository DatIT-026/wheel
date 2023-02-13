function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "3D47wT";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "https://firehelper.tk/playground.html";
    } else {
      alert("Incorrect code. Try again.");
    }
  }
