import './registrationForm.css'
import { useState } from "react";

export default function RegistrationForm() {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState({
        value: '',
        isTouched: false
    })
    const [role, setRole] = useState('')


    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      
    const getIsFormValid = ()=>{
        return (
            fName &&
            lName &&
            validateEmail(email) &&
            psw.value.length >= 8 &&
            role !== 'role'

        )
    }

    return (
        <div id="form-container">
            <form action="" method="post">
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="field">
                        <label className="item-label">First name<sup>*</sup>: {fName}</label>
                        <input
                            type="text" className="item-input-field"
                            required
                            placeholder='First name'
                            onChange={e => { setFName(e.target.value) }}
                        />
                    </div>

                    <div className="field">
                        <label className="item-label">Last name<sup>*</sup>: {lName}</label>
                        <input
                            type="text" className="item-input-field"
                            required
                            placeholder='Last name'
                            onChange={e => { setLName(e.target.value) }}
                        />
                    </div>

                    <div className="field">
                        <label className="item-label">Email address<sup>*</sup>: {email}</label>
                        <input
                            type="email" className="item-input-field"
                            required
                            placeholder='Email address'
                            onChange={e => { setEmail(e.target.value) }}
                        />
                    </div>

                    <div className="field">
                        <label className="item-label">Password<sup>*</sup></label>
                        <input
                            type="password" className="item-input-field"
                            required
                            placeholder='Password'
                            onChange={e => {
                                setPsw({
                                    value: e.target.value,
                                    isTouched: true
                                })
                            }}
                        />
                        {(psw.isTouched && psw.value.length<8) && 
                                <div className="reminder">
                                    Password should have at lease 8 characters
                                </div>
                        }
                    </div>

                    <div className="field">
                        <label className="item-label">Role<sup>*</sup></label>
                        <select onChange={e => { setRole(e.target.value) }}>
                            <option value="role"> Role</option>
                            <option value="individual"> Individual</option>
                            <option value="business"> Business</option>
                        </select>
                    </div>

                    <button type="submit" disabled={!getIsFormValid()}>Create Content</button>

                </fieldset>
            </form>
        </div>
    )


}