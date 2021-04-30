canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="mars.jpg";
roverwidth=100;
roverheight=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover2width=100;
rover2height=90;
rover2_image="rover2.jpg";
rover2_x=10;
rover2_y=100;
function add()
{
    background_imgTag =new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src =rover_image;


    rover2_imgTag=new Image();
    rover2_imgTag.onload=uploadrover2;
    rover2_imgTag.src =rover2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,roverwidth,roverheight);
}

function uploadrover2()
{
    ctx.drawImage(rover2_imgTag,rover2_x,rover2_y,rover2width,rover2height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keycode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }


    if(keyPressed=='87')
    {
        w();
        console.log("up");
    }
    if(keyPressed=='83')
    {
        s();
        console.log("down")
    }
    if(keyPressed=='65')
    {
        a();
        console.log("left")
    }
    if(keyPressed=='68')
    {
        d();
        console.log("right")
    }

}


