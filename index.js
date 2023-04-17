const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="wishes">Congratulations</h1>
    <div className="card-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="card-imgs"
        />
      </div>
      <h1 className="name">Kiran V</h1>
      <p className="qualification">
        Osmania University Post-Graduation College,Siddipet
      </p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="card-imgs"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
