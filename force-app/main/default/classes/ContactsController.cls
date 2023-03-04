public with sharing class ContactsController {
    public ContactsController() {

    }
    @AuraEnabled(cacheable=true)
    public static list<contact> getContacts(){
        try {
            return [Select Id,Name,lastName,phone,email from Contact limit 30];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}