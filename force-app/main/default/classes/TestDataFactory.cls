@isTest
public class TestDataFactory {
    public static list<Account> createAccountRecs(){
        List<Account> accs = new List<Account>();
        account ac = new account();
        ac.name = 'test';
        ac.Type = 'Prospect';
        accs.add(ac);
        account ac1 = new account();
        ac1.name = 'test';
        ac1.Type = 'Other';
        accs.add(ac1);
        return accs;
        
    }

}