const gambar = document.querySelectorAll("img");

gambar.forEach((gambar) => {
  gambar.addEventListener("click", () => {
    gambar.classList.add("putar");

    setTimeout(() => {
      gambar.classList.remove("putar");
    }, 1000);
  });
});


const tombol = document.querySelectorAll("button");

tombol.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    tombol.classList.add("tombol-animasi");

    setTimeout(() => {
      tombol.classList.remove("tombol-animasi");
    }, 1000);
  });
});
