/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  // Arrange
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Action
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    // Assert
    expect(document.querySelector('#message')).not.toBeNull();
  });


  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Action show the hide
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
    // Assert that message element is not the page
    expect(document.querySelector('#message')).toBeNull();
  });
});