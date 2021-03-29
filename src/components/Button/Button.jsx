import React from 'react';
import classes from './Button.module.css';

const Button = ({
    children, onClick, className, disabled, active, invert, ...attrs
}) => {
    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const classNames = `${classes.btn} 
    ${className ? classes[className] : ''} 
    ${active ? classes.active : ''} 
    ${invert ? classes.invert : ''}`;

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            className={classNames}
            disabled={disabled}
            onClick={onClickAction}
            {...attrs}
        >
            {children}
        </Tag>
    );
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: false,
};

export default Button;