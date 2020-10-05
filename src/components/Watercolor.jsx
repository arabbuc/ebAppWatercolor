import React, { Component } from 'react'
import axios from 'axios'

export class Watercolor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            watercolor: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3004/acuarelas")
            .then(
                res => this.setState({ watercolor: res.data })
            ).catch(
                err => console.error("error en axios", err)
            );
    }

    render() {
        return (
            <div>
                <ol>
                    {this.state.watercolor.map(e=><li>
                        {e.img}

                    </li>)}
                </ol>
            </div>
        )
    }
}


export default Watercolor
