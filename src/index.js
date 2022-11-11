import intlTelInput from 'intl-tel-input';
import Inputmask from "inputmask";
import bitcoin from './img/bitkoinMask.jpg'
import teslaMoney from './img/teslaMoney.jpg'
import maskImg from './img/maskImg.jpg'
import teslaJpg from './img/tesla.jpg'

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  console.log(doc)
}
window.addEventListener('resize', appHeight)
appHeight()

const inputPhone = document.querySelector("#form_phone");
let phoneNumber = intlTelInput(inputPhone, {
  initialCountry: "ru",
  separateDialCode: true,
  // preferredCountries: ["by", "ru", "kz"],
  onlyCountries: ["by", "ru", "kz"],
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
});
// $(this).on("countrychange", function (e, countryData) {
//   $(this).val('');
//   $(this).mask($("#phone").attr('placeholder').replace(/[0-9]/g, 0));
//   $(this).removeAttr('maxlength');
// });

inputPhone.addEventListener("countrychange", function (e, countryData) {
  this.value = ''
  Inputmask(this.getAttribute('placeholder').replace(/[0-9]/g, 9)).mask(this);
  this.removeAttribute('maxlength');
});
Inputmask("999 999 99 99").mask(inputPhone); //ru
//$(this).mask("00 000 0000"); //UA



let questionHandler = document.querySelector('.question__main__group'); //Див на который я делегировал события

let globalCount = 0; //Глобальный счетчик

let dynamicSpan = document.getElementById('dynamic__span'); //Динамический прогресс бар

let questionTitleCounter = document.querySelector('.question__title__counter'); //Счетчик вопросов

let questionTitleText = document.getElementById('question_title_text'); //Заголовок вопросов

let submitForm = document.getElementById('submit_form'); //Форма обратной связи

let firstQuestionContent = document.getElementById('first_button'); //Кнопки с вопросами
let secondQuestionContent = document.getElementById('second_button');
let thirdQuestionContent = document.getElementById('third_button');

let secondQuestionArea = document.getElementById('second_button_area');
let thirdQuestionArea = document.getElementById('third_button_area');

let bottomQuestionCounter = document.getElementById('question__golden__accent');

let backButton = document.getElementById('back__button');

let questionSection = document.getElementById('question__section');

let sectionLogo = document.getElementById('section-logo');
let logoButton = document.getElementById('logo_button');
let logoButton2 = document.getElementById('logo_button2');

let sectionForm = document.getElementById('section-form');

let questionImg = document.getElementById('question__img__mob')
console.log(questionImg)

let imgArray = [teslaJpg,bitcoin,teslaMoney,maskImg] // ПУти к картинкам


questionHandler.addEventListener('click', event => {
  event.preventDefault();

  let target = event.target;
  if (target.tagName === 'A' || target.tagName === 'SPAN') {
    globalCount++;
  }
  console.log(globalCount);
  return;
});

let infoObject = {
  first: {
    questionTitle: '1.Какая Ваша финансовая цель?',
    questions: {
      firstQuestion: 'Обеспечить себя и семью 👨‍👩‍👧‍👦',
      secondQuestion: 'Купить личное жилье 🏘',
      thirdQuestion: 'Стать финансово независимым',
    },
    handler: '1',
    progressBar: '25%',
  },

  second: {
    questionTitle: '2.У Вас есть опыт инвестирования? 🤑',
    questions: {
      firstQuestion: 'Да, успешно 😊',
      secondQuestion: 'Да, но без результата 😡',
      thirdQuestion: 'Нет, но хочу научиться 🧐',
    },
    handler: '2',
    progressBar: '50%',
  },

  third: {
    questionTitle:
      '3.Вы знакомы с компанией Tesla X? Она позволяет зарабатывать от €4000 в месяц! 🤩',
    questions: {
      firstQuestion: 'Да, слышал в СМИ, интернете 📣',
      secondQuestion: 'Да, слышал от друзей 👩👨👩‍🦰👨‍🦱',
      thirdQuestion: 'Нет, но хочу узнать подробнее 🤩',
    },
    handler: '3',
    progressBar: '75%',
  },

  last: {
    questionTitle:
      'При минимальных вложениях от $250 вы можете получать пассивный доход 300% еженедельно уже сейчас!🔥🎁',
    questions: {
      firstQuestion: 'Заполнить форму и начать получать прибыль🎁🤯',
    },
    handler: '4',
    progressBar: '95%',
  },
};

window.addEventListener('click', event => {
  if (globalCount === 0) {
    firstQuestionContent.textContent = infoObject.first.questions.firstQuestion;
    secondQuestionContent.textContent =
      infoObject.first.questions.secondQuestion;
    thirdQuestionContent.textContent = infoObject.first.questions.thirdQuestion;

    dynamicSpan.style.width = infoObject.first.progressBar;
    questionTitleCounter.textContent = infoObject.first.handler;
    questionTitleText.textContent = infoObject.first.questionTitle;

    bottomQuestionCounter.textContent = infoObject.first.handler;
    
    questionImg.setAttribute('src',imgArray[0])
  }

  if (globalCount === 1) {
    firstQuestionContent.textContent =
      infoObject.second.questions.firstQuestion;
    secondQuestionContent.textContent =
      infoObject.second.questions.secondQuestion;
    thirdQuestionContent.textContent =
      infoObject.second.questions.thirdQuestion;

    dynamicSpan.style.width = infoObject.second.progressBar;
    questionTitleCounter.textContent = infoObject.second.handler;
    questionTitleText.textContent = infoObject.second.questionTitle;

    bottomQuestionCounter.textContent = infoObject.second.handler;

    questionImg.setAttribute('src',imgArray[1])
  }

  if (globalCount === 2) {
    firstQuestionContent.textContent = infoObject.third.questions.firstQuestion;
    secondQuestionContent.textContent =
      infoObject.third.questions.secondQuestion;
    thirdQuestionContent.textContent =
      infoObject.second.questions.thirdQuestion;

    dynamicSpan.style.width = infoObject.third.progressBar;
    questionTitleCounter.textContent = infoObject.third.handler;
    questionTitleText.textContent = infoObject.third.questionTitle;

    bottomQuestionCounter.textContent = infoObject.third.handler;
    questionImg.setAttribute('src',imgArray[2])
  }

  if (globalCount === 3) {
    firstQuestionContent.textContent = infoObject.last.questions.firstQuestion;
    secondQuestionArea.classList.add('visually-hidden');
    thirdQuestionArea.classList.add('visually-hidden');

    dynamicSpan.style.width = infoObject.last.progressBar;
    questionTitleCounter.textContent = infoObject.last.handler;
    questionTitleText.textContent = infoObject.last.questionTitle;

    bottomQuestionCounter.textContent = infoObject.last.handler;
    questionImg.setAttribute('src',imgArray[3])
  }

  if (globalCount === 4) {
    questionSection.classList.add('visually-hidden');
    sectionForm.classList.remove('visually-hidden');
  }
});


backButton.addEventListener('click', event => {
  if (globalCount > 0) {
    globalCount--;
  } else {
    return;
  }

  if (
    globalCount < 4 &&
    secondQuestionArea.classList.contains('visually-hidden')
  ) {
    secondQuestionArea.classList.remove('visually-hidden');
    thirdQuestionArea.classList.remove('visually-hidden');
  }
});

logoButton.addEventListener('click', event => {
  sectionLogo.classList.add('visually-hidden');
  questionSection.classList.remove('visually-hidden');
});
logoButton2.addEventListener('click', event => {
  sectionLogo.classList.add('visually-hidden');
  questionSection.classList.remove('visually-hidden');
});



