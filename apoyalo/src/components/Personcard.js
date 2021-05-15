import React, {Component} from 'react';


class Personcard extends Component{
    constructor (props){
        super(props);
        this.state = {
            agePerson:this.props.age,
        };
    }

    addYear = () => {

        let ageMoreOne = this.state.agePerson+1;
        this.setState({ agePerson: ageMoreOne });
    };
    restYear = () => {

        let ageRestOne = this.state.agePerson-1;
        this.setState({ agePerson: ageRestOne });
    };
    render (){
        const {firstName,lastName,age,hairColor}=this.props;
        return (
            <div>
                <h3>{firstName}, {lastName}</h3>
                <h3>Age: {this.state.agePerson}</h3>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addYear}>+ año a: {firstName}</button>
                <button onClick={this.restYear}>- año a: {firstName}</button>
            </div>
            
            )
        }
    }

export default Personcard;