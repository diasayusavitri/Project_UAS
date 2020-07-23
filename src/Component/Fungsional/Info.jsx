import React from 'react'
import {Col, Container} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function Info() {
    return (
        <div>
            <Container>
            <Col>
            <p class="text-primary">Hubungi Kami</p>
            <h3>Alamat Toko Buku "Cerdas Ceria"</h3>
            <p className="lead">Kantor Pusat    : Jl. Pahlawan Merdeka No. 7, Purwokerto, Banyumas, Jawa Tengah</p>
            <p className="lead">Layanan Bantuan : Telepon : 021-88765454</p>
            <p className="lead">Jam Layanan     : Senin-Jumat (09.00 WIB - 17.00 WIB) | Sabtu (09.00 WIB - 15.00 WIB)</p>
            </Col>
            </Container>
        </div>
    )
}

export default Info
