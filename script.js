//your JS code here. If required.
let element = document.getElementById("level");  // target element
let level = 0;  // counter

while (element) {   // go up until <html>
    level++;
    element = element.parentElement;
}

document.write("The level of the element is: " + level);
