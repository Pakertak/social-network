import { connect } from 'react-redux';
import { addPost } from '../../../redux/reducers/profile-reducer'
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    };
};

const PostsContainer = connect(mapStateToProps, {
    addPost
})(Posts);


export default PostsContainer;