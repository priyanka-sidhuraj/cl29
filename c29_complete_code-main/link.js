class Link{
    constructor(bodyA,bodyB)
    {
    
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[6],
          bodyB:bodyB,
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 
}

