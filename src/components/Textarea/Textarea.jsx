import React from 'react';

import classes from './Textarea.module.css';

const Textarea = ({
    className
}) => {

    const classNames = `${classes.textarea} 
    ${className ? classes[className] : ''}`;

    return (
        <textarea
            className={classNames}
        />
    );
};

Textarea.defaultProps = {
    className: ''
};

export default Textarea;