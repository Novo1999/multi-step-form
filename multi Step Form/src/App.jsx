/* eslint-disable react/prop-types */
import { useEffect, useReducer, useState } from "react";
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
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [planState, setPlanState] = useState({
    name: "Arcade",
    price: 9,
    status: "monthly",
  });
  const [addOnsState, setAddOnsState] = useState([{ service: [], price: [] }]);
  // console.log(addOnsState[0].price);
  const [selectedPlan, setSelectedPlan] = useState(1);
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
  const [isChecked, setIsChecked] = useState(false);
  const [finalState, setFinalState] = useState([
    {
      plan: "",
      status: "",
      planPrice: 0,
      totalPrice: 0,
    },
  ]);
  function handleNext(e) {
    e.preventDefault();
    if (name && phone && email) {
      const newPersonalInfo = {
        field1: "Name",
        field2: "Email",
        field3: "Phone",
        name,
        email,
        phone,
        required: "This field is required",
      };
      setPersonalInfoState(() => [newPersonalInfo]);
      setCurrentStep((step) => step + 1);
      // console.log(personalInfoState);
    }
    setFinalState(() => [
      {
        plan: planState.name,
        status: planState.status,
        planPrice: planState.price,
        service1: addOnsState[0].service[0],
        service2: addOnsState[0].service[1],
        service3: addOnsState[0].service[2],
        servicePrice1: addOnsState[0].price[0],
        servicePrice2: addOnsState[0].price[1],
        servicePrice3: addOnsState[0].price[2],
        totalPrice:
          addOnsState[0].price[0] +
          addOnsState[0].price[1] +
          addOnsState[0].price[2],
      },
    ]);
  }
  console.log(finalState);
  function handleBack() {
    setCurrentStep((step) => step - 1);
  }
  const buttonHidden = {
    visibility: "hidden",
  };
  const stepStyle = {
    backgroundColor: "var(--clr-primary-4)",
    color: "var(--clr-primary-1)",
    fontWeight: "var(--f-weight-3)",
  };
  return (
    <div className="form">
      <aside className="form__aside">
        <img src="./images/bg-sidebar-desktop.svg" alt="sidebar" />
        {asideContent.map((item, i) => {
          return (
            <div className="form__aside--content" key={i}>
              <p
                style={currentStep === i + 1 ? stepStyle : {}}
                className="form__aside--content--number"
              >
                {i + 1}
              </p>
              <div>
                <p className="form__aside--content--step-label">step {i + 1}</p>
                <h1>{item.item}</h1>
              </div>
            </div>
          );
        })}
      </aside>
      <div className="form__content">
        {currentStep === 1 && (
          <PersonalInfo
            name={name}
            email={email}
            phone={phone}
            onSetName={setName}
            onSetEmail={setEmail}
            onSetPhone={setPhone}
            personalInfoState={personalInfoState}
            onHandleNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <Plan
            isChecked={isChecked}
            onSetIsChecked={setIsChecked}
            selectedPlan={selectedPlan}
            planState={planState}
            onSetSelectedPlan={setSelectedPlan}
            onSetPlanState={setPlanState}
          />
        )}
        {currentStep === 3 && (
          <AddOns onSetAddOnsState={setAddOnsState} isChecked={isChecked} />
        )}
        {currentStep === 4 && <FinishUp finalState={finalState} />}

        <div className="form_buttons">
          <button
            style={currentStep === 1 ? buttonHidden : {}}
            type="button"
            className="form_buttons--back"
            onClick={handleBack}
          >
            <p>Go Back</p>
          </button>
          {name && email && phone && currentStep < 4 && (
            <button
              onClick={handleNext}
              className="form_buttons--next"
              type="button"
            >
              <p>Next Step</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function PersonalInfo({
  personalInfoState,
  name,
  email,
  phone,
  onSetName,
  onSetEmail,
  onSetPhone,
}) {
  return (
    <>
      <h1>Personal info</h1>
      <p className="personal__details--provide-info">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        {personalInfoState.map((item, i) => {
          return (
            <div key={i}>
              <div className="personal__details--container">
                <label className="personal__details--name" htmlFor={item.text}>
                  <p>{item.field1}</p>
                  <p className="personal__details--name-required">
                    {!name && item.required}
                  </p>
                </label>
                <input
                  id={!name ? "required-outline" : ""}
                  onChange={(e) => onSetName(e.target.value)}
                  type="text"
                  value={name}
                />
              </div>
              <div className="personal__details--container">
                <label className="personal__details--email" htmlFor={item.text}>
                  <p>{item.field2}</p>
                  <p className="personal__details--email-required">
                    {!email && item.required}
                  </p>
                </label>
                <input
                  id={!email ? "required-outline" : ""}
                  onChange={(e) => onSetEmail(e.target.value)}
                  value={email}
                  type="text"
                />
              </div>
              <div className="personal__details--container">
                <label className="personal__details--phone" htmlFor={item.text}>
                  <p>{item.field3}</p>
                  <p className="personal__details--phone-required">
                    {!phone && item.required}
                  </p>
                </label>
                <input
                  id={!phone ? "required-outline" : ""}
                  onChange={(e) => onSetPhone(e.target.value)}
                  value={phone}
                  type="number"
                />
              </div>
            </div>
          );
        })}
      </form>
    </>
  );
}

const planContent = [
  {
    name: "Arcade",
    price: 9,
  },
  {
    name: "Advanced",
    price: 12,
  },
  {
    name: "Pro",
    price: 15,
  },
];

function Plan({
  selectedPlan,
  onSetSelectedPlan,
  onSetPlanState,
  isChecked,
  onSetIsChecked,
}) {
  function handleToggle() {
    onSetIsChecked(!isChecked);
  }

  useEffect(() => {
    onSetPlanState((prev) => [
      {
        ...prev[0],
        status: !isChecked ? "monthly" : "yearly",
      },
    ]);
  }, [isChecked, onSetPlanState]);
  function handlePlan(i, item) {
    onSetSelectedPlan(i + 1);
    onSetPlanState([
      {
        name: item.name,
        price: item.price,
        status: !isChecked ? "monthly" : "yearly",
      },
    ]);
  }
  const freeStyle = !isChecked ? { visibility: "hidden" } : {};
  return (
    <div className="plan">
      <h1>Select your plan</h1>
      <p className="plan_provide-info">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan__plan-type">
        {planContent.map((item, i) => {
          return (
            <div
              className={`plan__plan-type-item ${
                selectedPlan === i + 1 ? "selected" : ""
              }`}
              key={i}
              onClick={() => handlePlan(i, item)}
            >
              <img
                src={`./images/icon-${item.name.toLowerCase()}.svg`}
                alt=""
              />
              <div>
                <h3>{item.name}</h3>
                <br />
                <h3 className="plan__plan-type--price">
                  {!isChecked
                    ? `$${item.price}/mo`
                    : `$${item.price * 10}/year`}
                </h3>
                {<p style={freeStyle}>2 months free</p>}
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
    id: 1,
    label: "Online service",
    info: "Access to multiplayer games",
    price: 1,
  },
  { id: 2, label: "Larger storage", info: "Extra 1TB of cloud save", price: 2 },
  {
    id: 3,
    label: "Customizable Profile",
    info: "Custom theme on your profile",
    price: 2,
  },
];

function AddOns({ isChecked, onSetAddOnsState }) {
  function handleChecked(e) {
    const targetClassName = ".add-on__add-on-type--item";
    const target = e.target;
    const targetChecked = e.target.checked;
    const targetService =
      e.target.closest(targetClassName).firstElementChild.nextSibling.firstChild
        .innerText;
    const monthlyPrice = +e.target
      .closest(targetClassName)
      .firstElementChild.nextElementSibling.nextSibling.innerText.slice(2, -3);
    const yearlyPrice = +e.target
      .closest(targetClassName)
      .firstElementChild.nextElementSibling.nextSibling.innerText.slice(2, -5);
    const targetPrice = !isChecked ? monthlyPrice : yearlyPrice;
    if (targetChecked) {
      onSetAddOnsState((prev) => [
        {
          service: [
            ...prev[0].service.filter((item) => {
              return item !== targetService;
            }),
            targetService,
          ],
          price: [...prev[0].price, targetPrice],
        },
      ]);
    }
    if (!targetChecked) {
      onSetAddOnsState((prev) => [
        {
          service: [
            ...prev[0].service.filter((item) => {
              return item !== targetService;
            }),
          ],
          price: [
            ...prev[0].price.slice(0, prev[0].price.indexOf(targetPrice)),
            ...prev[0].price.slice(prev[0].price.indexOf(targetPrice) + 1),
          ],
        },
      ]);
    }
  }
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-on__add-on-type">
        {addOnContent.map((item, i) => {
          return (
            <div className="add-on__add-on-type--item" key={i}>
              <input
                onChange={(e) => {
                  handleChecked(e);
                }}
                type="checkbox"
                id={`input-${item.id}`}
              />
              <div>
                <h4 className="add-on__add-on-type--label">{item.label}</h4>
                <p className="add-on__add-on-type--info">{item.info}</p>
              </div>
              <p className="add-on__add-on-type--price">
                {!isChecked
                  ? `+$${item.price}/mo`
                  : `+$${item.price * 10}/year`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FinishUp({ finalState }) {
  return (
    <div>
      <h1>Finishing up</h1>
      <p className="finish__up-message">
        Double check everything looks OK before confirming.
      </p>
      <div className="finish__up">
        <div className="finish__up-plan">
          <div>
            <p className="finish__up-plan--plan">
              {finalState.name}
              {finalState.status}
            </p>
            <button id="finish__up--change-btn">Change</button>
          </div>
          <p className="finish__up-plan--price">${finalState.planPrice}/mo</p>
        </div>
        <hr />
        <div className="finish__up-add-ons">
          <div>
            <p className="finish__up-feature">{finalState.service1}</p>
            <p className="finish__up-plan--price">
              +${finalState.servicePrice1}/mo
            </p>
          </div>
          <div>
            <p className="finish__up-feature">{finalState.service2}</p>
            <p className="finish__up-plan--price">
              +${finalState.servicePrice2}/mo
            </p>
          </div>
          <div>
            <p className="finish__up-feature">{finalState.service3}</p>
            <p className="finish__up-plan--price">
              +${finalState.servicePrice3}/mo
            </p>
          </div>
        </div>
      </div>
      <div className="finish__up-total">
        <p className="finish__up-feature">Total (per month)</p>
        <p className="finish__up-total-price">+${finalState.totalPrice}/mo</p>
      </div>
    </div>
  );
}
