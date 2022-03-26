import React from "react";

const Form = () => {
  return (
    <div className="form__area">
      <h1>Form</h1>
      <form>
        <div className="input__group">
          <div className="input__field">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input__field">
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="input__field">
          <input type="text" placeholder="Contact No" />
        </div>
        <div className="input__field">
          <input type="email" placeholder="Email" />
        </div>
      </form>
    </div>
  );
};

export default Form;
