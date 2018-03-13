import React, { Component } from "react";



export class ChangeTheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick({ currentTarget }) {
        var query = currentTarget.value
        console.log(query)
        this.setState({ text: query })
        const { onClick } = this.props;

        console.log(this.props);
        console.log(this.state);


        //On Submit is coming from the app component binded to handleUpdateLocation
        onClick(query);

    }



    render() {
        return (
            <button className="button" value="design" onClick={this.handleClick}>
                Design
      </button>
        );
    }
}




export default ChangeTheme;