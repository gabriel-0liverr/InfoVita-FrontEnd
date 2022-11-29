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
            //Checkbox
            let checkNovo = document.createElement('button');
            checkNovo.className = 'btn btn-primary';
            checkNovo.textContent = 'Ver';
            //Abrindo Dados
            checkNovo.addEventListener('click', () => {
                let campo_mapa = document.getElementById('estabMapa');

                campo_mapa.style.display = 'grid';
                campo_mapa.style.width = '550px';
                campo_mapa.style.height = '250px';
                campo_mapa.style.border = '1px solid black';
                campo_mapa.src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyClbblqk2CYFLoyDNB-lgqvMcPGvrFc0bM&q=place_id:' + estabelecimentos[contador]['local'];
                console.log(campo_mapa.src);
                /*
                <iframe
                    id="estabMapa"
                    width="650"
                    height="450"
                    style="border:2px solid black"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyClbblqk2CYFLoyDNB-lgqvMcPGvrFc0bM&q=">
                </iframe>
                */

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

// ----------------- Others ------------------ //

// ------------------ Export ---------------- //
export { carregarEstabs };