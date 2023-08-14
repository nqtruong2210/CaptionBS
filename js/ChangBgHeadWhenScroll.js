/* Change Scroll Header */
// export default function ChangBgHeadWhenScroll() {
//     var headerEl = document.querySelector('.header');
  
//     window.addEventListener('scroll', () => {
//       const verticalScrollPx = window.scrollY || window.pageYOffset;
  
//       if (verticalScrollPx > 80) {
//         headerEl.classList.add('scr');
//       } else {
//         headerEl.classList.remove('scr');
//       }
//     });
//   }
// Get the header element
const header = document.querySelector('.header');

// Function to toggle the "scrolled" class based on scroll position
function toggleHeaderOnScroll() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', toggleHeaderOnScroll);
