class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            'stiffness':0.8,
            'length': 500
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(myWorld, this.sling)
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.pointB
        stroke("black")
        strokeWeight(2)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        

    }



}