import React, {Component} from 'react';
import {Prompt} from 'react-router';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked : false
        }
    }
    render() {
        return (
            <div>
                <h1>Day la trang lien he</h1>
                <button onClick={() => this.updateheck(false)} type="button" className="btn btn-info">Allow</button>
                <button onClick={() => this.updateheck(true)} type="button" className="btn btn-danger">Unallow</button>
                <Prompt
                    when={this.state.isChecked}
                    message={location=>(`Are you sure to go to ${location.pathname}`)}
                />
            </div>
        );
    }
    updateheck = (isChecked) => {
        this.setState({
            isChecked : isChecked
        })
    }
}

export default About