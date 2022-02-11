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

import cofcoIntlIcon from './images/cofco-intl-logo.png';
import vestasIcon from './images/vestas-logo.png';
import egoiIcon from './images/e-goi-logo.svg';
import armisIcon from './images/armis-logo.svg';

import isepIcon from './images/isep-logo.png';

import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';

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
      paragraph:
        'I have developed multiple applications from the ground up using Python.',
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
      paragraph:
        "I'm no JavaScript expert, but I'm definitely invested in getting better at it!",
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
      companyName: 'COFCO International',
      img: cofcoIntlIcon,
      startDate: 'Nov 2019',
      endDate: 'Oct 2021',
      descriptionParagraphs: [
        'I was fully responsible for the design, development and maintenance of the entire software structure – tools, services, databases - used by Market Risk analysts. I was the only software developer directly integrated in the Market Risk team in order to guarantee a full understanding of the software requirements derived from the business needs. Tech Stack: C# (.NET Core), Python, SQL.',
        'Thanks to the direct integration in a risk management team, I gained knowledge in market risk as well as accounting.',
      ],
    },
    {
      companyName: 'Vestas',
      img: vestasIcon,
      startDate: 'Sep 2018',
      endDate: 'Nov 2019',
      descriptionParagraphs: [
        'While integrating the Framework team, I worked in the design, development and maintenance of multiple Industry 4.0 projects mostly regarding control systems integrated in structures such as SCADA systems. The team followed the SAFe methodology patterns for internal alignment and coordination with other teams. Tech Stack: C# (.NET Core), SQL Server, Angular.',
      ],
    },
  ],

  internships: [
    {
      companyName: 'E-goi',
      img: egoiIcon,
      startDate: 'Feb 2018',
      endDate: 'Jul 2018',
      descriptionParagraphs: [
        "Academic internship done in the context of the ISEP Computer Engineering Bachelor's Degree. A deliverability web dashboard was developed for the company with a range of different technologies, such as Python, Django, PostgreSQL & RRDTool, Munin and httpd.",
      ],
    },
    {
      companyName: 'Armis Group',
      img: armisIcon,
      startDate: 'Jul 2017',
      endDate: 'Sep 2017',
      descriptionParagraphs: [
        'Summer internship done as a challenge set by the company Armis. Development of an unique canoeing results app, with a range of different technologies, such as Java, C# (.NET Core) and SQL.',
      ],
    },
  ],

  education: [
    {
      companyName: 'Instituto Superior de Engenharia do Porto',
      img: isepIcon,
      startDate: '2015',
      endDate: '2018',
      descriptionParagraphs: [
        'Engineering course focused on the learning and training of software design, development and maintenance. During 2 semesters, I integrated a unique class of 32 students which used the CDIO Initiative framework. Main subjects included: Software Engineering, Data Structures, Algorithms, Databases, Systems Architecture, Data Analysis',
      ],
    },
  ],

  aboutParagraphs: [
    `My name is ${name} and I'm a ${age} years old software engineer from Portugal. I am mainly a backend developer but also have some frontend skills as I'm always willing to expand my software development abilities. Microsoft technologies such as C# and .NET have been the ones I've used more extensively, but that hasn't stopped from venturing into new projects using other technologies such as Python, JavaScript and React.`,
    "Besides developing software I have a big passion for sports, such as football, motorsports, boxing, tennis, weightlifting and Muay Thai! In the past I've practiced tennis, Muay Thai and boxing. Nowadays, I only lift weights and do some cardio to stay in shape and clear my mind. I find the world of cars and motorsports fascinating, especially if it's Formula 1!",
    "In most recent years I've started to dedicate more of my of time to reading books, whether it's classic novel or an nonfiction I find interesting. Some of my favorite books include '1984' by George Orwell, 'Crime and Punishment' by Fyodor Dostoevsky, 'Medidations' by Marcus Aurelius, 'Fooled by Randomness' by Nassim Taleb and many of José Saramago's novels. At the moment I'm reading 'Pride and Prejudice' by Jane Austen and 'Thinking, Fast and Slow' by Daniel Kahneman.",
    'Photography is also another passion of mine and it used to be a hobby that I put a lot of hours into. The love for capturing images is still there, but as of now I almost only carry my camera when travelling.',
  ],

  social: [
    { img: linkedinIcon, url: 'https://www.linkedin.com/in/afonso-marinho-da-silva/' },
    { img: githubIcon, url: 'https://github.com/afonsosilva97' },
  ],
};

export default personalData;
