import React from 'react'
import Section from '../ui/Section'

const About = () => {
    return (
        <Section title="About Me" aria-label="About Me Section">
            <div className="flex flex-col space-y-4 text-justify md:text-left">
                <p>
                    Hi! I&apos;m Julienne, a software developer specializing in building exceptional digital experiences. Currently, I&apos;m focused on developing responsive web applications.
                </p>
                <p>
                    Feel free to connect with me on social media!
                </p>
            </div>
        </Section>
    )
}

export default About
