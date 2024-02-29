function showlink(element) {
    var hiddenElement = element.querySelector('i');
    hiddenElement.style.visibility = 'visible';
}

function hide(element) {
    var hiddenElement = element.querySelector('i');
    hiddenElement.style.visibility = 'hidden';
}

let showall = document.querySelector(".Show")
let show = document.getElementById("sho")
let list = document.getElementById("list")
let container = document.querySelectorAll(".album")
let hiddenElement = document.querySelectorAll(".album i")

showall.addEventListener("click", function showall() {
    list.style.visibility = "visible";
    show.style.visibility = 'hidden';
})

container.forEach(function(album) {
    album.addEventListener('mouseover', function() {
        let hiddenElement = album.querySelector('i');
        hiddenElement.style.visibility = 'visible';
    });

    album.addEventListener('mouseout', function() {
        let hiddenElement = album.querySelector('i');
        hiddenElement.style.visibility = "hidden";
    });
});