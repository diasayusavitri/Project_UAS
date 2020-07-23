import React from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function RowProduct2() {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/95174.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>1984 - Republish</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 71.200</CardSubtitle></h3>
                        <CardText>oleh George Orwell</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/112447.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Anak Juga Manusia</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 55.200</CardSubtitle></h3>
                        <CardText>oleh Angga Setyawan</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/103232.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Bilik-Bilik Cinta Muhammad</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 64.000</CardSubtitle></h3>
                        <CardText>oleh Nizar Abazhah</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116294_f.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>5 CM</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 97.750</CardSubtitle></h3>
                        <CardText>oleh Donny Dhirgantoro</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116322.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>The Fifth Season</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 365.000</CardSubtitle></h3>
                        <CardText>oleh Bong Chandra & Danny Sutradewa</CardText>
                    </CardBody>
                </Card>


            </CardDeck>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116293.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Wawasan Pancasila</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 91.200</CardSubtitle></h3>
                        <CardText>oleh Yudi Latif </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116245.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Janur Ireng</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 84.150</CardSubtitle></h3>
                        <CardText>oleh Simpleman</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116246.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>KHILAFAH: Peran Manusia di Bumi</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 64.000</CardSubtitle></h3>
                        <CardText>oleh M. Quraish Shihab</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/111662.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Who Wants To Be A Smiling Investor</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 103.500</CardSubtitle></h3>
                        <CardText>oleh Lukas Setia Atmaja Dan Thomdean</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116064.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>RECEHAN BAHASA Baku Tak Mesti Kaku </CardTitle></h5>
                        <h3><CardSubtitle>Rp. 67.150</CardSubtitle></h3>
                        <CardText>oleh Ivan Lanin</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
            
        </Col>
    )
}

export default RowProduct2