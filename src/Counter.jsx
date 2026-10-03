const counterStyle = {
  border: "4px solid yellow",
  margin: "50px",
  padding: "50px",
  backgroundColor: "gray",
  color: "white",
  textAlign: "center",
  borderRadius: "25px",
};

const handleAdd = (num) => {
  const newNum = num + 5;
  alert(newNum);
};

export default function Counter() {
  return (
    <div style={counterStyle}>
      <h2>Count: </h2>
      <button onClick={() => alert("Click Arrow Function")}>Add</button>
      <button onClick={() => handleAdd(25)}>Click For Add Parameter</button>
    </div>
  );
}
