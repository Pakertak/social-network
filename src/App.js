import { Route } from 'react-router';
import './App.css';
import Header from './layouts/Header/Header';
import Nav from './layouts/Nav/Nav';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Profile from './pages/Profile/Profile';
import UsersContainer from './pages/Users/UsersContainer';

const App = ({
    store
}) => {

    return (
        <div className='app-wrapper' >
            <Header />
            <Nav />
            <div className="app-wrapper__content">

                <Route path="/dialogs" render={
                    () => <DialogsContainer />} />

                <Route path="/profile" render={
                    () => <Profile />} />

                <Route path="/users" render={
                    () => <UsersContainer />} />
            </div>
        </div>
    );
}

export default App;