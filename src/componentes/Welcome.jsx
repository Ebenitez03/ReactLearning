export function Welcome({ name = "Jimmy", age=37 }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong></p>
      <p>Your age is {age}</p>
    </div>
  );
}
export default Welcome;
