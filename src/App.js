import './App.css';
import Header from './layouts/Header/Header';
import Nav from './layouts/Nav/Nav';
import Dialogs from './pages/Dialogs/Dialogs';
import Profile from './pages/Profile/Profile';

const App = () => {
    return (
        <div className='app-wrapper' >
            <Header />
            <Nav />

            <div className="app-wrapper__content">
                {/* <Profile /> */}

                <Dialogs />
            </div>
        </div>
    );
}

export default App;