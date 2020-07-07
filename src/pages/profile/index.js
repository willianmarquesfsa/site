import React, {useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import api from '..//services/api'


export default function Profile() {

    

    const { StringDecoder } = require('string_decoder');
    const decoder = new StringDecoder('utf8');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [incidents, setIncidents] = useState([]); 

    useEffect(()=>{ 
        api.get('profile', {
            headers: {
                Authorization: ongId,   
               }}).then(response=> {
                   setIncidents(response.data)
               })

    },[ongId]);

    async function handleDeleteIncident(id) {
        try{
         await api.delete( `incidents/${id}`,{
             headers: {
                 Authorization: ongId,
             }
         });
setIncidents(incidents.filter(incident => incident.id !== id));

        }catch (err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){

    localStorage.clear();
    history.push('/');

    }

    function tested(){
        let reco3 = incidents.map(incident => (
            incident.description));
            
        const response = String(reco3)
        const decoded = response
        .replace(/\\u(....)/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
        .replace(/\\n(....)/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
        .replace(/\\(\d{3})/g, (match, p1) => String.fromCharCode(parseInt(p1,  8)))
        console.log(decoded)   
        
                return (<p>{decoded}</p>)
    }


    function reDestaque() {
        var reco = incidents.map(incident => (incident.destaque));
        var tex
        if (reco == 2) {
            tex = 'Sim'
        }
        if (reco == 1) {tex = 'Não'}
        //console.log(reco)
        return (<p>{tex}</p>)
    }


    function reDes() {
        var reco = incidents.map(incident => (incident.ongId));
        console.log(reco)
        var tex
        if (reco.length == 0) {
            return <Link className="button" to="/incidents/new">Adicionar post</Link>
        }
        if (reco.length > 0) {
        //console.log(reco)
        return <Link style={{ pointerEvents: 'none' }} className="button">+ Posts</Link>
        }
    }
      

    return (
        <div className="profile-conteiner">
            <header>
                
                <span>Bem Vindo <br/> {`${ongName}`}</span>
                {reDes()}
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color='#E02041'/>
                </button>

            </header>
            <h1>Postagens da empresa</h1>

            <ul>
                {incidents.map(incident => (

                   
                    //console.log(incident.description.toString()),
                    
                    <li key={incident.id}>
                    <strong>CASO</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{tested()}</p>
                    <strong>Destacado na pagina principal.</strong>
                     <p>{reDestaque()}</p>
                    

                    <strong>Url do Instagram</strong>
                    <text>{incident.value}</text>

                    <button onClick={()=>handleDeleteIncident(incident.id)} type="button" >
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                 </li>
                 ))}

             </ul>
        </div>
    ); 
}