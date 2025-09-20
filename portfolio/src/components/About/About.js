import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/mee.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Shubham Avhad</strong>. 21 years old, curious and always exploring new ideas. I love reading, learning, and discovering new perspectives. When I’m not with a book, you’ll often find me on my bike, taking road trips without a destination—just enjoying the freedom of the ride and the journey itself. I value growth, creativity, and experiences that push me out of my comfort zone.
            </ScrollAnimation>
            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into technology began with a deep curiosity for problem-solving, which led me to pursue Computer Engineering. Along the way, I discovered my passion for blockchain and web development, diving into smart contracts, decentralized applications, and the possibilities of Web3. These experiences have sharpened my skills, strengthened my problem-solving mindset, and fueled my drive to contribute to the future of decentralized technology.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              As the Blockchain Lead at the Google Developers Group in my college, I conducted workshops and seminars, helping beginners learn and explore blockchain technology. Looking ahead, I’m excited to continue contributing to impactful projects, with a focus on blockchain, web development, and building solutions that push the boundaries of innovation.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
