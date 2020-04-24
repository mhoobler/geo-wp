import React from 'react';

import './instruct.css';

const Instructions = () => {
  return (
  <div className='container'>
    <h2>
      Instructions
    </h2>
    <div className='content'>
      <h3 className='step-heading'>CSV Format</h3>

      <div className='step-content'>
      Create a CSV with columns [ title | street | state | city | zip_code | country | full_address ]
        <br/><span className='post-script'>An example of a properly formatted CSV: </span>
          <pre>
            <code>
              title, street, state, city, zip_code, country, full_address <br/>
              "The Empire State Building", "20 W 34th Street", "NY", "New York", "10001", "US", "20 W 34th Street, New York, NY 10001"
            </code>
          </pre>
        <br/><span className='post-script'><b>Note:</b> "title" will be the post_title, "full_address" will be the displayed address inside of GeoMyWP's results</span>
      </div>

      <h3 className='step-heading'>Upload Page Guide</h3>

      <div className='step-content'>
        Go to the <b>Upload</b> page and select the settings according to your CSV format and current Wordpress environment.
        After uploading the CSV, be patient as the geocoder being used is Nominatim and has a usage limitation.
        When the program is done reading your CSV, a download for another CSV and an XML file will start.
      </div>

      <div className='post-script'>
        <h4>Post Id &amp Location Id</h4>
        <p>This setting will index your CSV rows into the proper ID's required in your Wordpress environment. Starting from your input value, counting up.</p>
        <ol>
          <li>Go to your Wordpress database and look for tables <b>wp_posts</b> and <b>wp_gmw_locations.</b></li>
          <li>Find a range of ID's that are available for your new entries.</li>
          <li><b>Note:</b> the "wp" prefix may be different inside your environment</li>
        </ol>
      </div>
      <h3 className='step-heading'>Importing to Wordpress</h3>
    </div>
  </div>
  )
}

export default Instructions