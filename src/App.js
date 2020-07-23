import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Component/Fungsional/Header'
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import Beranda from './Component/Fungsional/Beranda';
import Info from './Component/Fungsional/Info';
//import DetailComp from './Component/Fungsional/DetailComp';
import DaftarComp from './Component/Class/DaftarComp';
import TambahBuku from './Component/Class/TambahBuku';
import EditBuku from './Component/Class/EditBuku';
//import KelasComp from './Component/Hooks/Class/KelasComp';
// import HooksComp from './Component/Hooks/Functional/HooksComp';
// import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Fungsional/ProductComp';

//import logo from './logo.svg';
// import Home from './Component/Fungsional/Home';
// import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {

  const [value, setValue] = useState(0)

  return (
    <div>
            <Header />
            
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}>
        <NavbarComp />
        <switch>
          <Route exact path="/" component={Beranda} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/buku" component={DaftarComp} />
          <Route exact path="/buku/tambah" component={TambahBuku} />
          <Route exact path="/buku/edit" component={EditBuku} />
          {/* <Route exact path="/kelas" component={KelasComp} /> */}
          {/* <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} /> */}
          <Route exact path="/produk" component={ProductComp} />
          
          {/* {/<Route exact path="/detail/:id" component={DetailComp} />/} */}
        </switch>
      </CartContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App