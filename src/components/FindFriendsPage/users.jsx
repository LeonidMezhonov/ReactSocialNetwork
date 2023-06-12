import axios from 'axios';
import React from 'react';
import s from './users.module.css'
import userphoto from '../../Assets/images/user.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
    }

    render() {
        return <div className={s.wrap}>
            {
                this.props.users.map(u => <div key={u.id}>
                        <div className={s.user}>
                            <div>
                                {u.followed ? <button className={s.btnUnfollow} onClick={() => {this.props.unfollow(u.id)}}>UNFOLLOW</button> 
                                : <button className={s.btnFollow} onClick={() => {this.props.follow(u.id)}}>FOLLOW</button>}
                            </div>
                            


                            <div className={s.userInfo}>
                                <div className={s.picture}>
                                    <img src={u.photos.small != null ? u.photos.small : userphoto} alt="" />
                                </div>
                                
                                <div className={s.text}>
                                    <div className={s.name}>{u.name}</div>
                                    <div className={s.quote}>{u.status}</div>
                                </div>

                                <div className={s.location}>'u.location'</div>
                            </div>
        
                        </div>
                </div>)
            }
        </div>
    }
}

export default Users;
    
