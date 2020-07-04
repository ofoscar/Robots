import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{
            scrollbarWidth: 'none',
            overflowY: 'scroll', 
            border: '5px solid black', 
            height: '465px'
        }}>
            {props.children}
        </div>
    );
};

export default Scroll;