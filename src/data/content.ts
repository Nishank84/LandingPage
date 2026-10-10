export interface Workshop {
  id: string;
  number: string;
  title: string;
  learn: string;
  build: string;
  description: string;
  accent: string;
  badgeBg: string;
}

export interface PlatformModule {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  category: 'core' | 'academic' | 'management' | 'engagement';
  icon: string;
  stakeholders: {
    role: string;
    value: string;
  }[];
  endTagline: string;
  features: string[];
}

export interface Belief {
  title: string;
  description: string;
  accent: string;
  bgTint: string;
  iconName: string;
}

export interface GrowthLevel {
  level: string;
  title: string;
  accent: string;
  bgTint: string;
  icon: string;
}

export const HERO_CONTENT = {
  eyebrow: "GAMEUP · ACADEMICOS",
  headline: [
    "Make Education Exciting.",
    "Effortless.",
    "Efficient.",
    "Easy."
  ],
  supporting: "Education too often feels like a set of chores. We believe it can be a journey of curiosity, creativity, and belonging for everyone, in every school.",
  primaryCta: "Book a demo",
  secondaryCta: "Explore the platform"
};

export const GOAL_CONTENT = {
  eyebrow: "OUR PURPOSE",
  headline: "A brighter tomorrow.",
  subheadline: "A kinder tomorrow for every learner.",
  description: "Every Teacher, Parent and School wants one thing: Children who are happy, learning and growing. We help make that happen.",
  stakeholders: [
    { title: "Students", role: "Joy in discovery", count: "Level Up" },
    { title: "Teachers", role: "Time returned", count: "Empowered" },
    { title: "Parents", role: "Connected closely", count: "In The Loop" },
    { title: "Schools", role: "Operational peace", count: "Unified" }
  ]
};

export const PROBLEM_CONTENT = {
  eyebrow: "THE REALITY TODAY",
  title: "The Problem",
  lead: "Education is facing a crisis of pressure and administrative exhaustion.",
  stats: [
    {
      strainNumber: "Systemic Strain #1",
      figure: "70%",
      label: "of Indian students face Anxiety.",
      source: "Source: NCERT & National Mental Health Survey",
      sourceUrl: "https://timesofindia.indiatimes.com/city/delhi/all-is-not-well-anxiety-bogs-down-nearly-70-students/articleshow/124296825.cms",
      context: "Overwhelming exam stress, disconnected assignments, and isolation drain the joy from learning."
    },
    {
      strainNumber: "Systemic Strain #2",
      figure: "65%",
      label: "of Indian teachers are overworked.",
      source: "Source: Ministry of Education Survey / India Today",
      sourceUrl: "https://www.indiatoday.in/education-today/news/story/65-teachers-overburdened-only-58-participated-in-nep-discussions-moe-survey-1954891-2022-05-27",
      context: "Repetitive paper grading, administrative busywork, and endless messaging groups leave no room to teach."
    }
  ]
};

