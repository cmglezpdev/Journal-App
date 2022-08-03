import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import validator from 'validator';

import { useForm } from '../../Hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );
  
    const [ formValues, handleInputChanges ] = useForm({
      name: 'Manuel',
      email: "manu@gmail.com",
      password: "12345",
      confirm_password: "12345"
    });

    const { name, email, password, confirm_password } = formValues;

    const handleRegister = (event) => {
      event.preventDefault();
      
      if( isFormValid() ) {
        dispatch( startRegisterEmailPassword(email, password, name) );
      }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ) {
          dispatch( setError("Name is required") );
          return false;
        } 
        if( !validator.isEmail(email) ) {
          dispatch( setError("Email is not valid") );
          return false;
        } 
        if( password !== confirm_password || password.length <= 5 ) {
          dispatch( setError("Password should be least 6 characters and match with other") );
          return false;
        } 
        
        dispatch( removeError() );
      return true;
    } 


    return (
      <div className="animate__animated animate__fadeIn animate__faster">
        <h3 className="auth__title">Login</h3>
        <form className="auth__form-container" onSubmit={handleRegister}>
          
          {
            msgError !== '' && <div className="auth__alert-error">{ msgError }</div> 
          }
          
          <div className="auth__form-group">
              <input 
                type="text"
                placeholder=" "
                name="name" 
                className="auth__input"
                autoComplete="off"
                value={ name }
                onChange={handleInputChanges}
              />
              <label htmlFor="name" className="auth__form-label">Name:</label>
          </div>

          <div className="auth__form-group">
              <input 
                type="text"
                placeholder=" "
                name="email" 
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChanges}
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
              value={password}
              onChange={handleInputChanges}
            />
            <label htmlFor="password"className="auth__form-label">Password:</label>
          </div>
          
          <div className="auth__form-group">
            <input 
              type="password"
              placeholder=" " 
              name="confirm_password"
              className="auth__input"
              autoComplete="off"
              value={confirm_password}
              onChange={handleInputChanges}
            />
            <label htmlFor="confirm_password"className="auth__form-label">Confirm Password:</label>
          </div>


        
          <button
            className="auth__form-submit"
            type="submit"
          >
            Register
          </button>

        </form>

          <Link to={"/auth/login"} className="auth__link link" >
            Already registered?
          </Link>
      </div>
    )
}
