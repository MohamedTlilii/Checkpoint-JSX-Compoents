import Product from "../Product";
function Name() {
  let data = "Hello, there!";
  let msg = false;
  return (
    <div>
      {msg ? <h2>Hello</h2> : <h2>{data}</h2>}
      <p>{Product.name}</p>
    </div>
  );
}
export default Name;
