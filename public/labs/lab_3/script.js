/* Put your javascript in here */
const lists = document.querySelector('.images');

function back() {
  const last = Array.from(lists.children).slice(4, 7).reverse();
  last.forEach((element) => {
    lists.removeChild(element);
    lists.insertBefore(element, lists.children[0]);
  });
}
function forward() {
  const first = Array.from(lists.children).slice(0, 3);
  first.forEach((element) => {
    lists.removeChild(element);
    lists.appendChild(element);
  });
}

function loadPage() {
  document.querySelector('button.arrow.prev').addEventListener('click', (event) => {
    back();
  });
  document.querySelector('button.arrow.next').addEventListener('click', (event) => {
    forward();
  });
}
window.onload = loadPage;
