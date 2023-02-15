function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "63wA9f";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "https://firehelper.tk/playground-63wA9f";
    } else {
      alert("Incorrect code. Try again.");
    }
  }