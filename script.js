const palette = document.getElementById("palette")
const btn = document.getElementById("generateBtn")
const sizeSelect = document.getElementById("size")
const toast = document.getElementById("toast")

function randomHex(){

const letters = "0123456789ABCDEF"
let color = "#"

for(let i=0;i<6;i++){color += letters[Math.floor(Math.random()*16)]
}

return color
}

function generatePalette(){

const size = sizeSelect.value

palette.innerHTML = ""

for(let i=0;i<size;i++){

const color = randomHex()

const div = document.createElement("div")

div.classList.add("color-box")

div.style.background = color

div.textContent = color

div.title = "Click para copiar"

div.addEventListener("click", () => {
navigator.clipboard.writeText(color)
showToast("Color copiado!")
})

palette.appendChild(div)
}

showToast("Paleta generada!")
}

function showToast(message){

toast.textContent = message
toast.classList.add("show")

setTimeout(()=>{
toast.classList.remove("show")
},2000)

}

btn.addEventListener("click", generatePalette)