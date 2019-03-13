var load = 0;
function base() {
document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
	start();
}

//Timer
function countdown(){
	var elem = document.getElementById("time");
	var time = document.getElementById("timer")
	var timer = 60;
	var width = 1;
	var id = setInterval(frame, 750);
	function frame() {
		if (timer == 0) {
			clearInterval(id);
			chat();
		} else if(timer == 50){
			time.style.backgroundColor = "yellow";
			timer--;
			time.innerHTML = timer;
		}else if(timer == 15){
			time.style.backgroundColor ="red";
			timer--;
			time.innerHTML = timer;
		}else {
			timer--;
			time.innerHTML = timer;
		}
	}
}

//Pop up message onLoad
function start(){
	if(load == 0){
		rock = false;
		instruct();
	}
}
//Randomizer
var rock;
var y;


//																											Rock Random
function random() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	var v = document.getElementById("rockc");
	var f = document.getElementById("rocka");
	var g = document.getElementById("rockb");

	var m = document.getElementById("keyc");
	var n = document.getElementById("keya");
	var o = document.getElementById("keyb");


	rock = Math.floor(Math.random() * 3);
	if (rock == 1){
		document.images["rockc"].src ="images/rock.png";
		c.addEventListener("click", hey);
		a.addEventListener("click", blank);
		b.addEventListener("click", blank);
		m.classList.remove("top");
		m.classList.add("layer");
		y  = 1;

	}else if (rock == 2) {
		document.images["rocka"].src ="images/rock.png"
		a.addEventListener("click", hey);
		c.addEventListener("click", blank);
		b.addEventListener("click", blank);
		n.classList.remove("top");
		n.classList.add("layer");
		y = 2;

	}else{
		document.images["rockb"].src ="images/rock.png"
		b.addEventListener("click", hey);
		c.addEventListener("click", blank);
		a.addEventListener("click", blank);
		o.classList.remove("top");
		o.classList.add("layer");
		y = 3;
	}
}

//																											Key Random
var q;
var key;
var harring;
function randomn() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	var v = document.getElementById("keyc");
	var f = document.getElementById("keya");
	var g = document.getElementById("keyb");


	key = Math.floor(Math.random() * 3);
	if (key == 1){
		v.style.display = "inline";
		document.images["keyc"].src ="images/key.png";
		document.images["keya"].src ="images/harring.png";
		v.classList.add("top");
		f.classList.add("top");
		c.addEventListener("click", heyk);
		a.addEventListener("click", heykf);
		a.removeEventListener("click", blank);
		b.addEventListener("click", blank);
		q = 1;
		harring = 1;

	}else if (key == 2) {
		f.style.display = "inline";
		a.removeEventListener("click", blank);
		document.images["keya"].src ="images/key.png"
		document.images["keyb"].src ="images/harring.png";
		f.classList.add("top");
		g.classList.add("top");
		a.addEventListener("click", heyk);
		b.addEventListener("click", heykf);
		b.removeEventListener("click", heyk);
		c.addEventListener("click", blank);
		q = 2;
		harring = 2;
	}else{
		g.style.display = "inline";
	  a.removeEventListener("click", hey);
		document.images["keyb"].src ="images/key.png"
		document.images["keyc"].src ="images/harring.png";
		g.classList.add("top");
		v.classList.add("top");
		b.addEventListener("click", heyk);
		c.addEventListener("click", heykf);
		c.removeEventListener("click", heyk);
		a.addEventListener("click", blank);
		q = 3;
		harring = 3;
	}
}
//Page switcher
//																										Left Changer
var i = 0;
function l(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	var d = document.getElementById("door");
	var w = document.getElementById("paper");

	var v = document.getElementById("rockc");
	var f = document.getElementById("rocka");
	var g = document.getElementById("rockb");

	var restart =  i;
	if (i == 0 ){
			v.src ="images/back.png";
			f.src="images/back.png";
			g.src = "images/back.png";
		  document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
			d.style.display = "block";
		  document.images["window"].src = "images/back.png";
		  document.images["busha"].src ="";
		  document.images["bushb"].src ="";
		  document.images["bushc"].src ="";
			i = 1;
	} else if (i == 2) {
		i = 0;
	} else {
		reset()
		q = 0;
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		w.style.display ="inline";
		document.images["paper"].src = "images/paper.png";
		d.style.display = "none";
		document.images["busha"].src ="images/bush.png";
		document.images["bushb"].src ="images/bush.png";
		document.images["bushc"].src ="images/bush.png";
		randomn();
	}
}
//																																	Right Changer
function r(){
	var x = document.getElementById("pop");
	var d = document.getElementById("door");
	var w = document.getElementById("paper");
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var v = document.getElementById("rockc");
	var f = document.getElementById("rocka");
	var g = document.getElementById("rockb");

	if (i == 1){
		i = 0;
	} else if (i == 0) {
			reset();
			document.images["keya"].src ="images/back.png";
			document.images["keyb"].src ="images/back.png";
			document.images["keyc"].src ="images/back.png";
			document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
			d.style.display = "block";
			w.style.display = "none";
			document.images["paper"].src ="images/back.png";
			document.images["window"].src = "images/back.png";
			document.images["busha"].src ="";
			document.images["bushb"].src ="";
			document.images["bushc"].src ="";
			if(hide == 1){
				x.style.display = "none";
			}
			i = 2
	} else{
		y = 0;
		reset();
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		d.style.display = "none";
		document.images["busha"].src ="images/bush.png";
		document.images["bushb"].src ="images/bush.png";
		document.images["bushc"].src ="images/bush.png";
		document.images["window"].src = "images/windows.png";
		random();
	}
}

