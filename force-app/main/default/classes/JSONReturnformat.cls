public class JSONReturnformat {
    public string getJSONData(){
        list<Account> accounts = [SELECT id,name, phone from Account LIMIT 10];
        system.debug('JSONData-------:'+JSON.serializePretty(accounts));
        return JSON.serializePretty(accounts);
    }

}