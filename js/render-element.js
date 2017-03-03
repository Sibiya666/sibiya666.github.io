'use strict';
window.renderElement = (function () {
  var body = document.querySelector('body');
  var templateElement = document.querySelector('#container-template');
  var elementToClone = templateElement.content.querySelector('.container');
  var newElement = elementToClone.cloneNode(true);
  var numberQuestion;
  var btnNextQuestion;
  var data = {
    '1': {
      question: 'Как называется эта голубая штукенция, изображенная на' +
      ' фотографии?',
      answerOne: 'Нет сомнений в том, что штукенция ни что иное, как' +
      ' оперативное ' +
      'запоминающее устройство',
      answerTwo: 'Это центральный процессор',
      answerThree: 'Это же видеокарта',
      answerFou: 'Жесткий диск'
    },
    '2': {
      question: 'Как называется эта крутящаяся штукенция, изображенная на' +
      ' фотографии?',
      answerOne: 'Нет сомнений в том, что штукенция ни что иное, как' +
      ' оперативное ' +
      'запоминающее устройство',
      answerTwo: 'Это центральный процессор',
      answerThree: 'Это же видеокарта',
      answerFou: 'Жесткий диск'
    },
    '3': {
      question: 'Как называется эта жужащая штукенция, изображенная на' +
      ' фотографии?',
      answerOne: 'Нет сомнений в том, что штукенция ни что иное, как' +
      ' оперативное ' +
      'запоминающее устройство',
      answerTwo: 'Это центральный процессор',
      answerThree: 'Это же видеокарта',
      answerFou: 'Жесткий диск'
    }
  };

  function getLengthData() {
    return Object.keys(data).length;
  }

  return function (number) {
    body.appendChild(newElement);
    console.log('gfe');
    console.log(numberQuestion);
    var container = document.querySelector('.container--question');
    var counter = document.querySelector('.counter');
    var question = document.querySelector('.question');
    var answerOne = document.querySelector('p[data-answer="one"]');
    var answerTwo = document.querySelector('p[data-answer="two"]');
    var answerThree = document.querySelector('p[data-answer="three"]');
    var answerFou = document.querySelector('p[data-answer="fou"]');
    numberQuestion = number;
    btnNextQuestion = document.querySelector('.btn--next');

    container.setAttribute('data-question-number', numberQuestion);
    counter.innerText = 'Вопрос ' + numberQuestion + ' из ' +
      getLengthData();
    question.innerText = data[numberQuestion].question;
    answerOne.innerText = data[numberQuestion].answerOne;
    answerTwo.innerText = data[numberQuestion].answerTwo;
    answerThree.innerText = data[numberQuestion].answerThree;
    answerFou.innerText = data[numberQuestion].answerFou;

    if (numberQuestion === getLengthData()) {
      btnNextQuestion.remove();
    }
  };
})();
