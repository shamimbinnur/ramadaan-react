import { Button, Container, makeStyles, ButtonGroup, FormControl, Checkbox, FormGroup, FormControlLabel, Typography, FormLabel } from '@material-ui/core'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
import ChecklistForm from '../components/ChecklistForm'

const useStyles = makeStyles((theme)=>({
    profileSection:{
        minHeight: theme.spacing(10),
        padding: theme.spacing(10,0)
    },
    buttonContainer:{
        display: 'flex',
        minHeight: theme.spacing(10),
        justifyContent: 'center'
    },
}))

const Profile = ()=> {
    const classes = useStyles();
    const history = useHistory()
    return (
        <Container>
            <div className={classes.profileSection}>
                    <Typography variant='h6'>
                        Abdur Rouf
                    </Typography>
                    <Typography variant='subtitle1'>
                        Dhaka, Bangladesh
                    </Typography>
                    <Typography variant='subtitle1'>
                        Score: 404
                    </Typography>
            </div>
            <div className={classes.buttonContainer}>
                <div>
                    <ButtonGroup>
                        <Button size="small" onClick={()=> history.push('/profile/checklist')}>Checklist</Button>
                        <Button size="small">Previous History</Button>
                        <Button size="small">Settings</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.mainSection}>
                <Switch>
                    <Route path ='/profile/checklist'>
                        <ChecklistForm/>
                    </Route>
                </Switch>
            </div>
        </Container>
    )
}

export default Profile
