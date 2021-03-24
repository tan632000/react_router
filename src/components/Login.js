import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName : '',
            txtPassword : ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }
    onLogin = (e) => {
        e.preventDefault();
        var {txtPassword, txtUserName} = this.state
        if (txtUserName === 'admintest1@gmail.com' && txtPassword === '123456') {
            localStorage.setItem('user', JSON.stringify({
                userName : txtUserName,
                passWord : txtPassword
            }))
        }
    }
    render() {
        var {txtPassword, txtUserName} = this.state
        var {location} = this.props
        var loggedIn = localStorage.getItem('user')
        if (loggedIn!==null) {
            return <Redirect to={{
                pathname : "/products",
                state : {
                    from : location
                }
            }}></Redirect>
        }
        return (
            <div className="row">
                <div className="col-xs-6 col-md-6 col-lg-6 col-sm-6">
                    <form onSubmit={this.onLogin}>
                        <legend>Dang nhap</legend>
                        <div className="form-group">
                          <label>UserName</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="txtUserName"
                            value={txtUserName}
                            onChange={this.onChange}
                        />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input 
                            type="password" 
                            className="form-control" 
                            name="txtPassword"
                            value={txtPassword}
                            onChange={this.onChange}
                        />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-success"

                        >Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login