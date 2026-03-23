// Technologies/skills icons
import csharpIcon from './images/csharp-icon.svg';
import dotnetIcon from './images/dotnet-icon.svg';
import pythonIcon from './images/python-icon.svg';
import djangoIcon from './images/django-logo-negative.svg';
import javascriptIcon from './images/javascript-icon.svg';
import reactIcon from './images/react-logo.svg';
import sqlIcon from './images/sql-database-icon.svg';
import gitIcon from './images/git-icon.svg';
import safeIcon from './images/safe-logo.png';

import tripteaseLogo from './images/triptease-logo.jpeg';
import lidyaIcon from './images/lidya-logo.png';
import cofcoIntlIcon from './images/cofco-intl-logo.png';
import vestasIcon from './images/vestas-logo.png';
import egoiIcon from './images/e-goi-logo.svg';
import armisIcon from './images/armis-logo.svg';

import isepIcon from './images/isep-logo.png';

import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';

interface Skill {
  img: string;
  paragraph: string;
}

interface Experience {
  companyName: string;
  title: string;
  img: string;
  startDate: string;
  endDate: string;
  descriptionParagraphs: string[];
}

interface Social {
  img: string;
  url: string;
  name: string;
}

interface PersonalData {
  name: string;
  profession: string;
  birthDate: Date;
  age: number;
  mainTechStack: Skill[];
  otherTechnologiesAndSkills: Skill[];
  workExperience: Experience[];
  internships: Experience[];
  education: Experience[];
  aboutParagraphs: string[];
  social: Social[];
}

function calculateDifferenceBetweenDates(startDate: Date, endDate: number): number {
  return Math.abs(new Date(endDate - startDate.getTime()).getUTCFullYear() - 1970);
}

const name = 'Afonso Silva';
const birthday = new Date(1997, 3, 25);
const age = calculateDifferenceBetweenDates(birthday, Date.now());

