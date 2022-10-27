import React from 'react';

function PersonalInformation() {

    return (
        <>
                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Middle name" />
                    </div>
                </div>
                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Date Of Birth" />
                    </div>
                </div>
                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Nationality" />
                    </div>
                </div>

                <hr className="w-100 hr mt-2 mb-2"></hr>

                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Street Address" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Street Address" />
                    </div>
                </div>
                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="City / Town" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="State" />
                    </div>
                </div>
                <div className="form-row pt-2 pb-2">
                    <div className="col-md-6">
                        <select className="form-select" aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Zip Code" />
                    </div>
                </div>
            </>
    );
}

export default PersonalInformation;