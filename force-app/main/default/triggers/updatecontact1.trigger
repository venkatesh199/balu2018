trigger updatecontact1 on  Contact (after insert,before insert){
    List<contact> lstConUpdate = new List<Contact>();
    set<Id> sAccId = new set<Id>();
    for(Contact con: trigger.new){
        sAccId.add(con.AccountId);
    }
    List<Account> lstAccount = [select id, SLASerialNumber__c, (select id,Languages__c from contacts) from account where id IN: sAccId];
    for(Account acc: lstAccount){
        for(Contact con: acc.contacts){
            con.Languages__c = acc.SLASerialNumber__c;
            lstConUpdate.add(con);
        }
    }
    if(lstConUpdate.size() > 0){
        update lstConUpdate;
    } 
    insert new contact();
}