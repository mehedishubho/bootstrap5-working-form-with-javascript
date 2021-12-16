function sendEmail(){
    Email.send({
        secureToken: "a59dfbed-6d63-47ad-b346-472da326f6e8",
        To : 'mehedihassanshubho@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Address: " + document.getElementById("inputAddress").value
        + "<br> Website Addressl: " + document.getElementById("webAddress").value
        + "<br> City: " + document.getElementById("inputCity").value
        + "<br> Zip: " + document.getElementById("Zip").value
        + "<br> Service: " + document.getElementById("service").value
        + "<br> GDPR: " + document.getElementById("gridCheck").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}
