// Technologies/skills icons
import csharpIcon from './images/csharp-icon.svg';
import dotnetIcon from './images/dotnet-icon.svg';
import pythonIcon from './images/python-icon.svg';
import djangoIcon from './images/django-logo-negative.svg';
import javascriptIcon from './images/javascript-icon.svg';
import sqlIcon from './images/sql-database-icon.svg';
import gitIcon from './images/git-icon.svg';

import cofcoIntlIcon from './images/cofco-intl-logo.png';
import vestasIcon from './images/vestas-logo.png';
import egoiIcon from './images/e-goi-logo.svg';
import armisIcon from './images/armis-logo.svg';

import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';

const personalData = {
  name: 'Afonso Silva',
  profession: 'Software Engineer',

  techStack: [
    {
      img: csharpIcon,
      paragraph: 'C# is the language I have the most experience with at the moment.',
    },
    {
      img: pythonIcon,
      paragraph:
        'I have developed multiple applications from the ground up using Python.',
    },
    {
      img: javascriptIcon,
      paragraph: "I'm getting better at JavaScript, definitely interested in it!",
    },
    {
      img: dotnetIcon,
      paragraph: ".NET is by far the developer platform I've used most extensively.",
    },
    {
      img: djangoIcon,
      paragraph: "I've used the Django framework to develop some Python web services.",
    },
    {
      img: sqlIcon,
      paragraph: 'Databases and SQL are no strangers to me!',
    },
    {
      img: gitIcon,
      paragraph: 'Git',
    },
  ],

  workExperience: [
    {
      companyName: 'COFCO International',
      img: cofcoIntlIcon,
      startDate: 'Nov 2019',
      endDate: 'Oct 2021',
      paragraph:
        'Responsible for the design, development and maintenance of the entire software structure – tools, services, databases - used by Market Risk analysts. Directly integrated in the Market Risk team in order to guarantee a full understanding of the software requirements derived from the business needs. Tech Stack: C# (.NET Core), Python, SQL.',
    },
    {
      companyName: 'Vestas',
      img: vestasIcon,
      startDate: 'Sep 2018',
      endDate: 'Nov 2019',
      paragraph:
        'While integrating the Framework team, I worked in the design, development and maintenance of multiple Industry 4.0 projects mostly regarding control systems integrated in structures such as SCADA systems. The team followed the SAFe methodology patterns for internal alignment and coordination with other teams. Tech Stack: C# (.NET Core), SQL Server, Angular.',
    },
  ],

  internships: [
    {
      companyName: 'E-goi',
      img: egoiIcon,
      startDate: 'Feb 2018',
      endDate: 'Jul 2018',
      paragraph:
        "Academic internship done in the context of the ISEP Computer Engineering Bachelor's Degree. A deliverability web dashboard was developed for the company with a range of different technologies, such as Python, Django, PostgreSQL & RRDTool, Munin and httpd.",
    },
    {
      companyName: 'Armis Group',
      img: armisIcon,
      startDate: 'Jul 2017',
      endDate: 'Sep 2017',
      paragraph:
        'Summer internship done as a challenge set by the company Armis. Development of an unique canoeing results app, with a range of different technologies, such as Java, C# (.NET Core) and SQL.',
    },
  ],

  projects: [
    {
      title: 'Project One', //Project Title - Add Your Project Title Here
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
      //Project URL - Add Your Project Url Here
      url: 'http://chetanverma.com/',
    },
  ],

  social: [
    { img: linkedinIcon, url: 'https://www.linkedin.com/in/afonso-marinho-da-silva/' },
    { img: githubIcon, url: 'https://github.com/afonsosilva97' },
  ],
};

export default personalData;
