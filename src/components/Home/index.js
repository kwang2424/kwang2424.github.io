import './index.scss';
import profile from '../../assets/images/headshot_crop.jpg'
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
                    Currently, I'm a recent New York University Computer Science and Finance graduate who is working as a Software Engineer at Mathematica.
                </p>
                <p>
                    Originally, I'm from sunny San Diego, but I'm currently based in New York City!
                    In terms of my interests, I am experienced with and really enjoy working with the web. I've recently been spending a lot of time learning about
                    machine learning (specifically deep learning and reinforcement learning), and have been building some small scale projects to cement my knowledge.
                    Lately I have also been learning about assembly and low-level programming, and my short to medium-term goal is to develop a compiler or even an OS
                    to learn how it operates under the hood.
                </p>
                <p>
                    Outside of school, I really enjoy playing hockey, reading about philosophy/psychology/history, and playing video games.
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
                Python, JavaScript, C#, CSS, HTML, Rust, C
            </div>
            <div className='skill-title'>Frameworks</div>
            <div className='skills-list'>
                React, SQL, Angular, .NET, MongoDB, Node.js, Express, PyTorch, Pandas
            </div>
        {/* <Footer /> */}
    </>
        )
}

export default Home;
