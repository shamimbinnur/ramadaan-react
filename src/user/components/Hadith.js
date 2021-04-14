import { Card, CardContent, CardHeader, Typography, Grid, Container } from '@material-ui/core'
import React from 'react'

const arr = [1,2,45,51,21]

const Hadith = ()=> {
    return (
        <div>
            <Container maxWidth='md'>
                <Grid container spacing={2}>
                        {
                            arr.map((item)=>(
                                <Grid item xs={12} sm={4} md={3}>
                                    <Card>
                                        <CardHeader
                                        title="This is awesome title"
                                        subheader="25th September 2021"
                                        />
                                        <CardContent>
                                        <Typography variant= 'body2'>
                                            This is awesome details
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                </Grid>
            </Container>
        </div>
    )
}

export default Hadith
