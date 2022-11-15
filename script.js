//Function descriptions
    //Toggle(id of element) will hide element if shown, vice versa
    //Show(id of element) only shows the element, no reverse
    //Hide(id of element) only hides the element, no reverse

//To Do
    //On button click, reveal panel of options
    //Submit button
    //Hide panel
    //Generate password off of those options
    //Write to Text box
    //Repeatable

//Vars
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "[", "]", "{", "}", "+", ",", ".", "/", ":", ";", "<", ">", "=", "?", "\\", "`", "|", "~"];
const matrix = [lowercase, uppercase, numbers, special]; //Choices will activate and deactivate which numbers can be used.
var choices = []; //Add numbers of choices here. 0, 1, 2, 3 for lowercase, uppercase, numbers, special
var length;
var output = "";
var text = "Your New Password |" + output +"|"

document.getElementById("output").value = text;

//Lowercase - special are all checkmarks
//Length is a dropdown box of 8-128 characters for a password
//Functions

function toggleHide(id)
{
    var display = document.getElementById(id).style.display;
    if (display === "none")
    {
        show(id);
    }
    else
    {
        hide(id);
    }
}

function show(id) {document.getElementById(id).style.display = "block";}
function hide(id) {document.getElementById(id).style.display = "none";}
