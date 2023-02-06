const getElement = (selector) =>{
    const element = document.querySelector(selector);
    if(element){
     return element
    }else{
     throw new Error('No Element Was Selected')
    }
 }

 export default getElement;