/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById('run').addEventListener("click", () => {
        
        const formName = document.getElementById('hero-name').value;
        const formAlterEgo = document.getElementById('hero-alter-ego').value;
        const formPowers = [document.getElementById('hero-powers').value];

        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
        
                if(formName && formAlterEgo && formPowers){
                         
                    let newXmen = new Object();
                    newXmen.id = data.length + 1;
                    newXmen.name = formName;
                    newXmen.alterEgo = formAlterEgo;
                    newXmen.abilities = formPowers;
                    data.push(newXmen);
                    
                }

                console.log(data);
                
            });
        
     });
})();
