import {useState} from 'react';
import SubHeader from '../SubHeader';
import './style.css';


const FormCompany = (props) => {

    function refreshPage(){ 
        window.location.reload(); 
    }

    const [corporateName, setCorporateName] = useState("");
    const [tradeName, setTradeName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [complement, setComplement] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleSubmit = async (event) => {
        try {

            event.preventDefault();

            if (!corporateName) {
                alert('Razão Social é Obrigatória!')
                return;
            } else if (!tradeName) {
                alert('Nome Fantasia é Obrigatório!');
                return;
            } else if (!cnpj) {
                alert('CNPJ é Obrigatório!');
                return;
            } else if (!email) {
                alert('E-mail é Obrigatório!');
                return;
            } else if (!cep) {
                alert('CEP é Obrigatório!');
                return;
            } else if (!address) {
                alert('Endereço é Obrigatório!');
                return;
            } else if (!number) {
                alert('Número é Obrigatório!');
                return;
            } else if (!district) {
                alert('Bairro é Obrigatório!');
                return;
            } else if (!city) {
                alert('Cidade é Obrigatório!');
                return;
            } else if (!latitude) {
                alert('Latitude é Obrigatório!');
                return;
            } else if (!longitude) {
                alert('Longitude é Obrigatório!');
                return;
            }

            fetch (
                await "http://localhost:3333/empresas",
                
                {
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    
                    method: "POST",
                    body: JSON.stringify({
                        "corporateName": corporateName,
                        "tradeName": tradeName,
                        "cnpj": cnpj,
                        "email": email,
                        "cep": cep,
                        "address": address,
                        "number": number,
                        "district": district,
                        "city": city,
                        "complement": complement,
                        "latitude": latitude,
                        "longitude": longitude

                    })
                }
            );

            alert ('Empresa cadastrada com Sucesso!');
            refreshPage();

            

        } catch (error) {
            alert('Erro Detectado!')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <SubHeader title='Nova Empresa'/>

                <div className='container-formCompany'> 

                    <div className='container-nameCompany'>
                        <div className='container-corporate'> 
                            <label>Razão Social</label>
                            <input
                                type='text'
                                name="corporateName"
                                value={corporateName}
                                onChange={(e) => setCorporateName(e.target.value)}
                                placeholder='Razão Social'
                            />
                        </div>
                        
                        <div className='container-trade'>
                            <label>Nome Fantasia</label>
                            <input
                                type='text'
                                name='tradeName'
                                value={tradeName}
                                onChange={(e) => setTradeName(e.target.value)}
                                placeholder='Nome Fantasia'
                             />
                        </div>
                    </div>

                    <div className='container-cnpj-email'>
                        <div className='container-cnpj'> 
                            <label>CNPJ</label>
                            <input
                                type='text'
                                name="cnpj"
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                                placeholder='CNPJ'
                            />
                        </div>

                        <div className='container-email'>
                            <label>E-mail</label>
                            <input
                                type='email'
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='example@site.com'
                            />
                        </div>
                    </div>

                    <div className='container-cep-address'>
                        <div className='container-cep'>
                            <label>CEP</label>
                            <input
                                type='text'
                                name="cep"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                placeholder='CEP'
                                
                            />
                        </div>
                        <div className='container-address'>
                            <label>Endereço</label>
                            <input
                                type='text'
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='Endereço'
                            />
                        </div>
                    </div>

                    <div className='container-num-district-city'>
                        <div className='container-num'>
                            <label>Número</label>
                            <input
                                type='number'
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder='Número'
                                
                            />
                        </div>
                        <div className='container-district'>
                            <label>Bairro</label>
                            <input
                                type='text'
                                name="district"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                placeholder='Bairro'
                                
                            />
                        </div>
                        <div className='container-city'>
                            <label>Cidade</label>
                            <input
                                type='text'
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder='Cidade'
                            />
                        </div>
                    </div>

                    <div className='container-complement'>
                        <label>Complemento</label>
                            <input
                                type='text'
                                name="complement"
                                value={complement}
                                onChange={(e) => setComplement(e.target.value)}
                                placeholder='Complemento'
                            />
                    </div>

                    <div className='container-lat-long'>
                        <div className='container-lat'>
                            <label>Latitude</label>
                            <input
                                type='number'
                                name="latitude"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                placeholder='Latitude'
                            />
                        </div>
                        <div className='container-long'>
                            <label>Longitude</label>
                            <input
                                type='number'
                                name="longitude"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                                placeholder='Longitude'
                            />
                        </div>
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default FormCompany;