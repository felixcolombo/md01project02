import {useState} from 'react';
import SubHeader from '../../components/SubHeader';
import {Link} from 'react-router-dom';

const FormCompany = () => {

    const [corporateName, setCorporateName] = useState('');
    const [tradeName, setTradeName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [complement, setComplement] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
            
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.checkValidity();

    };

    function refreshPage(){ 
        window.location.reload(); 
    }

    return(

        <form onSubmit={handleSubmit}>

            <SubHeader title='Nova Empresa'>
                <button type="button" onClick={ refreshPage }>Cancelar</button>
                <input type='submit' value='Salvar'/>
            </SubHeader>
                
            <label>
                Razão Social:
                <input
                    type='text'
                    name='corporateName'
                    value={corporateName}
                    onChange={(e) => setCorporateName(e.target.value)}
                    placeholder='Razão Social'
                    required
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
                    required
                    />
            </label>

            <label>
                CNPJ:
                <input
                    type='text'
                    name='cnpj'
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    placeholder='CNPJ'
                    required
                    />
            </label>

            <label>
                E-mail:
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='example@site.com'
                    pattern='.+@.+\..+'
                    required
                    />
            </label>

            <label>
                CEP:
                <input
                    type='text'
                   name='cep'
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder='CEP'
                    required
                    />
            </label>

            <label>
                Endereço:
                <input
                    type='text'
                    name='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Endereço'
                    required
                    />
            </label>

            <label>
                Número:
                <input
                    type='number'
                    name='number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Número'
                    required
                    />
            </label>

            <label>
                Bairro:
                <input
                    type='text'
                    name='district'
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder='Bairro'
                    required
                    />
            </label>

            <label>
                Cidade:
                <input
                    type='text'
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Cidade'
                    required
                    />
            </label>

            <label>
                Complemento:
                <input
                    type='text'
                    name='complement'
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    placeholder='Complemento'
                />
            </label>

            <label>
                Latitude:
                <input
                    type='number'
                    name='latitude'
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder='Latitude'
                    required
                    />
            </label>

            <label>
                Longitude:
                <input
                    type='number'
                    name='longitude'
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder='Longitude'
                    required
                    />
            </label>

                               
        </form>
    );
}

export default FormCompany;