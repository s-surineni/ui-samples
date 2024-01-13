import React from 'react';
import { Link } from 'react-router-dom';
const SampleHome = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Link to={"/sample/login1"}>Login1</Link></td>
                    </tr>

                </tbody>
                </table>
        </div>
    )
}
export default SampleHome
