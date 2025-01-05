import React from "react";

function SignUpForm() {
    return(
        <div className="form-container">
            <form className="form">
                <input type="name"
                       placeholder="Your name"
                       className="input"/>

                <input type="email"
                        placeholder="Email address"
                        className="input"/>

                <input type="password"
                        placeholder="Password"
                        className="input"/>

                <div className="marketing">
                    <input id = "allowEmail"
                            type="checkbox"/>
                    <label htmlFor="allowEmail">I want to join to conquer the galaxy </label>                    
                </div>
                <div>
                    <button className="submit">
                        Sign Up
                        </button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;