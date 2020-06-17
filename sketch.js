const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground; 

var particles = [] ;
var plinkos  = [];
var divisions   = [];

var divisionHeight = 300;



function preload() {

}

function setup(){
    var canvas = createCanvas(450,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    for(var k = 0 ; k <=width ; k =k +80){
        divisions.push(new Divisions(k, height-divisionHeight/2 , 10, divisionHeight));
    }

    for(var j = 40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,75));
    }
for(var j = 15 ; j<=width-10 ; j=j+50)
plinkos.push(new Plinko(j,175));
  
}


   
function draw(){
    background(0);
    if(frameCount%60 ===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    
    }
 
    ground.display();
    for(var k = 0 ; k < divisions.length; k++ ){
        divisions[k].display();
    }
    for(var  i= 0 ; i < plinkos.length; i++ ){
        plinkos[i].display();
    }
    for(var  p= 0 ; p < plinkos.length ; p++ ){
        plinkos[p].display();
    }
    for(var  j= 0 ; j < particles.length ; j++ ){
        particles[j].display();
    }


   
    //divisions.display();
    Engine.update(engine);
    
}
