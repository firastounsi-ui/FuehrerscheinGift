const courses = [
    {
        id: "theorie",
        title: "الامتحان النظري",
        german: "Theoretische Prüfung",
        icon: "📘",
        intro: "الامتحان النظري الألماني لا يختبر الحفظ فقط، بل يختبر هل تفهمين الخطر وتتصرفين بطريقة آمنة.",
        chapters: [
            {
                heading: "ماذا يوجد في الامتحان؟",
                items: [
                    "أسئلة اختيار متعدد.",
                    "أسئلة صور.",
                    "أسئلة فيديو.",
                    "أسئلة عن الإشارات.",
                    "أسئلة عن الأولوية.",
                    "أسئلة عن السرعة، المسافة، الطقس، الأوتوبان، والكحول."
                ]
            },
            {
                heading: "نظام النقاط",
                items: [
                    "كل سؤال له نقاط خطأ: 2 أو 3 أو 4 أو 5.",
                    "عادة في Klasse B ترسبين إذا تجاوزتِ 10 نقاط خطأ.",
                    "إذا أخطأتِ في سؤالين من فئة 5 نقاط، ترسبين حتى لو كان المجموع 10.",
                    "الأسئلة ذات 5 نقاط غالبًا تكون عن مواقف خطيرة جدًا."
                ]
            },
            {
                heading: "طريقة التفكير الصحيحة",
                items: [
                    "اقرئي السؤال كاملًا قبل النظر إلى الأجوبة.",
                    "ابحثي عن الخطر الأساسي.",
                    "اسألي نفسك: من يمكن أن يتضرر؟",
                    "غالبًا الخيار الأكثر أمانًا هو الصحيح.",
                    "انتبهي للكلمات: immer, niemals, nur, zuerst."
                ]
            }
        ],
        traps: [
            "التسرع في قراءة السؤال.",
            "اختيار جواب يبدو منطقيًا لكن غير آمن.",
            "نسيان الدراجات والمشاة في الصور.",
            "عدم الانتباه للإشارات الصغيرة في الخلفية."
        ],
        examTip: "في أسئلة الفيديو والصور، لا تنظري فقط إلى السيارة أمامك. راقبي الأرصفة، الأطفال، الدراجات، والإشارات."
    },

    {
        id: "priority",
        title: "الأولوية",
        german: "Vorfahrt",
        icon: "◆",
        intro: "الأولوية من أكثر المواضيع التي تسبب الرسوب، لأن السؤال قد يحتوي عدة سيارات وإشارات واتجاهات.",
        chapters: [
            {
                heading: "Rechts vor Links",
                items: [
                    "إذا لا توجد إشارات أو أضواء أو شرطة، تطبق قاعدة Rechts vor Links.",
                    "يعني: السيارة القادمة من اليمين تملك الأولوية.",
                    "حجم الطريق لا يعطي أولوية.",
                    "سرعة السيارة لا تعطي أولوية.",
                    "الثقة الزائدة لا تعطي أولوية، للأسف بالنسبة لبعض السائقين."
                ]
            },
            {
                heading: "Vorfahrt gewähren",
                items: [
                    "تعني: أعطِ الأولوية.",
                    "لا يجب التوقف دائمًا إذا كان الطريق فارغًا.",
                    "يجب تخفيف السرعة والاستعداد للتوقف.",
                    "إذا توجد سيارات أو دراجات أو مشاة لهم أولوية، يجب الانتظار."
                ]
            },
            {
                heading: "STOP",
                items: [
                    "STOP يعني توقف كامل.",
                    "العجلات يجب أن تتوقف تمامًا.",
                    "حتى لو الطريق فارغ يجب التوقف.",
                    "Rolling Stop خطأ امتحاني خطير."
                ]
            }
        ],
        traps: [
            "الاعتقاد أن الطريق الأكبر يعني أولوية.",
            "عدم التوقف الكامل عند STOP.",
            "نسيان الدراجة القادمة من اليمين.",
            "التركيز على السيارات فقط وتجاهل المشاة."
        ],
        examTip: "في أي تقاطع: ابحثي أولًا عن الإشارات، ثم الأضواء، ثم الشرطة، ثم طبقي Rechts vor Links إذا لا يوجد شيء."
    },

    {
        id: "signs",
        title: "إشارات المرور",
        german: "Verkehrszeichen",
        icon: "🚧",
        intro: "الإشارات ليست للزينة. هي أوامر وتحذيرات ومعلومات، والامتحان يسأل غالبًا: ماذا تفعلين عند رؤيتها؟",
        chapters: [
            {
                heading: "Gefahrenzeichen",
                items: [
                    "إشارات الخطر تكون غالبًا مثلثًا بإطار أحمر.",
                    "تحذر من خطر قادم.",
                    "مثل: منعطف، أطفال، حيوانات، طريق زلق، أعمال طرق.",
                    "عند رؤيتها يجب تخفيف السرعة وزيادة الانتباه."
                ]
            },
            {
                heading: "Vorschriftzeichen",
                items: [
                    "إشارات تنظيمية تعطي أمرًا أو منعًا.",
                    "مثل ممنوع الدخول، ممنوع الوقوف، حد السرعة.",
                    "يجب اتباعها مباشرة.",
                    "تجاهلها في الامتحان يعني غالبًا جوابًا خاطئًا."
                ]
            },
            {
                heading: "Richtzeichen",
                items: [
                    "إشارات إرشادية ومعلوماتية.",
                    "مثل الأوتوبان، موقف سيارات، طريق باتجاه واحد.",
                    "تساعدك على فهم نوع الطريق والقواعد الخاصة به."
                ]
            }
        ],
        traps: [
            "حفظ شكل الإشارة بدون معرفة التصرف الصحيح.",
            "الخلط بين ممنوع الوقوف وممنوع التوقف.",
            "عدم الانتباه للوحات الإضافية تحت الإشارة.",
            "تجاهل الإشارات المؤقتة في Baustelle."
        ],
        examTip: "لا تسألي فقط: ماذا تعني الإشارة؟ اسألي: ماذا يجب أن أفعل الآن؟"
    },

    {
        id: "speed",
        title: "السرعة والمسافات",
        german: "Geschwindigkeit und Abstand",
        icon: "⏱️",
        intro: "السرعة في الامتحان مرتبطة بالسلامة، مسافة التوقف، الطقس، والرؤية. الفيزياء لا تتفاوض، للأسف.",
        chapters: [
            {
                heading: "Reaktionsweg",
                items: [
                    "هي المسافة التي تقطعها السيارة قبل أن تبدئي بالفرملة.",
                    "الصيغة: السرعة ÷ 10 × 3.",
                    "عند 50 km/h: 50 ÷ 10 × 3 = 15 متر.",
                    "التعب والكحول والهاتف يزيدون هذه المسافة."
                ]
            },
            {
                heading: "Bremsweg",
                items: [
                    "هي المسافة من لحظة الفرملة حتى التوقف.",
                    "الصيغة: (السرعة ÷ 10)².",
                    "عند 50 km/h: 5² = 25 متر.",
                    "إذا تضاعفت السرعة، مسافة الفرملة تزيد كثيرًا."
                ]
            },
            {
                heading: "Anhalteweg",
                items: [
                    "هي المسافة الكاملة للتوقف.",
                    "الصيغة: Reaktionsweg + Bremsweg.",
                    "عند 50 km/h: 15 + 25 = 40 متر.",
                    "هذا يعني أن الخطر القريب جدًا قد لا يمكن تجنبه."
                ]
            }
        ],
        traps: [
            "الخلط بين Bremsweg و Anhalteweg.",
            "نسيان أن المطر والثلج يزيدان مسافة الفرملة.",
            "الاعتقاد أن الحد الأقصى للسرعة يعني أنه آمن دائمًا.",
            "عدم زيادة Abstand على الأوتوبان."
        ],
        examTip: "إذا السؤال فيه مطر أو ضباب أو ثلج، فكري مباشرة: سرعة أقل ومسافة أمان أكبر."
    },

    {
        id: "pedestrians",
        title: "المشاة والدراجات",
        german: "Fußgänger und Radfahrer",
        icon: "🚲",
        intro: "المشاة والدراجات يظهرون كثيرًا في الامتحان لأنهم أكثر عرضة للخطر، ولأن السائقين الجدد ينسونهم بشكل مدهش.",
        chapters: [
            {
                heading: "عند الانعطاف",
                items: [
                    "عند الانعطاف يمينًا أو يسارًا، راقبي المشاة والدراجات.",
                    "الدراجة قد تكون بجانبك في الزاوية العمياء.",
                    "يجب فحص المرآة والكتف قبل الانعطاف.",
                    "إذا يوجد ممر دراجات، انتبهي أكثر."
                ]
            },
            {
                heading: "الأطفال",
                items: [
                    "الأطفال غير متوقعين.",
                    "كرة على الطريق تعني غالبًا طفلًا قد يركض بعدها.",
                    "قرب المدارس والملاعب يجب تخفيف السرعة.",
                    "لا تعتمدي على أن الطفل رأى السيارة."
                ]
            },
            {
                heading: "ممر المشاة",
                items: [
                    "عند Fußgängerüberweg يجب الاستعداد للتوقف.",
                    "إذا شخص يريد العبور، يجب إعطاؤه الأولوية.",
                    "لا تتجاوزي سيارة توقفت عند ممر مشاة."
                ]
            }
        ],
        traps: [
            "النظر إلى السيارات فقط.",
            "نسيان فحص الكتف.",
            "التقليل من سرعة الدراجة.",
            "عدم توقع طفل خلف كرة أو سيارة متوقفة."
        ],
        examTip: "في أي صورة فيها طفل أو دراجة أو ممر مشاة، الجواب غالبًا يتطلب تخفيف السرعة والاستعداد للتوقف."
    },

    {
        id: "autobahn",
        title: "الأوتوبان",
        german: "Autobahn",
        icon: "🛣️",
        intro: "الأوتوبان الألماني ليس لعبة سرعة. السرعات العالية تعني أن الخطأ الصغير يصبح مشكلة كبيرة بسرعة مزعجة جدًا.",
        chapters: [
            {
                heading: "الدخول إلى الأوتوبان",
                items: [
                    "استخدمي Beschleunigungsstreifen للتسارع.",
                    "السيارات الموجودة على الأوتوبان لها الأولوية.",
                    "لا تدخلي بسرعة بطيئة جدًا.",
                    "افحصي المرآة والزاوية العمياء."
                ]
            },
            {
                heading: "التجاوز",
                items: [
                    "التجاوز يكون من اليسار.",
                    "قبل التجاوز: مرآة داخلية، مرآة جانبية، كتف، ثم غماز.",
                    "بعد التجاوز عودي إلى اليمين عندما يكون آمنًا.",
                    "لا تبقي في المسار الأيسر بدون سبب."
                ]
            },
            {
                heading: "Rettungsgasse",
                items: [
                    "عند الازدحام يجب إنشاء ممر الطوارئ فورًا.",
                    "المسار الأيسر يتحرك إلى اليسار.",
                    "كل المسارات الأخرى تتحرك إلى اليمين.",
                    "لا تنتظري سماع الإسعاف."
                ]
            }
        ],
        traps: [
            "الدخول إلى الأوتوبان بسرعة منخفضة.",
            "نسيان الزاوية العمياء.",
            "البقاء في المسار الأيسر.",
            "إنشاء Rettungsgasse متأخرًا."
        ],
        examTip: "في أسئلة الأوتوبان، فكري دائمًا: سرعة عالية، مسافة أكبر، قرارات مبكرة."
    },

    {
        id: "weather",
        title: "الطقس والخطر",
        german: "Wetter und Gefahr",
        icon: "🌧️",
        intro: "الطقس السيئ يغير كل شيء: الرؤية، التماسك، مسافة الفرملة، ورد فعل السائق.",
        chapters: [
            {
                heading: "المطر",
                items: [
                    "أول دقائق المطر خطيرة بسبب اختلاط الماء بالزيوت والغبار.",
                    "الطريق يصبح زلقًا.",
                    "مسافة الفرملة تزيد.",
                    "يجب تخفيف السرعة وزيادة Abstand."
                ]
            },
            {
                heading: "Aquaplaning",
                items: [
                    "Aquaplaning يعني أن الإطار يفقد الاتصال بالطريق بسبب الماء.",
                    "المقود يصبح خفيفًا.",
                    "لا تفرملي بقوة.",
                    "ارفعي قدمك عن البنزين وثبتي المقود."
                ]
            },
            {
                heading: "الضباب والثلج",
                items: [
                    "في الضباب تقل الرؤية ويجب تخفيف السرعة.",
                    "Nebelschlussleuchte تستخدم فقط إذا الرؤية أقل من 50 مترًا.",
                    "في الثلج والجليد استخدمي حركات ناعمة.",
                    "الجسور والمناطق المظللة أكثر عرضة للجليد."
                ]
            }
        ],
        traps: [
            "القيادة بنفس سرعة الجو الجاف.",
            "استخدام ضوء الضباب الخلفي بدون حاجة.",
            "الفرملة العنيفة عند الانزلاق.",
            "نسيان أن الجليد قد يكون غير مرئي."
        ],
        examTip: "إذا ظهر في السؤال مطر أو ضباب أو ثلج، اختاري غالبًا: سرعة أقل، مسافة أكبر، حركات هادئة."
    }
];

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
        explanation: "STOP يعني توقف كامل دائمًا."
    },
    {
        question: "ما هو Reaktionsweg عند سرعة 50 km/h؟",
        answers: [
            { text: "5 متر", correct: false },
            { text: "15 متر", correct: true },
            { text: "25 متر", correct: false }
        ],
        explanation: "الحساب: 50 ÷ 10 × 3 = 15 متر."
    },
    {
        question: "متى يجب إنشاء Rettungsgasse؟",
        answers: [
            { text: "عند سماع الإسعاف فقط", correct: false },
            { text: "فور بداية الازدحام", correct: true },
            { text: "بعد توقف السيارات تمامًا", correct: false }
        ],
        explanation: "Rettungsgasse يجب أن تبدأ فور ظهور الازدحام."
    },
    {
        question: "ماذا تفعلين عند Aquaplaning؟",
        answers: [
            { text: "فرملة قوية", correct: false },
            { text: "رفع القدم عن البنزين وتثبيت المقود", correct: true },
            { text: "تغيير الاتجاه بسرعة", correct: false }
        ],
        explanation: "عند Aquaplaning تجنبي الحركات المفاجئة."
    }
];

let currentQuestion = 0;
let answered = false;
let currentSignFilter = "all";
let currentSignSearch = "";

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

renderCourses();
renderSigns();
loadQuestion();