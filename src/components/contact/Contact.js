import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8nk7spm', 'template_1x0ulhf', form.current, 'eg1y4YWHkWCZ6Rcfv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h2>Contact</h2>

            <div className='container contact'>
                <div className='contactOptions'>
                    <article className='contactOption'>
                        <HomeIcon className="contactOptionIcon"/>
                        <h4>Email</h4>
                        <h5>cjsand03@gmail.com</h5>
                        <a href="mailto:cjsand03@gmail.com" target="_blank">Send</a>
                    </article>
                    <article className='contactOption'>
                        <GitHubIcon className="contactOptionIcon"/>
                        <h4>GitHub</h4>
                        <h5>EsotericZ</h5>
                        <a href="https://github.com/EsotericZ" target="_blank">Send</a>
                    </article>
                    <article className='contact_option'>
                        <LinkedInIcon className="contactOptionIcon"/>
                        <h4>LinkedIn</h4>
                        {/* <h5>cjsand03@gmail.com</h5> */}
                        <a href="https://github.com/EsotericZ" target="_blank">Send</a>
                    </article>
                </div>
                <form ref={ form } onSubmit={ sendEmail }>
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <textarea name='message' rows='8' placeholder='Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;