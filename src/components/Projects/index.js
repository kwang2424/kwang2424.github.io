import './index.scss';
import pixel from '../../assets/images/project-art.png';
import portfolio from '../../assets/images/my-portfolio.jpg';
import flight from '../../assets/images/unityflight.png'
import terminal from '../../assets/images/terminal.jpg'
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
                        Lately, I've been trying to learn languages and linguistics, so I have gotten more interested 
                        in NLP (especially it's use cases in translations).
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
                        the best way to go! More tabs and projects will be added in the future so
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
                    <Project
                        image={terminal}
                        link="https://kwang2424.github.io/hockey-terminal/"
                        title="Hockey Terminal"
                        description="Recently I started watching hockey, and this interest coincided with me going down a rabbit hole
                        of terminal applications. So, I decided I could mix together the two. Thus,
                        this project is essentially a terminal app that allows you to get basic information about teams, players,
                        conferences, and divisions. I will be adding more specifics soon, especially as the season starts🏒!"
                    />
                </div>
        </div>
        </>
    )
}

export default Projects;