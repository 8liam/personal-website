
export default function Education() {
    const startDate = new Date('2021-02-22');
    const endDate = new Date('2023-11-18');
    const currentDate = new Date();
    const totalDuration = endDate.getTime() - startDate.getTime();
    const currentDuration = currentDate.getTime() - startDate.getTime();
    const timePercentage = ((currentDuration / totalDuration) * 100);

    return (
        <div className='section' id='education'>
            <h1>education</h1>
            <span className="flair">Q1 2021 - Q4 2023</span>
            <div className="education-container">
                <div className="education-image-container">
                    <img src="./qut-logo-og-1200.jpg" className="education-logo" alt="logo" />
                </div>
                <div className="education-text-container">
                    <h2 className="education-text">Queensland University of Technology</h2>
                    <p className="education-text">Bachelor of Information Technology</p>
                </div>
            </div>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${timePercentage.toFixed(0)}%` }}></div>
            </div>
            <div className="education-container">
                <div className="education-text-container">
                    <h2 className="education-text">Major</h2>
                    <p className="education-text" style={{ paddingBottom: '0.3em' }}>Computer Science</p>
                </div>
                <div className="education-text-container">
                    <h2 className="education-text">Minor</h2>
                    <p className="education-text" style={{ paddingBottom: '0.3em' }}>IoT and Mobile Technologies</p>
                </div>
            </div>

        </div>
    )
}