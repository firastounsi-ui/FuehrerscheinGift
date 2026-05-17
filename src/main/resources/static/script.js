let courses = [];
const signs = [
    {
        type: "danger",
        nameAr: "إشارة خطر عامة",
        nameDe: "Gefahrenzeichen",
        image: "assets/signs/gefahrstelle.svg",
        meaning: "تحذير من خطر قادم غير محدد أو حالة تحتاج انتباهًا شديدًا.",
        action: "خففي السرعة، زيدي الانتباه، واستعدي لأي تغيير مفاجئ.",
        trap: "الخطأ الشائع هو تجاهل الإشارة لأنها لا تمنع شيئًا بشكل مباشر.",
        memory: "مثلث أحمر يعني: خطر قادم، لا تتصرفي وكأن الطريق يحبك."
    },
    {
        type: "danger",
        nameAr: "أطفال",
        nameDe: "Kinder",
        image: "assets/signs/kinder.svg",
        meaning: "تحذير من أطفال قرب الطريق، غالبًا قرب مدرسة أو ملعب أو حضانة.",
        action: "خففي السرعة جدًا واستعدي للتوقف.",
        trap: "إذا ظهرت كرة على الطريق، توقعي طفلًا بعدها.",
        memory: "أطفال + طريق = منطق مروري في إجازة."
    },
    {
        type: "danger",
        nameAr: "طريق زلق",
        nameDe: "Schleudergefahr",
        image: "assets/signs/schleudergefahr.svg",
        meaning: "الطريق قد يكون زلقًا بسبب المطر أو الثلج أو الزيت أو الأوراق.",
        action: "خففي السرعة، تجنبي الفرملة القوية، وزيدي Abstand.",
        trap: "أول دقائق المطر خطيرة جدًا بسبب اختلاط الماء بالزيوت.",
        memory: "إذا الطريق يلمع، لا تعامليه كأنه ديكور."
    },
    {
        type: "danger",
        nameAr: "أعمال طرق",
        nameDe: "Baustelle",
        image: "assets/signs/baustelle.svg",
        meaning: "منطقة أعمال، عمال، آلات، تضييق مسارات أو خطوط مؤقتة.",
        action: "اتبعي العلامات المؤقتة وخففي السرعة.",
        trap: "الخطوط الصفراء المؤقتة أهم من البيضاء القديمة.",
        memory: "Baustelle تعني أن الطريق قرر تغيير شخصيته مؤقتًا."
    },
    {
        type: "priority",
        nameAr: "أعطِ الأولوية",
        nameDe: "Vorfahrt gewähren",
        image: "assets/signs/vorfahrt-gewaehren.svg",
        meaning: "يجب إعطاء الأولوية للمرور على الطريق الآخر.",
        action: "خففي السرعة وتوقفي فقط إذا كان هناك مرور.",
        trap: "لا يجب التوقف دائمًا إذا كان الطريق فارغًا.",
        memory: "مثلث مقلوب = تواضعي قليلًا."
    },
    {
        type: "priority",
        nameAr: "قف",
        nameDe: "STOP",
        image: "assets/signs/stop.svg",
        meaning: "توقف كامل ثم إعطاء الأولوية.",
        action: "العجلات يجب أن تتوقف تمامًا.",
        trap: "Rolling Stop خطأ شائع ومهم في الامتحان.",
        memory: "STOP ليس اقتراحًا فلسفيًا."
    },
    {
        type: "priority",
        nameAr: "طريق ذو أولوية",
        nameDe: "Vorfahrtsstraße",
        image: "assets/signs/vorfahrtsstrasse.svg",
        meaning: "أنتِ على طريق له أولوية عند التقاطعات.",
        action: "استمري بحذر، لكن لا تفترضي أن الجميع سينتبه.",
        trap: "الأولوية لا تعني القيادة بدون انتباه.",
        memory: "المعين الأصفر = أولوية، لا حصانة سحرية."
    },
    {
        type: "priority",
        nameAr: "نهاية طريق الأولوية",
        nameDe: "Ende der Vorfahrtsstraße",
        image: "assets/signs/ende-vorfahrtsstrasse.svg",
        meaning: "نهاية الطريق الذي كان له أولوية.",
        action: "انتبهي، قد تعود قاعدة Rechts vor Links أو تظهر إشارات جديدة.",
        trap: "كثيرون يواصلون القيادة كأن لهم أولوية دائمة.",
        memory: "الخط فوق المعين يعني: انتهى الامتياز."
    },
    {
        type: "ban",
        nameAr: "ممنوع الدخول",
        nameDe: "Verbot der Einfahrt",
        image: "assets/signs/verbot-einfahrt.svg",
        meaning: "ممنوع الدخول من هذا الاتجاه.",
        action: "لا تدخلي الطريق.",
        trap: "قد يكون الطريق مسموحًا من الجهة الأخرى فقط.",
        memory: "أحمر مع خط أبيض = لا، بطريقة ألمانية واضحة جدًا."
    },
    {
        type: "ban",
        nameAr: "ممنوع الوقوف",
        nameDe: "Eingeschränktes Halteverbot",
        image: "assets/signs/halteverbot.svg",
        meaning: "ممنوع الركن، لكن التوقف القصير ممكن.",
        action: "لا تتركي السيارة ولا تنتظري طويلًا.",
        trap: "إذا غادرتِ السيارة، غالبًا أصبح Parken.",
        memory: "خط واحد = لا ركن طويل."
    },
    {
        type: "ban",
        nameAr: "ممنوع التوقف",
        nameDe: "Absolutes Halteverbot",
        image: "assets/signs/absolutes-halteverbot.svg",
        meaning: "ممنوع التوقف تمامًا، حتى لفترة قصيرة.",
        action: "لا تتوقفي ولا تركني السيارة.",
        trap: "دقيقة واحدة ليست عذرًا قانونيًا سحريًا.",
        memory: "خطّان أحمران = ممنوع تمامًا."
    },
    {
        type: "ban",
        nameAr: "حد السرعة 30",
        nameDe: "Zulässige Höchstgeschwindigkeit 30",
        image: "assets/signs/tempo-30.svg",
        meaning: "السرعة القصوى المسموحة هي 30 km/h.",
        action: "لا تتجاوزي 30 km/h.",
        trap: "في مناطق 30 يجب توقع أطفال ومشاة ودراجات أكثر.",
        memory: "30 غالبًا يعني: اهدئي، المنطقة ليست Autobahn."
    },
    {
        type: "info",
        nameAr: "أوتوبان",
        nameDe: "Autobahn",
        image: "assets/signs/autobahn.svg",
        meaning: "بداية طريق سريع ألماني.",
        action: "انتبهي للسرعة، المسارات، التجاوز، وRettungsgasse.",
        trap: "عدم وجود حد سرعة لا يعني القيادة بلا عقل.",
        memory: "Autobahn = قرارات أسرع ومسافة أكبر."
    },
    {
        type: "info",
        nameAr: "ممر مشاة",
        nameDe: "Fußgängerüberweg",
        image: "assets/signs/fussgaengerueberweg.svg",
        meaning: "مكان عبور للمشاة.",
        action: "استعدي للتوقف إذا أراد شخص العبور.",
        trap: "لا تتجاوزي سيارة متوقفة عند ممر مشاة.",
        memory: "المشاة هنا ليسوا ديكورًا حضريًا."
    },
    {
        type: "info",
        nameAr: "طريق باتجاه واحد",
        nameDe: "Einbahnstraße",
        image: "assets/signs/einbahnstrasse.svg",
        meaning: "الطريق يسمح بالسير في اتجاه واحد فقط.",
        action: "اتبعي الاتجاه المسموح.",
        trap: "انتبهي عند الخروج أو الركن، لأن الاتجاه مهم.",
        memory: "سهم واحد = طريق برأي واحد."
    }
];

