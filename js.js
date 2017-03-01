'use strict';

var container = document.querySelector('.container');
var checkElements = container.querySelectorAll('input');
var btnNextPage = document.querySelector('.btn--next');
var checkedElement;

var data = {
  page1: {
    f1: 'вопрос1',
    f2: 'вопрос2',
    f3: 'вопрос3',
    f4: 'вопрос4'
  },
  page2: {
    f1: 'вопрос1',
    f2: 'вопрос2',
    f3: 'вопрос3',
    f4: 'вопрос4'
  }
};

/**
 * @param {Event} evt
 * @return {boolean}
 */
function correctTarget(evt) {
  return event.target.hasAttribute('data-index');
}

function elemCondition(elem) {
  if (elem.hasAttribute('data-correct')) {
    elem.parentNode.classList.add('luck');
  } else {
    elem.parentNode.classList.add('fuck');
    document.querySelector('input[data-correct]').parentNode.classList.add('luck');
  }
}

function validate(event) {
  if (correctTarget(event)) {
    elemCondition(event.target);
    Array.prototype.forEach.call(checkElements, function (elem) {
      elem.setAttribute('disabled', '');
    });
  }
}

container.addEventListener('click', validate);
btnNextPage.addEventListener('click', function () {
  console.log(1);
});
