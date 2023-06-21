class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = 'This is a message';
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
