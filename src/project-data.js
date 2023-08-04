const projectsData = [
    {
        image: require('./assets/veryrare.gif'),
        title: "VeryRare E-Commerce",
        technologies: ["React", "Styled Components", "Firebase", "Redux", "Stripe"],
        description: [
            "The website allows users to browse and purchase products securely.",
            "Firebase's authentication service enabled users to sign up, log in, and securely access their account information.",
            "Firebase's real-time database was utilized to store and manage product data, customer details, and order information.",
            "To handle payments, the app integrated the Stripe payment gateway, which provides a seamless and secure checkout experience for customers."
        ],
        liveLink: "https://very-rare.netlify.app/",
        repoLink: "https://github.com/FaraiMajor/reactjs-ecommerce"
    },
    {
        image: require('./assets/weatherranger.png'),
        title: "Weather Rangers",
        technologies: ["React", "REST API", "NodeJS", "PostgreSQL"],
        description: [
            "Completely built with PERN stack",
            "Displays daily weather forecast for your current location using geotags",
            "Allows users to create an account and save their favorite locations in their account"
        ],
        liveLink: "https://weather-rangers-frontend.herokuapp.com/",
        repoLink: "https://github.com/FaraiMajor/WeatherRangers_frontend"
    },
    {
        image: require('./assets/note-app.png'),
        title: "Note App",
        technologies: ["React", "CSS", "LocalStorage"],
        description: [
            "React app to make notes",
            "Users can write, read, search, save, and delete notes",
            "App data is stored in localStorage"
        ],
        liveLink: "https://faraimajor.github.io/note-app/",
        repoLink: "https://github.com/FaraiMajor/note-app"
    },
    {
        image: require('./assets/memories.png'),
        title: "Memoirs",
        technologies: ["React", "REST API", "NodeJS", "MongoDB"],
        description: [
            "Completely built with MERN stack",
            "A social media app that allows users to post interesting events that happened in their lives.",
            "App stores data using MongoDB"
        ],
        liveLink: "https://github.com/FaraiMajor/memoirs",
        repoLink: "https://github.com/FaraiMajor/memoirs"
    },
    {
        image: require('./assets/tenzie.png'),
        title: "Tenzies Game",
        technologies: ["React", "css"],
        description: [
            "Tenzies game built with React",
            "Game data stores in localStorage",
            "Game record best time and best rolls"
        ],
        liveLink: "https://faraimajor.github.io/tenzies_game/",
        repoLink: "https://github.com/FaraiMajor/tenzies_game"

    }
];

export default projectsData;
