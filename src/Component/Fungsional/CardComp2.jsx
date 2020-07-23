import React from 'react'
import { Link } from 'react-router-dom'
import {
    Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import RowProduct2 from './RowProduct2'

function CardComp2(props) {
    return (
        <div>
            <Card>
                
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                </CardBody>
            </Card>
            <Row>
                <RowProduct2 />
                
            </Row>
        </div>
    )
}

export default CardComp2