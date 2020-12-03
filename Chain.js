class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.b=pointB
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }  
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.b.x, this.b.y);
        }
    } 
}







