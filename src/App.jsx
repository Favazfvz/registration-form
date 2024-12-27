import React, { useState } from 'react';
import './App.css'; 


const StylishForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        age: '',
        address: '',
        dob: '',
        email: '',
        gender: '',
        hobbies: [],
        place: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                hobbies: checked
                    ? [...prevState.hobbies, value]
                    : prevState.hobbies.filter((hobby) => hobby !== value),
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, age, address, dob, email, gender, hobbies, place } = formData;
        if (!username || !age || !address || !dob || !email || !gender || hobbies.length === 0 || !place) {
            alert('Please fill out all fields before submitting the form.');
            return;
        }

        alert('Form submitted successfully!');
        setFormData({
            username: '',
            age: '',
            address: '',
            dob: '',
            email: '',
            gender: '',
            hobbies: [],
            place: '',
        });
    };

    return (
        <div className="container  mt-5 bg-success">
            <form className="bg-gradient-custom p-4 rounded shadow" onSubmit={handleSubmit}>
                <h2 className="mb-4 text-center fw-bold">USER REGISTRATION FORM</h2>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">NAME :</label>
                    <input id="username" name="username" placeholder="Enter the name please" type="text" className="form-control" value={formData.username} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">DOB:</label>
                    <input type="date" id="dob" name="dob" className="form-control" value={formData.dob} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">AGE :</label>
                    <input id="age" name="age" placeholder="Age please" type="text" className="form-control" value={formData.age} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">ADDRESS :</label>
                    <textarea id="address" name="address" placeholder="Type your address here" cols="30" rows="5" className="form-control" value={formData.address} onChange={handleChange}></textarea>
                </div>

              
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">EMAIL-ID :</label>
                    <input id="email" name="email" placeholder="xyz@gmail.com" type="email" className="form-control" value={formData.email} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">GENDER:</label>
                    <div className="form-check">
                        <input name="gender" id="male" type="radio" value="Male" className="form-check-input" checked={formData.gender === 'Male'} onChange={handleChange} />
                        <label htmlFor="male" className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input name="gender" id="female" type="radio" value="Female" className="form-check-input" checked={formData.gender === 'Female'} onChange={handleChange} />
                        <label htmlFor="female" className="form-check-label">Female</label>
                    </div>
                    <div className="form-check">
                        <input name="gender" id="others" type="radio" value="Others" className="form-check-input" checked={formData.gender === 'Others'} onChange={handleChange} />
                        <label htmlFor="others" className="form-check-label">Others</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">SELECT HOBBIES:</label>
                    <div className="form-check">
                        <input id="gaming" name="hobbies" type="checkbox" value="Gaming" className="form-check-input" checked={formData.hobbies.includes('Gaming')} onChange={handleChange} />
                        <label htmlFor="gaming" className="form-check-label">Sports</label>
                    </div>
                    <div className="form-check">
                        <input id="reading" name="hobbies" type="checkbox" value="Reading" className="form-check-input" checked={formData.hobbies.includes('Reading')} onChange={handleChange} />
                        <label htmlFor="reading" className="form-check-label">Gaming</label>
                    </div>
                    <div className="form-check">
                        <input id="cooking" name="hobbies" type="checkbox" value="Cooking" className="form-check-input" checked={formData.hobbies.includes('Cooking')} onChange={handleChange} />
                        <label htmlFor="cooking" className="form-check-label">Arts</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="place" className="form-label">CHOOSE PLACE:</label>
                    <select id="place" name="place" className="form-select" value={formData.place} onChange={handleChange}>
                        <option value="" hidden>Choose a place</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Malappuram">Wayanad</option>
                        <option value="Calicut">Calicut</option>
                        <option value="Calicut">Trivandrum</option>
                        <option value="Kannur">Palakkad</option>
                        <option value="Malappuram">Thrissur</option>
                        <option value="Calicut">Cochin</option>
                        <option value="Kannur">Idukki</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="cv" className="form-label">UPLOAD CV:</label>
                    <input type="file" id="cv" className="form-control" />
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-dark">SUBMIT</button>
                    <button type="reset" className="btn btn-dark">CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default StylishForm;