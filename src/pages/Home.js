import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button"
import { Table } from "react-bootstrap";
import navBar from "../components/NavBar"
import "../CSS/content.css"


export default class Home extends React.Component
{
    // const [data, setData] = useState(null);

    constructor(props) {
        super(props)
        this.state = {data: null}
    }

    async request() {
        const response = await axios.post("http://localhost:8080/test")
        this.setState({
            data: response.data
        });
        console.log(this.state.data);
    }

    // compnentDidMount() { // basically useEffect
    //     this.request()
    // }

    render() {
        return (
            <div className="content">
                <navBar />
                <h1>Welcome to the F1 app!</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Position</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        <tr>
                            <td>1</td>
                            {data.map((position) => (
                                <td key={position}>Table cell</td>
                            ))}
                        </tr>
                    </tbody> */}
                </Table>
                <Button onClick={this.request.bind(this)}>Fetch</Button>
            </div>
        )
    }
}