import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'

import axios from 'axios'
import DisplayMessage from '../DisplayMessage/DisplayMessage'
import './InputBar.css'

export default function InputAdornments() {

    const [message, setMessage] = useState('')

    // set a new url
    const [url,setUrl] = useState('')

    const onFormSubmit = async() => {
        try{
            const response = await axios.post('https://git.heroku.com/short-er.git',{url})
            const short = response.config.url.slice(7)
            if(response.status === 200){
                setMessage(short+'/'+response.data.url.shortUrl) 
            }else{
                setMessage(short+'/'+response.data.newUrl.shortUrl)
            }
        }catch(err){
            setMessage("Invalid Url")
        }
    }   
  return (
      <>
      <div className="input-wrapper">
        <FormControl className="form-control" fullWidth variant="outlined">
            <TextField className="textfield" label="URL Link" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
            <Button onClick={onFormSubmit} size="large" className="submit-btn" variant="contained" color="primary">Shorten</Button>
            <DisplayMessage message={message} />
        </FormControl>
      </div>
      </>
  );
}