async function loadCourses() {
    try {
        const response = await fetch("/data/courses.json");

        if (!response.ok) {
            throw new Error("Failed to load courses");
        }

        courses = await response.json();
        renderCourses();
    } catch (error) {
        console.error(error);
        document.getElementById("course-list").innerHTML =
            "<p>حدث خطأ أثناء تحميل الدروس.</p>";
    }
}
let quiz = [];

let currentQuestion = 0;
let answered = false;
let currentSignFilter = "all";
let currentSignSearch = "";
let score = 0;
function getTodayKey() {
    const today = new Date();

    const date = today.toLocaleDateString("sv-SE", {
        timeZone: "Europe/Berlin"
    });

    return `dailyQuizResult-${date}`;
}

function saveDailyResult() {
    const result = {
        date: new Date().toLocaleDateString("sv-SE", {
            timeZone: "Europe/Berlin"
        }),
        score: score,
        total: quiz.length
    };

    localStorage.setItem(getTodayKey(), JSON.stringify(result));
}

function getDailyResult() {
    const saved = localStorage.getItem(getTodayKey());

    if (!saved) {
        return null;
    }

    return JSON.parse(saved);
}

function renderSavedDailyResult() {
    const result = getDailyResult();

    if (!result) {
        dailyStatus.classList.add("hidden");
        return;
    }

    dailyStatus.textContent = `Quiz du jour terminé ✅ Score: ${result.score}/${result.total}. Reviens demain pour 10 nouvelles questions.`;
    dailyStatus.classList.remove("hidden");
}
async function loadDailyQuiz() {
    try {
        const response = await fetch("/api/daily-quiz");

        if (!response.ok) {
            throw new Error("Failed to load daily quiz");
        }

        quiz = await response.json();
        renderSavedDailyResult();

        currentQuestion = 0;
        answered = false;
        score =0;

        loadQuestion();
    } catch (error) {
        console.error(error);

        questionText.textContent = "حدث خطأ أثناء تحميل الأسئلة.";
        answersContainer.innerHTML = "";
        feedback.textContent = "تأكدي أن السيرفر يعمل وأن /api/daily-quiz يرجع الأسئلة.";
        feedback.style.color = "#dc2626";
    }
}
function renderCourses() {
    const courseList = document.getElementById("course-list");

    courseList.innerHTML = courses.map(course => `
    <button class="course-tab" onclick="renderLesson('${course.id}')">
      <span>${course.icon}</span>
      <strong>${course.title}</strong>
      <small>${course.german}</small>
    </button>
  `).join("");

    renderLesson(courses[0].id);
}

