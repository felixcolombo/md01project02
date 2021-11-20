import {useEffect, useState} from 'react';
import SubHeader from '../SubHeader';
import './style.css';


const FormProduct = (props) => {

    function refreshPage(){ 
        window.location.reload(); 
    }

    const [url, setUrl] = useState("");
    const [productName, setProductName] = useState("");
    const [unitCost, setUnitCost] = useState("");
    const [description, setDescription] = useState("");
    const [provider, setProvider] = useState("");
    const [providers, setProviders] = useState([]);
    const [group, setGroup] = useState("");
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function getProviders() {
            try {
                const result = await fetch("http://localhost:3333/fornecedores");
                const data = await result.json();
                setProviders(data);
            } catch (error) {
                alert('Erro ao carregar Lista de Fornecedores! Entre em contato com o suporte!')
            }
        }
        getProviders();
    }, []);

    useEffect(() => {
        async function getGroups() {
            try {
                const result = await fetch("http://localhost:3333/categorias");
                const data = await result.json();
                setGroups(data);
            } catch(error) {
                alert('Erro ao carregar Lista de Grupos! Entre em contato com o suporte!')
            }
        }
        getGroups();
    }, []);

    const handleSubmit = async (event) => {
        try {

            event.preventDefault();

            if (!url) {
                alert('URL é Obrigatória!')
                return;
            } else if (!productName) {
                alert('Nome do Produto é Obrigatório!');
                return;
            } else if (!unitCost) {
                alert('Custo é Obrigatório!');
                return;
            } else if (!description) {
                alert('Descrição é Obrigatório!');
                return;
            } else if (!provider) {
                alert('Fornecedor é Obrigatório!');
                return;
            } else if (!group) {
                alert('Grupo é Obrigatório!');
                return;
            } 

            fetch (
                await "http://localhost:3333/produtos",
                
                {
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    
                    method: "POST",
                    body: JSON.stringify({
                        "url": url,
                        "productName": productName,
                        "unitCost": unitCost,
                        "description": description,
                        "provider": provider,
                        "group": group
                    })
                }
            );

            alert ('Produto cadastrado com Sucesso!');
            refreshPage();

            

        } catch (error) {
            alert('Erro Detectado!')
        }
    }

    return (
        <div className='content'>

            <form className='container-formproduct' onSubmit={handleSubmit}>
                
                <SubHeader title='Novo Produto'>
                    <button type="button" onClick={ refreshPage }>Cancelar</button>
                    <input type="submit" value="Cadastar"/>
                </SubHeader>

                <div className='container-imgProduct'> 
                    
                    {url && (
                        <img className='img-Product'
                        src={url}
                        alt="imgProduct"
                        />
                    )}
                </div>
                
                <label>
                    URL da Imagem:
                    <input
                        type='text'
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='https://...'
                    />
                </label>

                <label>
                    Nome:
                    <input
                        type='text'
                        name='productName'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder='Nome do Produto'
                            
                    />
                </label>

                <label>
                    Custo Unitário:
                    <input
                        type='number'
                        name='unitCost'
                        value={unitCost}
                        onChange={(e) => setUnitCost(e.target.value)}
                        placeholder='Custo Unitário'
                            
                    />
                </label>

                <label>
                    Descrição:
                    <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Descrição do Produto...'
                            
                    />
                </label>

                <label>
                    Fornecedores:
                    <select
                        name="provider"
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                    >
                        <option value="" selected disabled>
                            Selecione..
                        </option>
                        {providers.map((provider) => (
                            <option value={provider}>{provider}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Grupo:
                    <select
                        name="group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                    >
                        <option value="" selected disabled>
                            Selecione..
                        </option>
                        {groups.map((group) => (
                            <option value={group}>{group}</option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    )
}

export default FormProduct;