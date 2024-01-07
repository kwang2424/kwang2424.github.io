import './index.scss';
import Napoleon from '../../assets/images/napoleon.png'
import Podcast from './Podcast';
import Helmet from 'react-helmet';
const Podcasts = () => {
    return (
        <>
        <Helmet>
            <title>Podcasts</title>
            <meta name="About Page" content="Portfolio Website" />
       </Helmet>
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
                    is currently on the Ming Dynasty. Currently, I am at the end of the Ming dyasty and the
                    beginning of the Qing period with the rise of Nurhaci in the North. 
                    Though it is quite overwhelming with too many emperors to keep track of, it really has enlightened me on the development of
                    China's history and culture."
                />
                <Podcast
                    title="The Siècle"
                    emoji="🥂"
                    url="http://thesiecle.com/"
                    description="As a good sequel to the Age of Napoleon, this podcast covers a much less 
                    understood and appreciated period of French history. For me, it was an interesting look at a 
                    country and society that underwent revolution, dictatorship, and nonstop war in a period of 30 years,
                    and how it developed as a result. Obviously, an issue with these types of narrative histories are that 
                    they almost focus entirely on high-level politics, but I think Montgomery does a good job of talking about 
                    other parts of society that he found interesting in this time. Despite its relevance to our current times,
                    I still think the 19th century doesn't get much attention since it is sandwiched between the 20th century and 
                    the Napoleonic Wars / French Revolution before. Also, as an American, I also thought it was interesting
                    how Lafayette's legacy seems to be quite different in France."
                />
                <Podcast
                    title="The French History Podcast"
                    emoji="🍾"
                    url="https://www.thefrenchhistorypodcast.com/"
                    description="As you can see, during this time I went on quite the French history binge. While I liked
                    the Siecle because it focused on a period that I didn't know much about, I also wanted something to help
                    supplement my lack of general French history. I've always leaned more towards podcasts than books because 
                    for me it actually has been hard to find general overall narrative history books, since most that I've found
                    tend to be too specific, dense, or scholarly. With the background knowledge from the podcast, it can allow
                    one to dive deeper into books that are about specific topics that you find interesting. I think what this podcast
                    does best is cover many facets of French history and culture, and it can be a good way to find more specific 
                    topics of interest. For example, a supplement I really enjoyed was about France's reliance on nuclear
                    energy rather than fossil fuels like their neighbors."
                />
                <Podcast
                    title="The History of Philosophy Without Any Gaps"
                    emoji="🧠"
                    url="https://www.historyofphilosophy.net/"
                    description="This is actually one of the first podcasts I listened to, but I guess I didn't finish much
                    when I first listened to it. Recently I've wanted to read more philosophy, so that naturally led me 
                    back to this podcast. Obviously, it covers less about each philosopher's arguments and focuses more on their
                    their general beliefs and lives, but that's a good starting point. I also started listening to Philosophize This!, 
                    which leads to some overlap, but they help provide a better overview of each thinker. Overall, it's a pretty
                    solid podcast, and I really like how they cover less well-known thinkers."
                />
                <Podcast
                    title="Casting Through Ancient Greece"
                    emoji="🏺"
                    url="https://castingthroughancientgreece.com/"
                    description="I've been recently trying to read more philosophy, and I was that one should generally
                    follow chronological order since philsophers tend to respond to those before them. So, the most
                    obvious starting place for this is Plato / Aristotle, but to understand them you also need to study
                    Ancient Greece. This led me to this podcast, and it's been a great supplement to Herodotus' Histories which
                    I have also been trying to read (part of my resolution to read more as well). Right now I'm at the beginning
                    where it describes the origins of Sparta, Athens, and Persia, and I've really been enjoying it."
                />
            </div>
        </div>
        </>
        )
}

export default Podcasts;