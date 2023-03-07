function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "e79b0t";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "https://firehelper.tk/playground-6wbTe1";
    } else {
      alert("Incorrect code. Try again.");
    }
  }