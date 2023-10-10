// ############ Chapter 46, 48 (Events) ###############

// Q NO 1

// var button = document.getElementById('myButton');

// function showMessage() {
//     alert('Button Clicked!');
// }

// button.addEventListener('click', showMessage);

// Q NO 2

// var elementToHide = document.querySelector('.element-to-hide');
// var clickTrigger = document.querySelector('.click-trigger');

// function hideElement() {
//     elementToHide.style.display = 'none';
// }
// clickTrigger.addEventListener('click', hideElement);

// Q NO 3

// var link = document.getElementById('hover-link');

// var originalColor = link.style.color;

// function changeColorOnHover() {
//     link.style.color = 'green';
// }

// function revertColor() {
//     link.style.color = originalColor;
// }
// link.addEventListener('mouseover', changeColorOnHover);
// link.addEventListener('mouseout', revertColor);


// Q NO 4

// var scrollToTopButton = document.querySelector('.scroll-to-top');

// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' 
//     });
// }
// scrollToTopButton.addEventListener('click', scrollToTop);

// window.addEventListener('scroll', function() {
//     if (window.pageYOffset > 200) {
//         scrollToTopButton.style.display = 'block';
//     } else {
//         scrollToTopButton.style.display = 'none';
//     }
// });

// Q NO 5

// var playSoundLink = document.getElementById('play-sound');
// var audioElement = document.getElementById('audio');

// function playSound() {
//     audioElement.play();
// }

// playSoundLink.addEventListener('click', playSound);

// Q NO 6

// var openWindowLink = document.getElementById('open-window-link');

// function openNewWindow() {
//     window.open("https://www.example.com", "_blank");
// }

// openWindowLink.addEventListener('click', openNewWindow);

// Q NO 7

// var button = document.getElementById('myButton');

// function showAlert() {
//     alert('Button Clicked!');
// }

// button.addEventListener('click', showAlert);

// Q NO 8

// var button = document.getElementById('myButton');

// function changeColorOnHover() {
//     button.style.backgroundColor = 'green';
//     button.style.color = 'white';
// }

// function revertColor() {
//     button.style.backgroundColor = 'blue';
//     button.style.color = 'white';
// }

// button.addEventListener('mouseover', changeColorOnHover);
// button.addEventListener('mouseout', revertColor);

// Q NO 9

// var playButton = document.getElementById('playButton');
// var audioElement = document.getElementById('audio');

// function playSound() {
//     audioElement.play();
// }
// playButton.addEventListener('click', playSound);

// Q NO 10

// var hoverElement = document.querySelector('.hover-element');

// function displayAlert() {
//     alert('Mouse moved over the element!');
// }

// hoverElement.addEventListener('mouseover', displayAlert);

// Q NO 11

// var hideElement = document.querySelector('.hide-element');

// function hideElementOnMouseOut() {
//     hideElement.style.display = 'none';
// }

// hideElement.addEventListener('mouseout', hideElementOnMouseOut);

// Q NO 12

// function openResizedWindow(event) {
    
//     var windowWidth = event.clientX + 10;
//     var windowHeight = event.clientY + 10;
    
    
//     var newWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight}`);

//     var closeButton = document.createElement('div');
//     closeButton.textContent = 'Close Window';
//     closeButton.className = 'close-button';
//     closeButton.addEventListener('click', function() {
//         newWindow.close();
//     });

    
//     newWindow.document.body.appendChild(closeButton);
// }


// var openWindowLink = document.getElementById('openWindowLink');

// openWindowLink.addEventListener('click', openResizedWindow);


// ############# Chapter 49, 50 (Reading and Setting field values) ############# 

// Q NO 1

// var userInput = prompt("Please enter something:");

// console.log("You entered: " + userInput);

// Q NO 2

// function getValue() {
//     var checkbox = document.getElementById("myCheckbox");

//     if (checkbox.checked) {
//         console.log("Checkbox is checked");
//     } else {
//         console.log("Checkbox is not checked");
//     }
// }

// Q NO 3

// function getValue() {
//     var select = document.getElementById("mySelect");

//     var selectedValue = select.value;

//     console.log("Selected value: " + selectedValue);
// }

// Q NO 4

// function changeText() {
//     var textField = document.getElementById("myTextField");

//     textField.value = "New text has been set!";
// }

// Q NO 5

// var married = false;

// if (!married) {
//   document.getElementById("status").value = "available";
// }

// Q NO 6

// var married = false;
// var statusInput = document.getElementById("status");

// if (!married) {
//   if (statusInput.value.trim() === "") {
//     statusInput.value = "available"; 
//   }
// } else {
// }

// Q NO 7

// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     if (name === "" || email === "" || password === "" || confirmPassword === "") {
//         alert("All fields are required!");
//         return false;
//     }

//     if (password !== confirmPassword) {
//         alert("Passwords do not match!");
//         return false;
//     }

//     return true;
// }