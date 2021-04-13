import { Link } from "react-router-dom";

export default function Login({ handleEmail, handlePassword, handleSubmit }) {
  return (
    <>
      Email:
      <input type="email" onChange={handleEmail} />
      <br />
      Password:
      <input type="password" onChange={handlePassword} />
      <br />
      <Link to="/Home">
        <button onClick={handleSubmit}>submit</button>
      </Link>
    </>
  );
}
