const btn = document.querySelector(".my-button");
console.log(btn)
btn.addEventListener("click", () => {
  alert("Hello world!")
  btn.classList.add("hide");
})
