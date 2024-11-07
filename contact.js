// Initialize EmailJS with your user ID
emailjs.init("qULJ4L3eC9ar2U5-I");  // Replace with your actual EmailJS User ID

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = document.querySelector(".contact-form");

    // Get the values of the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Basic form validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare template parameters
    var templateParams = {
        from_name: name,
        from_email: email,  // This sends the email address
        message: message
    };

    // Send the email using EmailJS with the template parameters
    emailjs.sendForm("service_rz1ed1e", "template_yj82swr", form)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Message sent successfully!");
            form.reset(); // Clear the form after submission
        }, function(error) {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again.");
        });
}
