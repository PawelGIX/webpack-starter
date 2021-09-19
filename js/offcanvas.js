var toggle = document.querySelector('#hamburger .toggle');
if (toggle) {
    toggle.addEventListener('click', function (e) {
        toggle.classList.toggle('open');
    });
}
// var animate = setInterval(() => {
//     toggle.checked = !toggle.checked
// }, 3000)

// document.querySelector('body').addEventListener('click', () => {
//     clearInterval(animate);
// });