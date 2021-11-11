import {Component} from 'react';
import SubHeader from '../../components/SubHeader';

class FormCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corporateName:'',
            tradeName:'',
            cnpj:'',
            email:'',
            cep:'',
            address:'',
            number:'',
            district:'',
            city:'',
            complement:'',
            latitude:'',
            longitude:'',
        };
    }


    handleChange= (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.checkValidity();

    };

    render() {
        return(

            <form onSubmit={this.handleSubmit}>

                <SubHeader title='Nova Empresa'>
                    <button>Cancelar</button> 
                    <input type='submit' value='Salvar'/>
                </SubHeader>
                
                <label>
                    Razão Social:
                    <input
                        type='text'
                        name='corporateName'
                        value={this.state.corporateName}
                        onChange={this.handleChange}
                        placeholder='Razão Social'
                        required
                        />
                </label>

                <label>
                    Nome Fantasia:
                    <input
                        type='text'
                        name='tradeName'
                        value={this.state.tradeName}
                        onChange={this.handleChange}
                        placeholder='Nome Fantasia'
                        required
                        />
                </label>

                <label>
                    CNPJ:
                    <input
                        type='text'
                        name='cnpj'
                        value={this.state.cnpj}
                        onChange={this.handleChange}
                        placeholder='CNPJ'
                        required
                        />
                </label>

                <label>
                    E-mail:
                    <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
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
                        value={this.state.cep}
                        onChange={this.handleChange}
                        placeholder='CEP'
                        required
                        />
                </label>

                <label>
                    Endereço:
                    <input
                        type='text'
                        name='address'
                        value={this.state.address}
                        onChange={this.handleChange}
                        placeholder='Endereço'
                        required
                        />
                </label>

                <label>
                    Número:
                    <input
                        type='number'
                        name='number'
                        value={this.state.number}
                        onChange={this.handleChange}
                        placeholder='Número'
                        required
                        />
                </label>

                <label>
                    Bairro:
                    <input
                        type='text'
                        name='district'
                        value={this.state.district}
                        onChange={this.handleChange}
                        placeholder='Bairro'
                        required
                        />
                </label>

                <label>
                    Cidade:
                    <input
                        type='text'
                        name='city'
                        value={this.state.city}
                        onChange={this.handleChange}
                        placeholder='Cidade'
                        required
                        />
                </label>

                <label>
                    Complemento:
                    <input
                        type='text'
                        name='complement'
                        value={this.state.complement}
                        onChange={this.handleChange}
                        placeholder='Complemento'
                    />
                </label>

                               
            </form>
        )
    }
}

export default FormCompany;