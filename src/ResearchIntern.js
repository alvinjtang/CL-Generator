import React from 'react';

const ResarchIntern = ({ state }) => {
  const { companyName, intro } = state;
  return (
    <div>
      <p>
        Dear{' '}{companyName ? companyName : <u className="blank"><em>Doctor's Name</em></u>},
      </p>
      <p className="p">
        I was doing some reading about your research and found your latest work
        fascinating. Your paper on{' '}{intro ? intro : <u className="blank"><em>...details about a recent paper (min 3 sentences)</em></u>}{' '}As a third year Biology student at Temple University with an interest in Kinesiology and Physical Therapy, I can easily envision passionately contributing to your lab's studies this summer and believe I would be a great fit as a Summer Research Intern.
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

export default ResarchIntern;
