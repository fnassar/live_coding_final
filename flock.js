//IMG_0897.JPG, IMG_1454.JPG, IMG_1605.JPG, IMG_1606.JPG, IMG_3944.JPG, IMG_3980.JPG, IMG_4162.JPG

image = document.createElement('img')
image.crossOrigin="anonymous"
image.src = "https://raw.githubusercontent.com/martapienkosz/livecoding/main/images/IMG_1606.JPG"
loaded = ()=>{
  s0.init({src: image})
  src(s0).out()
  console.log("Image loaded");
}
if (image.complete) {
  loaded()
} else {
  image.addEventListener('load', loaded)
}

osc(15,0,1).modulate(noise(5,0.1))
  //.repeat(4,4)
  //.scrollX(({time})=>Math.sin(time*0.05),0)
  .out(o1)

// look at the script in this file
loadScript('/Users/nyuad/Documents/GitHub/liveCoding/fatema/live_coding_final/visuals.js')

visuals[2]()
render()

// can use update and switch case with midi:
var whichVisual = 0
update = () =>{
  // very important! only change source once, when necessary
  if (whichVisual != ccActual[0]){
    whichVisual = ccActual[0];
    visuals[whichVisual]()
  }
}

// clear update
hush()
// OR (without stopping visuals all together)
update = ()=> {}
