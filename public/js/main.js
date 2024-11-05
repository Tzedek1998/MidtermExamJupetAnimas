

window.addEventListener('load',function(){
    //Listener for gmail/password button
    this.document.getElementById('sign-in-login-password').addEventListener('click',function(){
    //Instructions to write here

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
        alert('Logging sucessfully');
        location.href = 'culturalconnections.html';
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert('Logging fail');
        console.log('Logging fail', errorMessage);
    });


    });

    //Listener for Gmail Button
    document.getElementById('sign-in-gmail').addEventListener('click', function () {

        let provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                alert('Log in sucessfully');
                location.href = 'culturalconnections.html';
            })
            .catch(function (error) {
                console.log('Log in fail', error);
            });
    });

    //phone button

    document.getElementById('sign-in-button').addEventListener('click', function () {

        const phoneNumber = getPhoneNumberFromUserInput();
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;

              alert('Log in sucessfully');
              location.href = 'culturalconnections.html';
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
              console.log('Log in fail', error);
            });
    });

    function recaptchaRender() {
        /** @type {firebase.auth.recaptchaVerifier} */
         const recaptchaVerifier = window.recaptchaVerifier;

         recaptchaVerifier.render().then((widgetId) =>{
            window.recaptchaWidgetId = widgetId;
         });

    }
    
    function phoneSignIn() {
        function getPhoneNumberFromUserInput(){
            return "+15558675309";
        }
    
    }


});
