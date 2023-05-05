const navMenu = document.querySelector(".navbar-toggler");
navMenu.addEventListener("click", navMenus);
function navMenus() {
  navMenu.classList.toggle("active");
}

// Ambil nilai input
var usiaInput = document.getElementById("usia");
var jenisKelaminInput = document.getElementById("jenis-kelamin");
var tinggiBadanInput = document.getElementById("tinggi-badan");
var beratBadanInput = document.getElementById("berat-badan");

// Ambil tombol
var tombol = document.getElementById("tombol");

// Tambahkan event listener pada tombol
tombol.addEventListener("click", function () {
  // Validasi form agar tidak kosong
  if (
    usiaInput.value.trim() == "" ||
    jenisKelaminInput.value.trim() == "" ||
    tinggiBadanInput.value.trim() == "" ||
    beratBadanInput.value.trim() == ""
  ) {
    var warningText = document.getElementById("warning");
     warningTex.innerHTML = "<p>Semua form harus di isi!</p>";
    return;
  }
  // Ambil nilai input
  var usia = usiaInput.value;
  var jenisKelamin = jenisKelaminInput.value;
  var tinggiBadan = tinggiBadanInput.value;
  var beratBadan = beratBadanInput.value;

  // Hitung kebutuhan kalori
  var kalori;
  if (jenisKelamin == "laki-laki") {
    kalori = 88.36 + 13.4 * beratBadan + 4.8 * tinggiBadan - 5.7 * usia;
  } else if (jenisKelamin == "perempuan") {
    kalori = 447.6 + 9.2 * beratBadan + 3.1 * tinggiBadan - 4.3 * usia;
  }

  // Tentukan jenis kebutuhan kalori harian
  var jenisKalori;
  if (kalori < 1500) {
    jenisKalori = "rendah";
  } else if (kalori >= 1500 && kalori < 2500) {
    jenisKalori = "sedang";
  } else {
    jenisKalori = "tinggi";
  }

  // Tampilkan hasil
  var hasil = document.getElementById("hasil");
  hasil.innerHTML = "Kebutuhan kalori Anda: " + Math.round(kalori) + " kkal";

  // Tampilkan tombol untuk menuju ke halaman rekomendasi makanan
  var link = document.createElement("a");
  link.innerHTML = "Lihat rekomendasi makanan";
  if (jenisKalori == "rendah") {
    link.href = "rekomendasi/rendah.html";
  } else if (jenisKalori == "sedang") {
    link.href = "rekomendasi/sedang.html";
  } else {
    link.href = "rekomendasi/tinggi.html";
  }
  var tombolHasil = document.getElementById("tombol-hasil");
  tombolHasil.innerHTML = "";
  tombolHasil.appendChild(link);
});
