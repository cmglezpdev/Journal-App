import { Link } from "react-router-dom"

import googleIcon from '../../assets/google-icon.svg';

export const LoginScreen = () => {

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form className="auth__form-container">
      
        <div className="auth__form-group">
            <input 
              type="text"
              placeholder=" "
              name="email" 
              className="auth__input"
              autoComplete="off"
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
          />
          <label htmlFor="password"className="auth__form-label">Password:</label>
        </div>


      
        <button
          className="auth__form-submit"
          type="submit"
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
            <p className="btn-text">
              Sign in with google
            </p>
          </div>
        </div>

        <Link to={"/auth/register"} className="auth__link" >
          Create new Account
        </Link>
    </>
  )
}
