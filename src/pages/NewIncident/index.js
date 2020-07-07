import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import api from '../services/api';

import './styles.css';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import Demo, {kkkk} from './geolo'
import { Button } from '@material-ui/core';

import { geolocated } from "react-geolocated";

//import appt from './outro';


 


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);





const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      height: 50
    },
  }));

  
  


export default function NewIncident(){
  

  const [xxx, setxxx]=useState('');
  

function jjj(){
  if(xxx=='2') {

    
    
  return (<Demo></Demo>)
  
  
  
  }
  if(xxx=='1') {
    return
  }
}

  

  
    
    
    const classes = useStyles();

    const ongName = localStorage.getItem('ongName');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const [instagram, setInstagram] = useState('');
    const [destaque, setDestaque] = useState('');
    //const [google, setGoogle] = useState('')
    
 
    

    async  function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            instagram,
            destaque,
            google: String(`https://maps.google.com/maps?q=${kkkk[0]}%2C${kkkk[1]}&z=17&hl=pt-BR`)
        };

        try {
          await api.post('incidents', data, {
              headers: {
                  Authorization: ongId,
              }
          })
          history.push('/profile');  
        }catch(err) {
            alert ('Erro ao cadastrar caso, tente novamente');
        }
    }

     
    return (
        <div className="new-incident-container">
            <div className="content">
            <section>
            

            <h1>Cadastro:</h1>
            <p>Informe o Instagram e a localização de sua empresa.</p>
            
            </section>

            <form onSubmit={handleNewIncident}> 
            
            

          
            <input 
                placeholder="URL do Instagram"
                value={value}
                onChange={e => setValue(e.target.value)}>
                </input>
            

               

                <p><FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Destacar na pagina principal?</InputLabel>
        <Select style={{width:260 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={destaque}
          onChange={e => setDestaque(e.target.value)}
        >
          <MenuItem value={'1'}>Não</MenuItem>
          <MenuItem value={'2'}>Sim</MenuItem>
          
         
        </Select>
            
      </FormControl>

</p>
<p>
      <FormControl className={classes.formControl} >
        <InputLabel  id="demo-simple-select-label">Deseja marcar sua localização atual como a localização de sua empresa?</InputLabel>
        <Select style={{width: 260 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={xxx}
          onChange={e => setxxx(e.target.value)}
        >
          <MenuItem value={'1'}>Não</MenuItem>
          <MenuItem value={'2'}>Sim</MenuItem>
          
         
        </Select>
            
      </FormControl>
</p>
<p/>
      <p>{jjj()}</p>



            
        
            <button className="button" type="submit">Cadastrar</button>
            <Link className="back-link" to  = "/profile"><FiArrowLeft size={16} color="#E02041"/>Voltar para a home </Link> 
            </form>
            <h2><p></p></h2>
            </div>

            
        </div>
    )
}