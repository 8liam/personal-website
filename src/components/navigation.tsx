import { RiInformationLine, RiUserLine, RiBook2Line, RiLightbulbLine, RiContactsLine } from 'react-icons/ri';


export default function Navigation () {
    return(
        <>
        <div className="navigation">
            <a href="#intro"><RiInformationLine /></a> {/* RiInformationLine for "info" */}
            <a href="#about"><RiUserLine /></a> {/* RiUserLine for "about" */}
            <a href="#education"><RiBook2Line /></a> {/* RiBook2Line for "education" */}
            <a href="#projects"><RiLightbulbLine /></a> {/* RiLightbulbLine for "projects" */}
            <a href="#contact"><RiContactsLine /></a> {/* RiContactsLine for "contact" */}
        </div>
        </>
    )
}
