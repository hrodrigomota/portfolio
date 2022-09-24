window.addEventListener("scroll", navScroll);

function navScroll() {
  const navigation = document.querySelector("nav");
  if (scrollY > 0) {
    navigation.classList.add("active");
  } else {
    navigation.classList.remove("active");
  }
}