export const SOLUTION_CONTENT = {
  eyebrow: "THE SOLUTION",
  platformName: "GameUp",
  subBrand: "GameUp AcademicOS",
  tagline: "Learn. Create. Belong",
  description: "GameUp AcademicOS is an AI-powered academic platform for schools, bringing together a suite of specialised tools that schools can adopt individually and expand as they grow.",
  theme: "Serious tech. Playful experience.",
  comparisons: [
    {
      category: "INSTEAD OF",
      oldTitle: "The patchwork",
      oldDesc: "Registers, spreadsheets and a dozen WhatsApp groups. Nothing connects.",
      newSolution: "One platform, every stakeholder connected."
    },
    {
      category: "INSTEAD OF",
      oldTitle: "Classroom-only apps",
      oldDesc: "They stop at the classroom door: no administration, behaviour or parent layer.",
      newSolution: "The whole school, not just the class."
    },
    {
      category: "INSTEAD OF",
      oldTitle: "Traditional school ERPs",
      oldDesc: "Built for the office, not for learners. They feel like paperwork.",
      newSolution: "Serious tech with a playful experience students actually open."
    }
  ],
  stakeholders: [
    {
      role: "Students",
      quote: "“This is mine, and it’s fun.”",
      description: "Engaging learning, gamified progress and rewards, tools and communities.",
      accent: "#3B82F6",
      bgTint: "#E7F0FE"
    },
    {
      role: "Teachers",
      quote: "“This gives me time back.”",
      description: "Less repetitive work, AI-powered support, more time for teaching.",
      accent: "#CF2300",
      bgTint: "#FFEDEA"
    },
    {
      role: "Administrators",
      quote: "“I can see and run everything.”",
      description: "Unified academic and operational tools with real-time insight.",
      accent: "#0A7760",
      bgTint: "#E2F8F4"
    },
    {
      role: "Parents",
      quote: "“I know what’s happening.”",
      description: "Real-time updates on WhatsApp and visibility into progress.",
      accent: "#906100",
      bgTint: "#FFF8E9"
    }
  ],
  pills: [
    "Modular products",
    "Works for every school",
    "All stakeholders connected",
    "Real-time insights"
  ]
};

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: "exam-management",
    name: "Exam Prep",
    tagline: "Make every assessment simpler, smarter and more secure.",
    shortDesc: "End-to-end assessments from question bank authoring to impartial anonymous evaluations.",
    fullDesc: "From building question banks to creating examinations, evaluating submissions and resolving student doubts, Game Up brings the entire assessment journey into one place. Administrators can create personalised question papers for individual students, while anonymous correction ensures that teachers evaluate papers without knowing whose work they are reviewing—helping create a more consistent and impartial assessment process.",
    category: "academic",
    icon: "ClipboardCheck",
    stakeholders: [
      { role: "Teachers", value: "Quicker Conduct of Exams" },
      { role: "School Administrators", value: "Birds eye view of exam conduct" },
      { role: "Parents", value: "Complete knowledge of child’s performance" },
      { role: "Students", value: "Instant feedback" }
    ],
    endTagline: "Create. Assess. Correct. Improve.",
    features: [
      "Dynamic Question Bank Generator",
      "Anonymous Blind Evaluation Workflow",
      "Personalized Student Question Papers",
      "Automated Doubt Resolution Routing"
    ]
  },
  {
    id: "task-management",
    name: "Task Management System",
    tagline: "Turn everyday assignments into missions worth completing.",
    shortDesc: "Transform routine academic tasks into engaging quests with XP, leaderboards, and parent reward exchanges.",
    fullDesc: "Game Up transforms routine academic tasks into engaging quests. Teachers assign missions to students, attach XP rewards to successful completion, and track progress as students work their way forward. Students can use their XP to climb leaderboards, unlock achievements and participate in reward exchanges with their parents. An AI-powered storytelling layer turns ordinary assignments into meaningful missions within an evolving adventure.",
    category: "engagement",
    icon: "Target",
    stakeholders: [
      { role: "Teachers", value: "Seamlessly manage assignments" },
      { role: "School Administrators", value: "Peak into day-to-day academic activity" },
      { role: "Parents", value: "Ensure their kids don’t miss out on any tasks" },
      { role: "Students", value: "Homework made into a game" }
    ],
    endTagline: "Every task is a mission. Every mission moves you up.",
    features: [
      "Story-driven Mission Formats",
      "XP, Badges & Milestone Rewards",
      "Parent Reward Exchange Connect",
      "Real-time Submission Tracker"
    ]
  },
  {
    id: "ai-assistant",
    name: "Delta",
    tagline: "A curriculum-aware AI assistant for every learner.",
    shortDesc: "Chatbot grounded in each school's exact curriculum for adaptive notes, quizzes, and explanations.",
    fullDesc: "Game Up’s AI chatbot is grounded in each user’s specific curriculum, giving teachers and students an academic assistant that understands the context of their learning environment. Teachers can create notes and questions, correct answers, generate variations of topics and automate tasks across the platform. Students can ask questions, explore concepts, generate practice quizzes and receive explanations adapted to the way they learn. The assistant also keeps track of relevant in-platform activity, helping users stay on top of what needs to be done.",
    category: "core",
    icon: "Sparkles",
    stakeholders: [
      { role: "Everyone", value: "The entire school, just an ask away." }
    ],
    endTagline: "Ask. Learn. Create. Keep moving up.",
    features: [
      "Syllabus & Textbook Grounding",
      "Instant Teacher Lesson Note Generator",
      "Adaptive Socratic Concept Explainer",
      "Automated Practice Quiz Synthesis"
    ]
  },
  {
    id: "library",
    name: "Library",
    tagline: "Everything you need to learn, create and share.",
    shortDesc: "A collaborative workspace for mind maps, flowcharts, whiteboards, rich-text pages, and flashcards.",
    fullDesc: "The Library gives teachers and students a shared space for the academic resources they create and use. Create mind maps, flowcharts, whiteboards, rich-text pages, flashcards, documents and links. Teachers can build resources and assign them to students, while students can create and organise resources for themselves.",
    category: "academic",
    icon: "BookOpen",
    stakeholders: [
      { role: "Teachers", value: "Ensure important knowledge is passed down to students" },
      { role: "Students", value: "Never lose any important information" }
    ],
    endTagline: "One place for every idea, resource and learning artefact.",
    features: [
      "Mind Maps & Diagramming Canvas",
      "Digital Flashcard Decks",
      "Interactive Multi-format Whiteboards",
      "Structured Resource Assignment"
    ]
  },
  {
    id: "training-centre",
    name: "Training Centre",
    tagline: "Build skills beyond the classroom.",
    shortDesc: "Personalised quizzes, AI-generated rhymes, and playful activities to strengthen foundational study habits.",
    fullDesc: "The Training Centre gives students a space to practise, experiment and strengthen the skills behind effective learning. Students can generate personalised quizzes based on their areas of weakness, learn concepts through AI-generated rhymes built around themes they enjoy, and play activities designed to strengthen foundational study skills.",
    category: "engagement",
    icon: "Dumbbell",
    stakeholders: [
      { role: "Students", value: "Practice made into a game.." }
    ],
    endTagline: "Practise your weak points. Strengthen your skills. Level up.",
    features: [
      "Weak-area Adaptive Quizzing",
      "Theme-based AI Concept Rhymes",
      "Cognitive Habit Mini-games",
      "Personal Mastery Progress Tracker"
    ]
  },
  {
    id: "behaviour-management",
    name: "Behaviour Management",
    tagline: "Make good behaviour visible.",
    shortDesc: "Recognise and celebrate positive habits openly across the classroom to cultivate community encouragement.",
    fullDesc: "Teachers can recognise and reward positive student behaviour directly through Game Up. When a student receives a reward, the recognition is visible to the class—creating opportunities for positive behaviour to be noticed, celebrated and encouraged within the school community.",
    category: "management",
    icon: "HeartHandshake",
    stakeholders: [
      { role: "Teachers", value: "Encourage good behaviour in students" },
      { role: "Students", value: "Get motivated to continue exhibiting goodness." }
    ],
    endTagline: "Recognise good behaviour. Celebrate progress.",
    features: [
      "Classroom Recognition Feed",
      "Custom Values & Character Badges",
      "Positive Reinforcement Metrics",
      "Culture of Mutual Celebration"
    ]
  },
  {
    id: "analytics",
    name: "Analytics",
    tagline: "Turn every activity into actionable insight.",
    shortDesc: "Real-time telemetry turns day-to-day interactions into meaningful visibility without waiting for report cards.",
    fullDesc: "Game Up captures student activity across the platform in real time and turns it into meaningful insights for the people who support each learner. Teachers and administrators get actionable visibility into student activity and performance, while parents receive timely insight into their child’s academic journey.",
    category: "core",
    icon: "BarChart3",
    stakeholders: [
      { role: "Everyone", value: "No need to wait for the report card to understand the state of things." }
    ],
    endTagline: "From activity to insight. From insight to action.",
    features: [
      "Real-time Academic Pulse",
      "Intervention Risk Detection",
      "Teacher Workload & Efficiency Metrics",
      "Longitudinal Skill Trajectory"
    ]
  },
  {
    id: "administration-management",
    name: "Administration Management",
    tagline: "Keep the school moving.",
    shortDesc: "Streamline transportation, facilities, and daily logistical coordination in a unified environment.",
    fullDesc: "Game Up extends beyond the classroom to streamline the operational side of running a school. From transportation and facilities to other administrative activities, the platform brings school operations into a more connected environment—helping administrators coordinate the moving parts that keep a school running smoothly.",
    category: "management",
    icon: "Building2",
    stakeholders: [
      { role: "Administrator", value: "The entire school is manageable in a click" }
    ],
    endTagline: "One school. One connected operational view.",
    features: [
      "Fleet & Transportation Coordination",
      "Campus Facility & Room Management",
      "Administrative Request Dispatcher",
      "All-in-One Operations Dashboard"
    ]
  },
  {
    id: "whatsapp-assistant",
    name: "WhatsApp Assistant for Parents",
    tagline: "Keep parents close to the learning journey.",
    shortDesc: "Instant WhatsApp updates, progress notifications, and automatic alerts right where parents already are.",
    fullDesc: "Parents can interact with Game Up through WhatsApp to access real-time information about their child’s academic activity and performance. The system can also automatically reach out when a student’s activity requires parental attention or intervention, helping parents stay informed without requiring them to constantly check another platform.",
    category: "engagement",
    icon: "MessageCircle",
    stakeholders: [
      { role: "Administrators & Teachers", value: "Inform parents in just a click" },
      { role: "Parents", value: "Get updates whenever, wherever." }
    ],
    endTagline: "The right update. At the right time. Right where parents already are.",
    features: [
      "Natural Language Inquiries via WhatsApp",
      "Smart Alert Triggers for Interventions",
      "Instant Attendance & Mission Status",
      "Zero App Download Required for Parents"
    ]
  },
  {
    id: "communities",
    name: "Communities",
    tagline: "Take learning beyond the school gates.",
    shortDesc: "Connect with subject-matter experts, guest lectures, courses, and interschool competitions.",
    fullDesc: "Game Up connects students, teachers, parents and administrators with communities beyond their own schools. Communities are organised around skills and interests, giving users opportunities to learn from experts, connect with like-minded people, access courses, organise guest lectures and workshops, and participate in interschool competitions. For students, community activity remains visible to their parents, creating greater transparency around their experiences beyond the classroom.",
    category: "core",
    icon: "Users",
    stakeholders: [
      { role: "Students", value: "Learn beyond the classroom" },
      { role: "Teachers", value: "Learn from the best in the world" },
      { role: "Administrators", value: "Access to an entire network of experts to enhance school performance" },
      { role: "Parents", value: "No need to limit your child’s dreams" }
    ],
    endTagline: "Meet people. Discover skills. Learn beyond your school.",
    features: [
      "Interest & Skill Clubs",
      "Global Guest Lecture Series",
      "Cross-school Hackathons & Competitions",
      "Parent-transparent Social Hub"
    ]
  }
];

