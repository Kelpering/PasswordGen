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
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

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
function random(min, max) {return Math.floor(Math.random() * (max - min) + min);} 
function password()
{
    console.log("called");

    output = "";
    length = document.getElementById("quantity").value;
    if (document.getElementById('lowercase').checked == true) {choices.push(0)}
    if (document.getElementById('uppercase').checked == true) {choices.push(1)}
    if (document.getElementById('numbers').checked == true) {choices.push(2)}
    if (document.getElementById('special').checked == true) {choices.push(3)}
    if (choices.length == 0) {return false;}

    for (var i = 0; i<length; i++)
    {
        
        //random value from 0-arr.length
        var selected = matrix[random(0,choices.length)];
        console.log(selected.length);
        output += selected[random(0, selected.length)];
        //choice corresponds to matrix of values
        //get random number from 0-matrix.arr.length
        //input that choice into output
        //when ended, display on textarea
        //output+=selected character
    }
    text = "Your New Password |" + output +"|"
    document.getElementById("output").value = text;
}