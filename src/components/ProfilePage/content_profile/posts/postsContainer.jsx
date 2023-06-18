import { connect } from 'react-redux';
import Posts from './posts';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const PostsContainer = connect(mapStateToProps, {}) (Posts);

export default PostsContainer;