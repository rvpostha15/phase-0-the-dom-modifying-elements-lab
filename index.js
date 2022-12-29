// Write your code here!
let myMain = document.querySelector('#main');
myMain.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Ron Posthauer is the champion';