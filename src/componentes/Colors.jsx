function Color({color}) {
    return (
      <div>
        <li>{color.name}</li>
      </div>
    );
  }
export function Colors({colors}) {
  return (
    <div>
      <ul>
        {colors.map((color) => (
            <Color key={color.id} color={color}/>
        ))}
      </ul>
    </div>
  );
}
export default Colors;
