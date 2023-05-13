import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route  } from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import { ARITCLE_ROUTES } from './Components/routeConstant';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer />
        <Switch>
          {ARITCLE_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={route.component}
            />))}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
