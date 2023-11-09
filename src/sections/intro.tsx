import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

export default function About () {

return (
    <div id='intro'>
        <div className="introTitle">
            <p>hi, i'm <span className="name">Liam</span></p>
        </div>
        
        <div className="introBio">
            <p>i'm a web developer based in <span className="name">Brisbane, Australia</span></p>
        </div>
        <div className="introText">
            <p>
                <a className="icon" href="https://www.linkedin.com/in/liamgrant1903/" target="_blank"><AiFillLinkedin size="2.5rem" /></a>
                <a className="icon" href="https://www.github.com/8liam" target="_blank"><FaGithub size="2.5rem" /></a>
                <a className="icon" href="#contact"><IoMdMail size="2.5rem"/></a>
            </p>
        </div>
        <div className="intro-under ">
            
        </div>
        <div className="scrollicon">
            <a href="#about"><AiOutlineArrowDown size="1.5rem"/></a>
        </div>
        
    </div>
    )
}