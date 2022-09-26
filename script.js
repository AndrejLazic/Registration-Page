let config = {
    'ime_prezime':{
        required: true,
        minlength: 2,
        maxlength: 30
    },
    'korisnicko_ime':{
        required: true,
        minlength: 6,
        maxlength: 15
    },
    'email':{
        required: true,
        email: true,
        minlength: 5,
        maxlength: 20
    },
    'broj_telefona':{
        required: false,
        minlength: 9,
        maxlength: 13
    },
    'lozinka':{
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku':{
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'lozinka'
    }

};

let validate = new Validator(config);