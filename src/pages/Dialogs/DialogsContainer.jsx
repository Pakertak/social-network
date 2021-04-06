import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};


export default compose(
    connect(mapStateToProps, {
        sendMessage
    }),
    withAuthRedirect
)(Dialogs);