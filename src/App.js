
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesPage from "./Components/MoviesPage";
import Form1 from "./Components/NewForm1";
import FormValidation from "./Components/Form2";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { connect } from "react-redux";
/* import { setLanguage } from './store/actions/language'; */
import {FavList} from "./Components/FavList";

  
class App extends React.Component  {
 render()
 {
return ( 
   <Router>
    <NavBar/>
    <Switch>
    <Route path={'/'} exact component={MoviesPage} />
    <Route path={'/Login'} exact component={Form1} />
    <Route path={'/Register'} exact component={FormValidation} />
    <Route path={'/FavList'} exact component={FavList} />
    </Switch>
  </Router>  
  );
 }
}

const mapStateToProps = (state) => {
  return {
    FavPage: state.FavPage,
  };
};

export default connect(mapStateToProps)(App);

/* const mapStateToProps = (state) => {
  return {
    language: state.langugae.lang,
  };
};

export default connect(mapStateToProps , { setLanguage }) (App); 

<div
        className={this.props.language === "ar" ? "text-right" : "text-left"}
        dir={this.props.language === "ar" ? "rtl" : "ltr"}
      > 
*/

