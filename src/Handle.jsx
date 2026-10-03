{
  /* <button onclick="handleClick()">Click Me No Allow</button> */
}
//Normal Function
function handleClick() {
  alert("Button is clicked!");
}

//Arrow Function
const handleClick3 = () => {
  alert("Click3");
};

const handleClick4 = () => {
  alert("Click4");
};

export default function Handle() {
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      {/* <buton
        onClick={function handleClick2() {
          alert("Click2");
        }}
      >
        Click Here 2
      </buton> */}
      <button onClick={handleClick3}>Click3</button>
      <button onClick={handleClick4}>Click4</button>
    </div>
  );
}
