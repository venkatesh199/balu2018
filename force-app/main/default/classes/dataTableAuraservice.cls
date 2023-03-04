public class dataTableAuraservice {
 @AuraEnabled
    public static list<Account> fetchAccounts(){
        return [select id,name,phone,industry from Account];
    }
}