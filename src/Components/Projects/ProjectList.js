import GitHub from "./Projects images/more.png";

//html css js
import DrumKit from "./Projects images/html css js/drumKit.png";
import SimonSays from "./Projects images/html css js/Simon Says.png";
import Gymder from "./Projects images/html css js/Gymder.png";

//React
import Amazon from "./Projects images/react/amazon.png";
import Twitter from "./Projects images/react/twitter.png";
import TikTok from "./Projects images/react/tiktok.png";

//backend
import DailyJournal from "./Projects images/backend/Daily Journal.png";
import Secrets from "./Projects images/backend/secrets.png";
import ToDoList from "./Projects images/backend/ToDo List.png";

const htmlCssJsProjects = [
  {
    link: "https://hassenbenhadjhassen.github.io/Gymder-A-Tinder-Copycat",
    title: "Gymder",
    description:
      "This Website i have created to Test my HTML CSS skills. It is a Tinder Copycat for Gym Lovers",
    imgUrl: Gymder,
  },
  {
    link: "https://hassenbenhadjhassen.github.io/Simon-Says-game/",
    title: "Simon Says",
    description:
      "This website is a Simon Says game or you can call it a memory game. i build it to test my problem solving skills",
    imgUrl: SimonSays,
  },
  {
    link: "https://hassenbenhadjhassen.github.io/Drum-Kit/",
    title: "Drum Kit",
    description:
      "This website was created to test my HTML CSS and JS skills. It is a Drum Kit. It was my first try working with KeyCodes in JS",
    imgUrl: DrumKit,
  },
  {
    link: "https://github.com/HassenBenHadjHassen/",
    title: "More",
    description: "Check out more Projects on GitHub",
    imgUrl: GitHub,
  },
];

const reactProjects = [
  {
    link: "https://hassen-amazo-clone.web.app/",
    title: "Amazon Clone",
    description:
      "This website is a clone of Amazon. it has all the features a modern e-commerce website has: authentication, payment, cart, etc. I built it to test my React skills",
    imgUrl: Amazon,
  },
  {
    link: "https://twitter-clone-ea11f.web.app/",
    title: "Twitter Clone",
    description:
      "This website is a clone of Twitter. it has some of the features a modern social media website has like posting, verification badge etc. I built it to test my React skills",
    imgUrl: Twitter,
  },
  {
    link: "https://tiktok-clone-21f9c.web.app/",
    title: "TikTok Clone",
    description:
      "This website is a clone of TikTok.where you can also upload your videos. I built it to test my React skills",
    imgUrl: TikTok,
  },
  {
    link: "https://github.com/HassenBenHadjHassen/",
    title: "More",
    description: "Check out more Projects on GitHub",
    imgUrl: GitHub,
  },
];

const backendProjects = [
  {
    link: "https://hassen-secrets.herokuapp.com/",
    title: "Secrets",
    description:
      "This website is a clone of Whisper. It is a place where you can share your secrets anonymously. I built it to test my backend skills",
    imgUrl: Secrets,
  },
  {
    link: "https://agile-harbor-15099.herokuapp.com",
    title: "Daily Journal",
    description:
      "This is a website where you can write your daily journal. I built it to test my backend skills",
    imgUrl: DailyJournal,
  },
  {
    link: "https://sleepy-oasis-02710.herokuapp.com/",
    title: "ToDo List",
    description:
      "This is a website where you can write your daily tasks. you can also have use different links for the diffrent tasks. I built it to test my backend skills",
    imgUrl: ToDoList,
  },
  {
    link: "https://github.com/HassenBenHadjHassen/",
    title: "More",
    description: "Check out more Projects on GitHub",
    imgUrl: GitHub,
  },
];

export { htmlCssJsProjects, reactProjects, backendProjects };
