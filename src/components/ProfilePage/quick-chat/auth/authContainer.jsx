import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../../../redux/auth-reducer';
import LogIn from './auth';

class LogInContainer extends React.Component {
    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    this.props.setAuthUserData(email, id, login);
                }
            });
    }

    render () {
        return <LogIn {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(LogInContainer);