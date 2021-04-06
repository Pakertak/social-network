import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activeEditMode() {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    };

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input
                                autoFocus
                                type="text"
                                value={this.state.status}
                                onBlur={this.deactivateEditMode.bind(this)}
                                onChange={this.onStatusChange.bind(this)}
                            />
                        </div>
                        :

                        <div className={classes.status}>
                            <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || 'Input status'}</span>
                        </div>
                }
            </div>

        );
    }
};

export default ProfileStatus;