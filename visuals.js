visuals = [
  ()=>{
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.2).scrollY([-0.2,0.2]))
    .out(o2)
  },
  ()=>{
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.2).scrollY([-0.2,0.2]))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .kaleid(()=>6+Math.sin(time)*0.05)
      .mult(shape(2,0.8))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .kaleid(()=>6+Math.sin(time)*0.05)
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
      .rotate(({time})=>(time%360)/16)
    .out(o2)
  },
  ()=>{
    src(o2)
    .modulate(src(o1),.01)
    .blend(o0,0.1)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .out(o2)
  },
  ()=>{
    src(o2)
    .modulate(src(o1),.01)
    .blend(o0,0.1)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .modulateScale(osc(2,-0.5,0).kaleid(2).scale(0.5),2,0)
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
