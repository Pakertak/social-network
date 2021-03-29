import React from 'react';

import classes from './Textarea.module.css';

const Textarea = ({
    className, disabled, defaultValue, ...attrs
}) => {

    const classNames = `${classes.txtarea} 
    ${className ? classes[className] : ''}`;

    return (
        <textarea
            className={classNames}
            disabled={disabled}
            {...attrs}
            defaultValue={defaultValue}
        />
    );
};

Textarea.defaultProps = {
    className: '',
    disabled: false,
    defaultValue: ''
};

export default Textarea;