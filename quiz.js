const question_display = document.getElementById("question");
const optionsArr = Array.from(document.getElementsByClassName("option"));
let qindexDisplay = document.getElementById("q_index");
let scoreDisplay = document.getElementById("score_display")
let questions = []
let Qdecide = localStorage.getItem("Topic")
console.log(Qdecide)

let space_questions = [
     {
        question: 'کام لەم دیاردانەی خوارەوە ناتوانرێت لەسەر ڕووی مانگ ببینرێت؟',
        option1: 'هەڵهاتن و ئاوابوونی خۆر',
        option2: 'خۆرگیرانی',
        option3: 'جوڵەی دوورەپەرێزەکان',
        option4: 'ترپاندنی ئەستێرەکان',
        answer: 4,
    },
	{
        question: 'کام لەم دیاردانەی خوارەوە ناتوانرێت لەسەر ڕووی مانگ ببینرێت؟',
        option1: 'هەڵهاتن و ئاوابوونی خۆر',
        option2: 'خۆرگیرانی',
        option3: 'جوڵەی دوورەپەرێزەکان',
        option4: 'ترپاندنی ئەستێرەکان',
        answer: 4,
    },
    {
        question: 'کام لەم هەسارەی خوارەوە ماوەی خولانەوەی کورتترە لە خولگەی  خۆر؟',
        option1: 'موشتەری',
        option2: 'ڤینۆس',
        option3: 'مەریخ',
        option4: 'ئۆرانۆس',
        answer: 2,
    },
    {
        question: " کام ژنە کەشتیوانی زۆرترین کات لە بۆشایی ئاسمان بەسەر بردووە؟",
        option1: "Lisa Norwak",
        option2: "Kalpana Chawla",
        option3: "Sunita Williams",
        option4: "None of these",
        answer: 3,
    },
    {
        question: "کام لەم هەسارەی خوارەوە کاتی خولانەوەی کەمترە لە زەوی؟",
        option1: "موشتەری",
        option2: "مەریخ",
        option3: "عەطارد",
        option4: "ڤینۆس",
        answer: 1,
    },
    {
        question: "پشتێنەی ئەستێرەیی لە نێوان کام دوو هەسارە لە کۆمەڵەی خۆردا هەڵکەوتووە؟",
        option1: "مەریخ و زەوی",
        option2: "مەریخ و موشتەری",
        option3: "موشتەری و زوحەل",
        option4: "زوحەل و ئۆرانۆس",
        answer: 2,
    },
    {
        question: " ئەستێرەیەک کە دەتوانرێت بڵێین ڕەنگەکەی فێنکترینە",
        option1: "زەرد",
        option2: "شین",
        option3: "سوور",
        option4: "ڕەش",
        answer: 3,
    },
    {
        question: "کام لەم هەسارەی خوارەوە مانگیان نییە؟",
        option1: "پلۆتۆ و عەطارد",
        option2: "مەریخ و زوحەل",
        option3: "عەطارد و زوحەل",
        option4: "پلۆتۆ و مەریخ",
        answer: 3,
    },
    {
        question: "کام هەسارە بەرزترین شاخی ئۆڵیمپوس مۆنس لە کۆمەڵەی خۆردا هەیە؟",
        option1: "موشتەری",
        option2: "ئۆرانۆس",
        option3: "زوحەل",
        option4: "مەریخ",
        answer: 4,
    },
    {
        question: "  کەشتی ئاسمانی نیو هۆریزن لە لایەن ناساوە خرایە خوارەوە لەسەر کام لەم هەسارانە؟",
        option1: "مەریخ",
        option2: "پلۆتۆ",
        option3: "موشتەری",
        option4: "عەطارد",
        answer: 2,
    },
    {
        question: "کام لەمانەی خوارەوە نزیکترین گەلەئەستێرەی ڕێڕەوی شیرییە؟",
        option1: "گەلەئەستێرەی ئەندرۆمێدا",
        option2: "گەلەئەستێرەی عەرەبانە",
        option3: "گەلەئەستێرەی پینویڵ",
        option4: "گەلەئەستێرەی گێژەڵوکە",
        answer: 1,
    },
]

