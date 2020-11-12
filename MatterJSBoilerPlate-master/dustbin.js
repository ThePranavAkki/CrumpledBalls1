class Dustbin {
    constructor(){
        this.leftzone = Bodies.rectangle(1000,625, 20, 100, {isStatic:true} );
        World.add(world, this.leftzone);

        this.rightzone = Bodies.rectangle(1200, 625, 20, 100, {isStatic:true} );
        World.add(world, this.rightzone);

        this.bottomzone = Bodies.rectangle(1100, 670, 200, 20, {isStatic:true} );
        World.add(world, this.bottomzone);
    }

    display(){
        rectMode(CENTER);
        fill('red');
        rect(this.leftzone.position.x, this.leftzone.position.y, 20, 100);

        fill('red');
        rect(this.rightzone.position.x, this.rightzone.position.y, 20, 100);

        fill('red');
        rect(this.bottomzone.position.x, this.bottomzone.position.y, 200, 20);
    }
}