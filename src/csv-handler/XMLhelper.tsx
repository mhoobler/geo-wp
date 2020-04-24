import {create} from 'xmlbuilder2';

import {AddressRow} from '../Interface'; 



export function stringifyXML(addArr: AddressRow){
    //create root element
  const root = create({version: '1.0'})

  //create main parent tags and proper attributes
  const rssAttributes = {
    version: '2.0',
    ['xmlns:excerpt']: 'http://wordpress.org/export/1.2/excerpt/',
    ['xmlns:content']: 'http://purl.org/rss/1.0/modules/content/',
    ['xmlns:wfw']: 'http://wellformedweb.org/CommentAPI/',
    ['xmlns:dc']: 'http://purl.org/dc/elements/1.1/',
    ['xmlns:wp']: 'http://wordpress.org/export/1.2/'
  }
  let rss = root.ele('rss', rssAttributes);
  let channel = rss.ele('channel');

  //add dummy tags
  channel.ele('wp:wxr_version').txt('1.2');

  for(let a of addArr){
    let item = channel.ele('item');

    item.ele('title').txt(a.title);
    item.ele('wp:post_id').txt(a.post_id);
    item.ele('wp:post_type').txt(a.post_type);
    item.ele('wp:status').txt('publish');
  }

  //export xml
  let xml = root.end({prettyPrint: true});
  return xml
}

export function makeXML(str: string){
  let xmlContent = "data:text/xml;charset=utf-8," + str;
  var encodedUri = encodeURI(xmlContent);
  console.log(encodedUri);
  var link = document.createElement("a");

  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "posts.xml");
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "my_data.csv".
}
  
