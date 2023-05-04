// definisi fungsi validasi form
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.trim() == "" || password.trim() == "") {
    alert("Username and password are required");
    return false;
  }

  return true;
}

// event listener untuk button login
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault(); // menghentikan form dari submit

  if (validateForm()) {
    // jika form valid
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url =
      "https://my-json-server.typicode.com/kkris26/api-login/users?username=" +
      username +
      "&password=" +
      password;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        if (data.length > 0) {
          // jika data ditemukan, login berhasil
          window.location.href = "home.html"; // redirect ke halaman index.html
        } else {
          // jika tidak, login gagal
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }
});
const navMenu = document.querySelector(".navbar-toggler");
navMenu.addEventListener("click", navMenus);
function navMenus() {
  navMenu.classList.toggle("active");
}
