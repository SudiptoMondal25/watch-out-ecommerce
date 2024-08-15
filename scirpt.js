const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("gallery");
  const product = document.querySelectorAll(".content");
  const productName = document.getElementsByTagName("h4");

  for (var i = 0; i < productName.length; i++) {
    let match = product[i].getElementsByTagName("h4")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}