import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
import { Button, ButtonGroup, Container, makeStyles, Typography } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors';
import Hadith from '../components/Hadith'
import LeaderBoard from '../components/LeaderBoard'
import IftarTime from '../components/IftarTime'

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: theme.spacing(50),
    },
    heroSection:{
        display: 'flex',
        flexDirection: "column",
        padding: theme.spacing(10, 10, 15, 10),
        [theme.breakpoints.up('xs')]: {
            alignItems: "center"
        },
        [theme.breakpoints.up('sm')]: {
            alignItems: "start"
        },
        [theme.breakpoints.up('md')]: {
            alignItems: 'start'
        },
        
    },
    mainSection:{
        minHeight: theme.spacing(50),

    },
    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0,0,5,0),
    },
    contents:{

    },
    checkMark:{
        display: 'flex',
        justifyContent:"center",
        padding: theme.spacing(0, 0, 6, 0)

    }
}))

const Home = ()=> {
    const classes = useStyles();
    const history = useHistory();
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
            <Container>
                <div className={classes.checkMark}>
                    <Typography variant="subtitle1">
                        <Link style={{textDecoration: 'none'}} to="/profile"> Try Ramadan Checklist now</Link>
                    </Typography>
                </div>
            </Container>
            <Container className={classes.mainSection}>
                <div className={classes.buttonContainer}>
                    <ButtonGroup>
                        <Button size="small" onClick={()=> history.push('/leader-board')} > Leader Board </Button>
                        <Button size="small" onClick={()=> history.push('/hadith')} > Hadith </Button>
                        <Button size="small" onClick={()=> history.push('/iftar-time')}> Iftar Time </Button>
                    </ButtonGroup>
                </div>
                
                <div className={classes.contents}>
                    <Switch>
                        <Route path ='/leader-board'>
                            <LeaderBoard/>
                        </Route>
                        <Route path ='/hadith'>
                            <Hadith/>
                        </Route>
                        <Route path ='/iftar-time'>
                            <IftarTime/>
                        </Route>
                    </Switch>
                </div>

            </Container>

        </div>
    )
}

export default Home
