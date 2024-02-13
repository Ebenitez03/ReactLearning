import Age from "./Age";
import styles from "../styles/index.module.scss"

export function Welcome({ name = "Jimmy", age }) {
  return (
    <div className={styles.welcome}>
        <p>Welcome, <strong>{name}</strong></p>
        {!!age && <Age age={age}/>}
        {age && <Age age={age}/>}
        {age>=18 && <Age age={age}/>}
        {age<=65 && age>=18 && <Age age={age}/>}
        {age<=65 && age>=18 && name=='John' && <Age age={age}/>}
    </div>
  );
}
export default Welcome;
