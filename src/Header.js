import React from 'react';

const Header = ({state}) => {
    const {date, companyName, address, team} = state;
    return (
        <div>
            <p>
                Alvin Tang<br/>
                New York, NY<br/>
                (727) 688-0027<br/>
                alvintangdesigns@gmail.com
                <br/>
                <br/>
                {date ? date : <u className="blank"><em>Date</em></u>}
                <br/>
                <br/>
                {companyName ? companyName : <u className="blank"><em>Company Name</em></u>}<br/>
                {team ? team : <u className="blank"><em>Team</em></u>} Team<br/>
                {address ? address.split(',')[0] : <u className="blank"><em>Address</em></u>}<br/>
                {[address.split(',')[1],address.split(',')[2]].join(', ')}<br/>
            </p>
        </div>
    )
}

export default Header;