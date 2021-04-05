import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile
                {...this.props}
                // profile={this.props.profile}
            />
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile
});

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);