canvas = document.getElementById("myCanvas");
ctx = canvs.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "car1.png";
car1_x = 10;
car1_y = 10;    

car_2_width = 120;
car_2_height = 70;
car_2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground; 
    background_imageTag.src = background_image;

    car_1_imageTag = new Image();
    car_1_imageTag.onload = uploadcar1; 
    car_1_imageTag.src = car_1_image;

    car_2_imageTag = new Image();
    car_2_imageTag.onload = uploadcar2; 
    car_2_imageTag.src = car_2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car_1_imageTag,car1_x,car1_y,car_1_width,car_2_height);
}

function uploadcar2(){
    ctx.drawImage(car_2_imageTag,car2_x,car2_y,car_2_width,car_2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.KeyCode;
    console.log(keyPressed);
    
    if(KeyPressed == "38"){
        car1_up();
        console.log("Up Arrow Key");
    }

    if(KeyPressed == "40"){
        car1_down();
        console.log("Down Arrow Key");
    }

    if(KeyPressed == "37"){
        car1_left();
        console.log("Left Arrow Key");
    }

    if(KeyPressed == "39"){
        car1_right();
        console.log("right Arrow Key");
    }

    if(KeyPressed == "38"){
        car2_up();
        console.log("Up Arrow Key");
    }

    if(KeyPressed == "40"){
        car2_down();
        console.log("Down Arrow Key");
    }

    if(KeyPressed == "37"){
        car2_left();
        console.log("Left Arrow Key");
    }

    if(KeyPressed == "39"){
        car2_right();
        console.log("right Arrow Key");
    }
}