export const CRUCIBLE_HERO = {
  sectionLabel: "THE CRUCIBLE",
  tagline: "Learn. Create. Belong.",
  statement: "Technology shouldn’t be something students only read about in textbooks.",
  description: "The Crucible is a series of gamified, hands-on technology workshops that give students a day to explore modern digital skills, solve real problems and build something of their own. Each workshop brings together challenges, experimentation, teamwork, gamification and project-based learning. Students don’t just learn a concept and move on—they put it to work immediately. By the end of the day, every student has something they have created, solved or built.",
  coreIdea: "One Day → One Skill → One Real Project",
  journeySteps: [
    { step: "01", name: "Explore", desc: "Discover frontiers beyond ordinary textbooks." },
    { step: "02", name: "Experiment", desc: "Test hypotheses and break things safely." },
    { step: "03", name: "Solve", desc: "Tackle real-world computational challenges." },
    { step: "04", name: "Create", desc: "Build functional software, apps, or models." },
    { step: "05", name: "Share", desc: "Showcase original work to peers and parents." }
  ]
};

export const CRUCIBLE_WORKSHOPS: Workshop[] = [
  {
    id: "w-01",
    number: "01",
    title: "Programming & Problem Solving",
    learn: "Programming fundamentals, computational thinking and problem-solving.",
    build: "A programmed solution to a real-world problem.",
    description: "Students learn to break down problems, think computationally and turn their ideas into working solutions.",
    accent: "#3B82F6",
    badgeBg: "#E7F0FE"
  },
  {
    id: "w-02",
    number: "02",
    title: "App Development",
    learn: "The fundamentals of building web, mobile and desktop applications.",
    build: "A multi-platform blog application.",
    description: "Students move from understanding how applications work to designing and building one themselves.",
    accent: "#FF6B4D",
    badgeBg: "#FFEDEA"
  },
  {
    id: "w-03",
    number: "03",
    title: "AI for Everyday Life",
    learn: "How to use AI effectively, responsibly and productively.",
    build: "An AI-powered automation for a day-to-day activity.",
    description: "Students explore how AI can become a practical tool for solving everyday problems and improving the way they work.",
    accent: "#8B5CF6",
    badgeBg: "#F1EBFE"
  },
  {
    id: "w-04",
    number: "04",
    title: "AI Development",
    learn: "How AI can be used to create applications and products.",
    build: "A multi-platform AI-powered application.",
    description: "Students move beyond simply using AI to understanding how it can become part of something they build.",
    accent: "#10C7A1",
    badgeBg: "#E2F8F4"
  },
  {
    id: "w-05",
    number: "05",
    title: "UI/UX Design",
    learn: "User research, design thinking, wireframing and interface design.",
    build: "A complete app mockup based on an idea chosen by the student.",
    description: "Students turn an idea into an experience—understanding the people they are designing for and translating their thinking into an interface.",
    accent: "#FFC44B",
    badgeBg: "#FFF8E9"
  },
  {
    id: "w-06",
    number: "06",
    title: "Cloud Computing",
    learn: "Cloud fundamentals, deployment, and running applications and models in the cloud.",
    build: "An AI model running on cloud infrastructure.",
    description: "Students get a practical introduction to the infrastructure that powers the digital products they use every day.",
    accent: "#3B82F6",
    badgeBg: "#E7F0FE"
  }
];

