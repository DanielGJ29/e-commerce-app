import { useHistory } from "react-router-dom";

//Component
import Title from "../Custom/Titles/Titles";

const Login = () => {
  const history = useHistory();

  //Functions
  const handleLogin = async (e) => {
    e.preventDefault();
    // const request = await fetch("https://jsonplaceholder.typicode.com/users");
    // const result = await request.json();

    history.push("./");
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center  justify-center">
      <form
        className="flex flex-col justify-center w-60 h-72 px-4 border-2 rounded-sm bg-primary"
        onSubmit={(e) => handleLogin(e)}
      >
        <Title title="Login" />
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <div className="mt-5 mx-auto ">
          {/* <Button className="border-2">Aceptar</Button> */}
          <button className="rounded-lg px-6 py-2 bg-secondary">Aceptar</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
