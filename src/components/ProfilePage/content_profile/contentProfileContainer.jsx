import React from 'react';
import ContentProfile from './contentProfile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";

class ContentProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let profileId = this.props.router.params.profileId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`) 
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <ContentProfile { ...this.props } />
        )  
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ContentProfileContainer));