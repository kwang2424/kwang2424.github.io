import './index.scss';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import email from '../../assets/images/gmail.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-footer">
                <a href="mailto:kyw2424@stern.nyu.edu">
                    <img src={email} alt="mail"  />
                </a>
                <a href="https://github.com/Kevy729" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/kevin-wang-17984b16b/" rel="noopener noreferrer" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
        </div>
        )
}

export default Footer;