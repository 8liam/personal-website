import { AiFillLinkedin } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';



export default function Contact () {
    const copyEmail = () => {
        navigator.clipboard.writeText("liamgrantdev@gmail.com");
    }

return (
    <div className='section' id='contact'>
        <h1>contact me</h1>
        
            <p>
                <a className="icon" href="https://www.linkedin.com/in/liamgrant1903/" target="_blank"><AiFillLinkedin size="2.5rem" /></a>
                <a className="icon" href="mailto:liamgrantdev@gmail.com"><IoMdMail size="2.5rem"/></a>
            </p>
        
        <code className="emailCopy" onClick={copyEmail}>liamgrantdev@gmail.com <FiCopy size="0.6rem"  /></code>
    </div>
    )
}