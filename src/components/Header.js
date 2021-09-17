import React from 'react'
import ReactGA from 'react-ga';
export default function Header() {
    const handleCreate = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on button'
        });
        ReactGA.event({
            category: 'Social',
            action: 'Rated an App',
            value: 3
        });

        ReactGA.event({
            category: 'Editing',
            action: 'Deleted Component',
            label: 'Game Widget'
        });

        ReactGA.event({
            category: 'Promotion',
            action: 'Displayed Promotional Widget',
            label: 'Homepage Thing',
            nonInteraction: true
        });
        ReactGA.timing({
            category: 'JS Libraries',
            variable: 'load',
            value: 20, // in milliseconds
            label: 'CDN libs'
        });
    }
    return (
        <div>
            this is header page
            <button onClick={() => handleCreate()}>Save</button>
        </div>
    )
}
