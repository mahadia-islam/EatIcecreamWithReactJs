import './App.css';
import Icecream from './components/Icecream';
import store from './components/store/store';
import { Provider } from 'react-redux';

function App(){

  return (
    <>
      <Provider store={store}>
        <Icecream/>
      </Provider>
    </>
  );
}

export default App;
