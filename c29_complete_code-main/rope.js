class Rope
  {
    constructor(nlink, xandy)
    {

  const rects = Composites.stack(100, 100, nlink, 1, 15, 15, function(x, y) {
  return Bodies.rectangle(x, y, 30, 5);
  });
      
 
  this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, {stiffness: 0.1, length: 0.1, render: {type: 'line'}});
      
  World.add(world, this.body);
  
      
    Composite.add(rects, Constraint.create({
    pointA: xandy,
    bodyB: rects.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 0.1
  }));
      
    }
    
    
    show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.bodies.length-1; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
             }
        }
    }
    
    drawVertices(vertices) 
    {
      beginShape();
      fill('#FFF717')  
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);
   }

  
    
  }