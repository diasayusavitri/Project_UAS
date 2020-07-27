import React from 'react'
import { Container, Row, Card} from 'reactstrap'
import ProdukBuku from './ProdukBuku'


function ProductComp() {
    return (
        <div>
            <Container>
                <hr/>
                <Card body inverse color="primary">
                <h1>Produk</h1>
                </Card>
                <Row>
                    <ProdukBuku/>
                </Row>
            </Container>
        </div>
    )
}

export default ProductComp