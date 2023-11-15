import { useState, useEffect } from 'react';
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';


const ThemeToggle = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode || false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsDarkMode(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        // Initial setup
        document.body.classList.toggle('dark-theme', isDarkMode);
        document.body.classList.toggle('light-theme', !isDarkMode);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [isDarkMode]);

    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme', !isDarkMode);
        document.body.classList.toggle('light-theme', isDarkMode);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            {isDarkMode ? (
                <FaRegLightbulb onClick={toggleTheme} />

            ) : (
                <FaLightbulb onClick={toggleTheme} style={{ color: 'var(--link-color)' }} />

            )}
        </>
    );
};

export default ThemeToggle;