//																																	Popups
var hide = 0;
function news(){
  var x = document.getElementById("pop");
  if (x.style.display === "block") {
    x.style.display = "none";
		hide = 0;
  } else {
	x.style.display = "block";
	hide = 1;
  }
}

function instruct(){
	var i = document.getElementById("pop");
	var backpack =  document.getElementById("backpack");
	var text  = document.getElementById("write");
	i.classList.remove("pop");
	i.classList.add("instructions");
	i.style.display = "block";
	backpack.style.display = "none";
	text.innerHTML = "You finally made to the infamous laboratory, Now all you gotta do is get into the building";
}

// Timer runs out
var rest = 0;
function chat(){
	var button  = document.getElementById("button")
	var backpack = document.getElementById("backpack");
	var i = document.getElementById("pop");
	var text  = document.getElementById("write");
	backpack.style.display = "none";
	i.classList.remove("pop");
	i.classList.add("instructions");
	i.style.display = "block"
	button.style.display = "block";
	text.innerHTML = "Security Guard: HEY! WHAT ARE YOU DOING!";
	rest = 1;

}
//Close button
function goaway(){
		var text  = document.getElementById("write");
		var button  = document.getElementById("button")
		var i =  document.getElementById("pop");
		var backpack =  document.getElementById("backpack");
		load = 1;
		backpack.style.display = "grid";
		i.style.display = "none";
		i.classList.remove("instructions");
		i.classList.add("pop");
		text.innerHTML = "";
		button.style.display = "none";
		countdown();
		if (rest == 1){
		location.reload(true);
			rest = 0;
		}
}

//																																	Robber Way
var rock = new Boolean(false);
function next(){
	//bushes
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	//rocks/window
	var v = document.getElementById("rockc");
	var f = document.getElementById("rocka");
	var g = document.getElementById("rockb");
	var w = document.getElementById("window");
	var w = document.getElementById("window");

	if (y == 1){
		rock = true;
		w.classList.add("window");
		v.style.display = "none";
		c.style.display = "inline";
		document.images["item1"].src = "images/rock.png";
		alert("You have a rock");
	}else if(y == 2){
		rock = true;
		w.classList.add("window");
		f.style.display = "none";
		a.style.display = "inline";
		document.images["item1"].src = "images/rock.png";
		alert("You have a rock");
	}else {
		rock = true;
		w.classList.add("window");
		g.style.display = "none";
		b.style.display = "inline";
		document.images["item1"].src = "images/rock.png";
		alert("You have a rock");
	}

}
function smash() {
	if (rock == true){
		document.images["window"].src ="images/broken.png";
		alert("You broke the window open with a rock");
		document.location.href = "https://ryandoherty1.github.io/crack_cocaine2/";
		rock = false;
		k = 0;
	} else {
		rock = false;
	}
	rock = false;
}



