import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import Stack from '../components/stack/Stack'
import Button from '../components/button/Button'
import { Github, Behance, Globe, Controller, CloudMoonFill, FileMusicFill } from 'react-bootstrap-icons'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About me" />
            <section className="longform-text">
                <h1>About me</h1>
                <Stack gap="lg" justifyContent='space-between'>
                    <div>
                        <p>
                            Hey, I'm Richard!
                        </p>
                        <p>
                            I'm a designer, developer, and human being on a quest to create more compassionate technology.
                        </p>
                        <p>
                            Growing up, I aspired to become a writer. However, I always had an outside interest in computers and video games, and all the magic they provided, from the Wii.
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
                    </div>
                    <aside>
                        <Stack asList={true} flexDirection="column" gap="sm" className="unstyled-list">
                            <li>
                                <Button 
                                    icon={Github}
                                    variant="secondary"
                                    renderContainer={props =>
                                        <a href="https://github.com/rxnaij" {...props} />
                                    }
                                >
                                    GitHub
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    icon={Behance}
                                    variant="secondary"
                                    renderContainer={props =>
                                        <a href="https://be.net/richardbludesign" {...props} />
                                    }
                                >
                                    Behance
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    icon={Globe}
                                    variant="secondary"
                                    renderContainer={props => <a href="https://github.com/rxnaij" {...props} />}
                                >
                                    Super Save Slot
                                </Button>
                            </li>
                        </Stack>
                        <h2>Current interests</h2>
                        <p>
                            Check out my blog, <a href="https://kind-lumiere-cbb8a1.netlify.app/">Super Save Slot</a>, where I talk about the games I've been playing!
                        </p>
                        <h4><Controller size={24} style={{ display: 'inline-block' }}/> Now playing:</h4>
                        <ul>
                            <li>Dark Souls III (PS4)</li>
                            <li>Persona 5 (PS4)</li>
                            <li>God of War (2018) (PS4)</li>
                        </ul>
                        <h4><CloudMoonFill size={24} style={{ display: 'inline-block' }}/> On deck:</h4>
                        <ul>
                            <li>Metroid Dread (Switch)</li>
                            <li>Dragon Quest XI: Echoes of an Elusive Age (Switch)</li>
                            <li>Persona 5 Royal (PS4)</li>
                        </ul>
                        <h3><FileMusicFill size={24} style={{ display: 'inline-block' }}/> Music</h3>
                        <p>
                            Persona 5's soundtrack is PERFECT. Learning many of its tracks on guitar.
                        </p>
                    </aside>
                </Stack>
            </section>
        </Layout>
    )
}

export default AboutPage
