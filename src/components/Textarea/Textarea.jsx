import React from 'react';

import classes from './Textarea.module.css';

const Textarea = ({
    className, 
    disabled, 
    textareaRef,
    onChange,
    ...attrs
}) => {

    const classNames = `${classes.textarea} 
    ${className ? classes[className] : ''}`;

    return (
        <textarea
            ref={textareaRef}
            className={classNames}
            disabled={disabled}
            onChange={onChange}
            {...attrs}
            
        />
    );
};

Textarea.defaultProps = {
    textareaRef: React.createRef(),
    onChange: () => {},
    className: '',
    disabled: false
};

export default Textarea;