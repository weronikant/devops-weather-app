import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Details} from './components/details/Details';
import {Provider} from 'react-redux';
import {store} from './store';
import { Forecast } from './pages/Forecast';

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/forecast" element={<Forecast />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
