import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];
export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const notificationImages = [notification4, notification3, notification2];

export const benefits = [
  {
    id: "0",
    title: "Instant Insights",
    text: "Get lightning-fast answers powered by AI—no more sifting through endless tabs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Grow Smarter Daily",
    text: "Neurospark adapts to your needs, delivering sharper responses with every interaction.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Always Within Reach",
    text: "Seamlessly connect from any device—Neurospark is built for your on-the-go lifestyle.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Blazing Fast Replies",
    text: "Experience real-time AI responses that keep pace with your thoughts and tasks.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Curious? Just Ask.",
    text: "Neurospark understands your intent and delivers answers with clarity and speed.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Learn. Adapt. Evolve.",
    text: "With every use, Neurospark sharpens its responses to match your unique style and needs.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];
export const collabText =
  "Neurospark brings intelligent collaboration, automating workflows and securing your team’s productivity at every step.";

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];
export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "AI-Powered Automation",
    
  },
  {
    id: "2",
    title: "Enterprise-Grade Security",
  },
];
export const NeurosparkServices = [
  "AI Image Generation",
  "Smart Photo Enhancement",
  "Seamless App Integration",
];

export const NeurosparkServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];
export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Essential AI tools to explore Neurospark",
    price: "0",
    features: [
      "Smart AI chatbot for basic queries",
      "Personalized insights to match your goals",
      "Free access to core features and experiments",
    ],
  },
  {
    id: "1",
    title: "Pro",
    description: "Powerful AI tools with deeper control & insights",
    price: "9.99",
    features: [
      "Advanced AI chatbot for complex tasks",
      "Integrated analytics dashboard for performance tracking",
      "Priority support for faster resolutions",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Tailored AI solutions for teams & creators at scale",
    price: null, 
    features: [
      "Custom AI models trained to your needs",
      "Advanced usage analytics & reporting",
      "Dedicated account manager & SLA support",
    ],
  },
];
export const roadmap = [
  {
    id: "0",
    title: "Voice-to-AI Engine",
    text: "Launch seamless voice interaction for creators, enabling real-time communication and content generation using speech.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    color: "var(--color-4)", 
  },
  {
    id: "1",
    title: "Web3 Wallet Integration",
    text: "Integrate decentralized wallets to enable secure login, content ownership, and AI model monetization through blockchain.",
    date: "August 2023",
    status: "progress",
    imageUrl: roadmap2,
    color: "var(--color-1)", 
  },
  {
    id: "2",
    title: "AI Workspace Customization",
    text: "Allow users to personalize their AI dashboard—tune models, theme the UI, and configure workflows to match their creativity.",
    date: "October 2023",
    status: "done",
    imageUrl: roadmap3,
    color: "var(--color-6)", 
  },
  {
    id: "3",
    title: "Backend & DevOps Studio",
    text: "Introduce a serverless backend builder with integrated CI/CD pipelines, real-time logs, and deployment powered by AI suggestions.",
    date: "December 2023",
    status: "progress",
    imageUrl: roadmap4,
    color: "var(--color-2)", 
  },
];


