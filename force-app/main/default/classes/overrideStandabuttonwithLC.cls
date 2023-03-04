public with sharing class overrideStandabuttonwithLC {
 
    @AuraEnabled
    public static ID saveAccount(Account accRec){
        try{
            insert accRec;
        }
        catch(Exception e){
            system.debug('e-->' + e.getMessage());
        }
        
        return accRec.Id;
    }  
       
}