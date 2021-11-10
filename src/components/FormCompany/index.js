import {Component} from 'react';

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
}

export default FormCompany;