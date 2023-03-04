public with sharing class DeleteWithCheckboxController {
 
 @AuraEnabled
 public static list < contact > fetchContact() {
  list < contact > returnConList = new List < contact > ();
 
  List < contact > lstCon = [SELECT Name, firstName, LastName, Department, MobilePhone From contact LIMIT 50];
  // play for loop on lstCon and add each contact to returnConList List.
  for (contact c: lstCon) {
   returnConList.add(c);
  }
 // return the List of contacts
  return returnConList;
 }
 
 
 @AuraEnabled
 public static List < String > deleteRecords(List < String > lstRecordId) {
  // for store Error Messages  
  List < String > oErrorMsg = new List < String > ();
  // Query Records for delete where id in lstRecordId [which is pass from client side controller] 
  List < contact > lstDeleteRec = [select Id from contact where id IN: lstRecordId];
  
  // delte contact list with Database.DeleteResult[] database class.
  // It deletes some queried contacts using <samp class="codeph apex_code">Database.<span class="statement">delete</span></samp> 
  // with a false second parameter to allow partial processing of records on failure.
  // Next, it iterates through the results to determine whether the operation was successful or not
  // for each record. and check if delete contact successful so print msg on debug, 
  // else add error message to oErrorMsg List and return the list  
  Database.DeleteResult[] DR_Dels = Database.delete(lstDeleteRec, false);
  // Iterate through each returned result
  for (Database.DeleteResult dr: DR_Dels) {
   if (dr.isSuccess()) {
      system.debug('successful delete contact');
     // Operation was successful
   } else {
    // Operation failed, so get all errors   
    oErrorMsg.add('');
    for (Database.Error err: dr.getErrors()) {
     // add Error message to oErrorMsg list and return the list
     oErrorMsg.add(err.getStatusCode() + ': ' + err.getMessage());
    }
   }
  }
  return oErrorMsg;
 
 }
    @AuraEnabled
    public static list<Account> fetchAccounts(){
        list<Account> accls = new list<Account>();
            list<Account> acclist = [Select id, name, phone from Account];
        for(account acc : acclist){
            accls.add(acc);
        }
        return accls;
    }
    @AuraEnabled
    public static list<string> deleteAccountRecords(list<string> accountIds){
        list<string> oErrorMsg = new list<string>();
        list<account> accrecs = [Select id from account where id IN:accountIds ];
        Database.DeleteResult[] DR_Dels = Database.delete(accrecs, false);
        for (Database.DeleteResult dr: DR_Dels) {
   if (dr.isSuccess()) {
      system.debug('successful delete contact');
   } else {
    oErrorMsg.add('');
    for (Database.Error err: dr.getErrors()) {
     oErrorMsg.add(err.getStatusCode() + ': ' + err.getMessage());
    }
   }
  }
  return oErrorMsg;
        
    }
    @AuraEnabled
    public static list<Account> fetchAccountRecords(){
        return [Select id,name,phone,industry,type from Account];
        
    }
}