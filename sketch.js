//create all the variables
var hypnoticball, database;
var position;

function setup() {

    //give the database
    database = firebase.database();

    //create the canvas
    createCanvas(500, 500);

    //create the ball and give it color
    hypnoticball = createSprite(250, 250, 10, 10);
    hypnoticball.shapeColor = "red";

    //set the database reference to read and write the data
    var hynoticballPosition = database.ref('ball/position');

    //add the listner
    hynoticballPosition.on("value", readPosition, showError);
}

function draw() {

    //clear the background
    background("white");

    //make the ball move left right up and down with the arrow keys
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }

    //create draw sprites
    drawSprites();
}

//create the function to write in the database
function writePosition(x, y) {
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })

}

//create the function to read in the database
function readPosition(data) {
    position = data.val();
    hypnoticball.x = position.x;
    hypnoticball.y = position.y;


}

//create the function to show the error
function showError() {

    console.log("Error!!!");


}