import React, { Component,useState, useEffect } from "react";

/*class Main extends Component {
    /*state = {count:0};
    componentDidMount() {
        // console.log("Hello");
        this.setState({count:1});
    }
    updateCount = () => {
        // let _count = this.state.count + 1;
        // console.log(_count);
        this.setState({count:this.state.count + 1});
    };
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.updateCount}>CLICK</button>
            </>
        );
    }*/

    /*
    state = {};
    componentDidMount() {
        this.setState({ count:1 });
        console.log("mounted");
    }

    componentDidUpdate() {
        console.log("updated");
    }

    updateCount = () => {
        this.setState( { count:this.state.count +1 });
    };

    render() {
        console.log("render");
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.updateCount}>CLICK ME!</button>
            </>
        )
    }

}*/

const Main = () => {
    let [count,setCount] = useState(0);
    let updateCount = () => {
        setCount(count +1); 
    }
    useEffect(function() {
        setCount(1);
        console.log("mounted");
    },[]);

    useEffect(()=>{
        console.log("updated");
    },[count]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={updateCount}>CLICK ME!</button>
        </>
    );
}
export default Main;