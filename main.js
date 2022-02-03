window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " +rover_x + '| y = ' + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(rover_y >=500)
    {
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed, x = " +rover_x + '| y = ' + rover_y);
        uploadBackground();
        uploadRover();
    }

    function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed, x = " +rover_x + '| y = ' + rover_y);
        uploadBackground();
        uploadRover();
    }

    function right()
{
    if(rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed, x = " +rover_x + '| y = ' + rover_y);
        uploadBackground();
        uploadRover();
    }
}
}
}