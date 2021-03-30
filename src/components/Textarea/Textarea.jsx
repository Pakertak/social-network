import React from 'react';

import classes from './Textarea.module.css';

const Textarea = ({
    className, 
    disabled, 
    onChange,
    placeholder,
    ...attrs
}) => {

    const classNames = `${classes.textarea} 
    ${className ? classes[className] : ''}`;

    return (
        <textarea
            className={classNames}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            {...attrs}
            
        />
    );
};

Textarea.defaultProps = {
    onChange: () => {},
    className: '',
    disabled: false,
    placeholder: ''
};

export default Textarea;