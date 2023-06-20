/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });


  it('adds a new paragraphs', () => {
    // arrange -> act -> assert
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();
    // act
    view.addParagraph();
    
    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('clears paragraphs', () => {
    // arrange -> act -> assert
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();
    // act
    view.clearParagraphs();
    
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});