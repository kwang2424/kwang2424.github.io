import './index.scss';
import profile from '../../assets/images/itsme_crop.jpg'

const Home = () => {
    return (
        <>
        <div className="body-top">
            <div className="text-section">
                <h1>Hey, I'm Kevin</h1>
                <p>
                    Currently, I'm a junior at New York University studying Finance and Computer Science.
                </p>
                <p>
                    Originally, I'm from sunny San Diego, but I'm currently based in New York City!
                    In terms of my interests, I really enjoy working with web apps and machine learning (specifically NLP). 
                    I'm currently looking for software engineering opportunities for the coming school year and summer 2023.
                </p>
                <p>
                    Outside of school, I really enjoy playing video games and learning about history.
                    In fact, a niche hobby of mine is listening to history podcasts, so if you're interested 
                    I have a few recommendations above!
                </p>
                <p>
                    If you're interested, you can reach me at kyw2424@stern.nyu.edu!
                </p>
            </div>
            <img className="my-pic" src={profile} alt="profile" />
        </div>
        <div class="skills">
            <h1>Skills</h1>
            <div className='skill-title'>Languages</div>
            <div className='skills-list'>
                Python, Java, JavaScript, C, CSS, HTML
            </div>
            <div className='skill-title'>Frameworks</div>
            <div className='skills-list'>
                React, Bootstrap, Node
            </div>
            <div className='skill-title'>Tools</div>
            <div className='skills-list'>
                Oracle SQL, Tableau, Git, Github, Windows
            </div>
            <div className='skill-title'>Packages</div>
            <div className='skills-list'>
                Pandas, Numpy, Scikit-learn, Tkinter
            </div>
            </div>
        {/* <Footer /> */}
    </>
        )
}

export default Home;