export const PROGRAM_EXPERIENCE = {
  title: "A Program Built Around Student Engagement",
  lead: "The Crucible isn’t a lecture followed by a worksheet. It is a journey.",
  pillars: [
    {
      title: "Challenges",
      description: "Students tackle practical challenges that turn abstract concepts into problems they want to solve."
    },
    {
      title: "Hands-on Learning",
      description: "Every concept is followed by an activity, experiment or building exercise. Students learn by doing, not just by listening."
    },
    {
      title: "Gamification",
      description: "Points, challenges, achievements and milestones give students reasons to participate, experiment and keep moving forward."
    },
    {
      title: "Build Something Real",
      description: "Every workshop works towards a defined end product. Students aren’t simply completing exercises—they are building something that works."
    },
    {
      title: "Creative Freedom",
      description: "Where possible, students choose what they want to create. Technology becomes more than a subject to learn; it becomes a tool for expressing their ideas."
    },
    {
      title: "Something to Show",
      description: "Every student leaves with a tangible outcome that demonstrates what they learned and what they were able to create."
    }
  ]
};

export const WHY_CRUCIBLE = {
  title: "Why The Crucible?",
  headline: "Give students a day to discover what technology can do.",
  copy: "Technology is shaping the way we learn, work, create and solve problems. The Crucible gives schools a practical way to expose students to the technologies, skills and ways of thinking shaping that future—without requiring a long-term curriculum commitment. In a single day, students get to Explore → Experiment → Solve → Create → Share. And, most importantly, discover that they can build with technology—not just consume it."
};

export const CRUCIBLE_OUTCOME = {
  quote: "“I didn’t just learn about technology. I used it to build something.”",
  lead: "That’s the experience The Crucible is designed to create.",
  rhythm: [
    "A day to explore.",
    "A day to experiment.",
    "A day to compete.",
    "A day to create.",
    "A day to build what’s next."
  ],
  ctaText: "Bring The Crucible to your school."
};

export const THOUGHT_CONTENT = {
  eyebrow: "THE THOUGHT",
  sectionLabel: "THE BIG IDEA",
  headline: "Lift-off.",
  description: "Every learner can rise. Game Up gives each student, teacher and school the lift to go further than they thought they could, and makes the climb feel like play.",
  supporting: "That's why everything about Game Up rises: the name says Up, our streak climbs, and students don't just finish work, they level up.",
  levels: [
    {
      level: "LEVEL 1",
      title: "Curious",
      accent: "#3B82F6",
      bgTint: "#E7F0FE",
      icon: "Lightbulb"
    },
    {
      level: "LEVEL 2",
      title: "Confident",
      accent: "#CF2300",
      bgTint: "#FFEDEA",
      icon: "BookOpen"
    },
    {
      level: "LEVEL 3",
      title: "Growing",
      accent: "#0A7760",
      bgTint: "#E2F8F4",
      icon: "Sprout"
    },
    {
      level: "LEVEL 4",
      title: "Lift-off",
      accent: "#7841F5",
      bgTint: "#F1EBFE",
      icon: "Rocket"
    }
  ]
};

