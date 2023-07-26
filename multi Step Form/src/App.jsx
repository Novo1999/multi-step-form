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
      <div className="personal__details">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <label className="personal__details--name" htmlFor="name">
          <p>Name</p>
          <p className="personal__details--name-required">
            This field is required
          </p>
        </label>
        <input type="text" name="Name" id="name" />
        <label htmlFor="Email Address">Email Address</label>
        <input type="text" name="Email" id="email" />
        <label htmlFor="Phone Number">Phone Number</label>
        <input type="text" name="Phone" id="phone" />
        <button>Next Step</button>
      </div>
    </div>
  );
}

export default App;
