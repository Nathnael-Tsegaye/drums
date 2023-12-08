var numberOfButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var pressedKey = this.innerHTML;
        keypressed(pressedKey);
        buttonAnimation(pressedKey);

    })
}

document.addEventListener("keydown", function(event) {

    keypressed(event.key);
    buttonAnimation(event.key);

});
