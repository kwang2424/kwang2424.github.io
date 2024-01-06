import './index.scss';
import pixel from '../../assets/images/project-art.png';
import portfolio from '../../assets/images/my-portfolio.jpg';
import flight from '../../assets/images/unityflight.PNG';
import terminal from '../../assets/images/terminal.JPG';
import outlet from '../../assets/images/outletmap.png';
import penguinblog from '../../assets/images/penguinblog.png';
import typehelper from '../../assets/images/typehelper.png';
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
                        image={penguinblog}
                        link="https://github.com/kwang2424/penguin-blog"
                        title="Penguin Blog"
                        description="I've always wanted to make a blog because I wanted an outlet
                        to share some of my thoughts, and use it as a way to build on my beliefs.
                        I wanted to design it rather than using some provider, but it took much longer
                        than I thought. I'm still working on it and I've admittedly lost some motivation,
                        but now that I'm back home for break I want to finish it up!🐧"    
                    />
                    <Project 
                        image={outlet}
                        link="https://github.com/kwang2424/outlet-map"
                        title="Outlet Map"
                        description="This was a group project as part of a Tech@NYU cohort program.
                        While technically not super complex, since it is just built on a React frontend 
                        and a Spring backend, it was more valuable as a leadership experience for me. 
                        I helped brainstorm and choose the project, and also managed the team by
                        assigning roles to each person according to their interests/skills. I also 
                        essentially built the entire frontend, and helped connect it to the database.🗺️"
                    />
                    <Project 
                        image={typehelper}
                        link="https://typehelper.vercel.app/"
                        title="TypeHelper"
                        description="This was the final project for a class called Applied Internet Technologies.
                        In this class, you learn about the basics of web development. I decided to make a 
                        website similar to monkeytype, and wanted to try building it with Next.js with a 
                        MongoDB server."/>
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