import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { ExitToAppOutlined } from '@material-ui/icons'
import { blue } from '@material-ui/core/colors';

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
    }
}))

const MyAppBar=({isLogedin, username}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='sticky' className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar} >
                    <Typography  className={classes.title}>
                        Ramadaan Checklist

                    </Typography >
                    {
                        isLogedin &&
                        <>
                        <Typography >{username}</Typography>
                        <IconButton >
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
