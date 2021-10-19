import React from 'react';

const MyComponentFunc = ({name,children}) => {
    return (
        <div>
            <h2>Hello {name}</h2>
            {children}
        </div>
    );
};

export default MyComponentFunc; 