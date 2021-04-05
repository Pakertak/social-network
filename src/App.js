import { Route } from 'react-router';
import './App.css';
import HeaderContainer from './layouts/Header/HeaderContainer';
import Nav from './layouts/Nav/Nav';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';
import UsersContainer from './pages/Users/UsersContainer';

const App = () => {

    return (
        <div className='app-wrapper' >
            <HeaderContainer />
            <Nav />
            <div className="app-wrapper__content">

                <Route path="/dialogs" render={
                    () => <DialogsContainer />} />

                <Route path="/profile/:userId?" render={
                    () => <ProfileContainer />} />

                <Route path="/users" render={
                    () => <UsersContainer />} />
            </div>
        </div>
    );
}

export default App;