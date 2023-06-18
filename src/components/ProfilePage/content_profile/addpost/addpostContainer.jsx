import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../../redux/profile-reducer';
import Addpost from './addpost';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

const AddpostContainer = connect(mapStateToProps, { addPost, updateNewPostText, }) (Addpost);

export default AddpostContainer;