import React from "react";
import PersonalInformation from "./personalInformation";
import MarketInformation from './marketInformation';

const Tabs = [
  {
    name: "personalInfo",
    active: true,
  },
  { name: "marketingInfo", active: false },
];
class CustomerRegistration extends React.Component {
  state = {
    formIndex: 0,
    firstName: "",
    lastName: "",
    middleName: "",
    nationality: "",
    streetAddress1: "",
    state: "",
    sms: false,
    email: false
  };

  onStringChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onToggleChange = (e) => {
    console.log(e.target.checked, e.target.name);
    this.setState({
        [e.target.name]: e.target.checked
    });
  }

  onStringBlur = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  onPrevious = (formIndex) => {
    this.setState({formIndex: formIndex - 1});
    Tabs[formIndex].active = false;
  }

  onValidateForm = (formIndex) => {
    console.log(this.state);

    if (formIndex === 0) {
      const requiredKeys = [
        "firstName",
        "lastName",
        "middleName",
        "nationality",
        "streetAddress1",
        "state",
      ];
      const isNotValid = requiredKeys.some((key) => {
        if (
          this.state[key] === "" ||
          this.state[key] == null ||
          this.state[key] == undefined
        ) {
          return true;
        } else {
          return false;
        }
      });
      console.log(isNotValid);
      if (!isNotValid) {
        this.setState({ formIndex: 1});
        Tabs[formIndex+1].active = true;
      }
    }

    if(formIndex === 1) {
        // bro post call here and refactor payload stated obj before post
    }
  };

  render() {
    return (
      <div className="container wizard-main">
        <div className="container">
          <div className="row rounded-pill wizard-header">
            <div
              className={`col rounded-pill step ${
                this.state.formIndex === 0 ||
                Tabs[0].active
                  ? "active"
                  : ""
              } `}
            >
              <div>Personal & Address Information</div>
            </div>
            <div
              className={`col rounded-pill step ${
                this.state.formIndex === 1 ||
                Tabs[1].active
                  ? "active"
                  : ""
              } `}
            >
              <div>Marketing Information</div>
            </div>
          </div>
        </div>
        <div className="container wizard-body rounded-lg">
          {this.state.formIndex === 0 ? (
            <PersonalInformation
              onStringChange={this.onStringChange}
              onStringBlur={this.onStringBlur}
              state={this.state}
            />
          ) : this.state.formIndex === 1 ? (
            <MarketInformation onToggleChange={this.onToggleChange} state={this.state}/>
          ) : ""}
        </div>
        <div className="wizard-footer">
          {this.state.formIndex !== 0 && (
            <button
              type="button"
              className="btn btn-warning mr-2"
              onClick={() => this.onPrevious(this.state.formIndex)}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.onValidateForm(this.state.formIndex)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default CustomerRegistration;
