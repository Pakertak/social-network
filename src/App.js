import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header/Header';
import Nav from './layouts/Nav/Nav';
import Dialogs from './pages/Dialogs/Dialogs';
import Profile from './pages/Profile/Profile';

const App = ({
    postsData,
    dialogsData,
    messagesData
}) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper' >
                <Header />
                <Nav />
                <div className="app-wrapper__content">

                    <Route path="/dialogs" render={
                        () => <Dialogs
                            dialogsData={dialogsData}
                            messagesData={messagesData}
                        />} />

                    <Route path="/profile" render={
                        () => <Profile
                            postsData={postsData}
                        />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;