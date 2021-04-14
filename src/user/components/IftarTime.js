import React from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Container, makeStyles,
    Paper,
    Table,
    TableContainer,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@material-ui/core'
import { blue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({
    tableHead:{
        backgroundColor: grey[500],

    }
}))
const IftarTime = ()=> {
    const arr = [1,1,1,1,1,,1,1];
    const classes = useStyles()

    return (
        <div>
            <Container maxWidth='sm'>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.tableHead} >
 
                                <TableCell align="left"> <Typography> Division </Typography> </TableCell>
                                <TableCell align="left"> <Typography> Time </Typography> </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                arr.map(item =>(
                                    <TableRow>
                                    <TableCell align="left"> <Typography> Dhaka </Typography> </TableCell>
                                    <TableCell align="left"> <Typography> 6.30 PM </Typography> </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            
            </Container>
        </div>
    )
}

export default IftarTime
