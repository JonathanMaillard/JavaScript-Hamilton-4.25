/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    const counter = document.getElementById('target');

    let clickCount = localStorage.getItem('click');

    if(clickCount){
        counter.innerHTML = clickCount;
    }
    
    
    document.getElementById('increment').addEventListener("click", function(){

        clickCount++;
        localStorage.setItem('click', clickCount);
        
        counter.innerHTML = clickCount;

    })

})();
