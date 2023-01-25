import './index.scss';
import profile from '../../assets/images/itsme_crop.jpg'
import Helmet from 'react-helmet';
const Home = () => {
    
    return (
        <>
        <Helmet>
            <title>Kevin Wang</title>
            <meta name="About Page" content="Portfolio Website" />
       </Helmet>
        <div className="body-top">
            <div className="text-section">
                <h1>Hey, I'm Kevin</h1>
                <p>
                    Currently, I'm a junior at New York University studying Computer Science and Finance.
                </p>
                <p>
                    Originally, I'm from sunny San Diego, but I'm currently based in New York City!
                    In terms of my interests, I really enjoy working with web apps and machine learning, but I am currently delving into Rust and low level programming. 
                    I'm currently looking for software engineering opportunities/internships for summer 2023.
                </p>
                <p>
                    Outside of school, I really enjoy playing video games and learning about history.
                    In fact, a niche hobby of mine is listening to history podcasts, so if you're interested 
                    I have a few recommendations above!
                </p>
                <p>
                    If you're interested, you can reach me at <a href="mailto:kyw2424@stern.nyu.edu!">kyw2424@stern.nyu.edu</a>
                </p>
            </div>
            <img className="my-pic" src={profile} alt="profile" />
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <div className='skill-title'>Languages</div>
            <div className='skills-list'>
                Python, JavaScript, CSS, HTML, Rust
            </div>
            <div className='skill-title'>Frameworks</div>
            <div className='skills-list'>
                React, MongoDB, Node, Express
            </div>
            <div className='skill-title'>Tools</div>
            <div className='skills-list'>
                Oracle SQL, Excel, Tableau, Git, Github, Windows
            </div>
            <div className='skill-title'>Packages</div>
            <div className='skills-list'>
                Pandas, Numpy, Scikit-learn
            </div>
            </div>
        {/* <Footer /> */}
    </>
        )
}

export default Home;