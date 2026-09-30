(function () {
    emailjs.init({
        publicKey: "MixeXiLP-jBRTM96l"
    });
})();

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent = "Sending...";

    emailjs.sendForm(
        "service_zg0jbvd",
        "template_2noigvs",
        this
    )
    .then(function () {
        formStatus.textContent = "Message sent successfully!";

        contactForm.reset();
    })
    .catch(function (error) {
        console.error("Email error:", error);

        formStatus.textContent =
            "Failed to send message. Please try again.";
    });
});