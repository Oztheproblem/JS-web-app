class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const message = document.querySelector('#message-input').value;
    console.log(message)
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message;

    // document.querySelector('#message-input').value = '';

    document.querySelector('#main-container').append(messageElement);
  }
 
  hideMessage() {
    const messages = document.querySelectorAll("#message");
    messages.forEach((el) => {
      el.remove();
    });
  }
}

module.exports = MessageView;
