import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

function scrollThere(id) {
  let webSection = document.querySelector(`#${id}`);
  scroll(webSection);
}

export {
  scrollThere
};