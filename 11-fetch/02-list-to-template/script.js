/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById('run').addEventListener("click", () => {

        const target = document.getElementById('target');
        const template = document.getElementById('tpl-hero');

        
            
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                data.forEach(xmen => {

                    let clone = document.importNode(template.content, true)

                    let name = clone.querySelector(".name");
                    name.textContent = xmen.name;

                    let alterEgo = clone.querySelector(".alter-ego");
                    alterEgo.textContent = xmen.alterEgo;

                    let ability = clone.querySelector(".powers");

                    xmen.abilities.forEach(ability =>{
                        //let ability = clone.querySelector(".powers");
                        //ability.textContent = this;
                        console.log(ability);
                    })

                    target.appendChild(clone); 
                    //console.log(xmen.name);
                });
            });
        
     });
})();
