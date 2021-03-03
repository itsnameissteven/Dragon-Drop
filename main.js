const items = document.querySelectorAll('.item');
const dropContainers = document.querySelectorAll('.drop-container')

let draggedItem;

items.forEach( item => {
  item.addEventListener("dragstart", function() {
    draggedItem = this
    setTimeout(() => {
      this.style.display = 'none'
    }, 0)
  })

  item.addEventListener("dragend", function(e) {
    setTimeout(() => {
      this.style.display = 'block'
      draggedItem = null;
    }, 0);
  })


  dropContainers.forEach( container => {
    let box = container;

    box.addEventListener('dragover', function(e) {
      e.preventDefault();
    })

    box.addEventListener('dragenter', function(e) {
      e.preventDefault();
      this.style.backgroundColor = 'rgba(0, 0, 0, .2)';
    })

    box.addEventListener('dragleave', function(e) {
      this.style.backgroundColor = 'rgba(0,0,0, 0.1)';
    })

    box.addEventListener('drop', function(e) {
      this.append(draggedItem);
      this.style.backgroundColor = 'rgba(0,0,0, 0.1)';
    })

  })
})