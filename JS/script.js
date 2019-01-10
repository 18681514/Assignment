/*Script to display and hide content of Album 1 */
function ViewSongs1() {
  var x = document.getElementById("DisplaySongs1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Script to display and hide content of Album 2 */
function ViewSongs2() {
  var x = document.getElementById("DisplaySongs2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Script to display and hide content of Album 3 */
function ViewSongs3() {
  var x = document.getElementById("DisplaySongs3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Script to display and hide content of Album 4 */
function ViewSongs4() {
  var x = document.getElementById("DisplaySongs4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



function ChangeImageWhite(){
	document.getElementById('TargetImg1').src="Assets/Store/White.jpg";
	}
	
function ChangeImageBlack(){
    document.getElementById('TargetImg1').src="Assets/Store/Black.jpg";
	}
	
function ChangeImageLightGrey(){
	document.getElementById('TargetImg1').src="Assets/Store/LightGrey.jpg";
	}
	
function ChangeImageDarkGrey(){
    document.getElementById('TargetImg1').src="Assets/Store/DarkGrey.jpg";
	}
		  
		  
		  
function AlbumStandard(){
	document.getElementById("Price").innerHTML = "Price: £8.99";
    document.getElementById('TargetImg2').src="Assets/Store/Album.jpg";
	}
		  
function AlbumSigned(){
	document.getElementById("Price").innerHTML = "Price: £11.99";
	document.getElementById('TargetImg2').src="Assets/Store/AlbumSigned.jpg";
	}








