import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";
import GlobalStyles from "./styles/GlobalStyles";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

function App() {
  return (
    <>
      <GlobalStyles />
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </>
  );
}

export default App;
