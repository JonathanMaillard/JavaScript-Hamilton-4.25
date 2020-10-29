/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let password1;
    let password2;

    //Listen click on button run
    document.getElementById("run").addEventListener("click", function(){

        //Get the passwords value in their input
        password1 = document.getElementById("pass-one").value;
        password2 = document.getElementById("pass-two").value;

        //Verify if the password are different and add class error to their element if they are not
        if(password1 != password2){
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
        }
      
    })

})();
