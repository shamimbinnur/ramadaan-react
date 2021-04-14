import React from 'react'
import { Button, Container, makeStyles, ButtonGroup, FormControl, Checkbox, FormGroup, FormControlLabel, Typography, FormLabel } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center'
    },
}))


const ChecklistForm = ()=> {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <FormControl>
                    <FormLabel> Checklist submition form</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I fasted today'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I told truth today'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label="control label"
                        />
                    </FormGroup>
                    <Button variant='contained' type='submit' color='primary' >Submit</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default ChecklistForm
