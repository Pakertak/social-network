import Button from '../../components/FormControls/Button/Button';
import classes from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import Input from '../../components/FormControls/Textarea/Input';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.login}>
            <div>
                <Field
                    type={"text"}
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"}
                    name={"rememberMe"}
                    component={Input} /> remember me
            </div>
            {props.error && <div className={'form-summary-error'}>{props.error}</div>
}            <div>
                <Button>Login</Button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);