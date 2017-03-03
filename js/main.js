'use strict';
var containerStart = document.querySelector('.container--start');
var btnStart = containerStart.querySelector('.btn--start');
/** @constant {number}*/
var STEP_NUMBER_QUESTION = 1;
var container;
var answers;
var restartBtn;
var checkElements;
var nextBtnQuestion;

/**
 * @param {Event} evt
 * @return {boolean}
 */
function correctTarget(evt) {
  return event.target.hasAttribute('data-index');
}

/**  @param {HTMLElement} elem*/
function elemCondition(elem) {
  if (elem.hasAttribute('data-correct')) {
    elem.previousElementSibling.classList.add('luck');
  } else {
    elem.previousElementSibling.classList.add('fuck');
    answers.querySelector('input[data-correct]').classList.add('luck');
  }
}

/**  @param {MouseEvent} event*/
function validate(event) {
  if (correctTarget(event)) {
    elemCondition(event.target);
    Array.prototype.forEach.call(checkElements, function (elem) {
      elem.setAttribute('disabled', '');
    });
  }
}

/** @return {number} */
function getCurrentNumberQuestion() {
  container = document.querySelector('.container--question');
  return parseInt(container.getAttribute('data-question-number'), 10);
}

function onBtnNextClick() {
  window.renderElement(getCurrentNumberQuestion() + STEP_NUMBER_QUESTION);
}

function onRestartBtntClick() {
  window.renderElement(STEP_NUMBER_QUESTION);
}

function toggleListenerElement() {
  answers = document.querySelector('.content--answers');
  checkElements = document.querySelectorAll('input');
  nextBtnQuestion = document.querySelector('.btn--next');
  restartBtn = document.querySelector('.btn--restart');
  nextBtnQuestion.removeEventListener('click', onBtnNextClick);
  restartBtn .removeEventListener('click', onRestartBtntClick);
  answers.removeEventListener('click', validate);
  nextBtnQuestion.addEventListener('click', onBtnNextClick);
  restartBtn .addEventListener('click', onRestartBtntClick);
  answers.addEventListener('click', validate);
}

function onBtnStartClick() {
  containerStart.remove();
  btnStart.removeEventListener('click', onBtnStartClick);
  window.renderElement(STEP_NUMBER_QUESTION);
  toggleListenerElement();
}

btnStart.addEventListener('click', onBtnStartClick);

