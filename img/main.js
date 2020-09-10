const web = document.getElementById("web")
let images = []
let all = {}
 
function render() {
  web.innerHTML = `
    <nav>
Sing Language
</nav>
<section>
<div class="container">
    <img src="" class="imagen"/>
</div>
<div class="lettersContainer">
    <div class="letters"><button data-let='v' class="btn">V</button></div>
    <div class="letters"><button data-let='t' class="btn">T</button></div>
    <div class="letters"><button data-let='r' class="btn">R</button></div>
    <div class="letters"><button data-let='e' class="btn">E</button></div>
    
    <div class="letters"><button data-let='w' class="btn">W</button></div>
    <div class="letters"><button data-let='o' class="btn">O</button></div>
    <div class="letters"><button data-let='l' class="btn">L</button></div>
    <div class="letters"><button data-let='i' class="btn">I</button></div>
</div>
    `;
}
 
async function getImages() {
  const res = await fetch("https://dwaapi.juvasquez88.vercel.app/letters")
  const data = await res.json()
  const array = await data.letters
  images = [...array]
  for (var i =0; i < images.length; i++) {
    all[images[i].letter] = images[i].image
  }
}
 
render()


getImages()
 
const buttons = document.querySelectorAll("button")
const img = document.querySelector("img")

 


buttons.forEach((btn) => {
  btn.addEventListener("click", e => {
    if(all.hasOwnProperty(e.target.dataset.let)) {
        img.setAttribute("src", all[e.target.dataset.let])
    }
  })
})




