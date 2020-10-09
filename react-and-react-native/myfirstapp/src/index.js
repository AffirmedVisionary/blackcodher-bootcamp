import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name,setName] = useState('');
  const [age,setAge] = useState("");
  const [location,setLocation] = useState("");
  const [hasSubmitted, setSubmitted] = useState(false);
 
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    // alert('A name was submitted: ' + name);
  }

    return (
      <React.Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>

        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>


        <input type="submit" value="Submit" />
      </form>
     {hasSubmitted && (<div>
        {name}
        <br></br>
        {age}
        <br></br>
        {location}
        <br></br>
        <p>Thank you for submitting your form</p>
      </div>
      )}
      </React.Fragment>
    );
}

ReactDOM.render(<LogForm />,document.getElementById('root'));