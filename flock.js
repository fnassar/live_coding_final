//IMG_0897.JPG, IMG_1454.JPG, IMG_1605.JPG, IMG_1606.JPG, IMG_3944.JPG, IMG_3980.JPG, IMG_4162.JPG
loadScript('https://cdn.rawgit.com/fnassar/live_coding_final/main/images01.js')
// loadScript('https://cdn.rawgit.com/fnassar/live_coding_final/main/visuals0.js')
visuals = [
  ()=>{//0
    src(o2)
      .modulate(src(o1),0.01)
      .blend(o0,0.1)
    .out(o2)
  },
  ()=>{//1
    src(o2)
      .modulate(src(o1),0.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.2).scrollY(()=>cc[1]))
    .out(o2)
  },
  ()=>{//2
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.2).scrollY(()=>cc[1]))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{//3
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.2)
      .mult(shape(2,()=>cc[2]))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{//4
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.3)
      .mult(shape(2,0.8))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
      .mult(shape(4, 0.6).scrollX([-0.2,0.2].smooth(0.5).fast(0.3)))
    .out(o2)
  },
  ()=>{//5
    src(o2)
    .kaleid(()=>4+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*0.5)*2+1),4)
    .mult(shape(4, 0.5).scrollX([-0.2,0.2].smooth(0.5).fast(0.3)))
    .out(o2)
  },
  ()=>{//6
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.4)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .modulateScale(osc(2,-0.5,0).kaleid(1).scale(0.5),2,0)
    .blend(o2).blend(o2).blend(o2)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5).fast(0.3)))
    .out(o2)
  },
  ()=>{//7
    src(o2)
    .modulate(src(o1),.01)
    .blend(o0,0.4)
    .modulateScale(osc(2,-0.5,0).kaleid(2).scale(0.5),2,0)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5).fast(0.3)))
    .out(o2)
  },
  ()=>{//8
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .modulateScale(osc(2,-0.5,0).kaleid(2).scale(0.5),2,0)
    //
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    // .brightness(0.1)
    .mult(shape(4, 0.4).scrollX(()=>cc[1]))
    .out(o2)
  },
  ()=>{//9
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),1)
    // .pixelate(100,100)
    .out(o2)
  },
  (x)=>{//10
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),x)
    // .pixelate(100,100)
    .out(o2)
  },
  (x)=>{//11
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),x) // -5
    .out(o2)
  },
  (x)=>{//12
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),x)
    .pixelate(100,100)
    .out(o2)
  }
]

whichVisual = 0


images[0]()

osc(15,0,1).modulate(noise(5,()=>cc[0]*127))
  .repeat(()=>cc[0]*127, ()=>cc[0]*127)
  //.scrollX(({time})=>Math.sin(time*0.05),0)
  .out(o1)


visuals[0](3)

// hush()


render(o2)


// can use update and switch case with midi:
let whichVisual = 0
let whichImage = 0
update = () =>{
  // very important! only change source once, when necessary
  if (whichVisual != (cc[5]*127|0)){
    whichVisual = (cc[5]*127|0);
    visuals[whichVisual](3);
  }
  if (whichImage != (cc[4]*127|0)){
    whichImage = (cc[4]*127|0);
    images[whichImage]();
  }
}

// clear update
hush()
// OR (without stopping visuals all together)
update = ()=> {}


// //IMG_0897.JPG, IMG_1454.JPG, IMG_1605.JPG, IMG_1606.JPG, IMG_3944.JPG, IMG_3980.JPG, IMG_4162.JPG
//
// image = document.createElement('img')
// image.crossOrigin="anonymous"
// image.src = "/Users/nyuad/Documents/GitHub/liveCoding/fatema/live_coding_final/images/IMG_1423.JPG"
// loaded = ()=>{
//   s0.init({src: image})
//   src(s0).out()
//   console.log("Image loaded");
// }
// if (image.complete) {
//   loaded()
// } else {
//   image.addEventListener('load', loaded)
// }
//
// s0.initImage("/Users/nyuad/Documents/GitHub/liveCoding/fatema/live_coding_final/images/IMG_1606.JPG")
//
//
// images[0]()
// src(s0).out()
// osc(15,0,1).modulate(noise(5,()=>ccActual[0]))
//   //.repeat(4,4)
//   //.scrollX(({time})=>Math.sin(time*0.05),0)
//   .out(o1)
//
//
// // look at the script in this file
// loadScript('/Users/nyuad/Documents/GitHub/liveCoding/fatema/live_coding_final/images.js')
//
//
// loadScript('/Users/nyuad/Documents/GitHub/liveCoding/fatema/live_coding_final/visuals.js')
// speed=0.2
// visuals[0](3)
//
// hush()
//
// src(o2)
//   .pixelate(10,10)
//   .out(o2)
//
// render(o2)
//
//
// // can use update and switch case with midi:
// var whichVisual = 0
// var whichImage = 0
// update = () =>{
//   // very important! only change source once, when necessary
//   if (whichVisual != ccActual[0]){
//     whichVisual = ccActual[0];
//     visuals[whichVisual]()
//   }
//   if (whichImage != ccActual[1]){
//     whichImage = ccActual[1];
//     images[whichImage]()
//   }
// }
//
// // clear update
// hush()
// // OR (without stopping visuals all together)
// update = ()=> {}