let vedic_questions = [
    {
        question: 'بەهای 93 * 86 چەندە',
        option1: '8098',
        option2: '9098',
        option3: '7998',
        option4: '9808',
        answer: 3,
    },
    {
        question: 'بەهای 395 * 11 چەندە',
        option1: '4535',
        option2: '4345',
        option3: '5345',
        option4: '3545',
        answer: 2,
    },
    {
        question: ' 3800 / 19',
        option1: '125',
        option2: '200',
        option3: '152',
        option4: '215',
        answer: 2,
    },
    {
        question: 'بەهای 6084 ÷ 5 چەندە',
        option1: '121.68',
        option2: '8064',
        option3: '1216.8',
        option4: '156.3',
        answer: 3,
    },
    {
        question: 'بەهای 73624 ÷ 25 چەندە',
        option1: '294.496',
        option2: '294496',
        option3: '29449.6',
        option4: '2944.96',
        answer: 4,
    },
    {
        question: 'بەهای 5421 * 33 چەندە',
        option1: '178893',
        option2: '1788993',
        option3: '179883',
        option4: '198873',
        answer: 1,
    },
    {
        question: 'بەهای 1759 ÷ 25 چەندە',
        option1: '703.6',
        option2: '7036',
        option3: '70.36',
        option4: '7036.0',
        answer: 3,
    },
    {
        question: ' 115 * 110',
        option1: '12025',
        option2: '13225',
        option3: '10025',
        option4: '12650',
        answer: 4,
    },
    {
        question: '112 * 122',
        option1: '11244',
        option2: '12544',
        option3: '13664',
        option4: '14544',
        answer: 3,
    },
    {
        question: ' 1700 / 50',
        option1: '46',
        option2: '34',
        option3: '66',
        option4: '24',
        answer: 2,
    },
]

