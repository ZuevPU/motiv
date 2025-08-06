// Тестовые данные
const testData = {
  title: "Тест на определение ведущего мотива",
  instructions: "Проранжируйте варианты ответов от 1 (наиболее подходящий) до 5 (наименее подходящий)",
  questions: [
      {
          id: 1,
          text: "Что Вас больше замотивирует выполнить сложное сверхурочное задание?",
          options: [
              { text: "дополнительная оплата", type: 1 },
              { text: "возможность заявить о себе руководству", type: 2 },
              { text: "возможность сделать интересную творческую работу", type: 3 },
              { text: "вызов -- возможность доказать себе, что Вы можете сделать это на высшем уровне", type: 4 },
              { text: "то, что это важно для достижения целей компании", type: 5 }
          ]
      },
      {
          id: 2,
          text: "Если бы Вы были руководителем, то какой способ награды за хорошую работу вы бы использовали для своих сотрудников?",
          options: [
              { text: "премия", type: 1 },
              { text: "награждение званием «Лучший...» и публичная похвала", type: 2 },
              { text: "дал бы большую свободу в действиях", type: 3 },
              { text: "послал бы учиться", type: 4 },
              { text: "включил бы в состав группы, участвующей в принятии важных решений", type: 5 }
          ]
      },
      {
          id: 3,
          text: "Какую компанию Вы скорее выберете?",
          options: [
              { text: "где больше платят", type: 1 },
              { text: "где лучше коллектив", type: 2 },
              { text: "где будут интересные для вас задачи", type: 3 },
              { text: "где вам нужно обучаться и развиваться", type: 4 },
              { text: "с которой совпадут ваши убеждения и ценности", type: 5 }
          ]
      },
      {
          id: 4,
          text: "С каким руководителем Вам бы НЕ хотелось работать?",
          options: [
              { text: "с тем, кто не дает зарабатывать", type: 1 },
              { text: "с тем, кто уделяет мало внимания сотрудникам", type: 2 },
              { text: "с тем, кто постоянно контролирует", type: 3 },
              { text: "с не профессиональным", type: 4 },
              { text: "с тем, кто скрывает информацию о ситуации в компании", type: 5 }
          ]
      },
      {
          id: 5,
          text: "Что бы вы хотели получить от продвижения по карьерной лестнице?",
          options: [
              { text: "хорошие деньги", type: 1 },
              { text: "признание", type: 2 },
              { text: "свободу", type: 3 },
              { text: "развитие профессионализма", type: 4 },
              { text: "возможность влиять на развитие компании", type: 5 }
          ]
      },
      {
          id: 6,
          text: "На ваш взгляд хороший руководитель это тот, кто",
          options: [
              { text: "будет справедливым в распределении денег", type: 1 },
              { text: "будет публично признавать личный вклад каждого и поддерживать коллектив", type: 2 },
              { text: "будет давать время на подготовку, не будет торопить", type: 3 },
              { text: "будет давать возможность реализовать потенциал по максимуму", type: 4 },
              { text: "будет всей душой болеть за общее дело", type: 5 }
          ]
      },
      {
          id: 7,
          text: "Что вам не нравилось в прошлой работе больше всего",
          options: [
              { text: "отсутствие адекватной материальной компенсации и/или ее несправедливость", type: 1 },
              { text: "плохой коллектив и/или невнимательный руководитель", type: 2 },
              { text: "очень жесткие рамки, много рутины", type: 3 },
              { text: "отсутствие роста и перспективы", type: 4 },
              { text: "отсутствие целей и принципов у самой компании", type: 5 }
          ]
      },
      {
          id: 8,
          text: "Наиболее значимое для вас слово",
          options: [
              { text: "вознаграждение", type: 1 },
              { text: "признание", type: 2 },
              { text: "творчество", type: 3 },
              { text: "достижения", type: 4 },
              { text: "команда", type: 5 }
          ]
      },
      {
          id: 9,
          text: "Какой бы текст объявления, рядом с названием вакансии, вас бы больше привлек, если написанное -- правда!",
          options: [
              { text: "возможности заработка неограниченны, самое прибыльное направление!", type: 1 },
              { text: "прекрасный коллектив, совместный досуг, присоединяйтесь к нашей семье!", type: 2 },
              { text: "творческая работа, требующая погружения. График свободный!", type: 3 },
              { text: "требуются суперпрофессионалы! Обучение мирового уровня за счет компании", type: 4 },
              { text: "работа в великой компании, на благо общества! Для тех, кто не боится участвовать в принятии решений!", type: 5 }
          ]
      },
      {
          id: 10,
          text: "Как бы вы, будучи руководителем, простимулировали сотрудника выполнить сложную задачу, не входящую в его обязанности",
          options: [
              { text: "деньги", type: 1 },
              { text: "попросил бы лично, ради меня", type: 2 },
              { text: "объяснил бы какая это интересная творческая задача", type: 3 },
              { text: "бросил бы вызов, взял бы «на слабо»", type: 4 },
              { text: "объяснил бы, как это важно для достижения целей всей компании", type: 5 }
          ]
      }
  ],
  motivationTypes: [
      {
          id: 1,
          name: "Мотив вознаграждения",
          description: "Вы работаете ради денег и других материальных благ. Для вас важно справедливое вознаграждение за труд."
      },
      {
          id: 2,
          name: "Социальный мотив",
          description: "Для вас важно одобрение руководства и коллектива. Вы цените хорошую атмосферу в команде."
      },
      {
          id: 3,
          name: "Процессный мотив",
          description: "Вы трудитесь ради удовольствия от самого процесса работы. Вам важна творческая составляющая и свобода действий."
      },
      {
          id: 4,
          name: "Мотив достижения",
          description: "Вы стремитесь к самоутверждению и самореализации. Для вас важны вызовы и профессиональный рост."
      },
      {
          id: 5,
          name: "Идейный мотив",
          description: "Для вас важно достижение совместных с компанией высоких целей. Вы разделяете ценности организации."
      }
  ]
};

