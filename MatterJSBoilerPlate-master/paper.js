class Paper {
    constructor(x, y, radius){
        var options={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display (){
        push();
        fill("magenta");
        circle(this.body.position.x, this.body.position.y, this.radius*2);
        pop();
    }
}