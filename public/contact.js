const form = document.querySelector('form');
function sendEmail() {
    const bodyMessage = 'Full Name: ${fullName.value}<br>  Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';

    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        if (message =="OK")
      }
    );

}