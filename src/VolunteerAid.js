import React from 'react';

const VolunteerAid = ({ state }) => {
  const { companyName, culture, intro, team, position } = state;
  return (
    <div>
      <p>
        Dear{' '}
        {companyName ? (
          companyName
        ) : (
          <u className="blank">
            <em>Company Name</em>
          </u>
        )}{' '}
        {team ? (
          team
        ) : (
          <u className="blank">
            <em>Team</em>
          </u>
        )}{' '}
        Team,
      </p>
      <p className="p">
        {intro ? (
          intro
        ) : (
          <u className="blank">
            <em>Introduction (min 3 sentences)</em>
          </u>
        )}{' '}
        As a software engineer, I can easily envision passionately contributing
        to{' '}
        {companyName ? (
          companyName
        ) : (
          <u className="blank">
            <em>Company Name</em>
          </u>
        )}
        ’s developments and upcoming features. I’m excited about{' '}
        {companyName ? (
          companyName
        ) : (
          <u className="blank">
            <em>Company Name</em>
          </u>
        )}
        ’s culture of{' '}
        {culture ? (
          culture
        ) : (
          <u className="blank">
            <em>Culture</em>
          </u>
        )}
        , and believe I’m a great fit for the engineering team.
      </p>
      <p className="p">
        In July 2019, I graduated as a software engineering teaching fellow from
        Fullstack Academy of Code. I specialize in JavaScript with experience
        programming with React, Redux, Node, Express, Sequelize and PostgreSQL.
        I'm knowledgeable of TDD using Mocha/Chai, proper git workflow, Agile
        development, and CI/CD. I’m also experienced in UI development with
        HTML, CSS and Sass. I'm currently teaching myself TypeScript and
        GraphQL. I brand myself as a Front-End Developer because of my interest
        in design, browser data flow and component interaction, but I believe
        that I also have strong knowledge of backend data flow as well as data
        structure algorithms and would be well equipped for a general software
        engineering role as well. I've used these skills to build multiple full
        stack applications following Agile methodologies involving a task
        management platform (Trello and the deprecated Waffle.io), daily
        stand-ups and weekly code reviews. I implore you to please peruse my
        portfolio site:{' '}
        <a href="https://www.alvintang.dev">https://www.alvintang.dev</a>.
      </p>
      <p className="p">
        I am a strong believer in creative thinking, continuous iteration and
        collaboration when developing web applications. While working on a music
        streaming application, I worked on both front and back ends ensuring
        semantic routing in our REST API, consistent data flow with our cloud
        storage system, organized component architecture as well as UI/UX
        development and design. One big contribution was making the main song
        library page engaging to the user so I collaborated with a team member
        to implement a dynamic real-time audio visualizer displayed in the
        background. One of the biggest challenges was integrating the visualizer
        with React. Many solutions and documentation we found utilized DOM
        manipulation in vanilla JavaScript. In order to resolve this issue, I
        transferred the logic to React from scratch, and after multiple tests
        and iterations we managed to produce a successful outcome that became
        one of our team’s proudest features. I would love to bring the same
        determination, problem-solving skills and creativity to{' '}
        {companyName ? (
          companyName
        ) : (
          <u className="blank">
            <em>Company Name</em>
          </u>
        )}{' '}
        as a{' '}
        {position ? (
          position
        ) : (
          <u className="blank">
            <em>Position</em>
          </u>
        )}{' '}
        and am eager to learn more about the opportunity.
      </p>
      <p>
        Sincerely,
        <br />
        Alvin Tang
      </p>
    </div>
  );
};

export default VolunteerAid;
