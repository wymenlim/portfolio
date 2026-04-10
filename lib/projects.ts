export interface Project {
  id: string;
  title: string;
  descriptions: string[];
  tags: string[][];
  images: string[];
  captions?: string[];
  bg: "dark" | "darker"; // "dark" = bg-slate-900/50, "darker" = bg-black
}

export const projects: Project[] = [
  {
    id: "project-food-for-thought",
    title: "Food For Thought",
    descriptions: [
      "Food for Thought is an AI-powered app that helps households reduce food waste by tracking groceries, predicting expiry dates,",
      "and suggesting recipes with exact serving sizes based on what you already have.",
      "Simply snap a photo of your groceries and get smart reminders before food expires — saving money while protecting the planet, one meal at a time.",
    ],
    tags: [["Artificial Intelligence", "Sustainability", "Hackathon"]],
    images: ["/food-home.jpeg", "/food-cam.mp4", "/food-log.mp4", "/food-recipe.mp4", "/food-noti.mp4"],
    captions: [
      "Home page with ingredient list",
      "Adding ingredients using image recognition, the app estimates the quantity and days left till expiry",
      "AI estimation of ingredients used for a meal",
      "Recipes reccomended by LLM based on selected ingredients to help users better utilise leftover ingredients",
      "Push notifications will be sent to users when an ingredient in the list is expiring",
    ],
    bg: "darker",
  },
  {
    id: "project-dont-say-bojio",
    title: "Dont Say Bojio",
    descriptions: [
      "This web application empowers elderly users to build social connections by attending and engaging in community events.",
      "It prioritizes accessibility by using simple, gesture-based interactions such as swiping, making the app easy to navigate for elderly users.",
    ],
    tags: [
      ["Docker", "Docker compose", "Python Flask"],
      ["AWS", "PostgreSQL"],
    ],
    images: ["/cloud-home.png", "/cloud-swipe.png", "/cloud-event.png", "/cloud-create.png", "/cloud-chat.png"],
    captions: [
      "Home page for users",
      "Swipe deck for users to indicate interest for events",
      "Page that lists all events that the user is interested in",
      "Page that allows organisations to upload events",
      "Chatbot feature that allows communication between organiser and participants",
    ],
    bg: "dark",
  },
  {
    id: "project-los-nlos",
    title: "LOS/NLOS Classification and Time-of-Flight Predictor ",
    descriptions: [
      "Developed an end-to-end machine learning pipeline for ultra-wideband indoor positioning that classifies LOS and NLOS signal conditions and predicts path distances from channel impulse response data.",
    ],
    tags: [
      ["scikit-learn", "NumPy", "Pandas"],
      ["Data Analysis", "Machine Learning"],
    ],
    images: [
      "/ML.html",
      "/ML-pipeline.html"
    ],
    captions: [
      "Overview of the UWB LOS/NLOS classification and distance estimation project",
      "End-to-end workflow from raw UWB data to saved model artifacts",
    ],
    bg: "darker",
  },
  {
    id: "project-flight-path",
    title: "Flight Path Visualisation Web App",
    descriptions: [
      "Flight route visualisation web application that models airports as graph nodes and computes optimal routes using ",
      "Dijkstra's algorithm, allowing users to compare routes based on distance, layovers, and cost efficiency.",
      "Caching of computed flight routes is also implemented to optimize calculation time and reduce redundant pathfinding operations.",
    ],
    tags: [
      ["Python", "Data Structures", "Algorithms"],
      ["Dynamic Programming"],
    ],
    images: ["/flight-1.jpeg", "/flight-2.jpeg", "/flight-3.jpeg", "/flight4.jpeg"],
    bg: "dark",
  },
  {
    id: "project-smart-waste",
    title: "Smart Waste Management",
    descriptions: [
      "Developed an IoT-enabled smart waste bin using Raspberry Pi and multiple sensors,  ",
      "featuring contactless operation, overflow detection, real-time status monitoring, and MQTT-based device communication.",
    ],
    tags: [
      ["Embedded Systems"],
      ["Internet of Things", "Networking", "MQTT"],
    ],
    images: ["/bin-1.jpeg", "/bin-2.jpeg", "/bin-3.jpeg"],
    captions: [
      "Infographic that gives a brief overview of the project ",
      "Visual representation of the project arhitecture",
      "Admin dashboard that shows the status of the bin",
    ],
    bg: "darker",
  },
  {
    id: "project-gamified-feedback",
    title: "Gamified Feedback App",
    descriptions: [
      "Our app enhances event feedback by transforming surveys into an engaging narrative experience, guiding users through a mystery that encourages thoughtful responses and higher completion rates.",
      "It is an ongoing project with Singapore Cancer Society",
    ],
    tags: [
      ["Professional Software Development", "Next.JS"],
      ["Supabase", "Scrum"],
    ],
    images: ["/game-story.png", "/game-tasks.png", "/game-feedback.png"],
    captions: [
      "Preview of the story",
      "Example of tasks that users would have to complete before attempting the feedback form",
      "Example of a question in the feedback form",
    ],
    bg: "dark",
  },
  
];
