/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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

        let formId = +document.getElementById('hero-id').value;
        
            
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                
                data.forEach(xmen => {
                    
                    if (xmen.id === formId){
                        
                        let clone = document.importNode(template.content, true)

                        let name = clone.querySelector(".name");
                        name.textContent = xmen.name;

                        let alterEgo = clone.querySelector(".alter-ego");
                        alterEgo.textContent = xmen.alterEgo;

                        let abilityList = clone.querySelector(".powers");

                        xmen.abilities.forEach(ability => {
                            
                            if(abilityList.textContent){
                                abilityList.textContent = abilityList.textContent + " / " + ability; 
                            } else {
                                abilityList.textContent = ability; 
                            }

                        })

                        target.appendChild(clone);
                    }
                })
                    
            });
        
     });
})();
