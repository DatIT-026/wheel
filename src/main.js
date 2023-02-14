function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "83at7k";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "https://firehelper.tk/playground-0112";
    } else {
      alert("Incorrect code. Try again.");
    }
  }
