import './about.css';
import Resume from '../resume/Resume';
import CJ2 from '../../assets/cj2.jpg';

const About = () => {
    return (
        <section id='about'>
            <h2>About Me</h2>
            <div className='container aboutNew'>
                <div className='container aboutContent'>
                    <p>
                    Currently working as an Engineer for a manufacturing company producing and maintainig our internal company website.
    I have been working within Python for the last 3 years and have become proficient in SQL, Flask, Pandas, git and much more.

    I enrolled at Denver University boot camp in October of 2021 to build upon my coding knowledge and make the switch into Full Stack Web Development.

    I look forward to helping you build your next website!
                    </p>
                    <div className='aboutCards'>
                        <article className='aboutCard'>
                            <h5>Languages</h5>
                            <small>JavaScript / JQuery</small>
                            <small>NodeJS</small>
                            <small>ReactJS</small>
                            <small>Python 3.x</small>
                            <small>Flask</small>
                            <small>Pandas</small>
                        </article>
                        <article className='aboutCard'>
                            <h5>Databases</h5>
                            <small>MySQL</small>
                            <small>SQLite</small>
                            <small>PostgreSQL</small>
                            <small>MongoDB</small>
                        </article>
                    </div>
                </div>

                <div className='container aboutPic'>
                    <div className='aboutMe'>
                        <div className='aboutMeImg'>
                            <img src={CJ2} alt="image" />
                        </div>
                    </div>
                    <div className='aboutLinks'>
                        <a href='#contact' className='btn'>Contact Me</a>
                        <Resume />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;