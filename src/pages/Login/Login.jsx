import Button from '../../components/Button/Button';
import classes from './Login.module.css';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.login}>
            <div>
                <Field type={"text"} placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field type={"text"} placeholder={"Login"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>

            <div>
                <Button>Login</Button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = () => {

    const onSubmit = (formData) => {
        console.log('Submit: ', formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}


export default Login;