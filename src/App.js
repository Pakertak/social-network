import { Route } from 'react-router';
import './App.css';
import Header from './layouts/Header/Header';
import Nav from './layouts/Nav/Nav';
import Dialogs from './pages/Dialogs/Dialogs';
import Profile from './pages/Profile/Profile';

const App = ({
    state,
    dispatch
}) => {

    return (
        <div className='app-wrapper' >
            <Header />
            <Nav />
            <div className="app-wrapper__content">

                <Route path="/dialogs" render={
                    () => <Dialogs
                        state={state.dialogsPage}
                        dispatch={dispatch}
                    />} />

                <Route path="/profile" render={
                    () => <Profile
                        state={state.profilePage}
                        dispatch={dispatch}
                    />} />
            </div>
        </div>
    );
}

export default App;