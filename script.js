const palette = document.getElementById("palette")
const btn = document.getElementById("generateBtn")
const sizeSelect = document.getElementById("size")
const toast = document.getElementById("toast")
const formatSelect = document.getElementById("format")

function isLight(color, format) {
if (format === "hex") {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
    } else {
       
  const parts = color.match(/\d+/g);
  const l = parseInt(parts[2]); 
      return l > 65; // 
    }
}



function randomHex(){

const letters = "0123456789ABCDEF"
let color = "#"

for(let i=0;i<6;i++){color += letters[Math.floor(Math.random()*16)]
}

return color
}

function randomHSL() {
  const h = Math.floor(Math.random() * 360)   // tono
  const s = Math.floor(Math.random() * 100)   // saturación
  const l = Math.floor(Math.random() * 100)   // luz

  return `hsl(${h}, ${s}%, ${l}%)`
}

function generatePalette(){

const size = sizeSelect.value
const format = formatSelect.value

palette.innerHTML = ""

for(let i=0;i<size;i++){

const color = format === "hex" ? randomHex() : randomHSL()

const div = document.createElement("div")

div.classList.add("color-box")

div.classList.toggle("light-bg", isLight(color, format));

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