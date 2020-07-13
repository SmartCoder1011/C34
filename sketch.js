var ball, database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    var ballposition=database.ref('ball/position');
    ballposition.on('value',readDB,showerr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeDB(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeDB(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeDB(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeDB(0,+1);
    }
    drawSprites();
}

function writeDB(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}

function readDB(data){
    position=data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showerr(err){
    console.log(err);

}