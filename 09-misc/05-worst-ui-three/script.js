/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let stopOne = document.getElementById('fix-part-one');
    let stopTwo = document.getElementById('fix-part-two');
    let stopThree = document.getElementById('fix-part-three');
    let stopFour = document.getElementById('fix-part-four');

    let stoppedOne = false;
    let stoppedTwo = false;
    let stoppedThree = false;
    let stoppedFour = false;

    let buttonOneValue = Number(document.getElementById('part-one').value);
    let buttonTwoValue = Number(document.getElementById('part-two').value);
    let buttonThreeValue = Number(document.getElementById('part-three').value);
    let buttonFourValue = stopFour.innerHTML;

    console.log(buttonOneValue);

                  

    function loopOne() {         
        setTimeout(function() { 
            
            if(buttonOneValue <= 499){

                document.getElementById('part-one').value = buttonOneValue;
                buttonOneValue = buttonOneValue + 1;
                
            }
            else{
                buttonOneValue = 460;
            }
                
            if (stoppedOne != true) {           
            loopOne();             
            }                       
        }, 50)
    }

    function loopTwo() {         
        setTimeout(function() { 
            
            if(buttonTwoValue <= 99){

                document.getElementById('part-two').value = buttonTwoValue;
                buttonTwoValue = buttonTwoValue + 1;
                
            }
            else{
                buttonTwoValue = 0;
            }
                
            if (stoppedTwo != true) {           
            loopTwo();             
            }                       
        }, 50)
    }
    function loopThree() {         
        setTimeout(function() { 
            
            if(buttonThreeValue <= 99){

                document.getElementById('part-three').value = buttonThreeValue;
                buttonThreeValue = buttonThreeValue + 1;
                
            }
            else{
                buttonThreeValue = 0;
            }
                
            if (stoppedThree != true) {           
            loopThree();             
            }                       
        }, 50)
    }
    function loopFour() {         
        setTimeout(function() { 
            
            if(buttonFourValue <= 99){

                document.getElementById('part-four').value = buttonFourValue;
                buttonFourValue = buttonFourValue + 1;
                
            }
            else{
                buttonFourValue = 0;
            }
                
            if (stoppedFour != true) {           
            loopFour();             
            }                       
        }, 50)
    }

    loopOne();
    loopTwo();
    loopThree();
    loopFour();

    stopOne.addEventListener('click', function(){
        stoppedOne = true;
    })

    stopTwo.addEventListener('click', function(){
        stoppedTwo = true;
    })

    stopThree.addEventListener('click', function(){
        stoppedThree = true;
    })

    stopFour.addEventListener('click', function(){
        stoppedFour = true;
    })

})();
