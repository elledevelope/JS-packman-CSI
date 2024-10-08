let pacman = document.getElementById("pacman");
// console.dir(pacman);

let posX = 0, posY = 0; // Corrected initialization
console.log(posX, posY);

//WINDOW IN JS REPRESENTS "la navigateur"
window.addEventListener("keyup", function (e) { // e - means "event"
    switch (e.keyCode) {
        case 39: //droite
        case 68: //D            
            posX += 50; // posX = posX + 50;
            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;
        case 37: //gauche
        case 81:
            if (posX > 0) {
                posX -= 50;   // posX = posX - 50;
            }
            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;

        case 38: //haut
        case 90: //Z
            if (posY > 0) {
                posY -= 50;
            }
            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;

        case 40: //bas
        case 83: //S
            // posY = posY + 50;
            posY += 50;
            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;

        default:
            console.log(e.keyCode);
            break;
    }
});
