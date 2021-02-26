import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Logo></Logo>
            <h1>A propos</h1>
            <br />
            <p>Un site web créer avec la framework react qui travaille avec l'api restcountries qui regroupe tout les pays avec un system de recherche avancé.</p>
        </div>
    );
};

export default About;