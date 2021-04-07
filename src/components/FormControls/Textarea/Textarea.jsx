import React from 'react';
import formControlClasses from '../FormControls.module.css';
import classes from './Textarea.module.css';

const Textarea = ({
    input,
    meta,
    ...props
}) => {
    const hasError = meta.touched && meta.error;
    const classNames = `${classes.textarea} ${hasError ? formControlClasses.invalid : ''} 
    ${props.className ? classes[props.className] : ''}`;

    return (
        <div className={classes.container}>
            <div>
                <textarea
                    {...props}
                    {...input}
                    className={classNames}
                />
            </div>
            {hasError && <span className={formControlClasses.errorText}>{meta.error}</span>}
        </div>
    );
};

Textarea.defaultProps = {
    className: ''
};

export default Textarea;