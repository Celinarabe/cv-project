

function Edit(props) {

    return (
      <div>
        <h1>Edit</h1>
        <h3>Personal Info</h3>
        <form id="frm1" onSubmit="">
          <div>
            <label htmlFor="fname">First Name:</label>
            <input
              onChange={props.onChange}
              name="fname"
              // Set the react state as the input value for controlled component inputs
              value={props.fname}
              type="text"
              id="fname"
            ></input>
          </div>
          <label htmlFor="lname">Last Name:</label>
          <input
            onChange={props.onChange}
            name="lname"
            // Set the react state as the input value for controlled component inputs
            value={props.lname}
            type="text"
            id="lname"
          ></input>
          <h3>Education Info</h3>
          <h3>Work Experience</h3>
          <div>
          <button type="submit">Preview</button>
          </div>
        </form>
        

      </div>
    );
  }


  export default Edit;
