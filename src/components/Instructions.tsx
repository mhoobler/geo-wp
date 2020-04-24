import React from 'react';

import './instructions.css';

const Instructions = () => {
  return (
  <div className='container'>
    <h2>
      Instructions
    </h2>
    <ol>
      <li>
        Create a CSV with columns [ title | street | state | city | zip_code | country | full_address ]
        <br/><span>An example of a proper row: </span>
          <pre>
            <code>
              title, street, state, city, zip_code, country, full_address <br/>
              "The Empire State Building", "20 W 34th Street", "NY", "New York", "10001", "US", "20 W 34th Street, New York, NY 10001"
            </code>
          </pre>
        <br/><span><b>Note:</b> "title" will be the post_title, "full_address" will be the displayed address inside of GeoMyWP's results</span>
      </li>
      <li>
        Go to the <b>Upload</b> page and select the settings according to your CSV format and current Wordpress environtment.
        After uploading the CSV, be patient as the geocoder being used is Nominatim and has a usage limitation.
        When the program is done reading your CSV, a download for another CSV and an XML file will start.
      </li>
      <li>step 3</li>
    </ol>
  </div>
  )
}

export default Instructions