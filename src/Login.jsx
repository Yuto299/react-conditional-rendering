import Input from "./Input";

const Login = () => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      {/* passwordタイプは存在する */}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
