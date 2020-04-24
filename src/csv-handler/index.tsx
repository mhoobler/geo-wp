import geocode from './Geocoder';
import CSVhelper from './CSVhelper';
import XMLhelper from './XMLhelper';

import {Settings} from '../Interface';

class CSVHandler {
  file: File | null
  settings: Settings
  data: any
  locationsCSV: null;
  postsXML: null;

  constructor(file: File | null, set: Settings){
    this.file = file;
    this.settings = set;
    this.data = [];
    this.locationsCSV = null;
    this.postsXML = null;

    this.parseCSV()
  }

  parseCSV(){
    if(window.FileReader){
      //check if file is CSV
      let reader = new FileReader();
      let type = '';
  
      for(let i=0; i<this.file!.name.length; i++){
        if(this.file!.name[i] === '.'){
          for(let i2 = i+1; i2 < this.file!.name.length; i2++){
            type = type + this.file!.name[i2];
          }
          break;
        }
      }
  
      // console.log(type);
      if(type === 'csv'){
        reader.onload = (e) => {
          let result = e.target?.result as String;
          let resultArr = result.split(/\r\n|\n/);
          // console.log(resultArr);
          var data: Array<any> = [];
          var lid = this.settings.locationId;
          var pid = this.settings.postId;

          for(let i=0; i<resultArr.length; i++){
            let x = resultArr[i];
            let row: any = [];

            if(i === 0){
              row.push('location-id');
              row.push('post-id');
              row.push('post-type');
            } else {
              row.push( (lid + i-1).toString() );
              row.push( (pid + i-1).toString() );
              row.push( this.settings.postType );
            }

            for(let xi=0; xi<x.length; xi++){
              let str = '';
              let inner = false;

              if(!inner && x[xi] === this.settings.inquotes){
                inner = true;
              

              for(let xPlus=xi; xPlus < x.length; xPlus++){
                // console.log(x[xPlus] + " " + inner);
                if( (x[xPlus] === this.settings.delimiter && !inner) || (xPlus === x.length - 1) ){

                  row.push(str);
                  xi=xPlus+1;
                  break;

                } else if(x[xPlus] !== this.settings.inquotes){

                  str = str + x[xPlus];

                } else if(x[xPlus] === this.settings.inquotes && xPlus !== xi){

                  inner = false;

                }
              }
            }

            }
            data.push(row);
            // console.log(data);
          }
          this.data = data;
          console.log(this.data);

          this.writeCSV();
          // let str = data[1]
          // console.log(str);
        }
        reader.readAsText(this.file as Blob);
      }
    }
  }

  async writeCSV(){
    //get data for CSV
    let geo: any = await geocode(this.data);
    let locRows = CSVhelper.makeLocationRows(geo);
    let XMLstring = XMLhelper.stringifyXML(geo);
    //get data for XML


    console.log(locRows);
    CSVhelper.makeCSV(locRows);
    XMLhelper.makeXML(XMLstring);
    


  }

}

export default CSVHandler;