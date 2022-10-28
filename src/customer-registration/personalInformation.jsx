import React from "react";

function PersonalInformation({ onStringChange, onStringBlur, state }) {
  return (
    <>
      <div className="form-row pt-2 pb-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
            value={state.firstName}
            onChange={(e) => onStringChange(e)}
            onBlur={(e) => onStringBlur(e)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Middle name"
            name="middleName"
            value={state.middleName}
            onChange={(e) => onStringChange(e)}
          />
        </div>
      </div>
      <div className="form-row pt-2 pb-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastName"
            value={state.lastName}
            onChange={(e) => onStringChange(e)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Date Of Birth"
          />
        </div>
      </div>
      <div className="form-row pt-2 pb-2">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="form-row pt-2 pb-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Nationality"
            name="nationality"
            value={state.nationality}
            onChange={(e) => onStringChange(e)}
          />
        </div>
      </div>

      <hr className="w-100 hr mt-2 mb-2"></hr>

      <div className="form-row pt-2 pb-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Street Address1"
            name="streetAddress1"
            value={state.streetAddress1}
            onChange={(e) => onStringChange(e)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Street Address2"
          />
        </div>
      </div>
      <div className="form-row pt-2 pb-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="City / Town"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="State"
            name="state"
            value={state.state}
            onChange={(e) => onStringChange(e)}
          />
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
