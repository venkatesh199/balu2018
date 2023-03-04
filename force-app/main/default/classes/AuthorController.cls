public with sharing class AuthorController {
    @AuraEnabled
    public static list<Author__c> getAuthorRecords(String searchKey){
        String key = '%' + searchKey + '%';
        try {
            return [select id,name,Age__c,isActive__c from Author__c where name like :key limit 1000];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static void createAuthorRecords(string author){
        try {
            map<string,Object> authorRecs = (map<string,Object>)JSON.deserializeUntyped(author);
            system.debug('name---:'+authorRecs.get('name'));
            string name = string.valueof(authorRecs.get('name'));
            integer age = integer.valueof(authorRecs.get('age'));
            boolean active = boolean.valueof(authorRecs.get('active'));
            system.debug('active---:'+authorRecs.get('active'));
            Author__c au = new Author__c();
            if(name != null){
                au.Name = name;
            }
            au.Age__c = age;
            au.isActive__c = active;
            system.debug('au---:'+au);
            insert au;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static void deleteAthuorRecords(string str){
        system.debug('str---:'+str);
        try {
            Author__c atr = [Select id,name from Author__c where id=:str];
            if(atr != null){
                delete atr;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static list<Author__c> updateAuthorRecs(string recs){
        try {
            map<string,object> authorRecs = (map<string,object>)JSON.deserializeUntyped(recs);
            String name = string.valueof('name');
            system.debug('name--:'+name);
            integer age = integer.valueof('age');
            Author__c ath = new Author__c();
            ath.Name = name;
            ath.Age__c = age;
            update ath;
            return null;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}