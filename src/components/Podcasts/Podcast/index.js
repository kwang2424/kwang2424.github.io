import './index.scss';

const Podcast = ({ title, emoji, url, description }) => {
    return (
        <div className="podcast-container">
            <a href={url}>
                <div className="podcast-title" >{title}</div>
                <div className="podcast-emoji">{emoji}</div>
            </a>
            <div className="podcast-description">
                {description}
            </div>
        </div>
        )
}

export default Podcast;