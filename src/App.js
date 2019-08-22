import React from 'react';
import {Forms} from './components/Forms'

import './App.css'
import UserInput from "./components/UserInput";
import DropDownSelect from "./components/DropDownSelect";
import SubscriptionDetails from "./components/SubscriptionDetails";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   {id: 1, name: 'a', age: 29, qualification: 'B.Com', rating: 3},
      //   {id: 2, name: 'b', age: 35, qualification: 'B.Sc', rating: 5},
      //   {id: 3, name: 'c', age: 42, qualification: 'B.E', rating: 3}
      // ]
    }
  }

  render() {
    console.log(Forms)
    return (
      <React.Fragment>
        <UserInput/>
        <DropDownSelect/>
        <SubscriptionDetails/>

      </React.Fragment>
    );
  }
}

export default App;
