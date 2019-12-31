import React from 'react';

const VolunteerAid = ({ state }) => {
  const { companyName, intro } = state;
  return (
    <div>
      <p>
        Dear{' '}{companyName ? companyName : <u className="blank"><em>Doctor's Name</em></u>},
      </p>
      <p className="p">
        I am currently a third year Biology student at Temple University with an interest in Kinesiology and Physical Therapy. I was doing research on your office and was really intersted in the work that you do. I was particularly intersted in {' '}{intro ? intro : <u className="blank"><em>...specific details about their practice(min 3 sentences)</em></u>}{' '}I can easily envision passionately assisting you this summer and believe I would be a great fit as a Summer Volunteer PT Aid.
      </p>
      <p className="p">
        {/* TYPE LETTER HERE */}
        I would love to set up a time to talk to you more about opportunities for the summer when you are available. I am eager to learn more about your studies and how I can contribute.
      </p>
      <p>
        Sincerely,<br />
        Brandon Li
      </p>
    </div>
  );
};

export default VolunteerAid;
