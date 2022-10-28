import React from "react";

function MarketInformation({ onToggleChange, state }) {
  return (
    <>
      <div class="custom-control custom-switch mb-10">
        <input
          type="checkbox"
          checked={state.sms}
          class="custom-control-input"
          id="SMS"
          name="sms"
          onChange={(e) => onToggleChange(e)}
        />
        <label class="custom-control-label" for="SMS">
          SMS
        </label>
      </div>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          checked={state.email}
          class="custom-control-input"
          id="Email"
          name="email"
          onChange={(e) => onToggleChange(e)}
        />
        <label class="custom-control-label" for="Email">
          Email
        </label>
      </div>
    </>
  );
}

export default MarketInformation;
