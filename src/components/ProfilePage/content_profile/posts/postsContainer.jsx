import { connect } from 'react-redux';
import Posts from './posts';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;