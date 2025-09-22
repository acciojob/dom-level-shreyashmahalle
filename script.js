//your JS code here. If required.
let element = document.getElmentById("level");
let level = 0;
while(element){
	level++;
	elment = element.parentElement;
}
document.write("The level of the element is:" + level);
