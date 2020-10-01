import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({title}) => (
    <div className="header">

        <h1>
        <span className="quote-icon-left">
            <i id="left" className="fa fa-quote-left" aria-hidden="true"/>
        </span>
            {title}
        <span className="quote-icon-right">
        <i id="right" className="fa fa-quote-right" aria-hidden="true"/>
    </span>
        </h1>

    </div>
);

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
