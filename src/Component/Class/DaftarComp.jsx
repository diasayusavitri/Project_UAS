import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class DaftarComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            buku: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                buku: res.data.values
            })
        })
    }

    hapus = (idbuku) => {
        const { buku } = this.state
        const data = qs.stringify({
            id_buku: idbuku
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    buku: buku.filter(buku => buku.id_buku !== idbuku),
                    display: 'block'
                })
                this.props.history.push('/buku')
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                //this.props.history.push('/buku')
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Buku</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <NavLink href="/buku/tambah"><Button color="success">Tambah Buku</Button></NavLink>
                <hr />
                <Table className="table=bordered">
                    <thead>
                        <tr>
                            <th>Judul Buku</th>
                            <th>Genre Buku</th>
                            <th>Harga Buku</th>
                            <th>Stok</th>
                            <th>Aksi</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.buku.map(buku =>
                            <tr key={buku.id_buku}>
                                <td>{buku.judul_buku}</td>
                                <td>{buku.genre_buku}</td>
                                <td>{buku.harga_buku}</td>
                                <td>{buku.stok}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/buku/edit',
                                                state: {
                                                    id_buku: buku.id_buku,
                                                    judul_buku: buku.judul_buku,
                                                    genre_buku: buku.genre_buku,
                                                    harga_buku: buku.harga_buku,
                                                    stok: buku.stok
                                                }
                                            }
                                        }>
                                        <Button> Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={()=>this.hapus(buku.id_buku)} color="danger">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}

export default DaftarComp