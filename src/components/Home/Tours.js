import React from 'react';

import Tour from './Tour';
import { Container,Row ,Col ,Stack } from 'react-bootstrap';

const Tours = ()=>{
    const tours = [
        {date:"JUL16",city:"DETROIT, MI",location:"DTE ENERGY MUSIC THEATRE"},
        {date:"JUL19",city:"TORONTO,ON",location:"BUDWEISER STAGE"},
        {date:"JUL16",city:"DETROIT, MI",location:"DTE ENERGY MUSIC THEATRE"},
        {date:"JUL19",city:"TORONTO,ON",location:"BUDWEISER STAGE"},
        {date:"JUL16",city:"DETROIT, MI",location:"DTE ENERGY MUSIC THEATRE"},
        {date:"JUL19",city:"TORONTO,ON",location:"BUDWEISER STAGE"}
    ]
    return(
        <Container>
            <Row><Col className='d-flex justify-content-center m-3'><h2>tours</h2></Col></Row>
            <Stack gap={3}>
                {tours.map((t)=>{return <Tour tour={t}/>})}
            </Stack>
            
        </Container>
    )
}

export default Tours;