import React from 'react';
import formControlClasses from '../FormControls.module.css';
import classes from './Textarea.module.css';

const Input = ({
    input,
    meta,
    ...props
}) => {
    const hasError = meta.touched && meta.error;
    const classNames = `${hasError ? formControlClasses.invalid : ''} 
    ${props.className ? classes[props.className] : ''}`;

    return (
        <div className={classes.container}>
            <div>
                <input
                    {...props}
                    {...input}
                    className={classNames}
                />
            </div>
            {hasError && <span className={formControlClasses.errorText}>{meta.error}</span>}
        </div>
    );
};

Input.defaultProps = {
    className: ''
};

export default Input;