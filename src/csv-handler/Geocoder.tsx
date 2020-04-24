import axios from 'axios';

import { AddressObject } from '../Interface';

const geocode = async (arr: Array<any>) => {
  let order = orderArray(arr);
  // console.log(order);

  var promise = new Promise( (resolve, reject) => {
    let count = 450;
    let axiosArray: any = [];

    setInterval( async ()=> {
      console.log(count);

      if(count >= order.length){
        resolve(axiosArray);
      }else{
        let url = getString(order[count])
        let response = await axios.get(url);

        console.log(response);
        if(response){
          order[count].latitude = response.data[0].lat;
          order[count].longitude = response.data[0].lon; 
          axiosArray.push(order[count]);
        } else {
          console.log(response);
        }
        count++;
      }

    }, 2000)

  })

  let res = await promise;

  return res;
}

const orderArray = (arr: Array<any>) => {
  //index values
  let index = {
    title: 0,
    street: 0,
    state: 0,
    city: 0,
    zip_code: 0,
    country: 0,
    full_address: 0,
    post_id: 0,
    post_type: 0,
    location_id: 0
  }

  let addressArray: Array<AddressObject> = [];

  for(let row=0; row<arr.length; row++){

    if(row === 0){
      for(let col=0; col<arr[row].length; col++){
        switch(arr[row][col]){
          case('location-id'):
            index.location_id = col;
            break;
          case('post-id'):
            index.post_id = col;
            break;
          case('post-type'):
            index.post_type = col;
            break;
          case('title'):
            index.title = col;
            break;
          case('street'):
            index.street = col;
            break;
          case('state'):
            index.state = col;
            break;
          case('city'):
            index.city = col;
            break;
          case('zip_code'):
            index.zip_code = col;
            break;
          case('country'):
            index.country = col;
            break;
          case('full_address'):
            index.full_address = col;
            break;
          default:
            break;
        }
      }
    } else {
      let addObj = {
        title: arr[row][index.title],
        location_id: arr[row][index.location_id],
        post_id: arr[row][index.post_id],
        post_type: arr[row][index.post_type],
        street: arr[row][index.street],
        state: arr[row][index.state],
        city: arr[row][index.city],
        zip_code: arr[row][index.zip_code],
        country: arr[row][index.country],
        full_address: arr[row][index.full_address]
      };

      // console.log(addObj);
      addressArray.push(addObj);
    }
  }
  // console.log(addressArray);
  return addressArray;
}

const getString = (obj: AddressObject) => {
  var string = 'http://nominatim.openstreetmap.org/search?format=json&limit=1';

  string = string + '&street=' + obj.street;
  string = string + '&state=' + obj.state;
  string = string + '&city=' + obj.city;
  string = string + '&postalcode=' + obj.zip_code;
  string = string + '&country=' + obj.country;

  // console.log(string);
  return string;
}



export default geocode;