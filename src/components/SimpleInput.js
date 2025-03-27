import { useRef,useState } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (enteredName.trim() == '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; Not ideal, Don't manipulate the DOM.
    setEnteredName('');
  };


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value= {enteredName} ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/>
        <p>Name </p>
      </div>

      <div className="form-actions">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
