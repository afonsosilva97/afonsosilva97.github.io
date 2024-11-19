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

import lidyaIcon from './images/lidya-logo.png';
import cofcoIntlIcon from './images/cofco-intl-logo.png';
import vestasIcon from './images/vestas-logo.png';
import egoiIcon from './images/e-goi-logo.svg';
import armisIcon from './images/armis-logo.svg';

import isepIcon from './images/isep-logo.png';

import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';
import goodreadsIcon from './images/goodreads-icon.svg';

function calculateDifferenceBetweenDates(startDate, endDate) {
  return Math.abs(new Date(endDate - startDate).getUTCFullYear() - 1970);
}

const name = 'Afonso Silva';
const birthday = new Date(1997, 3, 25);
const age = calculateDifferenceBetweenDates(birthday, Date.now());

const personalData = {
  name: name,
  profession: 'Software Engineer',
  birthDate: birthday,
  age: age,

  mainTechStack: [
    {
      img: csharpIcon,
      paragraph: 'C# is the language I have the most experience with at the moment.',
    },
    {
      img: dotnetIcon,
      paragraph: ".NET is by far the developer platform I've used most extensively.",
    },
    {
      img: pythonIcon,
      paragraph: 'I have developed multiple applications from the ground up using Python.',
    },
    {
      img: sqlIcon,
      paragraph:
        "I'm very used to writing SQL queries as well as building relational databases. I have experience with multiple database systems, such as SQL Server and PostgreSQL.",
    },
    {
      img: gitIcon,
      paragraph:
        "Git is the version control system I'm most used to. I've worked with TFS as well.",
    },
  ],

  otherTechnologiesAndSkills: [
    {
      img: javascriptIcon,
      paragraph: "I'm no JavaScript expert, but I'm definitely invested in getting better at it!",
    },
    {
      img: reactIcon,
      paragraph:
        'Still learning its fundamentals, but already finding React very interesting. Learning React is what inspired me to build this website.',
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
      companyName: 'Lidya',
      title: 'Software Engineer',
      img: lidyaIcon,
      startDate: 'March 2022',
      endDate: 'Present',
      descriptionParagraphs: [
        "Currently a key member of Lidya's backend team, specializing in feature analysis, code development, and ensuring on-time project delivery. My commitment extends to providing support for system integrity while actively engaging in peer code reviews and continuously collaborating with all engineering and product teams.",
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
    `My name is ${name} and I'm a ${age} years old software engineer from Portugal. I am mainly a backend developer but also have some frontend skills as I'm always willing to expand my software development abilities. Technologies such as C# and .NET have been the ones I've used more extensively, but that hasn't stopped from venturing into new projects using other technologies such as Python, JavaScript and React.`,
    "Besides developing software I have a big passion for sports, especially football, motorsports and martial arts. In the past I've practiced tennis, Muay Thai and boxing. Nowadays, weightlifting, calisthenics and swimming are my choices of exercise to keep my body and mind in good health.",
    "Over time, as I've tried to build up good habits in my routine, reading went from being a 'task' to a pleasure of mine. In case you are curious on what I'm currently reading or have read recently, you can find the link to my Goodreads profile below.",
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
    {
      img: goodreadsIcon,
      url: 'https://www.goodreads.com/user/show/98787085-afonso-silva',
      name: 'Goodreads',
    },
  ],
};

export default personalData;
