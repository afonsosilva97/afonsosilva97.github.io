export interface Skill {
  name: string;
  imgs: string[];
  paragraph: string;
}

export interface Experience {
  companyName: string;
  title: string;
  img: string;
  startDate: string;
  endDate: string;
  location?: string;
  descriptionParagraphs: string[];
}

export interface Social {
  img: string;
  url: string;
  name: string;
}

export interface PersonalData {
  name: string;
  profession: string;
  yearsOfExperience: number;
  hook: string;
  techStack: Skill[];
  workExperience: Experience[];
  internships: Experience[];
  education: Experience[];
  aboutParagraphs: string[];
  social: Social[];
}

const name = 'Afonso Silva';

// First full-time role started September 2018; computed at build time.
const careerStart = new Date(2018, 8);
const yearsOfExperience = Math.floor(
  (Date.now() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);

const personalData: PersonalData = {
  name: name,
  profession: 'Software Engineer',
  yearsOfExperience: yearsOfExperience,
  hook: `Full-stack software engineer in Portugal with ${yearsOfExperience}+ years across fintech, commodities trading and renewable energy, currently building commercial data systems for hotels at Triptease.`,

  techStack: [
    {
      name: 'JavaScript ecosystem',
      imgs: [
        '/images/javascript-icon.svg',
        '/images/typescript-icon.svg',
        '/images/nodejs-icon.svg',
        '/images/react-logo.svg',
      ],
      paragraph:
        'My current daily drivers: TypeScript, Node and React. I worked with Angular at Vestas, and this website is built with Astro.',
    },
    {
      name: '.NET ecosystem',
      imgs: ['/images/csharp-icon.svg', '/images/dotnet-icon.svg'],
      paragraph:
        'Six years of C# and .NET across three companies: industrial systems at Vestas, market risk tooling at COFCO and lending at Lidya.',
    },
    {
      name: 'Databases',
      imgs: ['/images/postgresql-icon.svg', '/images/sqlserver-icon.svg'],
      paragraph:
        'PostgreSQL in production at Triptease and Lidya, SQL Server at Vestas and COFCO. Comfortable owning everything from schema design to query performance.',
    },
    {
      name: 'Python',
      imgs: ['/images/python-icon.svg', '/images/django-logo-negative.svg'],
      paragraph:
        "Python has followed me across roles: scripting, data work and automated visual reports at COFCO. I've also built web services and dashboards with Django.",
    },
    {
      name: 'Cloud & infrastructure',
      imgs: ['/images/googlecloud-icon.svg', '/images/docker-icon.svg'],
      paragraph:
        'Docker and Google Cloud in daily use, running the data platform services and deploys.',
    },
  ],

  workExperience: [
    {
      companyName: 'Triptease',
      title: 'Software Engineer',
      img: '/images/triptease-logo.jpeg',
      startDate: 'Sep 2024',
      endDate: 'Present',
      location: 'Remote, Portugal · UK company',
      descriptionParagraphs: [
        "I build the internal data platform behind Triptease's commercial operations. The Sales, Customer Success and Finance teams use these systems daily to manage contracts, billing and customer data for thousands of hotels. I work across the whole stack, from database design to web services, internal tools and the cloud infrastructure they run on.",
        'Tech stack includes TypeScript, Node, React, PostgreSQL, Docker, Google Cloud.',
      ],
    },
    {
      companyName: 'Lidya',
      title: 'Software Engineer',
      img: '/images/lidya-logo.png',
      startDate: 'Mar 2022',
      endDate: 'Aug 2024',
      location: 'Hybrid, Porto · Nigerian company',
      descriptionParagraphs: [
        "Backend engineer on Lidya's lending platform. I built and maintained the services powering credit products for small and medium enterprises, owning features from requirements analysis through delivery. I also reviewed a large share of the team's code.",
        'Tech stack included C#, .NET, PostgreSQL.',
      ],
    },
    {
      companyName: 'COFCO International',
      title: 'Market Risk Software Engineer',
      img: '/images/cofco-intl-logo.png',
      startDate: 'Nov 2019',
      endDate: 'Nov 2021',
      location: 'Hybrid, Porto · Swiss-Chinese multinational',
      descriptionParagraphs: [
        "The only software engineer on the Market Risk team at one of the world's largest agricultural commodity traders. After training on market risk and financial markets, I designed, built and maintained all of the team's software, turning risk analysts' requirements into tools for exposure monitoring and reporting.",
        'Tech stack included C# (.NET), SQL Server, Python.',
      ],
    },
    {
      companyName: 'Vestas',
      title: 'Software Engineer',
      img: '/images/vestas-logo.png',
      startDate: 'Sep 2018',
      endDate: 'Nov 2019',
      location: 'On-site, Porto · Danish company',
      descriptionParagraphs: [
        "Software engineer on the Framework team at the world's largest wind turbine manufacturer. I built Industry 4.0 systems, mostly control system integrations around SCADA, and coordinated with other teams under SAFe.",
        'Tech stack included C# (.NET), SQL Server, Angular, Redis.',
      ],
    },
  ],

  internships: [
    {
      companyName: 'E-goi',
      title: 'Academic Internship',
      img: '/images/e-goi-logo.svg',
      startDate: 'Feb 2018',
      endDate: 'Jul 2018',
      descriptionParagraphs: [
        'Final-year internship of my Computer Engineering degree. I built an email deliverability dashboard for the company with Python, Django, PostgreSQL and RRDTool.',
      ],
    },
    {
      companyName: 'Armis Group',
      title: 'Summer Internship',
      img: '/images/armis-logo.svg',
      startDate: 'Jul 2017',
      endDate: 'Sep 2017',
      descriptionParagraphs: [
        "Summer internship earned through ISEP's CDIO class. With two colleagues I built a canoeing sports app end to end: native Android and iOS apps backed by C# (.NET) web services.",
      ],
    },
  ],

  education: [
    {
      companyName: 'Instituto Superior de Engenharia do Porto',
      title: "Bachelor's Degree, Computer Engineering",
      img: '/images/isep-logo.png',
      startDate: '2015',
      endDate: '2018',
      descriptionParagraphs: [
        'Hands-on Computer Engineering degree where nearly every subject ended in a project. Main areas: software engineering, data structures and algorithms, databases, systems architecture.',
        'For two semesters I was part of a 32-student class built around the CDIO framework, working in Scrum teams on projects with Armis as the stakeholder. That work led directly to the summer internship above.',
      ],
    },
  ],

  aboutParagraphs: [
    `My name is ${name} and I'm a software engineer from Portugal. Over the last ${yearsOfExperience}+ years I've built software for companies based in different parts of the world, in industries that have little in common, and in every working setup: office, hybrid and fully remote. These days most of my time goes into data systems and internal tools, the kind of software that quietly keeps a business running.`,
    "Outside work, sports: I follow football, motorsport and martial arts, and over the years I've practiced tennis, Muay Thai and boxing myself. These days I mostly lift weights and run to keep myself fit.",
    'Reading started out as a habit I forced on myself and became something I look forward to. It balances the screen time well.',
    "Photography used to swallow whole weekends. These days I don't find myself going to events just to take photos, or spending hours editing, but I try to carry my camera with me as much as I can.",
  ],

  social: [
    {
      img: '/images/linkedin-icon.svg',
      url: 'https://www.linkedin.com/in/afonso-marinho-da-silva/',
      name: 'LinkedIn',
    },
    {
      img: '/images/github-icon.svg',
      url: 'https://github.com/afonsosilva97',
      name: 'GitHub',
    },
  ],
};

export default personalData;
