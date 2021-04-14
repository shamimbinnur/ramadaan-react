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
import { WrapText } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles((theme)=>({
    root:{

    }
   
}))
const LeaderBoard = ()=> {
    const classes = useStyles();
    const arr = [1,1,1,1,1,,1,1];
    return (
        <div>
            <Container className={classes.root}  maxWidth='sm'>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
 
                                <TableCell align="left"> <Typography> Serial </Typography> </TableCell>
                                <TableCell align="left"> <Typography> Name </Typography> </TableCell>
                                <TableCell align="left"> <Typography> City </Typography> </TableCell>
                                <TableCell align="left"> <Typography> Score </Typography> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                arr.map(item =>(
                                    <TableRow>
                                    <TableCell align="left"> <Typography> 01 </Typography> </TableCell>
                                    <TableCell align="left"> <Typography> Shamim Bin Nur </Typography> </TableCell>
                                    <TableCell align="left"> <Typography> Sirajganj </Typography> </TableCell>
                                    <TableCell align="left"> <Typography> 405 </Typography> </TableCell>
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

export default LeaderBoard
