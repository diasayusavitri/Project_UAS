import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahBuku extends PureComponent {
    constructor(props) {
        super (props)

        this.state = {
            judul_buku: '',
            genre_buku: '',
            harga_buku: '',
            stok: '',
            response: '',
            display: 'none'
            
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addbuku = () => {
        axios.post(api+ '/tambah', {
            judul_buku: this.state.judul_buku,
            genre_buku: this.state.genre_buku,
            harga_buku: this.state.harga_buku,
            stok: this.state.stok
        }).then(json => {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render () {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Judul</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="judul_buku" value={this.state.judul_buku} onChange={this.handleChange} placeholder="Masukkan judul"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Genre</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="genre_buku" value={this.state.genre_buku} onChange={this.handleChange} placeholder="Masukkan genre"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="harga_buku" value={this.state.harga_buku} onChange={this.handleChange} placeholder="Masukkan harga"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Stok</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="stok" value={this.state.stok} onChange={this.handleChange} placeholder="Masukkan stok"/>
                            </Col>
                        </Row>
                    </FormGroup>
                                 
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={this.Addbuku}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
} 
export default TambahBuku