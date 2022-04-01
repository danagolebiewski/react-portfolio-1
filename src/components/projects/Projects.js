import './projects.css';
import prImg1 from '../../assets/prImg1.png';
import prImg2 from '../../assets/prImg2.png';
import prImg3 from '../../assets/prImg3.png';
import prImg4 from '../../assets/prImg4.png';
import prImg5 from '../../assets/prImg5.png';
import prImg6 from '../../assets/prImg6.png';

const cjProjects = [
    {
        id: 1,
        image: prImg1,
        title: 'FamYOUly',
        github: 'https://github.com/EsotericZ/famYOUly',
        demo: 'https://evening-island-73261.herokuapp.com/login',
    },
    {
        id: 2,
        image: prImg2,
        title: 'Tech Blog',
        github: 'https://github.com/EsotericZ/tech-blog',
        demo: 'https://cj-tech-blog22.herokuapp.com/',
    },
    {
        id: 3,
        image: prImg3,
        title: 'Puppy Love',
        github: 'https://github.com/EsotericZ/puppylove',
        demo: 'https://esotericz.github.io/puppylove/',
    },
    {
        id: 4,
        image: prImg4,
        title: 'Note Taker',
        github: 'https://github.com/EsotericZ/note-taker',
        demo: 'https://cj-notetaker-v0001.herokuapp.com/',
    },
    {
        id: 5,
        image: prImg5,
        title: 'Weather Dashboard',
        github: 'https://github.com/EsotericZ/weather-dashboard',
        demo: 'https://esotericz.github.io/weather-dashboard/',
    },
    {
        id: 6,
        image: prImg6,
        title: 'Daily Scheduler',
        github: 'https://github.com/EsotericZ/workday-scheduler',
        demo: 'https://esotericz.github.io/workday-scheduler/',
    },
]

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>

            <div className='container project'>
                { cjProjects.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={ id } className='projectItem'>
                            {/* <h3 className='test'>Test</h3> */}
                            <div className='projectItemImg'>
                                <img src={ image } alt={ title } />
                            </div>
                            
                            <div className='projectItemLinks'>
                                <a href={ github } className='btn' target='_blank'>Github</a>
                                <a href={ demo } className='btn' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Projects;