public with sharing class BookController {
    public class bookRecordsWrapper{
        @AuraEnabled
        public string category{get;set;}
        @AuraEnabled
        public string Id{get;set;}
        @AuraEnabled
        public string name{get;set;}
        @AuraEnabled
        public Decimal price{get;set;}
        @AuraEnabled
        public Decimal count{get;set;}
        @AuraEnabled
        public string createdByName{get;set;}
        @AuraEnabled
        public string publishtype{get;set;}
    }
    @AuraEnabled
      public static string /*list<bookRecordsWrapper>*/ getBookRecords(String searchKey){
        list<bookRecordsWrapper> listBooks = new list<bookRecordsWrapper>();
        String key = '%' + searchKey + '%';
        try {
            
            for(Book__c each:[SELECT ID,Name,Author__c,Category__c,Count__c,
                                             Price__c,CreatedBy.name,Publish_Type__c FROM Book__c where Name like :key]){
                 bookRecordsWrapper br = new bookRecordsWrapper();
                 br.category = each.Category__c;
                 br.name = each.Name;
                 br.Id = each.ID;
                 br.price = each.Price__c;
                 br.count = each.Count__c;
                 br.createdByName = each.CreatedBy.name;
                 br.publishtype = each.Publish_Type__c;
                 listBooks.add(br);
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        system.debug('listBooks--:'+listBooks);
        return JSON.serialize(listBooks);
        //return listBooks;
      }
      @AuraEnabled
      public static Book__c createBook(Book__c bk){
        try {
            if(bk != null){
                insert bk;

            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        system.debug('bk--:'+bk);
        return bk;
      }
      @AuraEnabled
      public static Book__c deleteBookRecord(string bk){
        system.debug('bk---:'+bk);
        try {
            Book__c book = [select id from Book__c where id=:bk ];
            system.debug('book--:'+book);
            if(book != null){
                delete book;
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return null;
      }
      @AuraEnabled
      public static void updateBookRecord(String books){
        try {
            map<string,Object> bookRecs = (Map<String,Object>)JSON.deserializeUntyped(books);
            system.debug('bookRecs---:'+bookRecs);
            //Book__c bk = [Select Id,Name,Author__c,Category__c,Count__c,CreatedBy.name,Price__c FROM Book__c where ID =: bookId];
            //update bk;
            string name = string.valueof(bookRecs.get('name'));
            system.debug('name--:'+name);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
      }
      @AuraEnabled
      public static list<Book__c> searchBooks(String searchKey){
        String textkey = '%' + searchKey + '%';
        list<Book__c> bookList = new list<Book__c>();
        try {
            
            for(Book__c bc:[SELECT ID,Name,Author__c,Category__c,Count__c,
                            CreatedBy.name,Price__c,Publish_Type__c FROM Book__c where Name like : textkey]){
                 bookList.add(bc);            
            } 
            if(bookList.size()==0){
                throw new AuraHandledException('No Record Found..'); 
            }                 
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return bookList;
      }
      /*@AuraEnabled
      public static list<string> getPickListValues(){
        List<String> options= new List<String>();
        try {
            Schema.DescribeFieldResult fieldResult = Book__c.Publish_Type__c.getDescribe();
            List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
            for( Schema.PicklistEntry pickListVal : ple){
                options.add(pickListVal.getLabel());
            }     
		return options;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
      }*/
      @AuraEnabled(cacheable=true)
     public static List < customValueWrapper > getPickListValues(sObject customObjInfo, string selectPicklistApi) {
        Schema.DescribeSObjectResult objDescribe = customObjInfo.getSObjectType().getDescribe();     
        map < String, Schema.SObjectField > customFieldMap = objDescribe.fields.getMap();      
        list < Schema.PicklistEntry > custPickValues = customFieldMap.get(selectPicklistApi).getDescribe().getPickListValues();
        list < customValueWrapper > customObjWrapper = new list < customValueWrapper > ();
        for (Schema.PicklistEntry myCustPick: custPickValues) {
          customValueWrapper selectOptionValueWrapper = new customValueWrapper();
             selectOptionValueWrapper.custFldlabel = myCustPick.getLabel();
             selectOptionValueWrapper.custFldvalue = myCustPick.getValue();
            customObjWrapper.add(selectOptionValueWrapper);
        }
        
        return customObjWrapper;
  
      }
      // wrapper class 
        public with sharing class customValueWrapper {
          @auraEnabled public string custFldlabel {get;set;}
          @auraEnabled public string custFldvalue {get;set;}
        }

}