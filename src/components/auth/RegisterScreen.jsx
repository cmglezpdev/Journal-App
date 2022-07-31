import { Link } from "react-router-dom"

export const RegisterScreen = () => {
    return (
      <>
        <h3 className="auth__title">Login</h3>
        <form className="auth__form-container">
        
          <div className="auth__form-group">
              <input 
                type="text"
                placeholder=" "
                name="name" 
                className="auth__input"
                autoComplete="off"
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
          
          <div className="auth__form-group">
            <input 
              type="password"
              placeholder=" " 
              name="confirm_password"
              className="auth__input"
              autoComplete="off"
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
      </>
    )
}
