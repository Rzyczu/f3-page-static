let scoutPathContent = document.querySelectorAll('.scout-path-content');
let scoutPathElements = document.querySelectorAll('.scout-path-element');

function clickEvent() {
  scoutPathElements.forEach(item => {
      item.classList.remove('active');
    });
    scoutPathContent.forEach(item => {
      item.classList.remove('active');
    });

    let element = document.querySelector(`[data-id="${this.id}"]`);
    console.log(this);
      element.classList.add('active');
    this.classList.add('active');
}

scoutPathElements.forEach(item => {
    item.addEventListener('click', clickEvent);
  });