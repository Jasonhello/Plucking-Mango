class launcher{
    constructor (body,point){
        this.bodyA = body;
        this.pointB = point;
        this.launcher = Matter.Constraint.create({
            bodyA:body,
            pointB: point,
            stiffness: 0.004,
            length: 10
        });
        World.add(world, this.launcher);
        
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }

    fly(){
        this.launcher.bodyA = null;
    }
    
    attach(body){
        this.launcher.bodyA = body;
    }
}