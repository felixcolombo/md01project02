import {useState} from 'react';
import SubHeader from '../SubHeader';
//import './style.css';


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
        <div className='content'>

        <form className='container-formcompany' onSubmit={handleSubmit}>
            
        <SubHeader title='Nova Empresa'>
            <button type="button" onClick={ refreshPage }>Cancelar</button>
            <input type="submit" value="Salvar"/>
        </SubHeader>
            
            
        <label>
                Razão Social:
                <input
                    type='text'
                    name="corporateName"
                    value={corporateName}
                    onChange={(e) => setCorporateName(e.target.value)}
                    placeholder='Razão Social'
                />
            </label>

            <label>
                Nome Fantasia:
                <input
                    type='text'
                    name='tradeName'
                    value={tradeName}
                    onChange={(e) => setTradeName(e.target.value)}
                    placeholder='Nome Fantasia'
                    
                />
            </label>

            <label>
                CNPJ:
                <input
                    type='text'
                    name="cnpj"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    placeholder='CNPJ'
                    
                />
            </label>

            <label>
                E-mail:
                <input
                    type='email'
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='example@site.com'
                                        
                />
            </label>

            <label>
                CEP:
                <input
                    type='text'
                   name="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder='CEP'
                    
                />
            </label>

            <label>
                Endereço:
                <input
                    type='text'
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Endereço'
                    
                />
            </label>

            <label>
                Número:
                <input
                    type='number'
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Número'
                    
                />
            </label>

            <label>
                Bairro:
                <input
                    type='text'
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder='Bairro'
                    
                />
            </label>

            <label>
                Cidade:
                <input
                    type='text'
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Cidade'
                    
                />
            </label>

            <label>
                Complemento:
                <input
                    type='text'
                    name="complement"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    placeholder='Complemento'
                />
            </label>

            <label>
                Latitude:
                <input
                    type='number'
                    name="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder='Latitude'
                    
                />
            </label>

            <label>
                Longitude:
                <input
                    type='number'
                    name="longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder='Longitude'
                    
                />
            </label>

        </form>
    </div>
    )
}

export default FormCompany;