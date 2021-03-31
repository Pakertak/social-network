import { connect } from 'react-redux';
import { addPostCreator, updateNewPostCreator } from '../../../redux/reducers/profile-reducer'
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostCreator({
                text
            }));
        }
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer;