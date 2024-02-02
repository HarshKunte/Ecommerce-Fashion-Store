import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import './signin.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email,password);
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/wrong-passowrd'){
        alert('incorrect email or password')
      }
      console.log(error);
    }
  };

  const signInWithGoogle = async () =>{
    await signInWithGooglePopup();
}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;