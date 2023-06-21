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
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'This is a message' 
    buttonEl.click();
    console.log(document.querySelector('#message'));

    

    // Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a message');
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