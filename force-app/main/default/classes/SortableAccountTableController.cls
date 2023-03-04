public class SortableAccountTableController {
   // wrapper class 
    public class AccountWrapper{
        @AuraEnabled
        public String message;
        @AuraEnabled
        public List<Account> accountsList;
        @AuraEnabled
        public Boolean success;
    }
    
    //Return account records and message to be displayed in toast
    @AuraEnabled
    public static AccountWrapper getAccounts(){
        AccountWrapper accountWrapper = new AccountWrapper();
        try{
            accountWrapper.accountsList = [SELECT ID,Name,AccountSource,Rating,NumberOfEmployees
                                           FROM Account
                                           ORDER BY AnnualRevenue 
                                           DESC NULLS LAST 
                                           LIMIT 50];
            accountWrapper.message = 'Account records are retrieved ';
            accountWrapper.success = true;
        }
        catch(Exception e){
            accountWrapper.message = e.getMessage();
            accountWrapper.success = false;
        }
        return accountWrapper;
    }
}