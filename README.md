# ParticleHoppers

## Summary
A user-friendly, all-in-one web application for mental wellbeing, offering guided breathing exercises, daily affirmations, and a supportive community.

## Project Members
- [Tristan Tan](https://github.com/tristantanjh)
- [Ang Jon Ming](https://github.com/jon3r4de)

## Team Details
- Team ID: 5786
- Proposed Proposed Level of Achievement: Project Gemini

## Links to Project Materials
:link: [Project Log](https://docs.google.com/spreadsheets/d/1cML4a_aWpPTm2hQLwyhGzjmt5MItagE3rgn5ERFA23M/edit?usp=sharing) <br />
#### Milestone 1:
:link: [Project Poster](https://drive.google.com/file/d/1wKMOjY1evthR4v6OxI13As8c7c-RTsiU/view?usp=share_link) <br />
:link: [Project Video](https://drive.google.com/file/d/1SaEuSlFxoPv6LiglToKESfpwx5Rzdj6P/view?usp=share_link) <br />
:link: [Figma Mockup](https://www.figma.com/proto/GEaP6orIS4Les171C551vj/Mockups?node-id=1-55&starting-point-node-id=1%3A55) <br />

## Installation
- Install Node.js from their [website](https://nodejs.org/en).
- Install Nodemon (if not already installed):
```bash
npm install -g nodemon
```
- After that, run these commands in the terminal:
```bash
git clone https://github.com/tristantanjh/ParticleHoppers.git
cd ParticleHoppers 
npm install
nodemon
```
- Follow the steps in the `.env.example` file before proceeding.
- Finally, explore our app by going to `localhost:3000` in your browser!

---

### Motivation
The transition from a more relaxed lifestyle to the fast-paced environment of university can be challenging for many freshmen.  University life is often characterized by demanding coursework, tight schedules, and competing priorities, which can be overwhelming for students who are not used to it. The sudden increase in pace of life can be particularly challenging for students in academically rigorous courses, who may find it difficult to keep up with the demanding workload.

Moreover, many students may not be equipped with the necessary tools to manage their stress and anxiety effectively. They may not have had previous experiences dealing with high-pressure situations or may have relied on different coping mechanisms before entering university. The lack of preparation can exacerbate feelings of being overwhelmed, leading to stress and anxiety.

### Aim
Our aim is to ensure that mental health resources and tools for managing mental health are as easily accessible and user-friendly as possible.

### User Stories
- As a schooling student who is under a lot of stress, having to juggle between assignments, examinations, extracurriculars, and others, I want to be able to have a simple to use platform where I can easily regulate my stress and regain the motivation to continue on.
- As someone struggling with mental health issues, I want to be able to have ready access to sufficient and quality resources to help me tackle them.
- As a student who is experiencing new environments and schedules, I want to have an easy way to pen down my jumbled thoughts to help me understand them more clearly.
- As a student who frequently feels overwhelmed, I would like to take periodic mental breaks to reflect and to take small steps back to reflect and assess my current situation holistically, which will allow me to gain a more positive outlook and cope better with the challenges I face.

### Features and Timeline
We propose the development of a mental health mobile application that will provide users with two essential features to improve their well-being: meditation exercises, and daily affirmations. The app aims to promote self-awareness, mindfulness, and positivity in users.

The first feature, meditation exercises, will offer users guided meditation practices that are designed to reduce stress, anxiety, and depression. The app will provide a range of meditation sessions that cater to different needs and preferences. Users can choose from a variety of guided meditations, including mindfulness or breathing exercises.

The second feature, daily affirmations, will provide users with positive messages that they can use to start their day on a positive note. The app will offer a selection of affirmations that users can choose from, and they can customize their own affirmations if they prefer. This will help users to boost their self esteem, as well as reducing their stress and anxiety levels.

The meditation exercises and daily affirmations are to be implemented maximally by mid June, such that we can dedicate July to any further possible additions in features, or debugging and refining of the application. In the last few weeks up until the deadline, we intend to connect our application to a database which allows users to sign up and log in to track their activity.

### How are we different from similar platforms?

- Format and Flow of application

  - We aim to make our app as simple as possible to use, with a streamlined and linear flow that prevents overwhelming users with information. By prioritizing user experience, we ensure that navigating our app feels intuitive and effortless, allowing you to focus on your journey towards inner balance and serenity. 

- Choice of mindfulness activities

  - Our unique combination of guided breathing exercises, daily affirmations along with a supportive community, creates a harmonious and user-friendly space for the user’s mental wellbeing needs.

### Tech Stack
| Tech | Purpose | Reason For Choice | Category |
| -------- | -------- | -------- | -------- |
| ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)   | Styling for visual presentation and layout of web pages. | Fundamental in designing an appealing and responsive website. | Language |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   | Markup language for structuring web pages and displaying content. | Essential in building complicated web pages. |  Language |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | Enables interactivity with the web application. | Gives the web application its functionality by adding interactivity and dynamic behavior to the website on the client-side. |  Language |
| ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) | NoSQL Database to store user information and in-application data. | - Subsequent ease of scalability due to horizontal scaling. </br></br> - Ease of implementation due to its native support for JavaScript. | Database |
| ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) | Pre-designed CSS templates and JavaScript Components | To streamline the process of building a responsive and visually appealing web application. | Framework |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) | Back-End web application framework for server-side development. | - Ability to use JavaScript for both client-side and server-side development for seamless development. </br></br> - Offers an extensive ecosystem with numerous developer-friendly features. | Framework |
| ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) | Distributed version control system used for tracking changes in source code. | - Allows for easy tracking and managing changes to source code over time. </br></br> - Enables seamless collaboration among our developers working on the same project. | Version Control |
| ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) | Cloud hosting platform that simplifies the deployment and management of web applications. | - Provides infrastructure and automation tools to easily deploy applications to various cloud providers, ensuring scalability, reliability, and ease of maintenance. </br></br> - It provides a free tier, making it cost-effective for us to deploy and run our applications on the internet. | Server Hosting |

### Timeline and Executables
- 3rd week of May: Finalized pitch for Orbital Lift-off
- 4th week of May: Created Mockup
- 5th week of May: Pick up necessary technologies - Nodejs, Expressjs, Firebase
- 1st week of June: Finalized minimum data sets and do diagrams
- 2nd week of June: Start building database (collection of user login details)
- 3rd week of June: Expand on features of website (Breathing exercise, Daily quotes)
- 4th week of June: Testing and debugging
- 1st week of July: Implementation of peer teams’ suggestions
- 2nd week of July: Implement additional capabilities 
- 3rd week of July: Testing and debugging

### Mockups and Technical Proof
#### Mockup and Flow
![Mockup](https://drive.google.com/uc?export=view&id=1SNqg1pd1vwzpWkT5gAW3eBN-s7L188Gy)

#### Landing and Login Pages
![Home Page](https://drive.google.com/uc?export=view&id=1F1Hy0LL_bXp2AhKbZUpv0fUTJwa_TDIz)
![Sign Up](https://drive.google.com/uc?export=view&id=1dFurgurD4PW5HbWTLjvT7Tm8ymriw_I1)
![Log In](https://drive.google.com/uc?export=view&id=12ECMO7rFvHTxC8J8DQedXLzc5xy5x4hD)









