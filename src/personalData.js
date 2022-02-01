import csharpIcon from './images/csharp-icon.svg';
import pythonIcon from './images/python-icon.svg';
import javascriptIcon from './images/javascript-icon.svg';

import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';

const personalData = {
  name: 'Afonso Silva',

  skills: [
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
  ],

  social: [
    { img: linkedinIcon, url: 'https://www.linkedin.com/in/afonso-marinho-da-silva/' },
    { img: githubIcon, url: 'https://github.com/afonsosilva97' },
  ],
};

export default personalData;
