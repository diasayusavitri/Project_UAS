import React from 'react'
import { CardImg, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import CardComp2 from './CardComp2';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function Beranda() {
    return (
        <div>
            <Container>
                <h1 className="display-3">Beranda </h1>
                <CardImg top width="100%" src="https://www.smpit.bisa.id/wp-content/uploads/2016/02/kurikulum.jpg" alt="Card image cap" />
            </Container>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Best Seller" /></Col>

                </Row>
                <Row>
                    <Col><CardComp2 id="2" judul="Buku Rekomendasi" /></Col>

                </Row>
        
            </Container>
        </div>
    )
}

export default Beranda