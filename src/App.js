import { Auth, Home } from "pages";
import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      {window.location.pathname === "/" ? (
        <Redirect to="/login"></Redirect>
      ) : null}
      <Route path={["/login", "/register"]}>
        <Auth/>
      </Route>
      <Route path="/im">
        <Home/>
      </Route>
    </div>
  );
}

export default App;
