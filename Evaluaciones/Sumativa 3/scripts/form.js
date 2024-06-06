document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle modal open
    function openModal(modal) {
        modal.style.display = "block";
    }

    // Function to handle modal close
    function closeModal(modal) {
        modal.style.display = "none";
    }

    // Common function to close modal when clicking outside of it
    function setupOutsideClick(modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal(modal);
            }
        }
    }

    // Setup login modal
    var loginModal = document.getElementById("loginModal");
    var loginBtn = document.getElementById("loginBtn");
    var loginClose = loginModal.getElementsByClassName("close")[0];
    var loginText = document.getElementById("loginText");
    var loginImg = document.getElementById("loginImg");

    loginBtn.onclick = function() {
        openModal(loginModal);
    }

    loginClose.onclick = function() {
        closeModal(loginModal);
    }

    setupOutsideClick(loginModal);

    var loginForm = document.getElementById("loginForm");
    loginForm.onsubmit = function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;

        loginText.textContent = username;
        loginImg.src = "assets/people.png"; // Update this to the path of the new image

        closeModal(loginModal);
    }

    // Setup cart modal
    var cartModal = document.getElementById("cartModal");
    var cartBtn = document.getElementById("cartBtn");
    var cartClose = cartModal.getElementsByClassName("close")[0];

    cartBtn.onclick = function() {
        openModal(cartModal);
        updateCart(); // Update the cart when it's opened
    }

    cartClose.onclick = function() {
        closeModal(cartModal);
    }

    setupOutsideClick(cartModal);
});
