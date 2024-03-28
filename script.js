document.addEventListener("DOMContentLoaded", function() {
    // Cache elements using getElementById and querySelector
    var messageElement = document.getElementById("message");
    var colorButton = document.querySelector("#colorButton");
    var foodInput = document.getElementById("food");
    var form = document.querySelector("#inputForm");
    var templateList = document.getElementById("templateList");
    var templateContainer = document.getElementById("templateContainer");

     // Iterate over a collection of elements to accomplish some task
     var paragraphs = document.querySelectorAll("p");
     // log their content
     paragraphs.forEach(function(paragraph) {
         console.log(paragraph.textContent);
     });
     
    var colors = ["blue", "green", "red", "purple"];
    var colorIndex = 0; // Index to track color

    // Function to change text color
    function changeTextColor() {
        messageElement.innerHTML = "<strong>Text color changed!</strong>";
        messageElement.style.color = colors[colorIndex]; // Change text color
        colorIndex = (colorIndex + 1) % colors.length; // Increment color index and loop back to 0 if it exceeds array length
    }

   // var templateItem = document.getElementById("templateItem");
   // var clonedTemplateItem = templateItem.cloneNode(true);
    //templateList.appendChild(clonedTemplateItem);

    // Event listener for changing text color
    colorButton.addEventListener("click", changeTextColor);

    // Modify the style and/or CSS classes of an element in response to user interactions
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var food = foodInput.value;
        messageElement.innerHTML = "Yum! We love <strong>" + food + "</strong>!"; // Modify text content
        foodInput.value = "";
        messageElement.classList.add("highlight"); // Add CSS class
    });

    // Modify at least one attribute of an element in response to user interaction
    messageElement.addEventListener("mouseover", function() {
        messageElement.setAttribute("title", "Hovered over the message");
    });

    // Register at least two different event listeners and create the associated event handler functions
    messageElement.addEventListener("mouseout", function() {
        messageElement.removeAttribute("title");
    });

    // Use at least two Browser Object Model (BOM) properties or methods
    var currentURL = window.location.href;
    console.log("Current URL: " + currentURL);

    var userAgent = window.navigator.userAgent;
    console.log("User Agent: " + userAgent);

    // Include at least one form and/or input with HTML attribute validation
    // Included in the form element above with 'required' attribute

    // Include at least one form and/or input with DOM event-based validation
    foodInput.addEventListener("input", function() {
        if (foodInput.value.length < 3) {
            foodInput.setCustomValidity("Food name must be at least 3 characters long");
        }
    });

    // Use the parent-child-sibling relationship to navigate between elements at least once
    var firstChildOfForm = form.firstElementChild;
    firstChildOfForm.classList.add("highlight");

    var nextSiblingOfFirstChild = firstChildOfForm.nextElementSibling;
    nextSiblingOfFirstChild.style.fontWeight = "bold";
});
