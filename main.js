canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");




nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

r_width = 100;
r_height = 90;

b_image = nasa_mars_images_array[random_number];
console.log("b_image = " + b_image);
r_image = "rover.png";


r_x = 10;
r_y = 10;

function add() {
	bg = new Image(); //defining a variable with a new image
	bg.onload = uploadBackground; // setting a function, onloading this variable
	bg.src = b_image;   // load image

	r = new Image(); //defining a variable with a new image
	r.onload = uploadrover; // setting a function, onloading this variable
	r.src = r_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(r, r_x, r_y, r_width, r_height);
}


window.addEventListener("keydown", my_keydown);

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
	if(r_y >=0)
	{
		r_y = r_y - 10;
		console.log("When up arrow is pressed,  x = " + r_x + " | y = " +r_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(r_y <=500)
	{
		r_y =r_y+ 10;
		console.log("When down arrow is pressed,  x = " + r_x + " | y = " +r_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(r_x >= 0)
	{
		r_x =r_x - 10;
		console.log("When left arrow is pressed,  x = " + r_x + " | y = " +r_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(r_x <= 700)
	{
		r_x =r_x + 10;
		console.log("When right arrow is pressed,  x = " + r_x + " | y = " +r_y);
		uploadBackground();
		uploadrover();
   }
}
	