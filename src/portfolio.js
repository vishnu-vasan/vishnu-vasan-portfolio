/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vishnuvasan's Portfolio",
  description:
    "I'm a passionate individual, dedicated to pushing the boundaries of technology in Machine Learning and Software Development.",
  og: {
    title: "Vishnuvasan Raghuraman Portfolio",
    type: "website",
    url: "http://vishnu-vasan.github.io",
  },
};

//Home Page
const greeting = {
  title: "Vishnuvasan Raghuraman",
  logo_name: "Vishnuvasan",
  subTitle:
    "I'm a passionate individual, dedicated to pushing the boundaries of technology in Machine Learning and Software Development.",
  resumeLink:
    "https://drive.google.com/file/d/13RNLkzOwT81v4pPgJw4-0I7TPiwER8t4/view?usp=drive_link",
  portfolio_repository: "https://github.com/vishnu-vasan.github.io",
  githubProfile: "https://github.com/vishnu-vasan",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vishnu-vasan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishnu-vasan-r/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vishnu.vasan.r.21@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Backend development using Python, ExpressJS, NodeJS, and Django/Flask.",
        "⚡ Developing cross platform mobile applications using React Native.",
        "⚡ Developing responsive front-end for websites using ReactJS.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React-Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "devicon:express-wordmark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Ruby on Rails",
          fontAwesomeClassname: "mdi:language-ruby-on-rails",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Engaged in over 7 projects spanning from data analysis to the development of machine learning models.",
        "⚡ Proficient in employing Machine Learning, Deep Learning models, and Computer Vision technologies, specifically YOLO v5.",
        "⚡ Demonstrating a passionate commitment to exploring the synergy between Single Cell Technology and Machine Learning, leveraging Generative AI alongside cutting-edge Deep Learning architectures.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "#",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/vasan2001",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Texas A&M University, College Station",
      subtitle: "Master of Computer Science",
      logo_path: "tamu_logo.png",
      alt_name: "TAMU CStat",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Relevant Coursework: Machine Learning, Analysis of Algorithms, Software Engineering, Single-cell Data Analysis via Machine Learning",
        "⚡ Working closely with Dr. James Cai's - Cai Lab, specializing in comprehending varied cellular behaviors through the application of machine learning, network theory, and quantum computation. Spearhead the integration of scATAC-seq data with scRNA-seq data, trying to infer gene regulatory networks.",
        "⚡ Contributed to Aggie Hospitality during the entire football season at Kyle Field and supported basketball game operations in a dynamic part-time role, demonstrating commitment, teamwork, and event management expertise.",
      ],
      website_link: "https://www.tamu.edu/",
    },
    {
      title: "College of Engineering, Guindy - Anna University",
      subtitle: "B.Tech in Information Technology",
      logo_path: "ceg_logo.jpeg",
      alt_name: "CEG AU",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Relevant Coursework: Machine Learning, Artificial Intelligence, Big Data Analytics, Pattern Recognition, Cloud Computing, Database Management, and Web Technologies.",
        "⚡ Activities and societies: Computer Society of Anna University(2020-2023) | Student Coordinator at CEG Tech Forum(2021) | Member in ACM Student Chapter(2020-2021).",
        "⚡ Organized local industrial visits, Coordinated and conducted a multitude of events in the department's Inter and Intra College Symposiums, Scheduled and organized classes, exams, and project reviews for a large student body.",
      ],
      website_link: "https://www.annauniv.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Machine Learning Foundations",
      subtitle: "- Udacity",
      logo_path: "udacity_logo.png",
      certificate_link:
        "https://graduation.udacity.com/api/graduation/certificate/PPDCF9SV/download",
      alt_name: "Udacity: AWS ML Foundations",
      color_code: "#1729ED",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "- Michael Levin",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9PP5YQMPVALA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Mathematics for Machine Learning: Multivariate Calculus",
      subtitle: "- Samuel J. Cooper",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DGAJZ9R6ZUT8",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Mathematics for Machine Learning: Linear Algebra",
      subtitle: "- Samuel J. Cooper",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/7XXYWEXD7XKB",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Mathematics for Machine Learning: PCA",
      subtitle: "- Marc Deisenroth",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KGMRBKLG78SR",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Amazon Web Services Training",
      subtitle: "- Besant Technologies",
      logo_path: "besant_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1C5Ol96glJaHkQzxs5XHIdo_Qq4WHGKeA/view",
      alt_name: "Besant Technologies",
      color_code: "#FFFFFF",
    },
    {
      title: "Dean's Good Standing Letter",
      subtitle: "- College of Engineering, Guindy",
      logo_path: "ceg_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1q1Epv3wlzBF5eQbaF7IwNAiOxUG8Dtjh/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Computer Society - Appreciation Letter",
      subtitle: "- Ramanujan Computing Centre",
      logo_path: "au_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1rvFggKMzAY3wlBUuoH-gzfPKeHykZnk3/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research, Internship and Volunteership",
  description:
    "I am a passionate computer science graduate student with hands-on experience in machine learning, data analysis, and software development gained through impactful internships. I have the ability to tackle complex problems and deliver innovative solutions. I am eager to leverage my technical expertise and creative insights to address industry challenges and drive innovation in future endeavors.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research",
      experiences: [
        {
          title: "Graduate Student Research Assistant",
          company: "Texas A&M University",
          company_url: "https://ifarhy.wixsite.com/isabellafarhylab",
          logo_path: "tamu_logo2.png",
          duration: "January 2024 - Present",
          location: "College Station, Texas",
          description: [
            "⚡ Spearheading a data mining initiative focused on analyzing bulk and single-cell RNA sequencing datasets derived from published RiboTag studies on astrocytes and neurons.",
            "⚡ Conducting in-depth analysis to identify expression patterns of known synaptic genes in neurons and astrocyte cell types.",
          ],
          color: "#000000",
        },
        {
          title: "Open-Source Developer",
          company: "Open Problems in Single-Cell Analysis",
          company_url: "https://openproblems.bio/",
          logo_path: "open_prob_icon.png",
          duration: "January 2024 - Present",
          location: "Remote",
          description: [
            "⚡ Contributing to an open-source project focused on evaluating cell-cell communication inference tools, leveraging Viash and Nextflow to enhance reproducibility and facilitate comparison of diverse methodologies.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Intern",
          company:
            "Robert Bosch Centre for Data Science and Artificial Intelligence, IIT Madras",
          company_url: "https://rbcdsai.iitm.ac.in/",
          logo_path: "rbcdsai_logo.png",
          duration: "June 2022 - September 2022",
          location: "Chennai, Tamil Nadu",
          description: [
            "⚡ Contributed to Google's open-source initiative, Data Commons, consolidating diverse data into a unified database. Enhanced usability for Sustainable Development stakeholders, driving a 30% increase in data utilization and delivering actionable insights.",
            "⚡ Streamlined processing for India Air Quality and Civic Structures datasets with millions of rows and 20+ columns, reducing manual effort by 25% and enhancing overall efficiency significantly.",
            "⚡ Mapped the variables to be in accordance with the native schema of Data Commons Knowledge graph.",
          ],
          color: "#000000",
        },
        {
          title: "Product Engineering Intern",
          company: "Innovaccer Inc. India",
          company_url: "https://innovaccer.com/",
          logo_path: "innovaccer_logo.png",
          duration: "June 2021 - October 2021",
          location: "Remote",
          description: [
            "⚡ Contributed to the Tenant Release Management (TRM) team, aiding in the successful transition of a customer's infrastructure onto Innovaccer's Multi-Tenant Platform, reducing deployment time from one week to four hours.",
            "⚡ Achieved 91% code coverage through Test-Driven Development.",
            "⚡ Conducted mock simulations on AWS Services within the project codebase, enhancing testing efficiency by 15%.",
          ],
          color: "#ee3c26",
        },
        {
          title: "Application Development Intern",
          company: "Infotix Techno Solutions",
          company_url: "https://github.com/Infotix-Techno-Solutions",
          logo_path: "infotix_logo.jpeg",
          duration: "November 2020 - January 2021",
          location: "Remote",
          description: [
            "⚡ Collaborated on the end-to-end development of three cross-platform mobile applications, optimizing logistics for customers, administrators, and delivery personnel.",
            "⚡ Implemented real-time tracking, QR & Barcode detection, and dynamic PDF invoicing, resulting in 20% improvement in operational efficiency.",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "President of Student Chapter",
          company: "Computer Society of Anna University",
          company_url: "https://www.csau.in/",
          logo_path: "csau_logo.png",
          duration: "July 2022 - June 2023",
          location: "Chennai, Tamil Nadu",
          description: [
            "⚡ Led the club with 250+ members from across different years.",
            " ⚡ Responsible for communicating with people across different domains(Web and App, Events, Design, and Marketing) in order to ensure smooth and successful execution of events, quizzes, and workshops.",
            " ⚡ Worked alongside the faculty members in the college to ensure the smooth conduct of events.",
          ],
          color: "#D83B01",
        },
        {
          title: "Student Volunteer",
          company: "National Service Scheme",
          company_url: "https://nss.gov.in/",
          logo_path: "nss_logo.png",
          duration: "August 2019 - July 2022",
          location: "Chennai, Tamil Nadu",
          description: [
            "⚡ Coordinated the conduct of eye donation camps on campus.",
            ' ⚡ Raised funds and organized events for "Vidhaigal" - a cultural program aimed at showcasing the talents of differently abled students.\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0',
          ],
          color: "#4285F4",
        },
        {
          title: "Student Director of Events and Web and App Wing",
          company: "Computer Society of Anna University",
          company_url: "https://www.csau.in/",
          logo_path: "csau_logo.png",
          duration: "July 2021 - June 2022",
          location: "Chennai, Tamil Nadu",
          description: [
            "⚡ Responsible for leading a team of 12 undergraduate students to provide professional and social skills for students by conducting a plethora of events.",
            " ⚡ Developed CSAU's website using Angular and Node.js.",
          ],
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Embark on a journey through my portfolio, where the fusion of creativity and technical prowess shines across diverse projects. From crafting dynamic web applications and engaging mobile apps to conducting impactful data analysis and steering machine learning initiatives, each project mirrors a dedication to innovation, problem-solving, and effective collaboration. Explore a path marked by versatile skills and a steadfast passion for delivering impactful solutions across a spectrum of domains.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a couple of research papers of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name:
        "Social Distancing Detector Framework Using Deep Learning and Computer Vision Principles",
      createdAt: "2023-04-28T16:26:54Z",
      description:
        "Engineered a YOLO v3 system for human detection in frames, categorizing them as violators or non-violators with customized distance metrics, and triggering alerts according to violator count.",
      url: "https://link.springer.com/chapter/10.1007/978-981-19-7892-0_31",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Probabilistic Forecasting of the Winning IPL Team Using Supervised Machine Learning",
      createdAt: "2023-03-22T16:26:54Z",
      description:
        "Developed an ML-powered tool employing data wrangling techniques on 14 years of IPL data in order to forecast second innings outcomes in ongoing IPL cricket games. The tool additionally presents comprehensive team performance statistics across multiple league editions.",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-28183-9_10",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vishnuvasan.png",
    description:
      "Feel free to contact me for questions, collaborations, or just a friendly chat. I'm always open to new opportunities and discussions. Let's connect and explore the possibilities together.",
  },
  addressSection: {
    title: "Address",
    subtitle: "117 Holleman Dr W, College Station, TX 77840",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/117+Holleman+Dr+W,+College+Station,+TX+77840/@30.5942709,-96.3376034,17z/data=!3m1!4b1!4m6!3m5!1s0x8646837046bb1b7f:0x8ac00529c10dd2ac!8m2!3d30.5942663!4d-96.3350285!16s%2Fg%2F11cpj1rk4_?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
