import Button from "../../../../components/FormControls/Button/Button";
import { Field, reduxForm } from 'redux-form';
import classes from './PostInput.module.css';
import { maxLengthCreator, required } from '../../../../utils/validators/index';
import Textarea from "../../../../components/FormControls/Textarea/Textarea";

const maxLength100 = maxLengthCreator(100);

let PostInput = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.postInput}>
            <Field
                component={Textarea}
                name={'newPostText'}
                placeholder={'Enter your post'}
                validate={[required, maxLength100]}
            />
            <Button>Add post</Button>
        </form>
    );
};

PostInput = reduxForm({ form: 'profilePostInput' })(PostInput)
export default PostInput;

