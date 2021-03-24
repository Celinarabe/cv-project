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
        <div>
          <h3>Education Info</h3>
          <div>
            <label htmlFor="university">University/Higher Education:</label>
            <input
              onChange={props.onChange}
              name="university"
              // Set the react state as the input value for controlled component inputs
              value={props.university}
              type="text"
              id="university"
            ></input>
          </div>
          <label htmlFor="graduationDate">Graduation Date:</label>
          <input
            onChange={props.onChange}
            name="graduationDate"
            // Set the react state as the input value for controlled component inputs
            value={props.graduationDate}
            type="text"
            id="graduationDate"
          ></input>
        </div>
        <div>
          <h3>Work Experience</h3>
          <div>
            <label htmlFor="companyName">Company:</label>
            <input
              onChange={props.onChange}
              name="companyName"
              // Set the react state as the input value for controlled component inputs
              value={props.companyName}
              type="text"
              id="companyName"
            ></input>
          </div>
          <label htmlFor="role">Role:</label>
          <input
            onChange={props.onChange}
            name="role"
            // Set the react state as the input value for controlled component inputs
            value={props.role}
            type="text"
            id="role"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Edit;
