import "./App.css";

import {React, useState} from 'react';

function App(){
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(
            firstname,
            lastname,
            email,
            contact,
            gender,
            resume,
            url,
            selectedOption,
            about
        );
    };
    const handleReset = () =>{
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };
    return(
        <div className = "App">
            <h1>React - Form Submission</h1>
            <fieldset>
                <form action = '#' method = "Get">
                    <label htmlFor = "firstname">
                        First Name*</label>
                    <input type = "text" name = "firstname" id = "firstname" value = {firstname} onChange = {(e) => setFirstName(e.target.value)} placeholder = "Enter your First Name" required/>
                    <label htmlFor = "lastname">Last Name*</label>
                    <input type = "text" name = "lastname" id = "lastname" value = {lastname} onChange = {(e) => setLastName(e.target.value)} placeholder = "Enter your Last Name" required />
                    <label htmlFor = "email">Email*</label>
                    <input type = "email" name = "email" id = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "Enter your Email Id2" required />
                    <label htmlFor = "contact">Contact*</label>
                    <input type = "number" name = "contact" id = "name" value = {contact} onChange = {(e) => setContact(e.target.value)} placeholder = "Enter your number" required />
                    <label htmlFor = "gender">Gender*</label>
                    <input type = "radio" name = "male" id = "name" value = "male" checked = {gender === "male"} onChange = {(e) => setGender(e.target.value)} /> Male
                    <input type = "radio" name = "female" id = "female" value = "female" checked = {gender === "female"} onChange = {(e) => setGender(e.target.value)} /> Female
                    <input type = "radio" name = "other" id = "other" value = "other" checked = {gender === "other"} onChange = {(e) => setGender(e.target.value)} /> other
                    <label htmlFor = "file">Upload Resume*</label>
                    <input type = "file" name = "file" id = "file" onChange = {(e) => setResume(e.target.files[0])} placeholder = "Upload Resume" required />
                    <label htmlFor = "url">Url*</label>
                    <input type = "url" name = "url" id = "url" onChange = {(e) => setUrl(e.target.value)} placeholder = "Enter URL" required />
                    <label>Select your choice</label>
                    <select name = "select" id = "select" value = {selectedOption} onChange = {(e) => setSelectedOption(e.target.value)}>
                    <option value="" disabled selected={selectedOption === ""}>Select your Answer</option>
                    <optgroup label="Beginers">
                        <option value="1">HTML</option>
                        <option value="2">CSS</option>
                        <option value="3">JavaScript</option>
                    </optgroup>
                    <optgroup label="Advance">
                        <option value="4">React</option>
                        <option value="5">Node</option>
                        <option value="6">Express</option>
                        <option value="7">MongoDB</option>
                    </optgroup>
                    </select>
                    <label htmlFor = "about">About*</label>
                    <textarea col = "30" rows = "10" name = "about" id = "about" onChange = {(e) => setAbout(e.target.value)} placeholder = "Write about yourself" required ></textarea>
                    <button type = "reset" value = "reset" onClick = {() => handleReset()} >Reset</button>
                    <button type = "submit" value = "submit" onClick = {(e) => handleSubmit(e)}>Submit</button>
                </form>
            </fieldset>
        </div>  
    );
}

export default App;