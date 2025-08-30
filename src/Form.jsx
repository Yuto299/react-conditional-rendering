const Form = ({ userIsRegistered }) => {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* trueは右が発動 */}

      <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
    </form>
  );
};

export default Form;
// メインのvar userIsRegistered = false;は引き継がれる
// あくまでも状態として受け継がれるだけ false状態なのでregisterが永遠に
// falseが代入されているわけではない 普通の実装を書けばいいだけ