/*let history_questions = [
    {
        question: "لە کام ساڵ و لە کام شوێن، بۆ یەکەمجار سروودی نیشتمانی هیندستان وترا؟",
        option1: '1911, Kolkata',
        option2: '1912, Lucknow',
        option3: '1913, Delhi',
        option4: '1914, Bombay',
        answer: 1,
    },
    {
        question: "جەنگی یەکەمی جیهان ساڵی چەند بوو ؟ ",
        option1: '1909',
        option2: '1910',
        option3: '1918',
        option4: '1922',
        answer: 3,
    },
    {
        question: "لە جەنگی یەکەمی جیهانی دا کام وڵات سەرکەوت لە کۆتایی؟",
        option1: 'ڕوسیا ',
        option2: 'ئەڵمانیا',
        option3: 'فەڕەنسا',
        option4: 'چین',
        answer: 1,
    },
    {
        question: "The Indian Independence League (1942) was founded by whom in Tokyo?",
        option1: 'Taraknath Das',
        option2: 'Subhash Chandra Bose',
        option3: 'Chandra Shekhar Azad',
        option4: 'Rash Bihari Bose',
        answer: 4,
    },
    {
        question: "Who of the following is referred to as “Rough, crude but intelligent Chitpavan Brahmin”?",
        option1: 'Bajirao I',
        option2: 'Balaji Biswanath',
        option3: 'Balaji Bajirao II',
        option4: 'Sivaji',
        answer: 2,
    },
    {
        question: "Who is the author of Vande Mataram?",
        option1: 'Mahatma Gandhi',
        option2: 'Rabindranath Tagore',
        option3: 'Bankim Chandra Chatterjee',
        option4: 'Sarat Chandra Chatterjee',
        answer: 3,
    },
    {
        question: "Who is regarded as as the ‘father of modern India’",
        option1: 'Mahatma Gandhi',
        option2: 'Raja Ram Mohan Roy',
        option3: 'Bhagat Singh',
        option4: 'Swami Dayananda Saraswati',
        answer: 2,
    },
    {
        question: "The Mughal General, who decisively defeated Shivaji and forced him to conclude the Treaty of Purandar, was",
        option1: ' Shaista Khan',
        option2: 'Dilir Khan',
        option3: 'Prince Muazzam',
        option4: 'Mirza Raja Jai Singh',
        answer: 4,
    },
    {
        question: "The Mughal General, who decisively defeated Shivaji and forced him to conclude the Treaty of Purandar, was",
        option1: ' Shaista Khan',
        option2: 'Dilir Khan',
        option3: 'Prince Muazzam',
        option4: 'Mirza Raja Jai Singh',
        answer: 2,
    },
    {
        question: "Shivaji ceded the forts to the Mughals by the treaty of",
        option1: 'Chittor',
        option2: 'Pune',
        option3: 'Purandar',
        option4: 'Torna',
        answer: 3,
    },
]

let gscience_questions = [
    {
        question: "Electric bulb filament is made of",
        option1: 'Copper',
        option2: 'Aluminum',
        option3: 'Lead',
        option4: 'Tungsten',
        answer: 4,
    },
    {
        question: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        option1: 'Oxygen',
        option2: 'Hydrogen Sulphide',
        option3: 'Carbon dioxide',
        option4: 'Nitrogen',
        answer: 2,
    },
    {
        question: "Which of the following is a non metal that remains liquid at room temperature?",
        option1: 'Phosphorous',
        option2: 'Bromine',
        option3: 'Chlorine',
        option4: 'Helium',
        answer: 2,
    },
    {
        question: "Which of the following is used in pencils?",
        option1: 'Graphite',
        option2: 'Silicon',
        option3: 'Charcoal',
        option4: 'Phosphorous',
        answer: 1,
    },
    {
        question: "Washing soda is the common name for",
        option1: 'Sodium Carbonate',
        option2: 'Calcium Bicarbonate',
        option3: 'Sodium Bicarbonate',
        option4: 'Calcium Carbonate',
        answer: 1,
    },
    {
        question: "Quartz crystals normally used in quartz clocks etc. is chemically",
        option1: 'Germanium Oxide',
        option2: 'Silicon Dioxide',
        option3: 'A mixture of Germanium Oxide and Silicon dioxide',
        option4: 'Sodium Silicate',
        answer: 2,
    },
    {
        question: "Which of the gas is not known as green house gas?",
        option1: 'Methane',
        option2: 'Nitrous oxide',
        option3: 'Carbon dioxide',
        option4: 'Hydrogen',
        answer: 4,
    },
    {
        question: "The hardest substance available on earth is",
        option1: 'Gold',
        option2: 'Vibranium',
        option3: 'Diamond',
        option4: 'Platinum',
        answer: 3,
    },
    {
        question: "Which of the following is used as a lubricant?",
        option1: 'Graphite',
        option2: 'Silica',
        option3: 'Iron Oxide',
        option4: 'Diamond',
        answer: 1,
    },
    {
        question: "What is laughing gas?",
        option1: 'Nitrous Oxide',
        option2: 'Carbon monoxide',
        option3: 'Sulphur dioxide',
        option4: 'Hydrogen peroxide',
        answer: 1,
    },
]

let caffairs_questions = [
    {
        question: "Which food delivery platform is set to onboard over 36000 street vendors under PM SVANidhi scheme?",
        option1: 'Zomato',
        option2: 'Swiggy',
        option3: 'Uber Eats',
        option4: 'Groffers',
        answer: 2,
    },
    {
        question: "Which is the state bird of Uttar Pradesh, that has been adopted as new logo of NOIDA international airport?",
        option1: 'Sparrow',
        option2: 'Lesser Falcon',
        option3: 'Sarus Crane',
        option4: 'Peacock',
        answer: 3,
    },
    {
        question: "India’s first-ever driverless train operations has been inaugurated in which Metro rail service?",
        option1: 'Delhi Metro',
        option2: 'Lucknow Metro',
        option3: 'Chennai Metro',
        option4: 'Cochin Metro',
        answer: 1,
    },
    {
        question: "The PM CARES Fund Trust has allocated Rs 201 crores for installation of which equipment?",
        option1: 'Oxygen Generation Plants',
        option2: 'Air Purifiers',
        option3: 'RO- Water Purifiers',
        option4: 'Make Shift Hospitals',
        answer: 1,
    },
    {
        question: "India’s first undersea tunnel is being constructed in which city?",
        option1: 'Chennai',
        option2: 'Cochin',
        option3: 'Mumbai',
        option4: 'Kolkata',
        answer: 3,
    },
    {
        question: "Which Ministry has mandated companies to disclose their investments in cryptocurrencies?",
        option1: 'Ministry of Finance',
        option2: 'Ministry of Corporate Affairs',
        option3: 'Ministry of Home Affairs',
        option4: 'Ministry of Electronics and IT',
        answer: 2,
    },
    {
        question: "Which state has recently launched a solar-based electrification programme for its rural households?",
        option1: 'Uttar Pradesh',
        option2: 'Odisha',
        option3: 'Assam',
        option4: 'Goa',
        answer: 4,
    },
    {
        question: "The Sardar Sarovar Dam is a terminal Dam built on which river?",
        option1: 'Sutlej',
        option2: 'Narmada',
        option3: 'Beas',
        option4: 'Chenab',
        answer: 2,
    },
    {
        question: "Which is India’s first certified organic fruit?",
        option1: 'Apple',
        option2: 'Strawberry',
        option3: 'Kiwi',
        option4: 'Banana',
        answer: 3,
    },
    {
        question: "India has decided to set up one-million-dollar facility for academic collaboration with countries of which region?",
        option1: 'Europe',
        option2: 'South America',
        option3: 'Arab',
        option4: 'Australia',
        answer: 3,
    },
]

let nature_questions = [
    {
        question: "Every food chain in the ecosystem begins with………. which are the original source of food.",
        option1: 'Saprophytes',
        option2: 'Parasites',
        option3: 'Producers',
        option4: 'Herbivores',
        answer: 3,
    },
    {
        question: "We should reduce the use of the plastic bags, bottles etc. because:",
        option1: 'They are not durable',
        option2: 'They are non-biodegradable',
        option3: 'They are made of toxic materials',
        option4: 'They react with the atmospheric gases',
        answer: 3,
    },
    {
        question: "Which among the following statements is incorrect in view of the plants?",
        option1: 'They convert the solar energy into mechanical energy',
        option2: 'They prepare their food from organic compounds',
        option3: 'They are also called producers',
        option4: 'They are the initial source of energy in a food chain',
        answer: 2,
    },
    {
        question: "In a food chain the second trophic level is occupied by:",
        option1: 'Carnivores',
        option2: 'Autotrophs',
        option3: 'Herbivores',
        option4: 'Producers',
        answer: 3,
    },
    {
        question: "Green plants utilize ……… percent of sun’s energy to prepare their food by the process of photosynthesis?",
        option1: '1 percent',
        option2: '10 percent',
        option3: '20 percent',
        option4: '99 percent',
        answer: 1,
    },
    {
        question: "Which of the following radiations is responsible for the conversion of atmospheric oxygen to ozone?",
        option1: 'Gamma radiations',
        option2: 'Cosmic radiations',
        option3: 'Infrared radiations',
        option4: 'Ultraviolet radiations',
        answer: 4,
    },
    {
        question: "Global warming is a phenomenon related to:",
        option1: 'Evaporation',
        option2: 'Ecological balance',
        option3: 'Greenhouse effect',
        option4: 'Desertification',
        answer: 3,
    },
    {
        question: "The portion of earth and its environment which can support life is known as ",
        option1: 'Crust',
        option2: 'Biosphere',
        option3: 'Exosphere',
        option4: 'Atmosphere',
        answer: 3,
    },
    {
        question: "Soil errosion can be prevented by ",
        option1: 'Deforestation',
        option2: 'Afforestation',
        option3: 'Overgrazing',
        option4: 'Removal of vegetation',
        answer: 2,
    },
    {
        question: "What is troposphere",
        option1: 'Portion of Air',
        option2: 'Portion of Water',
        option3: 'Lowest layer of atmosphere',
        option4: 'portion of sky',
        answer: 3,
    },

]

let pysch_questions = [
    {
        question: "Where the word 'psychology' does come from?",
        option1: 'Italian',
        option2: 'Greek',
        option3: 'Latin',
        option4: 'None of the above',
        answer: 2,
    },
    {
        question: "Psychology is said to be the scientific study of _____ and ______.",
        option1: 'Behavior, mental processes',
        option2: 'Mental illness, Mental health',
        option3: 'Physical states, mental states',
        option4: 'None of the above',
        answer: 1,
    },
    {
        question: "Which of the following part of the brain sends signals 'alert' to the higher centers in response to incoming messages?",
        option1: 'Reticular formation',
        option2: 'Hippocampus',
        option3: 'Limbic system',
        option4: 'Amygdala',
        answer: 1,
    },
    {
        question: "Which of the following is an example of the negative attitude towards people?",
        option1: 'Stereotype',
        option2: 'Prototype',
        option3: 'Prejudice',
        option4: 'Discrimination',
        answer: 3,
    },
    {
        question: "Which of the following Greek philosopher believed that knowledge is acquired through learning and experience?",
        option1: 'Aristotle',
        option2: 'Plato',
        option3: 'Archimedes',
        option4: 'None of the above',
        answer: 1,
    },
    {
        question: "Which of the following is a belief that the mind is fundamentally different from the body?",
        option1: 'Mindism',
        option2: 'Specialism',
        option3: 'Centralism',
        option4: 'Mind-body Dualism',
        answer: 4,
    },
    {
        question: "The process of using psychological methods by a trained psychologist for helping people with psychological problems is called as -",
        option1: 'Psychoanalysis',
        option2: 'Psychotherapy',
        option3: 'Psychiatry',
        option4: 'None of the above',
        answer: 2,
    },
    {
        question: "Which of the following is a part of the psychosocial domain?",
        option1: 'Judgment',
        option2: 'Style of behaving',
        option3: 'Memory',
        option4: 'Motor skills',
        answer: 2,
    },
    {
        question: "Which of the following is not a diagnosable sleep disorder?",
        option1: 'Insomnia',
        option2: 'Sleep terror',
        option3: 'Somnambulism',
        option4: 'Somniloquy',
        answer: 4,
    },
    {
        question: "The method of gathering information about the brain that indicates the overall activity of the brain is called as ",
        option1: 'Positron emission tomography',
        option2: 'Electrical stimulation',
        option3: 'Electroencephalogram',
        option4: 'None of the above',
        answer: 1,
    },
]

let fitness_questions = [
    {
        question: "Which One Of These Exercises Is Effective For Weight Loss?",
        option1: 'Cardio',
        option2: 'Yoga',
        option3: 'Strength exercises',
        option4: 'Balance exercises',
        answer: 1,
    },
    {
        question: "What Does HIIT Stand For?",
        option1: 'Heat',
        option2: 'High-interval intensity training',
        option3: 'High-interval intensity therapy',
        option4: 'High-intensity interval training',
        answer: 4,
    },
    {
        question: "How Do You Call The Layer Of Fat Around Your Waistline?",
        option1: 'Muffin top',
        option2: 'Beer belly',
        option3: 'Love handles',
        option4: 'Tummy',
        answer: 3,
    },
    {
        question: "Which Piece Of Equipment Will Be Useless For The Basic Squat?",
        option1: 'Dumbbells',
        option2: 'Bar',
        option3: 'Ankle weights',
        option4: 'Foam roller',
        answer: 3,
    },
    {
        question: "The percentage of fat,bone,water and muscle in human body is called",
        option1: 'Muscular endurance',
        option2: 'Muscular strength',
        option3: 'Body composition',
        option4: 'Flexibility',
        answer: 3,
    },
    {
        question: "The range of motion through a joint is known as what?",
        option1: 'Stretching',
        option2: 'Flexibility',
        option3: 'Agility',
        option4: 'Balance',
        answer: 2,
    },
    {
        question: "The ability of muscles to exert force on an object.",
        option1: 'Strength',
        option2: 'Power',
        option3: 'Speed',
        option4: 'Endurance',
        answer: 1,
    },
    {
        question: "Cardiorespiratory Endurance is",
        option1: "the body's ability to push or pull with all its force",
        option2: 'the ability to move a joint through its full range of motion',
        option3: 'the ability of the heart and lungs to supply oxygen to the body',
        option4: "the body's response to a flexibility program",
        answer: 3,
    },
    {
        question: "What does RICE stand for?",
        option1: "Whole Grains",
        option2: 'Remove, Ice, Cold, Exercise ',
        option3: 'Reduce Impact, Carry Energy',
        option4: "Rest, Ice, Compression, Elevation",
        answer: 4,
    },
    {
        question: "The amount of time it takes to make a physical response",
        option1: "Speed",
        option2: 'Cardio-respiratory Endurance',
        option3: 'Agility',
        option4: "Reaction Time",
        answer: 4,
    },
]*/

