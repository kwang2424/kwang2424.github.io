import { Link } from 'react-router-dom';
import './index.scss';
// import duckbill from '../../assets/images/duckbill.jpg'

const Navigation = () => {
    return (
        <div className="nav-bar">
            <Link to="/">
                <h2 className="hiero-icon">{'\uD80C\uDC21'}</h2>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/podcasts">Podcasts</Link>
                <a href="https://drive.google.com/file/d/1QFicLofXnQo5YLsUHJNuTXO_pDIPr-Z7/view?usp=sharing"_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </nav>
        </div>
        
        )
}

export default Navigation;
