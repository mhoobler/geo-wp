import {AddressRow, Row} from '../Interface';

export default {
  makeCSV: (locRows: Array<Row>) => {
    let csvContent = "data:text/csv;charset=utf-8,";

    locRows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    console.log(csvContent);

    var encodedUri = encodeURI(csvContent);
    console.log(encodedUri);
    var link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "locations.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  },

  makeLocationRows: (arr: AddressRow) => {
    let newArr = [[
      'ID', 'object_type', 'object_id',
      'blog_id', 'user_id', 'parent',
      'status', 'featured', 'title',
      'latitude', 'longitude', 'street_number',
      'street_name', 'street', 'premise',
      'neighborhood', 'city', 'county',
      'region_name', 'region_code', 'postcode',
      'country_name', 'country_code', 'address',
      'formatted_address','place_id', 'map_icon',
      'created', 'updated'
    ]];

    for(let row of arr){
      let newRow: Row = [];
      // console.log(row);

      newRow.push(row.location_id); //ID
      newRow.push('post'); //object type
      newRow.push(row.post_id); //post ID
      newRow.push('1'); //blog id | STATIC VALUE
      newRow.push('1'); // user id | STATIC VALUE
      newRow.push('0'); // parent | STATIC VALUE
      newRow.push('1'); // status | STATIC VALUE
      newRow.push('0'); // featured | STATIC VALUE 
      newRow.push(row.title); // title
      newRow.push(row.latitude!); // latitude
      newRow.push(row.longitude!); // longitude
      newRow.push(''); // street_number | ???
      newRow.push(''); // street_name
      newRow.push(row.street); // street
      newRow.push(''); // premise
      newRow.push(''); // neighborhood
      newRow.push(row.city); // city
      newRow.push(''); // county
      newRow.push(row.state); // region_name
      newRow.push(row.state); // region_code
      newRow.push(row.zip_code); // postcode
      newRow.push(row.country); // country_name
      newRow.push(row.country); // country_code
      newRow.push('"' + row.full_address + '"'); // address
      newRow.push('"' + row.full_address + '"'); // formatted_address
      newRow.push(''); // place_id
      newRow.push('_default.png'); // map_icon
      newRow.push(''); // created
      newRow.push(''); // updated

      newArr.push(newRow);
    }

    console.log(newArr);
    return newArr;

  }
}
