import './index.scss';
import pixel from '../../assets/images/project-art.png';
import portfolio from '../../assets/images/my-portfolio.jpg';
import flight from '../../assets/images/unityflight.png'
import Project from './Project';
import Helmet from 'react-helmet';

const Projects = () => {
    return (
        <>
        <Helmet>
            <title>Projects</title>
            <meta name="About Page" content="Portfolio Website" />
       </Helmet>
        <div className="projects-container">
            <div className="projects-intro">
                <img src={pixel} alt="pixel art" />
                <div className="intro-text">
                    <h1>Projects</h1>
                    <p>
                        In my classes, I have mostly
                        been learning theory that's helped me build a foundation. 
                    </p>
                    <p>
                        So, outside of school I've been dabbling in both web development and machine learning. 
                        I really like machine learning, especially NLP, since a popular use case is translations.
                        Lately, I've been trying to learn languages and linguistics, and the two fields are so interconnected.
                    </p>
                    <p>
                        Without further ado, here's what I've been working on lately:
                    </p>
                </div>
            </div>
            <div className="projects-list">
                    <Project 
                        image={portfolio}
                        link="/"
                        title="My Portfolio Project"
                        description="This is my personal portfolio that you're on right now!
                        I wanted to learn some web development, and I figured a website would be
                        the best way to go! More tabs and features will be added in the future so
                        keep a look out😎!"
                    />
                    <Project
                        image={flight}
                        link="https://github.com/Kevy729/unity-ml-flight"
                        title="Reinforcement Learning Flight"
                        description="After watching Top Gun: Maverick, I was inspired to do a flight-related project.
                        The most realistic way I could go about this was through learning Unity, and afterwards
                        I wanted to do a reinforcement learning related project after watching videos on the topic. So, I 
                        ultimately decided on a reinforcement learning flight project✈️!"
                    />
                </div>
        </div>
        </>
    )
}

export default Projects;