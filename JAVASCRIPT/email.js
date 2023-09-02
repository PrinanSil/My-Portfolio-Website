function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Message = document.getElementById("Message").value;
    var Subject = document.getElementById("Subject").value;
  
    // Check if any of the required fields are empty
    if (!name || !email || !Message || !Subject) {
      alert("Please fill in all required fields before sending the message.");
      return;
    }
  
    // Email validation using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var params = {
      name: name,
      email: email,
      Message: Message, 
      Subject: Subject  
    };
  
    const serviceID = "service_mofs4d1"; 
    const templateID = "template_wlog4gw";
  
    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Message").value = ""; 
        document.getElementById("Subject").value = "";  
        console.log(res);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        alert("Error sending email. Please try again later.");
      });
  }