import React from 'react'
import Layout from '../components/layout/layout'

const AboutPage = () => {
    return (
        <Layout>
            <section className="longform-text">
                <h1>About me</h1>
                <p>
                    Hey, I'm Richard!
                </p>
                <p>
                    I'm a designer, developer, and human being on a quest to create more compassionate technology.
                </p>
                <p>
                    Growing up, I aspired to become a writer. However, I always had an outside interest in computers and video games, and all the magic they provided, from the Wii. But I decided that CSS was way too complicated.
                </p>
                <p>
                    I also grew up in the emergent days of social media as we know it today, with Facebook and YouTube—supremely powerful tools for connection, but also exacerbants of the pain of growing up as a teenager.
                </p>
                <p>
                    I rediscovered coding in college when I designed websites for a school club. When I discovered UX design in college, I was drawn to the call to design with purpose: that technology creators can directly influence the lives of the people they design for.
                </p>
                <p>
                    Today, I design in the service of creating that magic, and to do so in a responsible and empowering way. Since college, I've taught myself how to develop sites and apps in React.
                </p>
                <p>
                    I'm seeking to work with talented senior designers and developers to build elegant, delightful products that help people solve real problems through incisive design. I'm particularly excited about learning how to design in real company contexts, within real world constraints and communicative contexts.
                </p>
            </section>
            <section>
                <h2>Find me elsewhere:</h2>
                <ul>
                    <li>GitHub</li>
                    <li>Behance</li>
                    <li>Instagram</li>
                </ul>
                <h2>Interests</h2>
                <h3>Video games</h3>
                <p>
                    they are my lifeblood. 
                </p>
                <ul>
                    <li>Currently aiming to finish Dark Souls 3.</li>
                    <li>On deck: Metroid Dread, Dragon Quest XI.</li>
                    <li>I have a gaming blog, check it out here.</li>
                </ul>
                <h3>Music</h3>
                <p>
                    playing the guitar! Here's a small beat I worked on.
                </p>
                <h3>Running</h3>
                <p>
                    it's hard work, but I love it!
                </p>
            </section>
        </Layout>
    )
}

export default AboutPage
