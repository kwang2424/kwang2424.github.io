import './index.scss';
import Napoleon from '../../assets/images/napoleon.png'
import Podcast from './Podcast';
const Podcasts = () => {
    return (
        <div className="body-pod">
            <div className="top">
                
                <div className="intro">
                <h1>Podcasts</h1>
                I’ve been interested in history ever since high school, but I struggled with how to further pursue my interests. 
                After searching around, I figured that podcasts suited me the best! If you are interested in my recommendations, 
                here are some of my favorites: 
                </div>
                <img className="nap" src={Napoleon} alt="napoleon"/>
            </div>
            <div className="pods">
                <Podcast 
                    title="History of Rome"
                    emoji="🏛️"
                    url="https://thehistoryofrome.typepad.com/"
                    description="My first and all-time favorite history podcast. Mike Duncan is 
                    an entertaining and thorough teacher, and helped me build a strong
                    foundation of Roman history. The podcast is a narrative and emperor-focused
                    which is to be expected from an introduction to the topic. 
                    Highly recommend this podcast if you like history at all, Mike Duncan
                    is incredibly entertaining and you learn a lot about ancient Rome, a civilization which still has 
                    enormous influence on our own lives. "
                />
                <Podcast
                    title="History of Byzantium"
                    emoji="☦️"
                    url="https://thehistoryofbyzantium.com/"
                    description="After finishing History of Rome, I was still desperate for more
                    Roman history content. So, I came upon across History of Byzantium which is meant to be
                    a continuation of Mike Duncan's podcast. Another amazing narrative-focused
                    podcast that details the relatively unknown
                    history of the Byzantines. It introduced me to
                    the rich history of the Orthodox church and gave me a better understanding of 
                    Eastern Europe. It is still ongoing, but beware that is quite long with almost 250 episodes."
                />
                <Podcast 
                    title="The Age of Napoleon"
                    emoji="⚔️"
                    url="https://twitter.com/AgeofNapoleon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    description="I first fell in love with history after taking AP Europoean History
                    in high school. Back then, the two individuals that I found so fascinating were Napoleon and Bismarck. So,
                    many years later when I discovered this podcast, it was right up my alley. The podcast goes into detail about
                    Napoleon's own life in Corsica and his meteroic rise up the ranks during the French Revolution to become
                    Emperor of the French. If you like 19th century European history at all, this is a podcast that you most
                    certainly will enjoy! This podcast is still ongoing as well with some lengthy episodes (~50 min)."
                />
                <Podcast
                    title="The History of China"
                    emoji="🐲"
                    url="https://thehistoryofchina.wordpress.com/"
                    description="As a Chinese-American, I have had to tackle with my Eastern and Western roots. In school, I
                    learned plenty about Western culture and history through a variety of classes. But, my knowledge of 
                    Eastern and especially Chinese history has always been lacking. As a result, I wanted a podcast
                    that wasn't focused on traditional European/western history. This podcast has helped me 
                    learn much more about China and its unimaginably long 2000 year history. It starts from its mythical origins and
                    is currently on the Ming Dynasty. Currently, I am at the Song dyasty period following the chaos of the Tang's collapse. 
                    Though it is quite overwhelming with too many emperors to keep track of, it really has enlightened me on the development of
                    China's history and culture."
                />
            </div>
        </div>
        )
}

export default Podcasts;