import Button from "./ui/Button";

function App() {
  return (
    <div>
      <h1 className="font-poppins text-4xl font-bold text-[#4b3832]">
        Plumeria Resort
      </h1>
      <div className="flex w-full flex-col p-4 sm:w-auto sm:flex-row">
        <Button>Check In</Button>
        <Button>Check Out</Button>
      </div>
    </div>
  );
}

export default App;
