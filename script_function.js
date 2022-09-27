let inputs = document.querySelectorAll('input');
let errors = {
    "ime_prezime" : [],
    "korisnicko_ime" : [],
    "email" : [],
    "lozinka" : [],
    "ponovi_lozinku" : []
};

//console.log(inputs);
//console.log(errors);

inputs.forEach(element => {
    //console.log(element);
    element.addEventListener('change', e => {
        let currentInput = e.target;
        //console.log(currentInput);
        let inputValue = currentInput.value;
        //console.log(inputValue);
        let inputName = currentInput.getAttribute('name');
        //console.log(inputName);

        if(inputValue.length > 4){
            errors[inputName] = [];
            //console.log('Uredu');
            switch(inputName){
                case 'ime_prezime':
                    let validation = inputValue.trim();     //u slucaju da je space na pocetku ili kraju imena
                    validation = validation.split(" ");
                    //console.log(validation);
                    if (validation.length < 2){
                        //console.log('Ne valja');
                        errors[inputName].push('Moras napisati i ime i prezime');
                    }
                break;
            
                case 'korisnicko_ime':
                break;

                case 'email':
                    if(!validateEmail(inputValue)){
                        errors[inputName].push('Neispravan email');
                    }
                break;

                case 'ponovi_lozinku':
                    let lozinka = document.querySelector('input[name="lozinka"').value;
                    if(inputValue !== lozinka){
                        errors[inputName].push('Lozinke se ne poklapaju');
                    }
                break;

            }
        }else{
            //console.log('Pogrsan unos');
            errors[inputName] = ['Polje ne moze imati manje od 5 karaktera'];
            //console.log(errors[inputName]);
        }

        populateErrors(errors);
    });
});

const populateErrors = errors => {

    for(let elem of document.querySelectorAll('ul')){
        elem.remove();
    }

     //console.log(errors);
     for(let key of Object.keys(errors)){
        let input = document.querySelector(`input[name="${key}"`);
        //console.log(input);
        let parentElement = input.parentElement;
        //console.log(parentElement);
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement);
        // console.log(parentElement);


        errors[key].forEach(error => {
            let li = document.createElement('li');
            li.innerText = error;

            errorsElement.appendChild(li);
        });
     }
}

function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}
