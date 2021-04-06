import Button from "../../../../components/Button/Button";
import { Field, reduxForm } from 'redux-form';
import classes from './PostInput.module.css';

let PostInput = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.postInput}>
            <Field component={"textarea"} name={'newPostText'} placeholder={'Enter your post'} />
            <Button>Add post</Button>
        </form>
    );
};

PostInput = reduxForm({ form: 'profilePostInput' })(PostInput)
export default PostInput;