export const VISION_MISSION_TEAM = {
  vision: {
    label: "OUR VISION",
    text: "To make learning feel like a grand adventure in every school in India, and then in classrooms everywhere.",
    accent: "#3B82F6",
    bgTint: "#E7F0FE"
  },
  mission: {
    label: "OUR MISSION",
    text: "To build one platform that makes school easier for teachers, fun for students, more efficient for administrators, and simpler for parents to stay close to.",
    accent: "#CF2300",
    bgTint: "#FFEDEA"
  },
  team: {
    label: "OUR TEAM",
    text: "Innovative, jovial, enthusiastic problem solvers who want school to be an exciting journey for every student.",
    accent: "#0A7760",
    bgTint: "#E2F8F4"
  }
};

export const BELIEFS_CONTENT: Belief[] = [
  {
    title: "Curiosity First",
    description: "Learning starts with a question, not a syllabus.",
    accent: "#3B82F6",
    bgTint: "#E7F0FE",
    iconName: "Compass"
  },
  {
    title: "People Centred",
    description: "Technology serves people, never the other way round.",
    accent: "#CF2300",
    bgTint: "#FFEDEA",
    iconName: "Heart"
  },
  {
    title: "Continuous Growth",
    description: "Progress matters more than scores.",
    accent: "#0A7760",
    bgTint: "#E2F8F4",
    iconName: "TrendingUp"
  },
  {
    title: "Playful Experiences",
    description: "Play is a serious tool for learning.",
    accent: "#906100",
    bgTint: "#FFF8E9",
    iconName: "Sparkles"
  },
  {
    title: "Stronger Together",
    description: "Schools thrive as communities.",
    accent: "#7841F5",
    bgTint: "#F1EBFE",
    iconName: "Users2"
  }
];

export const FOOTER_CONTENT = {
  brand: "GameUp",
  companyName: "GameUp Technologies",
  tagline: "India’s Academic OS · Learn. Create. Belong.",
  linkedin: "https://www.linkedin.com/company/gameup-technologies/",
  email: "admin@gameup.tech",
  navLinks: [
    { label: "The Platform", href: "#platform" },
    { label: "The Crucible", href: "#crucible" },
    { label: "The Thought", href: "#thought" }
  ]
};
