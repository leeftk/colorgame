var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('keeper')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var easy = document.querySelector('#easy')
var hard = document.querySelector('#hard')



easy.addEventListener("click", function(){
	hard.classList.remove("selected")
	easy.classList.add("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor

		for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i]
		} else{
			squares[i].style.display= "none"
		}
	}
		
})
hard.addEventListener("click", function(){
	hard.classList.add("selected")
	easy.classList.remove("selected")
	numSquares = 6
		colors = generateRandomColors(numSquares);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor

		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display= "block"

		} 
	
})

colorDisplay.textContent = pickedColor


// Reset Button
resetButton.addEventListener('click',function(){
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i]
		
	}
	h1.style.backgroundColor="steelblue"
})

for(var i = 0; i < squares.length; i++){
	//add initial Colors
	squares[i].style.backgroundColor = colors[i]

	//add click listeners
	
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
	
	//compared clicked to picked
	if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct"
			changeColor(clickedColor)
			h1.style.backgroundColor = clickedColor
			resetButton.textContent="Play Again"

	} else{
		this.style.backgroundColor= "#232323"
		messageDisplay.textContent = "Try Again"
	}
	
	})
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i< num; i++){
		arr.push(randomColor())

	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r +", " + g + ", " + b + ")"
}


