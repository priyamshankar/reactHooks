import React, { useState } from "react";

const Form = () => {
  let [userName, setUserName] = useState();
  let [password, setPassword] = useState();
  const submitFnc = () => {
    // setPassword(password);
    // setUserName(userName);
  };
  return (
    <>
      <form onSubmit={submitFnc}>
        <input
          type="text"
          placeholder="type the user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="type the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Form;
