import React, { useEffect,useState } from "react";

const Form = () => {
  let [userName, setUserName] = useState();
  let [password, setPassword] = useState();
  let [allFormData,setaddFormData]=useState([]);
  const submitFnc = (event) => {
      event.preventDefault();
    // setPassword(password);
    // setUserName(userName);
    let allentry={userName:userName,password:password};
    setaddFormData([...allFormData,allentry]);
  };

  useEffect(()=>{
    document.title=`${password}`;
  },[password])
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
