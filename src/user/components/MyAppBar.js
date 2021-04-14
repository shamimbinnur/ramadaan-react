import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { ExitToAppOutlined, PlayCircleFilledWhite } from '@material-ui/icons'
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    appbar:{
        backgroundColor: blue[400],
        padding: 0

        
    },
    toolbar:{
        margin: 0

    },
    title:{
        flexGrow: 1
    },
    link:{
        textDecoration: "none",
        color: 'white'
    },
    icon:{
        color: "white",
    }
}))

const MyAppBar=({isLogedin, username}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='sticky' className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar} >
                    <Typography variant='h6' className={classes.title}>
                        <Link className={classes.link}  to='/'> Ramadaan Checklist </Link>
                    </Typography >
                    {
                        isLogedin &&
                        <>
                        <Typography >
                            <Link className={classes.link} to ='/profile'> {username} </Link>
                        </Typography>
                        <IconButton className={classes.icon}>
                            <ExitToAppOutlined />
                        </IconButton>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MyAppBar
