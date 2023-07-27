import { useEffect, useState } from "react";
import "./app.scss";

const asideContent = [
  { item: "your info" },
  { item: "select plan" },
  { item: "add-ons" },
  { item: "summary" },
];
function App() {
  return (
    <div>
      <Form />
    </div>
  );
}
export default App;

const personalInfo = [
  {
    text: "Name",
    required: "This field is required",
  },
  {
    text: "Email",
    required: "This field is required",
  },
  {
    text: "Phone",
    required: "This field is required",
  },
];
function Form() {
  const [personalInfoState, setPersonalInfoState] = useState([
    {
      field1: "Name",
      field2: "Email",
      field3: "Phone",
      name: "",
      email: "",
      phone: "",
      required: "This field is required",
    },
  ]);

  return (
    <div className="form">
      <aside className="form__aside">
        <img src="./images/bg-sidebar-desktop.svg" alt="sidebar" />
        {asideContent.map((item, i) => {
          return (
            <div className="form__aside--content" key={i}>
              <p className="form__aside--content--number">{i + 1}</p>
              <div>
                <p className="form__aside--content--step-label">step {i + 1}</p>
                <h1>{item.item}</h1>
              </div>
            </div>
          );
        })}
      </aside>
      <div className="form__content">
        <PersonalInfo
          personalInfoState={personalInfoState}
          onSetPersonalInfoState={setPersonalInfoState}
        />
        {/* <Plan /> */}
        {/* <AddOns /> */}
        {/* <FinishUp /> */}

        <div className="form_buttons">
          <button type="button" className="form_buttons--back">
            <p>Go Back</p>
          </button>
          <button className="form_buttons--next" type="button">
            <p>Next Step</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function PersonalInfo({ personalInfoState, onSetPersonalInfoState }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSetPersonalInfoState((info) => [...info, e.target.value]);
  }
  useEffect(() => {
    console.log(personalInfoState);
  }, [personalInfoState]);
  return (
    <>
      <h1>Personal info</h1>
      <p className="personal__details--provide-info">
        Please provide your name, email address, and phone number.
      </p>
      {personalInfoState.map((item, i) => {
        return (
          <div key={i}>
            <form onSubmit={handleSubmit} key={i}>
              <div className="personal__details--container">
                <label className="personal__details--name" htmlFor={item.text}>
                  <p>{item.field1}</p>
                  <p className="personal__details--name-required">
                    {item.required}
                  </p>
                </label>
                <input type="text" value={item.name}></input>
              </div>
              <div className="personal__details--container">
                <label className="personal__details--name" htmlFor={item.text}>
                  <p>{item.field2}</p>
                  <p className="personal__details--name-required">
                    {item.required}
                  </p>
                </label>
                <input type="text" value={item.email}></input>
              </div>
              <div className="personal__details--container">
                <label className="personal__details--name" htmlFor={item.text}>
                  <p>{item.field3}</p>
                  <p className="personal__details--name-required">
                    {item.required}
                  </p>
                </label>
                <input type="text" value={item.phone}></input>
              </div>
            </form>
          </div>
        );
      })}
    </>
  );
}

const planContent = [
  {
    text: "Arcade",
    price: 9,
  },
  {
    text: "Advanced",
    price: 12,
  },
  {
    text: "Pro",
    price: 15,
  },
];

function Plan() {
  const [isChecked, setIsChecked] = useState(false);
  function handleToggle() {
    setIsChecked(!isChecked);
  }
  return (
    <div className="plan">
      <h1>Select your plan</h1>
      <p className="plan_provide-info">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan__plan-type">
        {planContent.map((item, i) => {
          return (
            <div className="plan__plan-type-item" key={i}>
              <img
                src={`./images/icon-${item.text.toLowerCase()}.svg`}
                alt=""
              />
              <div>
                <h3>{item.text}</h3>
                <br />
                <h3 className="plan__plan-type--price">{`$${item.price}/mo`}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="plan__switch__container">
        <p>Monthly</p>
        <label className="plan__switch">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span className="plan__switch--slider"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
}

const addOnContent = [
  {
    label: "Online service",
    info: "Access to multiplayer games",
    price: 1,
  },
  {
    label: "Larger storage",
    info: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    label: "Customizable Profile",
    info: "Custom theme on your profile",
    price: 2,
  },
];

function AddOns() {
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-on__add-on-type">
        {addOnContent.map((item, i) => {
          return (
            <div className="add-on__add-on-type--item" key={i}>
              <input type="checkbox" />
              <div>
                <h4 className="add-on__add-on-type--label">{item.label}</h4>
                <p className="add-on__add-on-type--info">{item.info}</p>
              </div>
              <p className="add-on__add-on-type--price">{`+$${item.price}/mo`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FinishUp() {
  return (
    <div>
      <h1>Finishing up</h1>
      <p className="finish__up-message">
        Double check everything looks OK before confirming.
      </p>
      <div className="finish__up">
        <div className="finish__up-plan">
          <div>
            <p className="finish__up-plan--plan">Arcade (Monthly)</p>
            <button id="finish__up--change-btn">Change</button>
          </div>
          <p className="finish__up-plan--price">$9/mo</p>
        </div>
        <hr />
        <div className="finish__up-add-ons">
          <div>
            <p className="finish__up-feature">Online service</p>
            <p className="finish__up-plan--price">+$1/mo</p>
          </div>
          <div>
            <p className="finish__up-feature">Larger storage</p>
            <p className="finish__up-plan--price">+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="finish__up-total">
        <p className="finish__up-feature">Total (per month)</p>
        <p className="finish__up-total-price">+$12/mo</p>
      </div>
    </div>
  );
}
