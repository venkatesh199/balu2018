import getListAccount from '@salesforce/apex/ContactController.getListAccount';

const getAccounts = () =>{
    return getListAccount().then((result)=>{
        //console.log('getAccounts--:',result);
        return result;
    })
    .catch((error)=>{
        console.log(error);
    });
};
export { getAccounts };