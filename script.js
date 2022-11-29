'use strict';

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBox);

checkBox();

function checkBox() {
  //we are assuming 80%(4/5) of the window to trigger the effect//
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
