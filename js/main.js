document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');
    const correctAnswersElement = document.getElementById('correct-answers');
    const totalQuestionsElement = document.getElementById('total-questions');

    const questions = [{
            question: "В каком году была основана школа №1?",
            answers: ["1 сентября 1945 года", "1 сентября 1934 года", "1 сентября 1941 года"],
            correctAnswer: "1 сентября 1934 года"
        },
        {
            question: "Сколько директоров было в школе за все время?",
            answers: ["10", "12", "14"],
            correctAnswer: "14"
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('btn', 'btn-outline-primary');
            button.addEventListener('click', selectAnswer);
            answersElement.appendChild(button);
        });
        nextButton.style.display = 'none';
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.textContent === questions[currentQuestionIndex].correctAnswer;
        if (correct) {
            correctAnswers++;
            selectedButton.classList.remove('btn-outline-primary');
            selectedButton.classList.add('btn-success');
        } else {
            selectedButton.classList.remove('btn-outline-primary');
            selectedButton.classList.add('btn-danger');
        }
        Array.from(answersElement.children).forEach(button => {
            button.disabled = true;
            if (button.textContent === questions[currentQuestionIndex].correctAnswer) {
                button.classList.remove('btn-outline-primary');
                button.classList.add('btn-success');
            }
        });
        nextButton.style.display = 'block';
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultElement.style.display = 'block';
        correctAnswersElement.textContent = correctAnswers;
        totalQuestionsElement.textContent = questions.length;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
    showQuestion();
});

$(document).ready(function() {
    $("a[data-fancybox]").fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close"
        ]
    });
});