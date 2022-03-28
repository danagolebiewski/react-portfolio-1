import resume from '../../assets/resume.pdf';

const Resume = () => {
    return (
        <div className='resume'>
            <a href={resume} download className='btn'>Resume</a>
        </div>
    )
}

export default Resume;