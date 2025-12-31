import logo from './logo.svg';
import './App.css';
// import './store';
import { Provider } from 'react-redux';
import store from './store';
import Form from './form';
import Account  from './account';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  
  return (
    <div className="App">
      
     <Provider store={store}>
<Form/>
<Account/>
<h1>hello</h1>
     </Provider>
    </div>
  );
}

export default App;
