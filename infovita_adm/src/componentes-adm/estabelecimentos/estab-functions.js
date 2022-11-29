// eslint-disable-next-line
import { getFirestore, updateDoc, addDoc, deleteDoc, getDoc, getDocs, query ,where, collection, doc } from 'firebase/firestore';
import { app } from '../../services/firebase';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// ------------------ CRUD ------------------- //
//Read
function carregarEstabs(){
    const q = query(collection(db, 'Estabelecimentos'));

    //Removendo os elementos para recarregar
    const elements = document.getElementsByClassName('ul-estabelecimento');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    getDocs(q).then(docSnap => {
        let estabelecimentos = [];
        docSnap.forEach((doc) => {
            estabelecimentos.push({ ...doc.data(), id:doc.id })
        });
        for (let contador = 0; contador < estabelecimentos.length; contador++) {
            let divNova = document.createElement('ul');
            divNova.className = 'ul-estabelecimento';

            //Nome
            let nomeNovo = document.createElement('p');
            nomeNovo.textContent = estabelecimentos[contador]['nome'];
            divNova.appendChild(nomeNovo);
            //Checkbox e abrindo os dados
            let checkNovo = document.createElement('button');
            checkNovo.type = 'button';
            checkNovo.className = 'mostrar';
            checkNovo.textContent = 'ABRIR';
            checkNovo.id = estabelecimentos[contador]['id'];
            checkNovo.addEventListener('click', () => {
                let campo_nome = document.getElementById('estabNome');
                let campo_id = document.getElementById('estabId');
                let campo_local = document.getElementById('estabLocal');

                campo_nome.innerHTML = estabelecimentos[contador]['nome'];
                campo_id.textContent = "ID: " + estabelecimentos[contador]['id'];
                campo_local.textContent = "Local: " + estabelecimentos[contador]['local'];
            })
            divNova.appendChild(checkNovo);
            
            //let divForm = document.getElementById("footerEstab");
            document.getElementById('li-estabelecimentos').appendChild(divNova);
        }
    });
};

//Create
function adicionar(e){
    e.preventDefault();
    let nome_valor = document.getElementById('addNome').value;
    let local_valor = document.getElementById('addLocal').value;

    addDoc(collection(db, "Estabelecimentos"), {
        nome: nome_valor,
        local: local_valor
    });
    carregarEstabs();
    alert('Estabelecimento adicionado!');
};

//Update
//Delete

// ----------------- Others ------------------ //
//Add
function showAdd(){
    document.getElementById('form-add').style.display = 'grid';
    document.getElementById('mostrarAdd').style.display = 'none';
};
function hideAdd(e){
    e.preventDefault();
    document.getElementById('form-add').style.display = 'none';
    document.getElementById('mostrarAdd').style.display = 'grid';
};
//Edit
function showEdit(){
    document.getElementById('form-edit').style.display = 'grid';
    document.getElementById('mostrarAdd').style.display = 'none';
};
function hideEdit(e){
    e.preventDefault();
    document.getElementById('form-edit').style.display = 'none';
    document.getElementById('mostrarEdit').style.display = 'grid';
};

// ------------------ Export ---------------- //
export { carregarEstabs, adicionar, showAdd, hideAdd, showEdit, hideEdit };