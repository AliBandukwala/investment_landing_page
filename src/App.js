import './App.css';

import Appbar from './Components/Appbar/appbar';
import InfoContainer from './Components/InfoArea/infoContainer';
import BarchartConatiner from './Components/Barchart/barchartContainer';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <InfoContainer />
      <BarchartConatiner />
      <Footer />
    </div>
  );
}

export default App;
