'use strict';
window.renderElement = (function () {
  var templateElement = document.querySelector('#container-template');
  var elementToClone = templateElement.content.querySelector('.container');
  var element;
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

  /** @param {number} number*/
  function renderContent(number) {
    var counter = element.querySelector('.counter');
    var question = element.querySelector('.question');
    var answerOne = element.querySelector('p[data-answer="one"]');
    var answerTwo = element.querySelector('p[data-answer="two"]');
    var answerThree = element.querySelector('p[data-answer="three"]');
    var answerFou = element.querySelector('p[data-answer="fou"]');
    numberQuestion = number;
    btnNextQuestion = element.querySelector('.btn--next');

    element.setAttribute('data-question-number', numberQuestion);
    counter.innerText = 'Вопрос ' + numberQuestion + ' из ' +
      getLengthData();
    question.innerText = data[numberQuestion].question;
    answerOne.innerText = data[numberQuestion].answerOne;
    answerTwo.innerText = data[numberQuestion].answerTwo;
    answerThree.innerText = data[numberQuestion].answerThree;
    answerFou.innerText = data[numberQuestion].answerFou;
  }

  /** @param {number} number
   * @return {HTMLElement}
   */
  return function (number) {
    element = elementToClone.cloneNode(true);
    renderContent(number);

    if (numberQuestion === getLengthData()) {
      btnNextQuestion.remove();
    }

    return element;
  };
})();
