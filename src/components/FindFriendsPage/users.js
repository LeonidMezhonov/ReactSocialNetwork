import React from 'react'
import s from './users.module.css'
import userphoto from '../../Assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { follow, unfollow } from '../../api/api'

let Users = (props) => {
    return <div className={s.wrap}>
    {
        props.users.map(u => <div key={u.id}>
            <div className={s.user}>
                <div>
                    {u.followed ? 
                    <button className={s.btnUnfollow} onClick={ () => {
                        unfollow(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                        }); 
                    }

                    }>FOLLOWED</button> 
                    : <button className={s.btnFollow} onClick={ () => {
                        follow(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        }); 
                    }
                        
                    }>FOLLOW</button>}
                </div>
                <NavLink to={'/profile/' + u.id}>
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
                </NavLink>  
            </div>
        </div>)
    }

    <div className={s.pages}>
        <div className={s.selectedPage} onClick={(e) => { props.previousPage(props.currentPage) }}>
                    PREVIOUS PAGE
                </div>
        <div className={s.selectedPage} onClick={(e) => { props.nextPage(props.currentPage) }}>
                    NEXT PAGE
                </div>
    </div>
</div>
}

export default Users;