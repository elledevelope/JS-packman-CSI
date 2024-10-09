let pacman = document.getElementById("pacman");
// console.dir(pacman);
let posX = 0, posY = 0; // Corrected initialization
// console.log(posX, posY);
let playground = document.getElementById("playground");
// console.dir(playground);
let widthPlayground = playground.clientWidth;
let heightPlayground = playground.clientWidth;

const hammertime = new Hammer(playground);
hammertime.on("pan", function (ev) {
    console.log(ev);
});

//////////////////////////// -------------------------------------------------- 2nd solution :
//-------------------------- declaration de fonction
function movePacman(direction) {
    //condition qui definit les limites de deplacement de mon pacman :
    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50; // posX = posX - 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
        case "droite":
            if (posX < widthPlayground - 140) {
                posX += 50;
            }
            break;
        case "bas":
            if (posY < heightPlayground - 600) {
                posY += 50;
            }
            break;

        default:
            break;
    }
    pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
}


//////////////////////////// -------------------------------------------------- 
window.addEventListener("keyup", function (e) { // e - means "event", 'window' represents "la navigateur"
    switch (e.keyCode) {
        case 39: //---------------- droite
        case 68: //D   
            movePacman("droite");
            break;
        case 37: ////---------------- gauche
        case 81:
            movePacman("gauche");
            break;

        case 38: ////---------------- haut
        case 90: //Z
            movePacman("haut");
            break;

        case 40: // //----------------bas
        case 83: //S
            movePacman("bas");
            break;

        default:
            console.log(e.keyCode);
            break;
    }
});
