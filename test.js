const testList = [
  {
    answer: '무야호',
    imageUrl: 'assets/test1.jpeg',
    altText: '무야호를 외치는 사람',
  },
  {
    answer: '아모르파티',
    imageUrl: 'assets/test2.jpeg',
    altText: '아모르파티를 노래하는 가수',
  },
  {
    answer: '던질까말까',
    imageUrl: 'assets/test3.jpeg',
    altText: '무언가를 던질까 말까 고민하는 사람',
  },
  {
    answer: '깡',
    imageUrl: 'assets/test4.jpeg',
    altText: '비의 깡 춤추는 장면',
  },
  {
    answer: '4달라',
    imageUrl: 'assets/test5.jpeg',
    altText: '4달라를 외치는 사람',
  },
  {
    answer: '호롤롤로',
    imageUrl: 'assets/test6.jpeg',
    altText: '호롤롤로 장면',
  },
  {
    answer: '아안돼',
    imageUrl: 'assets/test7.jpeg',
    altText: '아 안돼를 외치는 사람',
  },
  {
    answer: 'ppap',
    imageUrl: 'assets/test8.jpeg',
    altText: '펜 파인애플 애플 펜',
  },
  {
    answer: '마포대교는무너졌냐',
    imageUrl: 'assets/test9.jpeg',
    altText: '마포대교는 무너졌냐 장면',
  },
  {
    answer: '이제는더이상물러날곳이없다',
    imageUrl: 'assets/test10.jpeg',
    altText: '이제는 더 이상 물러날 곳이 없다 장면',
  },
];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion() {
  if (currentQuestion < testList.length) {
    document.getElementById('questionNumber').innerText = `문제 ${
      currentQuestion + 1
    }`;
    document.getElementById('questionImage').src =
      testList[currentQuestion].imageUrl;
    document.getElementById('questionImage').alt =
      testList[currentQuestion].altText;
    document.getElementById('answerInput').value = '';
  } else {
    showResults();
  }
}

function submitAnswer() {
  const userAnswer = document.getElementById('answerInput').value.trim();
  userAnswers.push(userAnswer);
  currentQuestion++;
  loadQuestion();
}

function showResults() {
  let score = 0;
  let resultsHtml = '<h2>결과</h2><ul class="list-group">';
  for (let i = 0; i < testList.length; i++) {
    const correct = userAnswers[i] === testList[i].answer;
    if (correct) score++;
    resultsHtml += `<li class="list-group-item">
            문제 ${i + 1}: ${correct ? '정답' : '오답'}<br>
            정답: ${testList[i].answer}<br>
            당신의 답: ${userAnswers[i]}
        </li>`;
  }
  resultsHtml += `</ul><h3>총 점수: ${score} / ${testList.length}</h3>`;
  document.getElementById('results').innerHTML = resultsHtml;
}

window.onload = function () {
  loadQuestion();
};
