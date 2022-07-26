function hidesquare() {
    elements = document.getElementsByClassName("square");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="white";
        elements[i].onclick = function(){
            if (this.style.borderColor == 'black' || this.style.borderColor == 'rgb(1, 1, 1)') {
                points(this, 'y')
                
            }
            else {
                points(this, 'n')
            }
        }

    }

}
