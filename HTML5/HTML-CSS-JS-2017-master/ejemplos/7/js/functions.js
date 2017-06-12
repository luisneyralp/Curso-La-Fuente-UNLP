var left = 0;
var topp = 255;
var mario = 1;
var lastAction = 'right';

function travel(direction){
	if (direction == "left"){
		if (lastAction == "right"){
			document.getElementById('mario').classList.add("flip");		
		}
		lastAction = 'left';
		left = left - 20;
	}
	if (direction == "right"){
		if (lastAction == "left"){
			document.getElementById('mario').classList.remove("flip");		
		}
		lastAction = 'right';
		left = left + 20;
	}
	if (direction == "up"){
		topp = topp - 20;
	}
	if (direction == "down"){
		topp = topp + 20;
	}
	draw();
}


function draw(){
	mario = mario + 1;
	if (mario > 3){
		mario = 1;
	}
	switch(mario) {
	    case 1:
		document.getElementById('mario').classList.remove("mario3");	
		document.getElementById('mario').classList.add("mario1");	
        	break;
	    case 2:
		document.getElementById('mario').classList.remove("mario1");
		document.getElementById('mario').classList.add("mario2");	
        	break;
	    case 3:
		document.getElementById('mario').classList.remove("mario2");
		document.getElementById('mario').classList.add("mario3");	
        	break;
	    default:
		alert(mario);
	} 
	
	document.getElementById('mario').style.left = left + "px"; 
	document.getElementById('mario').style.top = topp + "px"; 
}
