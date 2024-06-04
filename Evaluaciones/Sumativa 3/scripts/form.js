
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("loginModal");

    // Get the button that opens the modal
    var btn = document.getElementById("loginBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the elements for login text and image
    var loginText = document.getElementById("loginText");
    var loginImg = document.getElementById("loginImg");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle the form submission
    var form = document.getElementById("loginForm");
    form.onsubmit = function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        
        // Update the login button text and image
        loginText.textContent = username;
        loginImg.src = "assets/salir.png"; // Update this to the path of the new image
        
        // Close the modal
        modal.style.display = "none";
    }
});
