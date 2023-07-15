


import portfolio from '../../assets/projects_images/portfolio.JPG'


import imdb from '../../assets/projects_images/imdb.jpg'
import jira from '../../assets/projects_images/jira.jpg'
import disney from '../../assets/projects_images/disney.jpg'

const data_projects = [
    {
        name: 'Jira Ticket',
        image: jira,
        deployed_url: 'https://jiraticketravi.netlify.app/',
        github_url: 'https://github.com/321ravi/jira-ticket.git',
        category: ['Html','CSS','Javascript']
    },

    {
        name: 'Imdb clone',
        image: imdb,
        deployed_url: 'https://imdbclonebyravi.netlify.app/',
        github_url: 'https://github.com/321ravi/imdb.git',
        category: [ 'react.js','firebase']
    },

    {
        name: 'Disney+',
        image: disney,
       // deployed_url: '',
        github_url: 'https://github.com/321ravi/Disney.git',
        category: [ 'next.js','firebase']
    },

   
   

    {
        name: 'my Portfolio',
        image: portfolio,
        deployed_url: 'http://suprateem.herokuapp.com/',
        category: ['react.js']
    },

    
]

export default data_projects;