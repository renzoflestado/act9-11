import InlineStyling from "./InlineStyling";
import StyleObjectVariable from "./StyleObjectVariable";
import SharingStyleComponents from "./SharingStyleComponents";

const App = () => {
  return (
    <div style={{margin: "30px 0px 0px 0px", display: "flex", alignItems: "Center", justifyContent: "space-evenly"}}>
      <InlineStyling />
      <StyleObjectVariable />
      <SharingStyleComponents />
    </div>
  )
}

export default App;