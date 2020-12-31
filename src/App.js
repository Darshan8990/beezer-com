import Accounts from './components/Account'
import Rating from './components/Rating'
import Users from './components/Users'
import Footer from './components/Footer'

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="pt-50" >
          <Accounts />
        </div>
        <div className="pt-70">
          <Users />
        </div>
      </div>
      <Rating />
      <Footer />
    </div>


  );
}

export default App;
