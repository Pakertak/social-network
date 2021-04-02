
import React from 'react';
import classes from './Paginator.module.css';

const Paginator = ({
    children, onToggle, className, disabled, active, invert, ...attrs
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

Paginator.defaultProps = {
    children: 'Default button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: false,
};

export default Paginator;