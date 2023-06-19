import React, {useEffect} from 'react';
import ContentProfile from './contentProfile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../../redux/profile-reducer';
import { useParams, } from "react-router-dom";

function ContentProfileContainer(props) {
    let { userId } = useParams();
    if (!userId) {
        userId = 29270;
    }

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);
    return (
        <div>
            <ContentProfile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ContentProfileContainer);