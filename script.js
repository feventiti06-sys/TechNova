function showSection(id) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    let target = document.getElementById(id);
    target.classList.add("active");
}

window.onload = function () {
    showSection("home");
};

function showPage(pageId) {
  let pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

