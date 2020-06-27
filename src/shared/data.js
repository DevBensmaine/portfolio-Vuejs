import * as axios from 'axios'

const getHeros = async function() {

  const response = await axios.get('api/data.json')

  // console.log("run function get heros")
  if(response.status !== 200) throw Error(response.message);
  // console.log(response.data)

  return response.data
}

// const parseList = response => {
//   if(response.status !== 200) throw Error(response.message);
//   if(!response.data) return [];
//   let list = response.data;
//   if( typeof list !== 'object' ){
//     list = []
//   }
//   return list
// }
export default  getHeros 