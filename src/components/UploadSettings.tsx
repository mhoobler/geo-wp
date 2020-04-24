import React, { useState } from 'react';

import { Settings } from '../Interface';
import { GetSettings } from './Upload';

type Props ={ 
  getSettings: GetSettings
}

const UploadSettings = (props: Props) => {
  const [deli, setDeli] = useState(',');
  const [quotes, setQuotes] = useState('"');
  const [locationId, setLocationId] = useState('0');
  const [postId, setPostId] = useState('0');
  const [postType, setPostType] = useState('post');

  var getSettings = () => {
    let obj: Settings = {
      delimiter: deli,
      inquotes: quotes,
      locationId: parseInt(locationId),
      postId: parseInt(postId),
      postType: postType
    };

    props.getSettings(obj)
  } 

  return(
    <div id='settings-container'>
      <div className='form-item form-50'>
        <label htmlFor='delimiter'>Delimiter: </label>
        <input type='string' maxLength={1} name='delimiter' value={deli} onChange={ (e) => setDeli(e.target.value)}/>
      </div>

      <div className='form-item form-50'>
        <label htmlFor='quotes'>Quotation marks: </label>
        <input type='string' maxLength={1} name='quotes' value={quotes} onChange={ (e) => setQuotes(e.target.value)}/>
      </div>

      <div className='form-item form-50'>
        <label htmlFor='locationId'>Location ID: </label>
        <input type='number' name='locationId' value={locationId} onChange={ (e) => setLocationId(e.target.value)}/>
      </div>

      <div className='form-item form-50'>
        <label htmlFor='postId'>Post ID: </label>
        <input type='number' name='postId' value={postId} onChange={ (e) => setPostId(e.target.value) }/>
      </div>

      <div className='form-item form-100'>
        <label htmlFor='postId'>Post Type: </label>
        <input type='string' name='postType' value={postType} onChange={ (e) => setPostType(e.target.value) }/>
      </div>

      <button onClick={getSettings}>Test</button>
    </div>
  )
}

export default UploadSettings;