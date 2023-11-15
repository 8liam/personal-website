import ThemeToggle from "./themetoggle";

export default function Navigation() {

    return (
        <>
            <div className="navigation">
                <div className="links">
                    <a href="#intro" className="navigation-link">intro</a>
                    <a href="#about" className="navigation-link">about</a>
                    <a href="#education" className="navigation-link">education</a>
                    <a href="#projects" className="navigation-link">projects</a>
                    <a href="#contact" className="navigation-link">contact</a>
                </div>
                <div className="theme-toggler">
                    <ThemeToggle />
                </div>

            </div>

        </>
    )
}
