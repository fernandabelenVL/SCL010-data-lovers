var btn = document.getElementsByClassName('modal-opener');
var modal = document.querySelector('.modal');


window.addEventListener("click", () => {

  for (let i = 0 ; i< btn.length; i++) {
  const attachModalListeners = (modalElm) => {
    modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
  }
  
  const detachModalListeners = (modalElm) => {
    modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
  }
  
  const toggleModal = () => {
    var currentState = modal.style.display;
  
    // If modal is visible, hide it. Else, display it.
    if (currentState === 'none') {
      modal.style.display = 'block';
      attachModalListeners(modal);
    } else {
      modal.style.display = 'none';
      detachModalListeners(modal);  
    }
  }
  btn[i].addEventListener('click', toggleModal);
  }
  })