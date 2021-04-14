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

const MyAppBar=({isLogedin}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar} >
                    <Typography  className={classes.title}>
                        Ramadaan Checklist

                    </Typography>
                    {
                        isLogedin &&
                        <>
                        <Typography>Logout</Typography>
                        <IconButton color="inherit" aria-label="menu">
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
