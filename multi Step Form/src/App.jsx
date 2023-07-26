import { useState } from "react";
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
        {/* <PersonalInfo /> */}
        {/* <Plan /> */}
        <AddOns />
        <div className="form_buttons">
          <button type="button" className="form_buttons--back">
            <p>Go Back</p>
          </button>
          <button type="button">
            <p>Next Step</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function PersonalInfo() {
  return (
    <>
      <h1>Personal info</h1>
      <p className="personal__details--provide-info">
        Please provide your name, email address, and phone number.
      </p>
      {personalInfo.map((item) => {
        return (
          <>
            <label className="personal__details--name" htmlFor="name">
              <p>{item.text}</p>
              <p className="personal__details--name-required">
                {item.required}
              </p>
            </label>
            <input type="text" name={item.text} id={item.text} />
          </>
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
    <div className="add-on">
      <h1>Pick add-ons</h1>
      <p className="add-on_provide-info">
        Add-ons help enhance your gaming experience.
      </p>
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
export default App;
