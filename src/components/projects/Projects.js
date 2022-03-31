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
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 2,
        image: prImg2,
        title: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 3,
        image: prImg3,
        title: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 4,
        image: prImg4,
        title: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 5,
        image: prImg5,
        title: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 6,
        image: prImg6,
        title: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
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
                            {/* <div  className='projectTitle'>
                                <h3>{ title }</h3>
                            </div> */}
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