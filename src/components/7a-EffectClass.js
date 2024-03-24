import { Component, Fragment } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/7a.txt";
import Button from "./common/B-Button";

class EffectClass extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    // useEffect(() => {...}, [])
    componentDidMount() {
        // console.log('DidMount State - ', this.state.counter);
        this.setState({...this.state, counter: 11})
    }  

    // useEffect(() => {...}, [counter])
    componentDidUpdate(prevProps, prevState) {
        // console.log('DidUpdate State - ', this.state.counter);
        // console.log('DidUpdate PrevState - ', prevState.counter);

        if(prevState.counter === 11 && this.state.counter === 0) {
            // console.log('Set Interval');

            this.interval = setInterval(() => {
                this.setState({...this.state, counter: this.state.counter + 1})
            }, 1000);  
        }

        if(this.state.counter === 10) {
            // console.log('Clear Interval');
            clearInterval(this.interval);
            this.setState({...this.state, counter: 11});
        }
    }

    // useEffect(() => {... return() {}}, [])
    componentWillUnmount() {
        // console.log('Clear Interval');
        clearInterval(this.interval);
    } 
    
    render() {
        const startCounter = () => {
            // console.log('Start Counter');
            this.setState({...this.state, counter: 0});
        }
        
        return <Wrapper title="SideEffects Class Component - DidMount, DidUpdate and WillUnmount" fileName={txt}>
            <h6>C7a: Component DidMount, DidUpdate and WillUnmount</h6>
            <Fragment>
            <Button disabled={this.state.counter < 11} onClick={startCounter}>
                Start Counter
            </Button>
            Counter {this.state.counter < 11 ? "Running: " : "Stopped."}{" "}
            {this.state.counter < 11 && this.state.counter}
            </Fragment>
        </Wrapper>
    }
}

export default EffectClass;