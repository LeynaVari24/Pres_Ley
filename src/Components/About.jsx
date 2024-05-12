/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am Leyna Varinia Pacheco Quisbert, a woman passionate about technology and education. I love learning new things and sharing my knowledge with others. I have a great ability to explain complex concepts in a simple and accessible way.";
  "I am a proactive person and I like to challenge myself with new challenges. I enjoy working on projects that have a positive impact on society. I consider myself a creative and innovative woman, always looking for new ways of doing things.";
  
  "I am a mother and I am concerned about the future of new generations. That is why I am dedicated to empowering women through education and technology. I believe that women have the potential to change the world and I am committed to helping them reach their full potential.";"
  
  "In short, I am an enthusiastic, creative and committed person. I am passionate about learning, sharing and helping others. I believe that education and technology are powerful tools to transform lives and I am determined to use them to make the world a better place.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "Generative Artificial Intelligence",
  "Databases",
  "Agile",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
