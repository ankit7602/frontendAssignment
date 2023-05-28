import React, { useState } from "react";
import "./ContactUs.css"
import FormInput from "./Common/FormInput";
import axios from "axios";
import FormError from "./Common/FormError";
import Validation from "./Classes/ValidationFile";
const ContactUs = () => {
    const ValidationFile = new Validation
    const [error,setError]=useState(false)
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        zipcode: ""
    })
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setContactDetails({ ...contactDetails, [name]: value })
        setError(false)
    }
    const handleSubmit = () => {
        if(ValidationFile.isNotEmpty(contactDetails.name)){
            axios.post('/api/contact', {"Submission":contactDetails})
            .then(function (response) {
                console.log("success")
                setContactDetails({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                    zipcode: ""
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            setError(true)
        }
       
    }
    return (
        <React.Fragment>

            <div className="container">
                <div className="contactFormContainer">
                    <div className="left">
                        <h1 className="heading">Contact Us </h1>
                        <div className="content">
                            <div>
                                <h3 className="heading">Inspections</h3>
                                <p>(800) 309-6753 | info@wini.com </p>
                            </div>
                            <div>
                                <h3 className="heading">Franchising</h3>
                                <p>(800) 309-6753 | info@wini.com </p>
                            </div>
                            <div>
                                <h3 className="heading">Vendors</h3>
                                <p>(312) 557-9319 | vendors@wini.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="firstWrap">
                            <div className="formFieldwrap">
                                <FormInput
                                    name="name"
                                    label={"Name"}
                                    type="text"
                                    placeholder="Full name"
                                    onChange={(e) => handleInput(e)}
                                    onKeyUp={(e) => handleInput(e)}
                                />
                                <FormError show={!contactDetails.name&&error} error={"Full Name required."}/>
                            </div>
                            <div className="formFieldwrap">
                                <FormInput
                                    name="email"
                                    label={"Email"}
                                    type="text"
                                    placeholder="xyz@abc.com"
                                    onChange={(e) => handleInput(e)}
                                    onKeyUp={(e) => handleInput(e)}
                                />
                            </div>
                            <div className="formFieldwrap">
                                <FormInput
                                 label={"Phone Number"}
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="(123) 456-7890"
                                    onChange={(e) => handleInput(e)}
                                    onKeyUp={(e) => handleInput(e)}
                                />
                            </div>
                            <div className="formFieldwrap">
                                <FormInput
                                label={"Zip Code"}
                                    name="zipcode"
                                    type="text"
                                    placeholder="XXXXX"
                                    onChange={(e) => handleInput(e)}
                                    onKeyUp={(e) => handleInput(e)}
                                />
                            </div>
                            <div>
                            <label className="animLabelTop">Message</label>
                            <div className="textarea">
                                <textarea
                                     className="form_textarea"
                                    name="message"
                                    rows="4"
                                    onChange={(e) => handleInput(e)}
                                    onKeyUp={(e) => handleInput(e)}
                                    placeholder="Please type it in here..."
                                    maxLength={500} />
                                    </div>
                            </div>
                        </div>
                        <button className="submitbutton" onClick={handleSubmit}>
                            SUBMIT
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default ContactUs