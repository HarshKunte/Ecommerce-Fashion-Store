import SignUpForm from "../../components/signup/signup.component";
import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const Signin = () => {
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(response.user)
        console.log(response);
    }
    return (
        <div>
            <SignUpForm/>
            <button onClick={logGoogleUser}>Sign In With Google PopUP</button>
        </div>
    );
}

export default Signin;
