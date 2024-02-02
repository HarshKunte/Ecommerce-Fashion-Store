import SigninForm from "../../components/signin/signin.component";
import SignUpForm from "../../components/signup/signup.component";
import './authentication.styles.scss'

const Authentication = () => {
    
    return (
        <div className="auth-container">
            <SignUpForm/>
            <SigninForm/>
        </div>
    );
}

export default Authentication;
