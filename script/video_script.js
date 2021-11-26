var btn = document.querySelector(".poster__video")
var vi = document.querySelector(".video")
var video = document.querySelector("iframe")
var view = document.querySelector(".home")

btn.addEventListener("click", (e) => {
  e.stopPropagation()
  vi.setAttribute("style", "display:block")
  view.classList.toggle("brightness")
})

view.addEventListener("click", (e) => {
  if (vi.getAttribute("style") == "display:block") {
    vi.setAttribute("style", "display:none")
    view.classList.toggle("brightness")
  }
})
