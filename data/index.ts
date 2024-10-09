import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Flutter Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Formula 1 Web",
    des: "A dynamic clone of the Formula 1 website, showcasing race information, team stats, and driver profiles.",
    img: "/M284257.jpg",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg", "/jq.svg", "/firebase.svg"],
    link: "https://f1-formulaone.netlify.app/#",
    sourceCode: "https://github.com/aryanpatel05/Formula1",
  },
  {
    id: 2,
    title: "Apple Clone",
    des: "A sleek and interactive clone of the Apple website, featuring product showcases, user-friendly navigation, and a modern design.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "next.svg", "/firebase.svg",],
    link: "https://appleios.netlify.app/",
    sourceCode: "https://github.com/aryanpatel05/Apple",
  },
  {
    id: 3,
    title: "Real Time Web ChatApp",
    des: "A feature-rich real-time web chat application enabling seamless communication through chat rooms, private messaging, and multimedia sharing",
    img: "/Webchat.jpg",
    iconLists: ["/re.svg", "next.svg", "/firebase.svg", "/boot.svg"],
    link: "https://github.com/aryanpatel05/chat-app?tab=readme-ov-file#reactchatapp",
    sourceCode: "https://github.com/aryanpatel05/chat-app",
  },
  {
    id: 4,
    title: "Formula 1 App",
    des: "An engaging Formula 1 app built with Flutter, utilizing APIs for real-time data on races, teams, and driver statistics.",
    img: "/f1App.jpg",
    iconLists: ["/dartf.svg","/c++ .svg"],
    link: "https://github.com/aryanpatel05/formula1-App?tab=readme-ov-file#screenshots",
    sourceCode: "https://github.com/aryanpatel05/formula1-App",
  },
  {
    id: 5,
    title: "Mobile ChatApp",
    des: "A user-friendly mobile chat app developed with Flutter, offering real-time messaging, group chats, and multimedia sharing features.",
    img: "/flutterm.svg",
    iconLists: ["/dartf.svg","/c++ .svg", "/ruby.svg","swift.svg"],
    link: "https://github.com/aryanpatel05/flutterChat",
    sourceCode: "https://github.com/aryanpatel05/flutterChat",
  },
  {
    id: 6,
    title: "ChatBotAI App",
    des: "An intelligent ChatBot AI app developed with Flutter, providing users with interactive conversations, quick responses, and personalized assistance.",
    img: "/ChatAI.jpeg",
    iconLists: ["/dartf.svg","/ruby.svg","swift.svg"],
    link: "https://youtu.be/0P_s6usjay4",
    sourceCode: "https://github.com/aryanpatel05/ChatBotAI",
  },
  {
    id: 7,
    title: "Attendence Tracker App",
    des: "A geolocation-based attendance tracker app that verifies user presence within a specified range to mark attendance accurately.",
    img: "/Attendence.jpg",
    iconLists: ["/js.svg","reactnative.svg","firebase.svg"],
    link: "https://youtu.be/6rCzOyXlbr0",
    sourceCode: "https://github.com/aryanpatel05/PixelApp",
  },
  
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech & Flutter",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native and Flutter.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/aryanpatel05/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aryan-patel5/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Flutter"],
  stack2: ["SQL", "AWS", "MongoDB"],
} as const;
