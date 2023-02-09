import React from 'react';
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

class CustormerProps extends React.Component {
    constructor() {
        super()
        console.log("props >>> "+ JSON.stringify(this))
    }
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.p.id}</TableCell>
                <TableCell><img src={this.props.p.image} alt="customer profile" /></TableCell>
                <TableCell>{this.props.p.name}</TableCell>
                <TableCell>{this.props.p.birthday}</TableCell>
                <TableCell>{this.props.p.gender}</TableCell>
                <TableCell>{this.props.p.job}</TableCell>
            </TableRow>
        )
    }
}

export default CustormerProps;