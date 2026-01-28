import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Adair",
  lastName: "Gonzalez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineering Intern",
  avatar: "/images/Adair.jpeg",
  email: "adatube@hotmail.com",
  location: "America/Chicago", // IANA time zone identifier for Texas
  phone: "281-235-4531", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adairgonzalez",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/adair-g-70b9731b0/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting intelligent solutions through fullstack innovation</>,
  subline: (
    <>
      I'm Adair, a fullstack developer specializing in building innovative applications using modern technologies.
      <br /> From AI-powered education platforms to VR solutions, I transform ideas into impactful software.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Adair! I'm a Texas-based fullstack developer with expertise in Java, JavaScript, Python, and modern frameworks
        like React and Node.js. My work spans from developing AI-powered educational platforms to creating immersive
        VR experiences. With a strong foundation in both front-end and back-end development, I specialize in
        building scalable applications that combine innovative technology with exceptional user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Applied Materials",
        timeframe: "May 2024 - Present",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Developed and maintained multiple web applications using jQuery, JavaScript, HTML, and CSS,
            achieving an improvement in user engagement.
          </>,
          <>
            Optimized back-end performance with C# and SQL, reducing response times through
            query and stored procedure optimization.
          </>,
          <>
            Led VR solution development, delivering features that increased user immersion by 15%.
          </>,
        ],
      },
      {
        company: "Brav",
        timeframe: "Jan 2023 - Apr 2023",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Created and maintained backend services using Java, PHP, Node.js, and SQL, improving
            data retrieval speed by 12%.
          </>,
          <>
            Enhanced website UI with React and Express components, increasing user engagement by 7%.
          </>,
          <>
            Contributed to 20+ code reviews, helping reduce code defects.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "The University of Texas at Dallas",
        description: <>Bachelor of Science in Computer Science (Aug 2023 - Dec 2025)</>,
      },
      {
        name: "San Jacinto College",
        description: <>Associate's in Computer Science (Aug 2022 - May 2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Java, JavaScript, C#, C++, C, Python, SQL, .NET, HTML/CSS, XML, PHP, R</>,
      },
      {
        title: "Frameworks & Libraries",
        description: <>React, jQuery, Next.js, Node.js, Spring, Angular, Flask, JUnit, WordPress, FastAPI, Bootstrap</>,
      },
      {
        title: "Developer Tools",
        description: <>Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse, Unity, Unreal</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Featured projects by ${person.name}`,
  projects: [
    {
      title: "EduCreate",
      subtitle: "Full-Stack AI Education Platform",
      timeframe: "Nov 2024 - Present",
      role: "Lead Developer & Founder",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "AI/ML"],
      description: [
        <>Architected a dual-purpose education platform that reduced lesson planning time for teachers</>,
        <>Developed an intelligent content engine processing 5 file formats with 98% accuracy</>,
        <>Implemented customized study guide generation with 6 different time-based formats</>
      ],
      link: "https://educreateapp.com"
    }
  ]
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
