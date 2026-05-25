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
    title: "Full-stack engineer with a passion for scalable products.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building full-stack web & mobile projects",
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
    title: "Clutch City Power website",
    des: "Licensed Houston electrical and energy advisory—safe upgrades, EV chargers, and informed power decisions.",
    img: "/portfolioimage/clutchcity.png",
    iconLists: ["/webflow.svg"],
    link: "https://www.clutchcitypower.com/",
    clientBadge: { flag: "/usa1.svg", label: "USA" },
  },
  {
    id: 2,
    title: "Aggregate Energy Website",
    des: "Compare Texas residential electricity plans with transparent rates and member-driven pricing.",
    img: "/portfolioimage/aggregate.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/typescript.svg", "/gsap.svg"],
    link: "https://aggregate.energy/",
    clientBadge: { flag: "/usa1.svg", label: "USA" },
  },
  {
    id: 3,
    title: "Clutch City Capital Website",
    des: "Houston venture capital site funding and supporting local startups across the region.",
    img: "/portfolioimage/ccc.png",
    iconLists: ["/next.svg", "/firebase.svg", "/tail.svg"],
    link: "#",
    nda: true,
    clientBadge: { flag: "/usa1.svg", label: "USA" },
  },
  {
    id: 4,
    title: "Power CRM",
    des: "Energy broker ERP to manage clients, contracts, pricing, and broker sales workflows in one platform.",
    img: "/portfolioimage/powercrm.png",
    iconLists: ["/re.svg", "/angular1.svg", "/nodejs.svg", "/php1.svg", "/html.svg"],
    link: "#",
    nda: true,
    clientBadge: { flag: "/usa1.svg", label: "USA" },
  },
  {
    id: 5,
    title: "Sugar Cone Ice Cream",
    des: "Ice cream brand site with flavor storytelling, locations, and CMS-driven menus built for easy updates.",
    img: "/portfolioimage/sugarcone.png",
    iconLists: ["/next.svg", "/payload.webp", "/Supabase.svg", "/tail.svg"],
    link: "#",
    nda: true,
    clientBadge: { flag: "/usa1.svg", label: "USA" },
  },
  {
    id: 8,
    title: "State Pharm Compounding",
    des: "Compounding pharmacy website with a secure patient portal for prescriptions, refills, and account access.",
    img: "/portfolioimage/StatePharm.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/awsrds.svg", "/Amplify.svg", "/sql.svg"],
    link: "#",
    nda: true,
    clientBadge: { flag: "/usa1.svg", label: "USA" },
  },
  {
    id: 6,
    title: "ChatBotAI App",
    des: "Flutter AI chatbot with interactive conversations and quick, personalized responses.",
    img: "/ChatAI.jpeg",
    iconLists: ["/dartf.svg", "/ruby.svg", "swift.svg"],
    link: "https://youtu.be/0P_s6usjay4",
  },
  {
    id: 7,
    title: "Attendence Tracker App",
    des: "Geolocation attendance tracker that verifies location before marking users present.",
    img: "/Attendence.jpg",
    iconLists: ["/dartf.svg", "/firebase.svg"],
    link: "https://youtu.be/6rCzOyXlbr0",
    clientBadge: { flag: "/india.svg", label: "India" },
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
    title: "Full-Stack Engineer Intern",
    desc: "Built and shipped features across React.js frontends and Node.js APIs for a web platform.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech & Flutter",
    desc: "Designed and developed mobile apps for iOS and Android using Flutter.",
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
    title: "Lead Full-Stack Developer",
    desc: "Led development across React frontends, Node.js backends, databases, and cloud deployments.",
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

export const techStackItems = [
  "React.js",
  "Node.js",
  "Flutter",
  "AWS",
  "SQL",
  "MongoDB",
  "Next.js",
  "Webflow",
  "Firebase",
] as const;
