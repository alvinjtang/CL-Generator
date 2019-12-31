import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor({props}) {
        super({props})
        const {date, team, culture} = props
        this.state = {
            date,
            companyName: '',
            address: '',
            city: '',
            role: '',
            team,
            position: '',
            culture,
            intro: '',
        }
    }

    handleChange = async event => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        this.props.updateState(this.state)
    }

    render() {
        return (
            <form>
                <div id='btn'>
                    <input className='btn' type="button" name="role" value="Front End Engineer" onClick={this.handleChange}/>
                    <input className='btn' type="button" name="role" value="Software Engineer" onClick={this.handleChange}/>
                    {/* <input className='btn' type="button" name="role" value="Full Stack Engineer" onClick={this.handleChange}/> */}
                    {/* <input className='btn' type="button" name="role" value="Apprenticeship" onClick={this.handleChange}/>
                    <input className='btn' type="button" name="role" value="Internship" onClick={this.handleChange}/> */}
                </div>
                <br/>
                <label htmlFor='date'>Date:</label>
                <input className='input' 
                    name='date' 
                    type='text' 
                    value={this.state.date} 
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor='companyName'>Company Name:</label>
                <input className='input' 
                    name='companyName' 
                    type='text' 
                    value={this.state.companyName} 
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor='address'>Address:</label>
                <input className='input' 
                    name='address' 
                    type='text' 
                    value={this.state.address} 
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor='team'>Team:</label>
                <input className='input' 
                    name='team' 
                    type='text' 
                    value={this.state.team} 
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor='position'>Position:</label>
                <input className='input' 
                    name='position' 
                    type='text' 
                    value={this.state.position} 
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor='culture'>Culture:</label>
                <input className='input' 
                    name='culture' 
                    type='text' 
                    value={this.state.culture} 
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor='intro'>Intro:</label>
                <br/>
                <textarea className='paragraph' 
                    name='intro' 
                    type='text' 
                    value={this.state.intro} 
                    onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Form;