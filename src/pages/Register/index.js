import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../services/api';

import logoImg from '../../assets/logo2.png';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



export default function Register() {

    const classes = useStyles();
    
   


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [whatsapp,setWhatsapp]=useState('');
    const [city,setCity]=useState('');
    const [uf,setUF]=useState('');
    const [grupo,setgrupo]=useState('');
    
    const [centrolojistico,setcentrolojistico]=useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf,grupo,centrolojistico};

        try{
        const response =  await api.post('ongs', data);
        

        alert(`Seu ID de acesso foi enviado para ${response.data.resposta} `);
        history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.')
        }

    }


    

    function lose(){
    
      if ( centrolojistico == 'Feiraguay'|| 
           centrolojistico == 'FeiraPortal' || 
           centrolojistico == 'Polimodas' || 
           centrolojistico == 'Centro da Cidade' ) {
        return (
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'AcessoriosDiversos'}>AcessoriosDiversos</MenuItem>
            <MenuItem value={'Beleza'}>Beleza</MenuItem>
            <MenuItem value={'Eletronicos'}>Eletronicos</MenuItem>
            <MenuItem value={'Moda Feminina'}>Moda Feminina</MenuItem>
            <MenuItem value={'Moda Masculina'}>Moda Masculina</MenuItem>
            <MenuItem value={'CasaeJardin'}>CasaeJardin</MenuItem>
          </Select>
        </FormControl>)
      } 
      if (centrolojistico == 'Agro e PetShos' ) { 
        return (
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={grupo}
        onChange={e=>setgrupo(e.target.value)}
      >
        <MenuItem value={'Nutrição e Estetica animal'}>Nutrição e Estetica animal</MenuItem>
        <MenuItem value={'Hospedagem'}>Hospedagem</MenuItem>
        <MenuItem value={'Veterinaria'}>Veterinaria</MenuItem>
        
       
      </Select>
    </FormControl>
      )}
      if ( centrolojistico == 'Autos') {
        return (
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'Locação e seguros'}>Locação e seguros</MenuItem>
            <MenuItem value={'Chaparia e Pintura'}>Chaparia e Pintura</MenuItem>
            <MenuItem value={'Mecanica e Eletrica'}>Veterinaria</MenuItem>
            <MenuItem value={'Lavagem'}>Veterinaria</MenuItem>
            
           
          </Select>
        </FormControl>
          )
      }
      if ( centrolojistico == 'Casa e Construção') {
        return (
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'Empreiteiras'}>Empreiteiros</MenuItem>
            <MenuItem value={'Móveis Portões e Vidros Planejados'}>Móveis Portões e Vidros Planejados</MenuItem>
            <MenuItem value={'Engenharia e Arquitetura'}>Engenharia e Arquitetura</MenuItem>
                      
          </Select>
        </FormControl>
          )
      }
      if ( centrolojistico == 'Educação e Treinamentos') {
        return (
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'Ensino Superior'}>Ensino Superior</MenuItem>
            <MenuItem value={'Cursos Livres e Profissionalizantes'}>Cursos Livres e Profissionalizantes</MenuItem>
            <MenuItem value={'Ensino fundamental e medio'}>Ensino fundamental e medio</MenuItem>
                      
          </Select>
        </FormControl>
          )
      }
      if ( centrolojistico == 'Manutenção em informática') {
        return (
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'CPUs e Notebooks'}>CPUs e Notebooks</MenuItem>
            <MenuItem value={'Internet e Comunicação'}>Internet / Comunicação</MenuItem>
            <MenuItem value={'Celulares'}>Celulares</MenuItem>
            <MenuItem value={'EletronicosS'}>Eletronicos</MenuItem>
            <MenuItem value={'Refrigeração e Assistencia Técnica'}>Refrigeração e Assistencia Técnica</MenuItem>
                      
          </Select>
        </FormControl>
          )
      }
      if ( centrolojistico == 'Saúde e Beleza') {
        return (
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'Cabelo e Barba'}>Cabelo e Barba</MenuItem>
            <MenuItem value={'Clinicas e Estetica'}>Chaparia e Pintura</MenuItem>
           
            
           
          </Select>
        </FormControl>
          )
      }
      if ( centrolojistico == 'Serviços Diversos') {
        return (
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grupo}
            onChange={e=>setgrupo(e.target.value)}
          >
            <MenuItem value={'Chaveiros e Carimbos'}>Cabelo e Barba</MenuItem>
            <MenuItem value={'Serviços Funerários'}>Serviços Funerários</MenuItem>
            <MenuItem value={'Viagens Turismo e Transporte'}>Viagens Turismo e Transporte</MenuItem>
            <MenuItem value={'Comunicação Visual e Fotografia'}>Comunicação Visual e Fotografia</MenuItem>
            
           
            
           
          </Select>
        </FormControl>
          )
      }
      
    }



    return (

        <div className="register-container">
        
            <div className="content">
            <img src={logoImg} alt="Cadastro Simples"/>
            <section>
            

            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na pataforma e torne sua impresa mais visivel e acessivel.</p>
            
            </section>

            <form onSubmit={handleRegister}>
            <input placeholder="Nome da Negócio" value={name} onChange={e=>setName(e.target.value)}></input>
            <input type="email" placeholder="E-mail (Não obrigatório)" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <input placeholder="Whatsapp Ex: 5575988889999" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}></input>
            
            <div className="input-group">
            <FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Cidade</InputLabel>
        <Select style={{width:120 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          onChange={e=>setCity(e.target.value)}
        >
          <MenuItem value={'Feira de Santana'}>Feira de Santana</MenuItem>
          
         
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Estado (UF)</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={uf}
          onChange={e=>setUF(e.target.value)}
        >
          <MenuItem value={'BA'}>Bahia</MenuItem>
          
         
        </Select>
      </FormControl>
            
            
            </div>

             <div className="input-group">
             
             
      <FormControl className={classes.formControl} >
       <InputLabel  id="demo-simple-select-label">Loja/Serviço</InputLabel>
        <Select style={{width:120 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={centrolojistico}
          onChange={e=>setcentrolojistico(e.target.value)}
        >
        <ListSubheader>Centros Comérciais</ListSubheader>
          <MenuItem value={'Feiraguay'}>Feiraguay</MenuItem>
          <MenuItem value={'FeiraPortal'}>FeiraPortal</MenuItem>
          <MenuItem value={'Polimodas'}>Polimodas</MenuItem>
          <MenuItem value={'Centro da Cidade'}>Centro da Cidade</MenuItem>
          
          <MenuItem value={'Bares e Restudantes'}>Bares e Restudantes</MenuItem>

          <ListSubheader>Serviços</ListSubheader>
          <MenuItem value={'Agro e PetShos'}>Agro e PetShos</MenuItem>
          <MenuItem value={'Autos'}>Autos</MenuItem>
          <MenuItem value={'Casa e Construção'}>Casa e Construção</MenuItem>
          <MenuItem value={'Educação e Treinamentos'}>Educação e Treinamentos</MenuItem>
          <MenuItem value={'Manutenção em informática'}>Manutenção e informática</MenuItem>
          <MenuItem value={'Saúde e Beleza'}>Saúde e Beleza</MenuItem>
          <MenuItem value={'Serviços Diversos'}>Serviços Diversos</MenuItem>
         
        </Select>
      </FormControl>
     

      <p>{lose()}</p>
             </div>

            
            
            <button className="button" type="submit">Cadastrar</button>

            </form>
            <Link className="back-link" to  = "/"><FiArrowLeft size={16} color="#E02041"/>Tenho cadastro </Link> 
            </div>
        </div>
    )
}