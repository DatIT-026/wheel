function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "63wA93";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "https://firehelper.tk/playground-63wA93";
    } else {
      alert("Incorrect code. Try again.");
    }
  }
