/* Put your javascript in here */
const listContainer = document.querySelector('.images');

function goLeft() {
  const last = Array.from(listContainer.children).slice(4, 7).reverse();
  last.forEach((element) => {
    listContainer.revmoveChild(element);
    listContainer.insertBefore(element, listContainer.children[0]);
  });
}
function goRight() {
  const first = Array.from(listContainer.children).slice(0, 3);
  first.forEach((element) => {
    listContainer.revmoveChild(element);
    listContainer.appendChild(element);
  });
}

function loadPage() {
  document.querySelector('button.arrow.prev').addEventListener('click', (event) => {
    goLeft();
  });
  document.querySelector('button.arrow.next').addEventListener('click', (event) => {
    goRight();
  });
}
window.onload = loadPage;
