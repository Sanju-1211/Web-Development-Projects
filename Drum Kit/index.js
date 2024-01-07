
for (i = 0 ; i<(document.querySelectorAll(".drum")).length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML
        makeSound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
    }
    )
}


document.addEventListener("keypress", function(){
    var keyyy = event.key;

    makeSound(keyyy)
    buttonAnimation(keyyy)

} )

function makeSound(buttonInnerHtml){
    switch (buttonInnerHtml) {
        case "w":
            var wSound =  new Audio("sounds/crash.mp3");
            wSound.play();
            break;

        case "a":
            var aSound =  new Audio("sounds/kick-bass.mp3");
            aSound.play();
            break;

        case "s":
            var sSound =  new Audio("sounds/snare.mp3");
            sSound.play();
            break;

        case "d":
            var dSound =  new Audio("sounds/tom-1.mp3");
            dSound.play();
            break;

        case "j":
            var jSound =  new Audio("sounds/tom-2.mp3");
            jSound.play();
            break;

        case "k":
            var kSound =  new Audio("sounds/tom-3.mp3");
            kSound.play();
            break;

        case "l":
            var lSound =  new Audio("sounds/tom-4.mp3");
            lSound.play();
            break;

        default:
            console.log("buttonInnerHtml")

            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1.00)

}