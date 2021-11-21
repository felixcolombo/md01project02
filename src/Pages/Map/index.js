import React from 'react';
import './style.css';
import Header from '../../components/Header';
import {useEffect, useState} from 'react';

import {MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const [companiesList, setCompaniesList] = useState([]);

    useEffect(() => {
        async function handleGetCompanies() {
            try {
                const response = await fetch("http://localhost:3333/empresas");
                const data = await response.json();

                setCompaniesList(data);

            } catch (error) {
                alert('Houve um erro ao tentar listar as Empresas! Entre em contato com suporte!')
            }
        }
        handleGetCompanies();
    }, []);

    return(
        <div className='content-map'>
            <Header/>

            <div className='container-map'>
                <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {
                companiesList.map((company) => (
                <Marker position={[company.latitude , company.longitude]}>
                    <Popup>
                        <p>Nome: {company.corporateName}</p>
                    </Popup>
                </Marker>
                ))
            }
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;