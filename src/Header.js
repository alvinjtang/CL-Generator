import React from 'react';

const Header = ({ state }) => {
  const { date, companyName, address, title } = state;
  return (
    <div>
      <p>
        Brandon Li
        <br />
        3rd Year Biology Major
        <br />
        (917) 838-7202
        <br />
        brandon.li@temple.edu
        <br />
        <br />
        {date ? (
          date
        ) : (
          <u className="blank">
            <em>Date</em>
          </u>
        )}
        <br />
        <br />
        {companyName ? (
          companyName
        ) : (
          <u className="blank">
            <em>Doctor's Name</em>
          </u>
        )}
        <br />
        {title ? (
          title
        ) : (
          <u className="blank">
            <em>Doctor's Title</em>
          </u>
        )}
        <br />
        {address ? (
          address.split(',')[0]
        ) : (
          <u className="blank">
            <em>Address</em>
          </u>
        )}
        <br />
        {[address.split(',')[1], address.split(',')[2]].join(', ')}
        <br />
      </p>
    </div>
  );
};

export default Header;
