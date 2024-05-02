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
      .mult(shape(2, 0.2).scrollY([-0.2,0.2]))
    .out(o2)
  },
  ()=>{//2
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.2).scrollY([-0.2,0.2].fast()))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{//3
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2,0.8))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{//4
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2,0.8))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
      .mult(shape(4, 0.6).scrollX([-0.2,0.2].smooth(0.5)))
    .out(o2)
  },
  ()=>{//5
    src(o2)
    .kaleid(()=>4+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.3)
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
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].fast(0.5)))
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
    .modulateRotate(shape(999,0.3,0.5),x)
    .pixelate(100,100)
    .out(o2)
  }
  // src(o2)
      // .modulate(src(o1),.01)
      // .blend(o0,0.1)
      //.mult(shape(2, 0.1).scrollY([-0.2,0.2]))
    //.modulate(src(o1),.01)
    //.blend(o0,0.1)
    //.mult(shape(2, 0.4).scrollY([-1,1]))
    // .kaleid(()=>6+Math.sin(time)*0.05)
     //.mult(shape(2,0.8))
    //.modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    //.rotate(({time})=>(time%360)/16)
    // .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    // .modulateScale(osc(2,-0.5,0).kaleid(2).scale(0.5),2,0)
    //.add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    //.mult(shape(4, 0.2).scrollX([-0.2,0.2]))
    //.modulate(noise(5,0.1))
    // .pixelate(100,100)
  //.out(o2)?
]

whichVisual = 0
