import Auth from "pages/Auth";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      {window.location.pathname === "/" ? (
        <Redirect to="/login"></Redirect>
      ) : null}
      <Auth></Auth>
    </div>
  );
}

export default App;
