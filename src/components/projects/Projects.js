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
        titile: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 2,
        image: prImg2,
        titile: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 3,
        image: prImg3,
        titile: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 4,
        image: prImg4,
        titile: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 5,
        image: prImg5,
        titile: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
    {
        id: 6,
        image: prImg6,
        titile: 'FamYOUly',
        github: 'https://github.com/',
        demo: 'https://github.com',
    },
]

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>

            <div className='container project__container'>
                { cjProjects.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={ id } className='project__item'>
                            <h3>{ title }</h3>
                            <div className='project__item-image'>
                                <img src={ image } alt={ title } />
                            </div>
                            <div className='project__item-cta'>
                                <a href={ github } className='btn' target='_blank'>Github</a>
                                <a href={ demo } className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Projects;