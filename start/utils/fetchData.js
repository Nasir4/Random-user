
const url = 'https://randomuser.me/api/';


const fetchUser = async () => {
    let  user = await fetch(url);
    let data = await user.json()
    const person = data.results[0]
    const {phone, email} = person;
    const img = person.picture.large;
    const {password} = person.login;
    const {first,last} = person.name;
    const {date,age} = person.dob;
    const {street:{number,name}} = person.location;
     return{
         phone,email,img,password,age,street:`${number} ${name}`, name:`${first} ${last}`
     }
 }

 export default fetchUser