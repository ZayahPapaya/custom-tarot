'use strict'
// This is industry standard to enforce tighter grammar for scripts
// alert('Spooky');
// let yeet = prompt('yeet');
let message = prompt('Yote');
document.write(message);
function myFunction() {
    document.getElemmentByID("Dropdown").classList.toggle("show")
}
window.onclick = function(event) {
    if (!event.target.matches('.btnMaj')) {
        let dropdowns = document.getElemmentsByClassName("btnMajcontent");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}