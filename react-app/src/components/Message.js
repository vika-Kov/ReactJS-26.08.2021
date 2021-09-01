import React, { Component }  from 'react'


export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:"",
            newAuthor: "",
            messageList:[
                {text:"Message 1", author: "Vika"},
                {text:"Message 2", author: "Ivan"}

            ]      
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        });

    }

    handleAuthorChange(event){
    this.setState({
            newAuthor: event.target.value
        });
        
    }

    handleSubmit(event){       
        
        event.preventDefault();
        this.setState({
            // submit: this.state.input,
            messageList:[...this.state.messageList, {text: this.state.input, author: this.state.newAuthor}]
        });       
        
        this.props.updateName(this.state.newAuthor);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input class="placeholder__text" placeholder="Your text" value={this.state.input} onChange={this.handleChange}/>
                    <input class="placeholder__text" placeholder="Author" value={this.state.newAuthor} onChange={this.handleAuthorChange}/>
                    <button class="submit__button" type="submit">Send message</button>
                </form>
                <ul>
                    {this.state.messageList.map((item,index)=>(
                        <li key={index}>{item.text}, author: {item.author}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
