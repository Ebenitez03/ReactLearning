export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(formData.get("name"))
    console.log({data})

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <input type="password" name="password" />
      <input type="checkbox" name="session"/>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
export default UncontrolledLogin;

//I really don't know the pros and cons, but I rather controlled forms