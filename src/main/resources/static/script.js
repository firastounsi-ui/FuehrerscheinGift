const quiz = [
    {
        question: "من يملك الأولوية إذا لا توجد إشارات؟",
        answers: [
            { text: "السيارة الأسرع", correct: false },
            { text: "السيارة القادمة من اليمين", correct: true },
            { text: "السيارة الأكبر", correct: false }
        ],
        explanation: "صحيح. في غياب الإشارات تطبق قاعدة Rechts vor Links."
    },
    {
        question: "ماذا يجب أن تفعلي عند إشارة STOP؟",
        answers: [
            { text: "تخفيف السرعة فقط", correct: false },
            { text: "التوقف الكامل", correct: true },
            { text: "المرور إذا كان الطريق فارغًا", correct: false }
        ],
        explanation: "STOP يعني توقف كامل دائمًا، حتى لو الطريق يبدو فارغًا."
    },
    {
        question: "متى يجب إنشاء Rettungsgasse؟",
        answers: [
            { text: "عندما تسمعين سيارة الإسعاف فقط", correct: false },
            { text: "فور بداية الازدحام", correct: true },
            { text: "بعد توقف السيارات تمامًا", correct: false }
        ],
        explanation: "يجب إنشاء Rettungsgasse فور بداية الازدحام، وليس بعد فوات الأوان كالعادة البشرية."
    }
];

let currentQuestion = 0;
let answered = false;

const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("quiz-question");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    answered = false;
    feedback.textContent = "";
    nextBtn.classList.add("hidden");

    const item = quiz[currentQuestion];

    questionCounter.textContent = `السؤال ${currentQuestion + 1} من ${quiz.length}`;
    questionText.textContent = item.question;

    answersContainer.innerHTML = "";

    item.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.addEventListener("click", () => selectAnswer(button, answer.correct, item.explanation));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(button, isCorrect, explanation) {
    if (answered) return;

    answered = true;

    const buttons = answersContainer.querySelectorAll("button");

    buttons.forEach(btn => {
        const answer = quiz[currentQuestion].answers.find(a => a.text === btn.textContent);
        if (answer.correct) {
            btn.classList.add("correct");
        }
    });

    if (isCorrect) {
        button.classList.add("correct");
        feedback.textContent = explanation;
        feedback.style.color = "#16a34a";
    } else {
        button.classList.add("wrong");
        feedback.textContent = "غلط. " + explanation;
        feedback.style.color = "#dc2626";
    }

    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= quiz.length) {
        currentQuestion = 0;
    }

    loadQuestion();
}

loadQuestion();