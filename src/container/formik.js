import React from 'react'

export class Formik extends React.Component {
    constructor() {
        super();
        this.state={firstname:'',lastname:''}
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <>
                <div>
                    <label>FirstName</label>
                    <input type="text" name='firstname' onChange={this.handleChange.bind(this)}></input>
                </div>
                <div>
                    <label>LastName</label>
                    <input type="text" name='lastname' onChange={this.handleChange.bind(this)}></input>
                </div>
            </>
        )
    }
}