function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("songInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);

	if (inputValue === '') {
		alert("You must enter a song title and artist.");
	}
	else {
		document.getElementById("list").appendChild(li);
	}
	document.getElementById("songInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onClick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}