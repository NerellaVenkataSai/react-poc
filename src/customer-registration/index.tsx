import React from 'react';
import PersonalInformation from './personalInformation';

function CustomerRegistration() {
    return (
        <div className='container wizard-main'>
            <div className='container'>
                <div className='row rounded-pill wizard-header'>
                    <div className="col rounded-pill step">
                        <div>Personal & Address Information</div>
                    </div>
                    <div className="col rounded-pill step">
                        <div>ID Information</div>
                    </div>
                    <div className="col rounded-pill step">
                        <div>Marketing Information</div>
                    </div>
                </div>
            </div>
            <div className='container wizard-body rounded-lg'>
                <PersonalInformation />
            </div>
            <div className="wizard-footer">
                <button type="button" className="btn btn-warning">Next</button>
            </div>
        </div>
    );
}

export default CustomerRegistration;