//																														Sneaky enter
var key = new Boolean(false);
function nextb(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var m = document.getElementById("keyc");
	var n = document.getElementById("keya");
	var p = document.getElementById("keyb");
	if (q == 1){
		alert("Maybe this is the key to the door");
		m.style.display = "none";
		c.style.display = "inline";
		document.images["item2"].src = "images/key.png";
		c.removeEventListener("click", heyk);
		}else if(q == 2){
			alert("Maybe this is the key to the door");
		n.style.display = "none";
		a.style.display = "inline";
		document.images["item2"].src = "images/key.png"
		a.removeEventListener("click", heyk);
	}else {
		alert("Maybe this is the key to the door");
		p.style.display = "none";
		b.style.display = "inline";
		document.images["item2"].src = "images/key.png";
		b.removeEventListener("click", heyk);
	}
}

function fake(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var m = document.getElementById("keyc");
	var n = document.getElementById("keya");
	var p = document.getElementById("keyb");
	if(harring == 1){
		n.style.display = "none";
		a.style.display = "inline";
		console.log("right");
		document.images["item3"].src = "images/harring.png";
		a.removeEventListener("click", heyk);
	}else if(harring == 2){
		p.style.display = "none";
		b.style.display = "inline";
		document.images["item3"].src = "images/harring.png";
		console.log("right");
		b.removeEventListener("click", heyk);
	} else{
			m.style.display = "none";
			c.style.display = "inline";
			document.images["item3"].src = "images/harring.png";
			console.log("right");
		cs.removeEventListener("click", heyk);
	}
}
var off = 0;
function check(){
	var wrong = document.getElementById("item3");
	var right = document.getElementById("item2");
	if(wrong.src.match("images/harring.png")&& off == 0){
		wrong.style.backgroundColor = "green";
		key = false;
		off = 1;
	} else {
		wrong.style.backgroundColor = "Transparent";
		off = 0;
	}
}
var offa = 0;
function  check2(){
	var right = document.getElementById("item2");
	if(right.src.match("images/key.png")&& offa == 0){
		right.style.background = "green";
		key = true;
		offa = 1;
		console.log("check");
	} else {
		right.style.background = "Transparent";
		key = false;
		offa = 0;
		console.log("check2");
	}
}

function door(){
	if (key == true){
		alert("You opened the door with the key");
		document.images["door"].src ="images/open_door.png";
		document.location.href = "https://ryandoherty1.github.io/crack_cocaine2/";
		key = false;
		q = 0;
	} else if(off == 0 && offa == 0) {
		alert("You don't have a key");
	} else if(off == 1 && offa == 1){
		key = false;
		alert("Which key?");
		console.log(key);
	}else {
		alert("Doesn't seem like the right key");
	}
}

//																																	bushes
function hey() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	if (rock == 1){
		c.style.display = "none";
		alert("You found a rock");
	}else if( rock == 2) {
		a.style.display = "none";
		alert("You found a rock");
	} else {
		b.style.display = "none";
		alert("You found a rock");
	}
}
var harring = new Boolean(false);
function heyk() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");


	var v = document.getElementById("keyc");
	var f = document.getElementById("keya");
	var g = document.getElementById("keyb");

	var show
	if (key == 1){
		v.classList.add("top");
		c.style.display = "none";
		alert("You found a key");
	}else if( key == 2) {
			f.classList.add("top");
			a.style.display = "none";
			alert("You found a key");
	} else{
		g.classList.add("top");
		b.style.display = "none";
		alert("You found a key");
	}
}


//		Fake Key
function heykf(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var v = document.getElementById("keyc");
	var f = document.getElementById("keya");
	var g = document.getElementById("keyb");

	if(harring == 1){
		a.style.display = "none";
		alert("You found a key");
		f.addEventListener("click", fake);
		console.log("red");
	}else if(harring == 3){
		c.style.display = "none";
		alert("You found a key");
		v.addEventListener("click", fake);
		console.log("red");
	}	else{
		b.style.display = "none";
		alert("You found a key");
		g.addEventListener("click", fake);
		console.log("red");
	}
}

//Called in the arrows
function reset() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	a.style.display = "inline";
	b.style.display = "inline";
	c.style.display = "inline";
	b.removeEventListener("click", hey);
	c.removeEventListener("click", hey);
	a.removeEventListener("click", hey);
	b.removeEventListener("click", heyk);
	c.removeEventListener("click", heyk);
	a.removeEventListener("click", heyk);
	b.removeEventListener("click", heykf);
	c.removeEventListener("click", heykf);
	a.removeEventListener("click", heykf);
	b.removeEventListener("click", blank);
	c.removeEventListener("click", blank);
	a.removeEventListener("click", blank);
	console.log("reset");
}

//Messages
function blank() {
	alert("You found nothing behind this bush");
}
