
//Shuffle 
var inputsParent = document.getElementById('inputs');
var inputs = inputsParent.getElementsByClassName('input');
var inputArray = Array.from(inputs);

function handleShuffle() {

    inputArray.forEach(function (input) {
        inputsParent.removeChild(input);
    });

    shuffleArray(inputArray);

    inputArray.forEach(function (input) {
        inputsParent.appendChild(input);
    });
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//Change Values
let intern = document.querySelector('.intern')
var pabau = document.querySelector('.pabau')
var employment = document.querySelector('.employment')
var career = document.querySelector('.career')

function changeValues() {
    intern.innerHTML = "ReactJs Intern";
    pabau.innerHTML = "Pabau Clinic";
    employment.innerHTML = "Employed as a Software Engineer";
    career.innerHTML = "My Career Goal is to become an expert in ReactJS"
}


//Show the checked elements
var internCh = document.getElementById('internship')
var pabauCh = document.getElementById('pabau')
var employmentCh = document.getElementById('employment')
var careerCh = document.getElementById('career')


function checkedValues() {

    for (var i = 0; i < inputArray.length; i++) {   
        if (internCh.checked == true && pabauCh.checked == true && employmentCh.checked == true && careerCh.checked == true) {
            inputArray[i].style.display = "block"; 
        }
        else if (internCh.checked == true && pabauCh.checked == true && employmentCh.checked == true) {
            inputArray[3].style.display = "none"; 
        }
        else if (internCh.checked == true && pabauCh.checked == true && careerCh.checked == true) {
            inputArray[2].style.display = "none"; 
        }
        else if (internCh.checked == true && pabauCh.checked == true && careerCh.checked == true) {
            inputArray[2].style.display = "none"; 
        }
        else if (internCh.checked == true && careerCh.checked == true && employmentCh.checked == true) {
            inputArray[1].style.display = "none"; 
        }
        else if (internCh.checked == true && pabauCh.checked == true) {
            inputArray[2].style.display = "none"; 
            inputArray[3].style.display = "none"; 
        }
        else if (internCh.checked == true && careerCh.checked == true) {
            inputArray[1].style.display = "none"; 
            inputArray[2].style.display = "none"; 
        }
        else if (internCh.checked == true) {
            inputArray[1].style.display = "none"; 
            inputArray[2].style.display = "none"; 
            inputArray[3].style.display = "none"; 
        }
        else if (pabauCh.checked == true && employmentCh.checked == true && careerCh.checked == true) {
            inputArray[0].style.display = "none"; 
        }
        else if (pabauCh.checked == true && employmentCh.checked == true){
            inputArray[0].style.display = "none"; 
            inputArray[3].style.display = "none";
        }
        else if (pabauCh.checked == true && careerCh.checked == true){
            inputArray[0].style.display = "none"; 
            inputArray[2].style.display = "none";
        }
        else if (employmentCh.checked == true && careerCh.checked == true){
            inputArray[0].style.display = "none"; 
            inputArray[1].style.display = "none";
        }
        else if (careerCh.checked == true) {
            inputArray[0].style.display = "none"; 
            inputArray[1].style.display = "none"; 
            inputArray[2].style.display = "none"; 
        }
        else{
            inputArray[i].style.display = "none"; 
        }
    } 
}
