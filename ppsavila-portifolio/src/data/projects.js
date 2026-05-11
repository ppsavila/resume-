const projects = [
    {
        id: 1,
        title: "CodyCross",
        subtitle: "Crossword Puzzle Game",
        description:
            "One of the world's most popular crossword apps with 400M+ downloads. I worked as a Tech Artist building VFX systems, shaders, and UI animations that ship to millions of players worldwide on iOS and Android.",
        tags: ["Unity", "C#", "GLSL", "VFX", "Mobile", "iOS", "Android"],
        url: "https://codycross.onelink.me/hpln/fanatee",
        company: "Fanatee",
        type: "professional",
        featured: true,
        accentColor: "#f0a500",
        videos: [
            { src: "/videos/VIP_Header.mp4", label: "VIP Header", orientation: "portrait" },
            { src: "/videos/Entrega_VIP.mp4", label: "VIP Reward Delivery", orientation: "portrait" },
            { src: "/videos/PowerUp_Onboarding.mp4", label: "Power-Up Onboarding", orientation: "portrait" },
            { src: "/videos/Library_Onboarding.mp4", label: "Library Onboarding", orientation: "portrait" },
        ],
    },
    {
        id: 2,
        title: "Everyday Puzzles",
        subtitle: "Mini Games Collection",
        description:
            "A collection of minimalistic daily word and logic puzzle games. Contributed Tech Art work including animated UI components, performance-optimized shaders, and particle effects targeting 60fps on low-end devices.",
        tags: ["Unity", "C#", "Shader Graph", "UI", "Mobile"],
        url: "https://everydaypuzzles.onelink.me/7lzh/fanatee",
        company: "Fanatee",
        type: "professional",
        featured: true,
        accentColor: "#5b8dd9",
    },
    {
        id: 3,
        title: "Tralingo",
        subtitle: "Gamified AI Corporate Training",
        description:
            "A platform I co-founded and built entirely — think Duolingo for enterprise teams. Features AI-generated quizzes, learning paths, XP systems, rankings, and streaks. Built with React and Firebase.",
        tags: ["React", "Firebase", "AI", "Node.js", "Figma", "Fullstack"],
        url: "https://www.tralingo.com.br",
        company: "Tralingo",
        type: "professional",
        featured: true,
        accentColor: "#2ea043",
    },
    {
        id: 4,
        title: "Huebound",
        subtitle: "2D Metroidvania — Game Jam",
        description:
            "A 2D metroidvania about connection and belonging. The world starts in grayscale; as you find companions, color returns. Built in Godot for Micro Jam 053. A global saturation system visually reflects player progress.",
        tags: ["Godot", "GDScript", "2D", "Metroidvania", "Game Jam"],
        url: "https://ppsavila.itch.io/huebound",
        company: "Indie",
        type: "indie",
        featured: false,
        accentColor: "#9b59b6",
    },
    {
        id: 5,
        title: "Harumi's Farm",
        subtitle: "3D Farming Simulation — University Project",
        description:
            "A narrative 3D farming simulation built in Unity during my game design degree at PUC Minas. Players help Harumi uncover her late grandmother's mysterious bond with her small town through farming and exploration.",
        tags: ["Unity", "C#", "Blender", "3D", "Simulation"],
        url: "https://ppsavila.itch.io/harumi",
        company: "Indie",
        type: "indie",
        featured: false,
        accentColor: "#27ae60",
    },
];

export default projects;
