import { Component } from "react";
import Wrapper from "./common/D-Wrapper";
import Input from "./common/E-Input";
import txt from "../assets/4a.txt";
import Button from "./common/B-Button";

class StateClass extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            vehicle: {
                type: 'car'
            }
        };
    }

    nameChangeHandler(event) {
        this.setState({...this.state, name: event.target.value});
    }

    render() {
        return (
            <Wrapper title="State - Class based Component" fileName={txt}>
              <h6>C4a: State Handling - Class based Component</h6>
              <label htmlFor="2way">Enter Text: </label>
              <Input id="2way" type="text" value={this.state.name} onChange={this.nameChangeHandler.bind(this)} />
              <p>
                Input Text: {this.state.name}
              </p>
              <Button onClick={() => this.setState({...this.state, name: ''})}>Reset Text</Button>
              <Button onClick={() => this.props.liftStateUp(this.state.name)}>Update Text in Component 1 & 2</Button>
            </Wrapper>
          );
    }
}

export default StateClass;