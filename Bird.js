class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    super.display();
   //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var pos = [this.body.position.x , this.body.position.y];
    this.trajectory.push(pos);
    }
    for(var smoke = 0;smoke<this.trajectory.length ; smoke++ ){

     image(this.smokeimage,this.trajectory[smoke][0],this.trajectory[smoke][1]);

    }
    
   
  }
}
