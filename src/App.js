import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";
import GlobalStyles from "./styles/GlobalStyles";
import AutoComplete from "./component/AutoComplete";

function App() {
  return (
    <>
      <GlobalStyles />
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
    </>
  );
}

export default App;
