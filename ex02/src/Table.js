import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lary</td>
                        <td>Page</td>
                    </tr>
                    <tr>
                        <td>Ada</td>
                        <td>Lovelace</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Turing</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Table;