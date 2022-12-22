import "./App.css";
import DragDrop from "./DragDrop/DragDrop";
import ModalCustomer from "./Modal/ModalCustomer";
function App() {
  return (
    <>
      <ModalCustomer title="Hoc lap trinh" hiddenCancel={true}></ModalCustomer>
      <DragDrop></DragDrop>
    </>
  );
}

export default App;
