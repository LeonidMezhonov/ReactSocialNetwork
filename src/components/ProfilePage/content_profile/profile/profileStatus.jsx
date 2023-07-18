import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onFocus={(e) => e.target.select()} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} type="text" value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;