@isTest
public class AccountController_Test {
    public static testmethod void insertTriggerRecs_Test(){
       list<Account> listAccs = TestDataFactory.createAccountRecs();
        test.startTest();
        AccountController.insertTriggerRecs(listAccs);
        AccountController.UpdateTriggerRecs(listAccs);
        test.stopTest();
    }
    /*@istest
    static void insertTriggerRecs_Test(){
        
    }*/

}