public class dataTableCtr {
    @AuraEnabled
    public static List<accountListWrapper> fetchAccountWrapper(){    
        List<accountListWrapper> lstaccountListWrapper = new List<accountListWrapper>();
        // query account records and create 'accountListWrapper' class instance for each record.
        for(Account acc : [Select id,Name,Type,Phone
                           From Account
                           Limit 1000]){
                               // by default checkbox should be false
                               lstaccountListWrapper.add(new accountListWrapper(false,acc));
                           }
        // return the 'lstaccountListWrapper' list
        return lstaccountListWrapper;
    }
    
    /* wrapper class */  
    public class accountListWrapper {
        @AuraEnabled public boolean isChecked {get;set;}
        @AuraEnabled public  account objAccount{get;set;}
        public accountListWrapper(boolean isChecked, account objAccount){
            this.isChecked = isChecked;
            this.objAccount = objAccount;
        }
    }
    @AuraEnabled 
    public static list<contactListWrapper> fetchContacttWrapper(){
        list<contactListWrapper> lstcontactListWrapper = new list<contactListWrapper>();
        for(Contact con : [Select id,lastname,firstname from contact limit 1000]){
            lstcontactListWrapper.add(new contactListWrapper(false,con));
        }
        return lstcontactListWrapper;
      }
    public class contactListWrapper{
        @AuraEnabled public boolean isChecked {get;set;}
        @AuraEnabled public contact objContact {get;set;}
        public contactListWrapper(boolean isChecked, contact objContact){
            this.isChecked = isChecked;
            this.objContact = objContact;
            
        }
    }
}