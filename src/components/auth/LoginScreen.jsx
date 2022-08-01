import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { useForm } from '../../Hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';


import googleIcon from '../../assets/google-icon.svg';

export const LoginScreen = () => {

  const { loading } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    email: "sfssd",
    password: "1234567"
  })

  const { email, password } = formValues;

  const handleLogin = ( event ) => {
    event.preventDefault();
    dispatch( startLoginEmailPassword(email, password) )
  }

  const handleGoogleLogin = ( event ) => {
    event.preventDefault();
    dispatch( startGoogleLogin() );
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form className="auth__form-container" onSubmit={ handleLogin }>
      
        <div className="auth__form-group">
            <input 
              type="text"
              placeholder=" "
              name="email" 
              className="auth__input"
              autoComplete="off"
              value={ email }
              onChange={ (e) => handleInputChange(e) }
            />
            <label htmlFor="email" className="auth__form-label">Email:</label>
        </div>

        <div className="auth__form-group">
          <input 
            type="password"
            placeholder=" " 
            name="password"
            className="auth__input"
            autoComplete="off"
            value={ password }
            onChange={ (e) => handleInputChange(e) }
          />
          <label htmlFor="password"className="auth__form-label">Password:</label>
        </div>


      
        <button
          className="auth__form-submit"
          type="submit"
          disabled={ loading }
        >
          Login
        </button>

      </form>

        <hr />

        <div className="auth__social-networks">
          <span>Login with Social networks</span>

          <div className="google-btn pointer">
            <div className="google-icon-wrapper">
              <img src={googleIcon} alt="google-login" className="google-icon" />
            </div>
            <p className="btn-text" onClick={handleGoogleLogin}>
              Sign in with google
            </p>
          </div>
        </div>

        <Link to={"/auth/register"} className="auth__link link" >
          Create new Account
        </Link>
    </>
  )
}
