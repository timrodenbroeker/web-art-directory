document.addEventListener(
  "DOMContentLoaded",
  function () {
    var preloader = document.getElementById("preloader");
    setTimeout(() => preloader.classList.add("hide"), 1000);
  },
  false
);
