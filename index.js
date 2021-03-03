class Dragon {
  constructor(draggableItem, dropBox) {
    this.items = document.querySelectorAll(draggableItem || '.item');
    this.dropBoxes = document.querySelectorAll(dropBox || '.container__drop-box')
    this.draggedItem = null;
  }

  selectElement() {
    this.items.forEach(item => {
      item.addEventListener("dragstart", () => {
        this.draggedItem = item;
        setTimeout(() => {
          this.addToClassList(item, "hidden", true);
        }, 0);
      });
      this.releaseElement(item);
      this.dropItem()
    })
  }

  releaseElement(element) {
    element.addEventListener("dragend", () => {
    setTimeout(() => {
      this.addToClassList(element, 'hidden')
      this.draggedItem = null;
    }, 0);
  })
  }

  dropItem() {
    this.dropBoxes.forEach( box => {
      box.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.addToClassList(box, 'grey', true);
      });
      box.addEventListener('dragleave', () => {
        this.addToClassList(box, 'grey');
      });
      box.addEventListener('drop', () => {
        box.append(this.draggedItem);
        this.addToClassList(box, 'grey');
      });
    });
  }

  addToClassList(element, className, add) {
    add ? element.classList.add(className) : 
      element.classList.remove(className);
  }
}

let test = new Dragon();
test.selectElement();