const personalData: PersonalData = {
  name: name,
  profession: 'Software Engineer',
  birthDate: birthday,
  age: age,

  mainTechStack: [
    {
      img: javascriptIcon,
      paragraph:
        'Proficient in JavaScript and TypeScript, currently using both extensively in my day-to-day work building scalable web applications with Node.js.',
    },
    {
      img: reactIcon,
      paragraph:
        'Experienced with React for building modern frontend applications. What started as inspiration for this website has grown into production-level expertise.',
    },
    {
      img: csharpIcon,
      paragraph:
        'C# has been a core language in my toolkit, with years of experience building robust backend systems.',
    },
    {
      img: dotnetIcon,
      paragraph:
        ".NET is a platform I've used extensively throughout multiple roles, particularly for enterprise applications.",
    },
    {
      img: sqlIcon,
      paragraph:
        'Very comfortable writing SQL queries and building relational databases. I have experience with multiple database systems, including SQL Server and PostgreSQL.',
    },
    {
      img: gitIcon,
      paragraph:
        "Git is the version control system I use daily. I've also worked with TFS in previous roles.",
    },
  ],

  otherTechnologiesAndSkills: [
    {
      img: pythonIcon,
      paragraph: 'I have developed multiple applications from the ground up using Python.',
    },
    {
      img: djangoIcon,
      paragraph: "I've used the Django framework to develop some Python web services.",
    },
    {
      img: safeIcon,
      paragraph:
        'My team worked using SAFe (Scaled Agile Framework) at Vestas. We had training along with other teams at Vestas HQ in Denmark.',
    },
  ],

  workExperience: [
    {
      companyName: 'Triptease',
      title: 'Software Engineer',
      img: tripteaseLogo,
      startDate: 'Sep 2024',
      endDate: 'Present',
      descriptionParagraphs: [
        'I develop commercial data systems that empower our Sales, Customer Success, Product Integration, and Finance teams to efficiently access and manage critical business data. By building robust internal tools and data infrastructure, teams are able to operate more effectively and support thousands of hotels in driving direct bookings and reducing reliance on online travel agencies.',
        'Tech stack includes TypeScript, Node, React, PostgreSQL, Docker, Git, Google Cloud.',
      ],
    },
    {
      companyName: 'Lidya',
      title: 'Software Engineer',
      img: lidyaIcon,
      startDate: 'March 2022',
      endDate: 'Aug 2024',
      descriptionParagraphs: [
        "Key member of Lidya's backend team, specializing in feature analysis, code development, and ensuring on-time project delivery. My commitment extended to providing support for system integrity while actively engaging in peer code reviews and continuously collaborating with all engineering and product teams.",
        'Tech stack included C#, .NET, PostgreSQL, Git.',
      ],
    },
    {
      companyName: 'COFCO International',
      title: 'Market Risk Software Engineer',
      img: cofcoIntlIcon,
      startDate: 'Nov 2019',
      endDate: 'Nov 2021',
      descriptionParagraphs: [
        'Served as the only software engineer for the Market Risk team, ensuring the design, development, and maintenance of the entire software infrastructure. Deeply involved in understanding business requirements and translating them into effective software solutions. Extensively learned about market risk and financial markets through the guidance of experienced team members.',
        'Tech stack included C# (.NET), SQL Server, Python.',
      ],
    },
    {
      companyName: 'Vestas',
      title: 'Software Engineer',
      img: vestasIcon,
      startDate: 'Sep 2018',
      endDate: 'Nov 2019',
      descriptionParagraphs: [
        'While integrating the Framework team, I worked in the design, development and maintenance of multiple Industry 4.0 projects mostly regarding control systems integrated in structures such as SCADA systems. The team followed the SAFe methodology patterns for internal alignment and coordination with other teams.',
        'Tech stack included C# (.NET), SQL Server, Angular, Kafka, Redis among other technologies.',
      ],
    },
  ],

  internships: [
    {
      companyName: 'E-goi',
      title: 'Academic Internship',
      img: egoiIcon,
      startDate: 'Feb 2018',
      endDate: 'Jul 2018',
      descriptionParagraphs: [
        "Academic internship done in the context of the ISEP Computer Engineering Bachelor's Degree. A deliverability web dashboard was developed for the company with a range of different technologies, such as Python, Django, PostgreSQL & RRDTool, Munin and httpd.",
      ],
    },
    {
      companyName: 'Armis Group',
      title: 'Summer Internship',
      img: armisIcon,
      startDate: 'Jul 2017',
      endDate: 'Sep 2017',
      descriptionParagraphs: [
        "Armis set a challenge in the form of a summer internship to some of the students in ISEP's CDIO-IL class. Me and two other colleagues accepted the challenge and took on the challenge of delivering a mobile app focused on the sport of canoeing. We developed all of the backend and frontend applications ourselves working with a range of different technologies such as Java (native Android App), C#/.NET Core (backend web services), Swift (native iOS app) and SQL. This was a very enriching experience because we got to work with some technologies for the first and had the insight of Armis' software developers who provided us with some tech talks and discussed ideas with us.",
      ],
    },
  ],

  education: [
    {
      companyName: 'Instituto Superior de Engenharia do Porto',
      title: "Bachelor's Degree, Computer Engineering",
      img: isepIcon,
      startDate: '2015',
      endDate: '2018',
      descriptionParagraphs: [
        "Computer Engineering course mostly focused on the design and development of software. In typical ISEP style, the course has a very 'hands-on' approach, meaning that projects are an instrumental part of nearly all subjects and each semester has at least one big project at the end of it. Main subjects included: Software Engineering, Data Structures, Algorithms, Databases, Systems Architecture, Data Analysis.",
        'During 2 semesters of the course, I integrated a unique class of only 32 students which was based on the CDIO Initiative framework. This class was split into 4 teams of 8 elements each and we worked using Scrum methodology. Besides the subjects already meant for those semesters, this class had the opportunity of developing projects with the company Armis acting as a stakeholder. Instead of a single big project done at the end of the semester, each team worked on multiple large projects over the whole semester. After the first semester, Armis challenged some of the students for a summer internship where we got to develop a project from the ground in their facilities and had some learning sessions.',
      ],
    },
  ],

  aboutParagraphs: [
    `My name is ${name} and I'm a ${age} years old software engineer from Portugal with over 7 years of experience developing and maintaining scalable web applications. I work across the full stack with proficiency in multiple technologies, demonstrating capacity to deliver value in both collaborative and independent projects across various industries. Currently, I'm focused on building commercial data systems using TypeScript, Node, React, and PostgreSQL, while bringing my extensive background in C# and .NET to every project.`,
    "Besides developing software I have a big passion for sports, especially football, motorsports and martial arts. In the past I've practiced tennis, Muay Thai and boxing. Nowadays, weightlifting, calisthenics and swimming are my choices of exercise to keep my body and mind in good health.",
    "Over time, as I've tried to build up good habits in my routine, reading has become a genuine pleasure of mine, providing a great balance to my technical work.",
    'Photography is another passion of mine and it used to be a hobby that I put a lot of hours into. The love for capturing images is still there, but as of now I almost only carry my camera when travelling.',
  ],

  social: [
    {
      img: linkedinIcon,
      url: 'https://www.linkedin.com/in/afonso-marinho-da-silva/',
      name: 'LinkedIn',
    },
    {
      img: githubIcon,
      url: 'https://github.com/afonsosilva97',
      name: 'GitHub',
    },
  ],
};

export default personalData;