// DOM элементы
const startTestBtn = document.getElementById('start-test');
const instructionsSection = document.getElementById('instructions');
const testForm = document.getElementById('test-form');
const questionsContainer = document.querySelector('.questions-container');
const resultsSection = document.getElementById('results');
const retakeTestBtn = document.getElementById('retake-test');
const profileChart = document.querySelector('.profile-chart');
const profileDescription = document.querySelector('.profile-description');

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  startTestBtn.addEventListener('click', startTest);
  retakeTestBtn.addEventListener('click', retakeTest);
  testForm.addEventListener('submit', showResults);
});

// Начать тест
function startTest() {
  instructionsSection.classList.add('hidden');
  testForm.classList.remove('hidden');
  renderQuestions();
}

// Пройти тест снова
function retakeTest() {
  resultsSection.classList.add('hidden');
  testForm.reset();
  startTest();
}

// Отобразить вопросы
function renderQuestions() {
  questionsContainer.innerHTML = '';
  
  testData.questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question';
      questionElement.innerHTML = `
          <div class="question-text">${index + 1}. ${question.text}</div>
          <div class="answer-options"></div>
      `;
      
      const optionsContainer = questionElement.querySelector('.answer-options');
      
      // Создаем копию вариантов ответа для перемешивания
      const shuffledOptions = [...question.options];
      
      // Перемешиваем варианты ответов (кроме первого вопроса, чтобы показать пример)
      if (index !== 0) {
          shuffledOptions.sort(() => Math.random() - 0.5);
      }
      
      shuffledOptions.forEach((option, optionIndex) => {
          const optionElement = document.createElement('div');
          optionElement.className = 'answer-option';
          optionElement.innerHTML = `
              <label>
                  <span class="answer-rank" data-rank="1">1</span>
                  <span class="answer-text">${option.text}</span>
              </label>
          `;
          
          const rankElement = optionElement.querySelector('.answer-rank');
          
          // Обработчик клика для ранжирования
          rankElement.addEventListener('click', (e) => {
              e.stopPropagation();
              const currentRank = parseInt(rankElement.textContent);
              const newRank = currentRank < 5 ? currentRank + 1 : 1;
              rankElement.textContent = newRank;
              rankElement.dataset.rank = newRank;
          });
          
          optionsContainer.appendChild(optionElement);
      });
      
      questionsContainer.appendChild(questionElement);
  });
}

// Показать результаты
function showResults(e) {
  e.preventDefault();
  
  // Собрать результаты
  const results = {
      1: 0, // Мотив вознаграждения
      2: 0, // Социальный мотив
      3: 0, // Процессный мотив
      4: 0, // Мотив достижения
      5: 0  // Идейный мотив
  };
  
  const questions = document.querySelectorAll('.question');
  
  questions.forEach(question => {
      const options = question.querySelectorAll('.answer-option');
      
      options.forEach(option => {
          const rank = parseInt(option.querySelector('.answer-rank').dataset.rank);
          const optionText = option.querySelector('.answer-text').textContent;
          
          // Найти тип мотивации для этого варианта ответа
          const questionData = testData.questions.find(q => 
              q.options.some(opt => opt.text === optionText)
          );
          
          if (questionData) {
              const optionData = questionData.options.find(opt => opt.text === optionText);
              results[optionData.type] += rank;
          }
      });
  });
  
  // Определить ведущий мотив (наименьшая сумма)
  const leadingMotivation = Object.entries(results).reduce((min, current) => 
      current[1] < min[1] ? current : min
  );
  
  // Отобразить результаты
  renderResults(results, leadingMotivation);
  
  testForm.classList.add('hidden');
  resultsSection.classList.remove('hidden');
}

// Отобразить результаты
function renderResults(results, leadingMotivation) {
  // Очистить предыдущие результаты
  profileChart.innerHTML = '<h3>Ваш профиль мотивации</h3>';
  profileDescription.innerHTML = '';
  
  // Создать диаграмму
  const maxValue = Math.max(...Object.values(results));
  
  Object.entries(results).forEach(([type, score]) => {
      const motivationType = testData.motivationTypes.find(mt => mt.id === parseInt(type));
      
      // Добавить бар в диаграмму
      const barContainer = document.createElement('div');
      barContainer.className = 'bar-container';
      
      const percentage = ((maxValue - score + 1) / maxValue) * 100;
      
      barContainer.innerHTML = `
          <div class="bar-label">
              <span>${motivationType.name}</span>
              <span>${score}</span>
          </div>
          <div class="bar">
              <div class="bar-fill" style="width: ${percentage}%"></div>
          </div>
      `;
      
      profileChart.appendChild(barContainer);
      
      // Добавить описание мотивации
      const motivationElement = document.createElement('div');
      motivationElement.className = `motivation-type ${type === leadingMotivation[0] ? 'leading' : ''}`;
      motivationElement.innerHTML = `
          <h3>${motivationType.name}</h3>
          <p>${motivationType.description}</p>
          ${type === leadingMotivation[0] ? '<p><strong>Это ваш ведущий мотив!</strong></p>' : ''}
      `;
      
      profileDescription.appendChild(motivationElement);
  });
  
  // Анимировать заполнение баров
  setTimeout(() => {
      const bars = document.querySelectorAll('.bar-fill');
      bars.forEach(bar => {
          bar.style.width = bar.style.width;
      });
  }, 100);
}