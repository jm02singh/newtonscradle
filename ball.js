class Ball{

    constructor(x, y, radius){
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius 
        World.add(myWorld, this.body)
    }
    display(){
    var pos = this.body.position; 
    var angle = this.body.angle; 
    push(); 
    translate(pos.x,pos.y); 
    rotate(angle) 
    ellipseMode(RADIUS)
    fill("black")
    ellipse(0,0, this.radius, this.radius)
    pop();
    }
     

};

