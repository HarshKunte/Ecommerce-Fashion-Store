import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const Signin = () => {
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>
            <button onClick={logGoogleUser}>Sign In With Google PopUP</button>
        </div>
    );
}

export default Signin;
