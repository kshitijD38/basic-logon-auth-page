export default function Home({ handleEmail, handlePassword, error1 }) {
  return (
    <>
      {!error1 && (
        <h4> hi new logged in user {window.localStorage.getItem("Email")}</h4>
      )}
      {error1 && <h4>error: Please input proper email and password</h4>}
    </>
  );
}
