console.log(TEST);

let b = baffle('.js-text-baffled').start();
b.set ({
  speed: 50,
  characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
});
b.reveal(2000);

function openNav() {
    document.getElementById("sidenav").style.width = "100%";
    document.getElementById("sidebar-menu").style.visibility = "hidden";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("sidebar-menu").style.visibility = "visible";
}
