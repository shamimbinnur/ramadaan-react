import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: theme.spacing(50),
        backgroundColor:  grey[100]
    },
    heroSection:{
        padding: theme.spacing(10, 10)
    }
}))
const Home = ()=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.heroSection}>
                <Typography variant='h2'>
                    Welcome
                </Typography>
                <Typography variant= 'subtitle1'>
                    Today is 2 September 2021 | 1st Ramadan
                </Typography>
            </Container>
        </div>
    )
}

export default Home
