import './index.scss';

const Project = ({ image, link, title, description }) => {
    return (
        <div className="project-container">
            <a href={link} >
                <img src={image} alt="project"/>
            </a>
            <div className="project-desc">
                <div className="project-title">{title}</div>
                <div className="project-text">{description}</div>
            </div>
        </div>
        )
}

export default Project;