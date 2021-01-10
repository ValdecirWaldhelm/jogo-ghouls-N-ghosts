const knight = document.querySelector('.knight');
const background = document.querySelector('.container')
let isJumping = false;
let position = 150;

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping){
            jump();
        }
        
    }

}

function jump(){

    isJumping = true;

    let upInterval = setInterval(() => {
        //codigo
        if(position >= 460){
            clearInterval(upInterval);

        //descendo
        let downInterval = setInterval(() => {
            if(position <= 150){
                clearInterval(downInterval);
                isJumping = false
            }else{
                position -= 20;
                knight.style.bottom = position + 'px'; 
            }

        }, 45);
        }else{
        //subindo 
        position += 20;
        knight.style.bottom = position + 'px';

        }
        
    }, 45);

}

    function creatZombies(){
        const zombies = document.createElement('div');
        let zombiesPosition = 1250;
        let randomTime = Math.random() * 6000;

        zombies.classList.add('zombies');
        zombies.style.left = 1000 + 'px';
        background.appendChild(zombies);

        let leftInterval = setInterval(() => {
            zombiesPosition -= 10;
            zombies.style.left = zombiesPosition + 'px';

            if(zombiesPosition < -60){
                clearInterval(leftInterval);
                background.removeChild(zombies);

            }else if(zombiesPosition > 0 && zombiesPosition < 105 && position < 250){
                //game over

                clearInterval(leftInterval);
                document.body.innerHTML = '<h1 class= "game-over">Fim de Jogo</h1>';
                document.body.style.backgroundColor = 'black';
    

            }
            else{
                zombiesPosition -= 10;
                zombies.style.left = zombiesPosition + 'px';
            }

        }, 75); /*velocidade do zumbi*/

        setTimeout(creatZombies, randomTime);
    }


    creatZombies();
document.addEventListener('keyup', handleKeyUp);
    
