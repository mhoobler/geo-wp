import React, { useState, useEffect } from 'react'

import UploadSettings from './UploadSettings';
import CSVHandler from '../csv-handler';

import { Settings } from '../Interface';

import './upload.css';

export type GetSettings = (o: Settings) => void;

const Upload = () => {
  const [file, setFile] = useState(null);

  var getSettings = (o: Settings) => {
    console.log(o);
    if(file !== null){
      let x = new CSVHandler(file, o);
      console.log(x);
    }
  }

  var upFile = (e: any) => {
    setFile(e);
  }

  useEffect( () => {
    if(window.File && window.FileReader && window.Blob){
      console.log('everything works')
    } else {
      alert('The File APIs are not fully supported on your browser');
    }
  })

  return (
  <div id='upload-container' className='container'>
    <h2>
      Upload
    </h2>
    <div id='file-container' className='form-item'>
      <label htmlFor='files[]'>Choose File: </label>
      <input className='file-input' type='file' id='files' name='files[]' onChange={(e) => upFile(e.target.files![0])} />
    </div>
    {/* {file ? <UploadSettings delimiter={deli} locationId={locationId} postId={postId} change={settingChange}/> : null} */}
    <UploadSettings getSettings={getSettings}/> 
  </div>
  )
}

export default Upload;