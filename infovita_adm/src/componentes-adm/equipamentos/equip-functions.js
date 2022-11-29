// eslint-disable-next-line
import { getFirestore, updateDoc, addDoc, deleteDoc, getDoc, getDocs, query ,where, collection, doc } from 'firebase/firestore';
import { app } from '../../services/firebase';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// ------------------ CRUD ------------------- //
//Read
function carregarEquips(){
    const q = query(collection(db, 'Equipamentos'));

    //Removendo os elementos para recarregar
    const elements = document.getElementsByClassName('ul-equipamento');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    getDocs(q).then(docSnap => {
        let equipamentos = [];
        docSnap.forEach((doc) => {
            equipamentos.push({ ...doc.data(), id:doc.id })
        });
        for (let contador = 0; contador < equipamentos.length; contador++) {
            let divNova = document.createElement('ul');
            divNova.className = 'ul-equipamento';

            //Nome
            let nomeNovo = document.createElement('p');
            nomeNovo.textContent = equipamentos[contador]['nome'];
            divNova.appendChild(nomeNovo);
            //Checkbox e abrindo os dados
            let checkNovo = document.createElement('button');
            checkNovo.type = 'button';
            checkNovo.className = 'mostrar';
            checkNovo.textContent = 'Abrir';
            checkNovo.id = equipamentos[contador]['id'];
            checkNovo.addEventListener('click', () => {
                let campo_nome = document.getElementById('equipNome');
                let campo_id = document.getElementById('equipId');
                campo_nome.innerHTML = equipamentos[contador]['nome'];
                campo_id.textContent = "ID: " + equipamentos[contador]['id'];
            })
            divNova.appendChild(checkNovo);
            
            //let divForm = document.getElementById('footerEquip');
            let pai = document.getElementById('li-equipamentos');
            pai.appendChild(divNova);
        }
    });
};

//Create
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
export { carregarEquips, showAdd, hideAdd, showEdit, hideEdit };