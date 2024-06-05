export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "h-full",
    titleClassName: "justify-end",
    img: "/ns3.gif",
    spareImg: "",
  },
  {
    id: 2,
    title: "Dual Degree Student",
    description: "I'm currently pursuing MCA at VIT Vellore and BS in Data Science and Applications (hybrid) from IITM",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-20 h-40 ml-auto me-10 mt-3",
    titleClassName: "justify-start",
    img: "/education.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "I'm a Data Science Enthusiast",
    description: "I love working on machine learning and AI applications. I can build and deploy complete ML pipelines from scratch",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-30 h-30",
    titleClassName: "justify-center",
    img: "ml2.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Quizzer",
    description: "I have Won prizes in more than 15 computer science quiz competitions",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/trophy.png",
  },

  {
    id: 5,
    title: "Skills and Technologies",
    description: [],
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "",
    img: "bluegrad.png",
    spareImg: "",
  },

  {
    id: 7,
    title: "Download Resume",
    description: "",
    className: "md:col-span-1 md:row-span-1",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "/b4.svg",
  },
  
  {
    id: 8,
    title: "I'm into Computer Vision",
    description: "I have developed CV applications utilizing PyTorch and OpenCV",
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "",
    img: "cv.gif",
    spareImg: "",
  },

  {
    id: 6,
    title: "Send me an email today and let's get connected!",
    description: "",
    cards: [],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Visual Assistant using Gemini Pro",
    des: "A virtual assistant to aid the visually-impaired using YOLOv8 object detection and Gemini pro",
    img: "/blind3.jpeg",
    iconLists: ["/python.svg", "/pytorch.svg","/google.png"],
    link: "https://github.com/NishanthSamson/Blind-Assist-YOLO-LLM",
  },
  {
    id: 2,
    title: "EVD using YOLO | LSTM",
    des: "A multimodal system for emergency vehicle detection using image processing and audio analysis techniques",
    img: "/evd3.jpeg",
    iconLists: ["/python.svg", "/tensorflow.svg"],
    link: "https://github.com/NishanthSamson/EVD-using-YOLO-LSTM",
  },
  {
    id: 3,
    title: "AirMouse using MediaPipe",
    des: "An airmouse using Google's MediaPipe and OpenCV for hand gesture recognition and control",
    img: "/airmouse2.jpeg",
    iconLists: ["/python.svg","/opencv.svg","/google.png"],
    link: "https://github.com/NishanthSamson/MediaPipe-Air-Mouse",
  },
  {
    id: 4,
    title: "StreamWave - Music Streaming App",
    des: "A multi-user Flask-based music streaming platform with an integrated audio player",
    img: "/streamwave2.jpeg",
    iconLists: ["/flask.svg", "/sqlite.svg","/bootstrap.svg","/javascript.svg"],
    link: "https://github.com/NishanthSamson/Flask-Music-Streaming-App",
  },
  {
    id: 5,
    title: "TicketShow - Movie Booking System",
    des: "A movie ticket booking system incorporating Celery and Redis-CLI for caching, PDF reports, and email automation",
    img: "/ticketshow2.jpeg",
    iconLists: ["/flask.svg", "sqlite.svg", "/vuejs.svg", "/bootstrap.svg"],
    link: "https://github.com/NishanthSamson/TicketShow-Movie-Booking-System",
  },
  {
    id: 6,
    title: "MyBloggr - CRUD based Blog",
    des: "A blog web app which supports content management, likes, comments, and customizable user profiles",
    img: "/blog2.jpeg",
    iconLists: ["/flask.svg", "sqlite.svg", "/bootstrap.svg", "javascript.svg"],
    link: "https://github.com/NishanthSamson/MyBloggr-CRUD-Based-Blog-Web-App",
  },
];

export const certificates = [
  {
    title:"Diploma in Programming",
    desc:"Indian Institute of Technology Madras",
    img:"/diploma.png",
    link:"https://app.onlinedegree.iitm.ac.in/document_verification/986050fcfd4252ba2887d2f25b2f486dcf1acb7eab9f1ea9cbdf1d62fd076648"
  },
  {
    title:"GANs Specialization",
    desc:"DeepLearningAI",
    img:"/GAN.png",
    link:"https://www.coursera.org/account/accomplishments/specialization/8XRFLNUVM8ZF",
  },
  {
    title:"Python for Data Science",
    desc:"NPTEL",
    img:"/nptel.png",
    link:"https://drive.google.com/file/d/1Si29iFJFvGFB3OFRV2CdKm67GBV-8jsh/view?usp=sharing",
  },
  {
    title:"Machine Learning with Python",
    desc:"IBM",
    img:"/ibm.png",
    link:"https://www.coursera.org/account/accomplishments/records/M2S4249WKMY9",
  },
  {
    title:"AWS Machine Learning",
    desc:"AWS",
    img:"/aws.png",
    link:"https://www.coursera.org/account/accomplishments/certificate/DNVHZE9BSTLT",
  },
  {
    title:"AI Skills Challenge",
    desc:"Microsoft",
    img:"/msai.png",
    link:"https://drive.google.com/file/d/1UmZkeTquLFgJ4ySBZB2kWnVfp-ftEg5T/view?usp=drive_link",
  },
]

export const socialMedia = [
  {
    id: 1,
    alt:'Linkedin',
    img: "/link.svg",
    link:"https://www.linkedin.com/in/nishanth-samson"
  },
  {
    id: 2,
    alt:'Git',
    img: "/git.svg",
    link:"https://github.com/NishanthSamson"
  },
  {
    id: 3,
    alt:'LeetCode',
    img: "/leetcode.svg",
    link:"https://www.leetcode.com/nishanthsamson"
  },
  {
    id: 4,
    alt:'Hackkerrank',
    img: "/hackerrank.svg",
    link:"https://www.hackerrank.com/profile/NishanthSamson"

  },
];