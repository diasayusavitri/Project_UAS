import React from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function RowProduct() {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116294_f.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>5 CM</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 97.750</CardSubtitle></h3>
                        <CardText>oleh Donny Dhirgantoro</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/115867_f.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Mommyclopedia: 78 Resep MPASI</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 93.500</CardSubtitle></h3>
                        <CardText>oleh dr. Meta Hanindita, Sp.A</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/105210.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Sebuah Seni untuk Bersikap Bodo Amat</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 56.950</CardSubtitle></h3>
                        <CardText>oleh Mark Manson</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/105801.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>My Lecturer My Husband</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 47.600</CardSubtitle></h3>
                        <CardText>oleh GITLICIOUS</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/105087.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Buku Anak Pintar: Panduan Lengkap Siap-Siap Masuk SD</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 55.250</CardSubtitle></h3>
                        <CardText>oleh Yayuk S</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>


            </CardDeck>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116379.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Implementasi Algoritma Dalam Bahasa Python</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 76.500</CardSubtitle></h3>
                        <CardText>oleh WENDI ZARMAN & MOCHAMAD FAJAR WICAKSONO </CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116322.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>The Fifth Season</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 365.000</CardSubtitle></h3>
                        <CardText>oleh Bong Chandra & Danny Sutradewa</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116095.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Strategi & Bank Soal Hots IPA SMP/MTS Kelas 7,8,9</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 80.750</CardSubtitle></h3>
                        <CardText>oleh Tim Maestro Genta</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116034.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Out Of The Maze</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 80.580</CardSubtitle></h3>
                        <CardText>oleh Spencer Johnson</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/109653.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Buku Cerdas Kuasai Vocabulary Grammar dan Tenses</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 59.330</CardSubtitle></h3>
                        <CardText>oleh Tri Cahyanti</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/95174.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>1984 - Republish</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 71.500</CardSubtitle></h3>
                        <CardText>oleh George Orwell</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/112447.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Anak Juga Manusia</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 55.200</CardSubtitle></h3>
                        <CardText>oleh Angga Setyawan</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/103232.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Bilik-Bilik Cinta Muhammad</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 64.000</CardSubtitle></h3>
                        <CardText>oleh Nizar Abazhah</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116294_f.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>5 CM</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 97.750</CardSubtitle></h3>
                        <CardText>oleh Donny Dhirgantoro</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116322.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>The Fifth Season</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 365.000</CardSubtitle></h3>
                        <CardText>oleh Bong Chandra & Danny Sutradewa</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
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
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116245.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Janur Ireng</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 84.150</CardSubtitle></h3>
                        <CardText>oleh Simpleman</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116246.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>KHILAFAH: Peran Manusia di Bumi</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 64.000</CardSubtitle></h3>
                        <CardText>oleh M. Quraish Shihab</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/111662.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Who Wants To Be A Smiling Investor</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 103.500</CardSubtitle></h3>
                        <CardText>oleh Lukas Setia Atmaja Dan Thomdean</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ssvr.bukukita.com/babacms/displaybuku/116064.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>RECEHAN BAHASA Baku Tak Mesti Kaku </CardTitle></h5>
                        <h3><CardSubtitle>Rp. 67.150</CardSubtitle></h3>
                        <CardText>oleh Ivan Lanin</CardText>
                        <Button onClick={()=>setValue(value+1)}>Beli</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            
        </Col>
    )
}

export default RowProduct