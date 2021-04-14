import React from 'react'
import { Button, Container, makeStyles, ButtonGroup, FormControl, Checkbox, FormGroup, FormControlLabel, Typography, FormLabel } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center'
    },
    formGroup:{
        marginBottom: theme.spacing(2)
    }
}))


const ChecklistForm = ()=> {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <FormControl>
                    <FormLabel> Salah </FormLabel>
                    <FormGroup className={classes.formGroup}>
                        <FormControlLabel
                                control={ <Checkbox/> }
                                label="I prayed Fazar."
                            />
                            <FormControlLabel
                                control={ <Checkbox/> }
                                label="I prayed Jahar."
                            />
                            <FormControlLabel
                                control={ <Checkbox/> }
                                label="I prayed Asar."
                            />
                            <FormControlLabel
                                control={ <Checkbox/> }
                                label="I prayed Maagreeb."
                            />
                            <FormControlLabel
                                control={ <Checkbox/> }
                                label="I prayed Esha."
                            />
                    </FormGroup>
                    <FormLabel> Additional </FormLabel>
                    <FormGroup className={classes.formGroup}>
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I fasted today.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I told truth today'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I donated today.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I helped my family.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I had Sahri in time.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I had Eftar in time.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I managed iftar for someone.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I recited Quran.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I read hadith.'
                        />
                        <FormControlLabel
                            control={ <Checkbox/> }
                            label= 'I learned new Surah.'
                        />
                    </FormGroup>
                    <Button variant='contained' type='submit' color='primary' >Submit</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default ChecklistForm
