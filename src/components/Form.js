import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    suffix: "JR",
    admin: "false"
  });

  function handleChange(event) {
    event.preventDefault()
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;
    if(event.target.type === "checkbox"){
      value = event.target.checked
    }
  
    setFormData({
      ...formData,              //spread operator since our formData is an object
      [name]: value,            //formData is an object, so we need to copy all the key/value pairs
    });
  } 

  return ( 
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="text" name="suffix" onChange={handleChange} value={formData.suffix} />
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