function renderLesson(courseId) {
    const lesson = courses.find(course => course.id === courseId);
    const lessonView = document.getElementById("lesson-view");

    document.querySelectorAll(".course-tab").forEach(tab => {
        tab.classList.remove("active-course");
    });

    const activeButton = [...document.querySelectorAll(".course-tab")]
        .find(button => button.getAttribute("onclick") === `renderLesson('${courseId}')`);

    if (activeButton) {
        activeButton.classList.add("active-course");
    }

    lessonView.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-icon">${lesson.icon}</div>
      <div>
        <p>${lesson.german}</p>
        <h3>${lesson.title}</h3>
      </div>
    </div>

    <p class="lesson-intro">${lesson.intro}</p>

    <div class="chapter-list">
      ${lesson.chapters.map(chapter => `
        <section class="chapter">
          <h4>${chapter.heading}</h4>
          <ul>
            ${chapter.items.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `).join("")}
    </div>

    <div class="trap-box">
      <h4>فخاخ شائعة في الامتحان</h4>
      <ul>
        ${lesson.traps.map(trap => `<li>${trap}</li>`).join("")}
      </ul>
    </div>

    <div class="lesson-tip">
      <strong>نصيحة امتحان:</strong>
      <span>${lesson.examTip}</span>
    </div>
  `;
}

function setSignFilter(filter) {
    currentSignFilter = filter;
    renderSigns();
}

function handleSignSearch(value) {
    currentSignSearch = value.trim().toLowerCase();
    renderSigns();
}

function renderSigns() {
    const signList = document.getElementById("sign-list");

    const filteredSigns = signs.filter(sign => {
        const matchesFilter =
            currentSignFilter === "all" || sign.type === currentSignFilter;

        const searchableText = `
      ${sign.nameAr}
      ${sign.nameDe}
      ${sign.meaning}
      ${sign.action}
      ${sign.trap}
      ${sign.memory}
    `.toLowerCase();

        const matchesSearch =
            currentSignSearch === "" || searchableText.includes(currentSignSearch);

        return matchesFilter && matchesSearch;
    });

    if (filteredSigns.length === 0) {
        signList.innerHTML = `
      <div class="empty-state">
        لا توجد إشارات بهذا البحث.
      </div>
    `;
        return;
    }

    signList.innerHTML = filteredSigns.map(sign => `
    <article class="card sign-card">
      <img class="real-sign" src="${sign.image}" alt="${sign.nameDe}">

      <h3>${sign.nameAr}</h3>
      <p class="de">${sign.nameDe}</p>

      <p>${sign.meaning}</p>

      <div class="action-box">
        <strong>ماذا تفعلين؟</strong>
        <span>${sign.action}</span>
      </div>

      <details class="details-box">
        <summary>فخ الامتحان + طريقة الحفظ</summary>

        <div>
          <strong>فخ شائع:</strong>
          <p>${sign.trap}</p>
        </div>

        <div>
          <strong>طريقة الحفظ:</strong>
          <p>${sign.memory}</p>
        </div>
      </details>
    </article>
  `).join("");
}

const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("quiz-question");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const dailyDate = document.getElementById("daily-date");
const dailyStatus = document.getElementById("daily-status");
function renderDailyDate() {
    const today = new Date();

    dailyDate.textContent = today.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
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
        score ++;
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
        saveDailyResult();
        renderSavedDailyResult();

        questionCounter.textContent = "Quiz terminé";
        questionText.textContent = "Bravo, tu as terminé le quiz du jour ✅";
        answersContainer.innerHTML = "";
        feedback.textContent = "Reviens demain pour 10 nouvelles questions.";
        feedback.style.color = "#047857";
        nextBtn.classList.add("hidden");

        return;
    }

    loadQuestion();
}

loadCourses();
renderSigns();
renderDailyDate();
loadDailyQuiz();