if (Qdecide === "space") {
    questions = space_questions
}
if (Qdecide === "vedic") {
    questions = vedic_questions
}
if (Qdecide === "history") {
    questions = history_questions
}
if (Qdecide === "gscience") {
    questions = gscience_questions
}
if (Qdecide === "currentaffairs") {
    questions = caffairs_questions
}
if (Qdecide === "nature") {
    questions = nature_questions
}
if (Qdecide === "pyschology") {
    questions = pysch_questions
}
if (Qdecide === "fitness") {
    questions = fitness_questions
}

let currentQuestion = {};
let availableQuestions = [];
let score = 0;
let questionCount = 0;
const correct_Bonus = 10;
const max_questions = 10;

startQuiz = () => {
    questionCount = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
    toggleOptions();
}

let nameDisplay = document.getElementById("nameDisplay")
nameDisplay.textContent = `${localStorage.getItem("name")}`

getNewQuestion = () => {
    questionCount++;
    qindexDisplay.textContent = `${questionCount}/${max_questions}`
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    question_display.textContent = `${currentQuestion.question}`
    optionsArr.forEach((option) => {
        const number = option.dataset["number"]
        option.textContent = `${currentQuestion[`option${number}`]}`
    })
    availableQuestions.splice(questionIndex, 1);
    resetOptions();
    console.log(availableQuestions)
}

let option = document.querySelectorAll("li.option");
toggleOptions = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("selected")) {
                    option[j].classList.remove("selected");
                }
            }
            option[i].classList.add("selected");
        }
    }
}
resetOptions = () => {
    for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("selected")) {
            option[j].classList.remove("selected");
        }
    }
}
Change = () => {
    let selectedAnswer = document.querySelector(".selected").dataset['number']
    if (selectedAnswer == currentQuestion.answer) {
        score += correct_Bonus
        scoreDisplay.textContent = `${score}`
        localStorage.setItem("Game score", score)
    }
    console.log(`${questionCount} : ${score}`)
    if (questionCount >= max_questions) {
        localStorage.setItem("Total Time", `${textMinutes} minutes and ${textSeconds} seconds`)
        clearInterval(myTime)
        location.href = "result.html"
    } else {
        getNewQuestion()
    }

}

startQuiz()