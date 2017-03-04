'use strict';
var containerStart = document.querySelector('.container--start');
var btnStart = containerStart.querySelector('.btn--start');
var body = document.querySelector('body');
/** @constant {number}*/
var scooreQuantity = 0;
/** @constant {number}*/
var SCOORE_STEP = 1;
/** @constant {number}*/
var STEP_NUMBER_QUESTION = 1;
var currentElement = null;
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
    scooreQuantity += 1;
  } else {
    elem.previousElementSibling.classList.add('fuck');
    answers.querySelector('input[data-correct]').classList.add('luck');
  }

  if (nextBtnQuestion) {
    nextBtnQuestion.removeAttribute('hidden');
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

function toggleListenerElement() {
  answers = document.querySelector('.content--answers');
  checkElements = document.querySelectorAll('input');
  nextBtnQuestion = document.querySelector('.btn--next');
  restartBtn = document.querySelector('.btn--restart');

  if (nextBtnQuestion) {
    nextBtnQuestion.removeEventListener('click', onBtnNextClick);
    nextBtnQuestion.addEventListener('click', onBtnNextClick);
  }

  restartBtn .removeEventListener('click', onRestartBtnClick);
  answers.removeEventListener('click', validate);
  restartBtn .addEventListener('click', onRestartBtnClick);
  answers.addEventListener('click', validate);
}

/** @return {number} */
function getCurrentNumberQuestion() {
  container = document.querySelector('.container--question');
  return parseInt(container.getAttribute('data-question-number'), 10);
}

function onBtnNextClick() {
  showModal(window.renderElement(getCurrentNumberQuestion() + STEP_NUMBER_QUESTION));
  toggleListenerElement();
}

function onRestartBtnClick() {
  scooreQuantity = 0;
  showModal(window.renderElement(STEP_NUMBER_QUESTION));
  toggleListenerElement();
}

/** @param {HTMLElement} newElement*/
function showModal(newElement) {
  if (currentElement) {
    body.replaceChild(newElement, currentElement);
  } else {
    body.appendChild(newElement);
  }
  currentElement = newElement;
}

function onBtnStartClick() {
  containerStart.remove();
  btnStart.removeEventListener('click', onBtnStartClick);
  showModal(window.renderElement(STEP_NUMBER_QUESTION));
  toggleListenerElement();
}

btnStart.addEventListener('click', onBtnStartClick);

