import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createConsultation } from '../../store/consultation-action';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';


const ConsultationForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        pincode: '',
        address: '',
        description: '',
        category: '',
        proof: '',
        defaulter_name: '',
        defaulter_email: '',
        defaulter_phone: '',
    });

    const [step, setStep] = useState(1);
    const [buttonState, setButtonState] = useState({
        firstNextDisabled: false,
        secondNextDisabled: true,
        thirdNextDisabled: true,
    });

    const [errors, setErrors] = useState({});
    const [divColors, setDivColors] = useState({
        first: 'lightblue',
        second: 'lightgrey',
        third: 'lightgrey',
    });

    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        // Load state from localStorage
        const savedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        const savedStep = JSON.parse(localStorage.getItem('step')) || 1;
        const savedButtonState = JSON.parse(localStorage.getItem('buttonState')) || {
            firstNextDisabled: false,
            secondNextDisabled: true,
            thirdNextDisabled: true,
        };
        const savedDivColors = JSON.parse(localStorage.getItem('divColors')) || {
            first: 'lightblue',
            second: 'lightgrey',
            third: 'lightgrey',
        };

        setFormData(savedFormData);
        setStep(savedStep);
        setButtonState(savedButtonState);
        setDivColors(savedDivColors);

        // After loading, set initialLoad to false
        setInitialLoad(false);
    }, []);

    useEffect(() => {
        if (!initialLoad) {
            saveStateToLocalStorage();
        }
    }, [formData, step, buttonState, divColors]);

    const saveStateToLocalStorage = () => {
        localStorage.setItem('formData', JSON.stringify(formData));
        localStorage.setItem('step', JSON.stringify(step));
        localStorage.setItem('buttonState', JSON.stringify(buttonState));
        localStorage.setItem('divColors', JSON.stringify(divColors));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error for the field
    };

    const validateStep = () => {
        let newErrors = {};

        if (step === 1) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.phone) newErrors.phone = 'Phone is required';
            if (!formData.state) newErrors.state = 'State is required';
            if (!formData.city) newErrors.city = 'City is required';
            if (!formData.pincode) newErrors.pincode = 'Pincode is required';
            if (!formData.address) newErrors.address = 'Address is required';
        }

        if (step === 2) {
            if (!formData.description) newErrors.description = 'Description is required';
            if (!formData.category) newErrors.category = 'Category is required';
            if (!formData.proof) newErrors.proof = 'Proof is required';
        }

        if (step === 3) {
            if (!formData.defaulter_name) newErrors.defaulter_name = 'Defaulter Name is required';
            if (!formData.defaulter_email) newErrors.defaulter_email = 'Defaulter Email is required';
            if (!formData.defaulter_phone) newErrors.defaulter_phone = 'Defaulter Phone is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        if (step === 1) {
            setButtonState({
                firstNextDisabled: true,
                secondNextDisabled: false,
                thirdNextDisabled: true,
            });
            setDivColors({
                first: 'lightgrey',
                second: 'lightblue',
                third: 'lightgrey',
            });
            setStep(2);
        } else if (step === 2) {
            setButtonState({
                firstNextDisabled: true,
                secondNextDisabled: true,
                thirdNextDisabled: false,
            });
            setDivColors({
                first: 'lightgrey',
                second: 'lightgrey',
                third: 'lightblue',
            });
            setStep(3);
        }
    };

    const handleBack = (e) => {
        e.preventDefault();

        if (step === 2) {
            setButtonState({
                firstNextDisabled: false,
                secondNextDisabled: true,
                thirdNextDisabled: true,
            });
            setDivColors({
                first: 'lightblue',
                second: 'lightgrey',
                third: 'lightgrey',
            });
            setStep(1);
        } else if (step === 3) {
            setButtonState({
                firstNextDisabled: true,
                secondNextDisabled: false,
                thirdNextDisabled: true,
            });
            setDivColors({
                first: 'lightgrey',
                second: 'lightblue',
                third: 'lightgrey',
            });
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateStep()) return;
        dispatch(createConsultation(formData))
        localStorage.removeItem('formData');
        localStorage.removeItem('step');
        localStorage.removeItem('buttonState');
        localStorage.removeItem('divColors');
    };


    return (
        <>
        <div className="consult-page">
            <Header />
            <div className="bound">
                <h3 className='h3 m-t20'>Book Consultation</h3>
                <p>Book a Consultation for Your Case</p>
                <form onSubmit={handleSubmit} className='consult-form'>
                    <div className='steps first' id={divColors.first} style={{ backgroundColor: divColors.first }}>
                        <h3>
                            <span>Step 1:</span>
                            <span>Your Details</span>
                        </h3>
                        
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                        <div>
                            <label>State:</label>
                            <input type="text" name="state" value={formData.state} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.state && <div className="error">{errors.state}</div>}
                        </div>
                        <div>
                            <label>City:</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.city && <div className="error">{errors.city}</div>}
                        </div>
                        <div>
                            <label>Pincode:</label>
                            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.pincode && <div className="error">{errors.pincode}</div>}
                        </div>
                        <div>
                            <label>Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange}
                                disabled={buttonState.firstNextDisabled} />
                            {errors.address && <div className="error">{errors.address}</div>}
                        </div>
                        <div className='btn-row'>
                            <button className="rg-btn right-aero" type="button" onClick={handleNext} disabled={buttonState.firstNextDisabled}
                            /*style={{ backgroundColor: buttonState.firstNextDisabled ? '#6B7280' : '#AB9CEA' }}*/ >Next</button>

                        </div>
                        
                    </div>

                    <div className='steps second' id={divColors.second} style={{ backgroundColor: divColors.second }}>
                        <h3>
                            <span>Step 2:</span>
                            <span>Complaint Details</span>
                        </h3>
                        
                        <div>
                            <label>Description:</label>
                            <textarea name="description" value={formData.description} onChange={handleChange}
                                disabled={buttonState.secondNextDisabled}
                            />
                            {errors.description && <div className="error">{errors.description}</div>}
                        </div>
                        <div>
                            <label>Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                disabled={buttonState.secondNextDisabled}
                            />
                            {errors.category && <div className="error">{errors.category}</div>}
                        </div>
                        <div>
                            <label>Proof:</label>
                            <input
                                type="text"
                                name="proof"
                                value={formData.proof}
                                onChange={handleChange}
                                disabled={buttonState.secondNextDisabled}
                            />
                            {errors.proof && <div className="error">{errors.proof}</div>}
                        </div>
                        <div className='btn-row'>
                            <button className="rg-btn right-aero left" type="button" onClick={handleBack} disabled={buttonState.secondNextDisabled}>Back</button>
                            <button className="rg-btn right-aero" type="button" onClick={handleNext} disabled={buttonState.secondNextDisabled}
                                /*style={{ backgroundColor: buttonState.secondNextDisabled ? '#6B7280' : '#AB9CEA' }}*/ >
                                Next</button>
                        </div>                       
                    </div>

                    <div className='steps third' id={divColors.third} style={{ backgroundColor: divColors.third }}>
                        <h3>
                            <span>Step 3:</span>
                            <span>Defaulter Details</span>
                        </h3>
                        <div>
                            <label>Defaulter Name:</label>
                            <input
                                type="text"
                                name="defaulter_name"
                                value={formData.defaulter_name}
                                onChange={handleChange}
                                disabled={buttonState.thirdNextDisabled}
                            />
                            {errors.defaulter_name && <div className="error">{errors.defaulter_name}</div>}
                        </div>
                        <div>
                            <label>Defaulter Email:</label>
                            <input
                                type="email"
                                name="defaulter_email"
                                value={formData.defaulter_email}
                                onChange={handleChange}
                                disabled={buttonState.thirdNextDisabled}
                            />
                            {errors.defaulter_email && <div className="error">{errors.defaulter_email}</div>}
                        </div>
                        <div>
                            <label>Defaulter Phone:</label>
                            <input
                                type="text"
                                name="defaulter_phone"
                                value={formData.defaulter_phone}
                                onChange={handleChange}
                                disabled={buttonState.thirdNextDisabled}
                            />
                            {errors.defaulter_phone && <div className="error">{errors.defaulter_phone}</div>}
                        </div>
                        <div className='btn-row'>
                            <button className="rg-btn right-aero left" type="button" onClick={handleBack} disabled={buttonState.thirdNextDisabled}>Back</button>
                            <button className="rg-btn right-aero" type="submit" disabled={buttonState.thirdNextDisabled}
                                /*style={{ backgroundColor: buttonState.thirdNextDisabled ? '#6B7280' : '#AB9CEA' }}*/ > Submit</button>
                        </div>
                        
                    </div>
                </form>
                <Footer />
            </div>
        </div>
        
        </>
    );
};

export default ConsultationForm;

