import axios from 'axios';
import React from 'react';

class App extends React.Component{
    
    state={ details : [], }
    componentDidMount()
    {
        let data;
        axios.get('http://localhost:8000')
        .then(res => {
            data=res.data;
            this.setState({
                details: data
            });
        })
        .catch(err => { })
    }

    render()
    {
        return(
            <>
            <header>Data Gen from Django</header>
            <hr />
            {this.state.details.map((output,id)=>(
                <div key={id}>
                    <h2>{output.username}</h2>
                </div>
            ))}

            </>

        )
    }
}