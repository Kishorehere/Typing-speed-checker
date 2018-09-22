var run = false;
var index=0, flag = 0, correct = 0, wrong = 0, time = 0, length = 0;
var final, initial, number, speed;
var ref="Lorem ipsum dolor sit amet, consectetur adipisicing elit";
console.log(ref.length);

function green(){
	var input = document.getElementById("text");
    input.style.color= 'green';
}
function red(){
	var input = document.getElementById("text");
    input.style.color= 'red';
}
document.addEventListener('keydown', function(e){
	var evt = e || window.event;
	var check = evt.which; 
	if(check == 8 || check == 37){	
		alert("Dont enter backspace or left arrow");
	return;
	}

});
document.addEventListener('keypress', function(e) { 
	if(!run){
		initial = new Date();
		run = true;	
	}
	//console.log(e.keyCode);
	if(!flag){
		final = new Date();
		time = (final - initial)/1000;
		var evt = e || window.event;  
		var letter = evt.which; 
		/*if(letter == 8 || letter == 37){	
			alert("Dont enter backspace or left arrow");
		}*/
		var char = String.fromCharCode(letter);
		if(char == ref.charAt(index)){
			green();
			index++;
			length++;
			correct++;
			document.getElementById('text').setAttribute('maxlength',length);
		}
		else{
		wrong++;
		red();
		}

	number = correct+wrong ;
	speed= number/time;
	speed= speed.toFixed(2);
	if(correct == ref.length){
		alert("Completed"+'\n'+"Typing speed:"+speed+" characters/s");
		flag = 1;
	}
	}
});
