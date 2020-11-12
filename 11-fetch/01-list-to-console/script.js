/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    

        document.getElementById('run').addEventListener("click", () => {
            
            fetch('http://localhost:3000/heroes')
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    data.forEach(xmen => {
                        console.log(xmen.name);
                    });
                });
            
         });
})();
