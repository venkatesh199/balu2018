@RestResource(urlMapping='/CycleExample/')
global class Test_HttpMethods {
    @httpGet
    global static Account dogetAccount(){
        Account pipe = new Account();
        map<string,string> pipes = RestContext.request.params;
        system.debug('pipes-----:'+ pipes);
        string pipeId = pipes.get('Id');
        system.debug('pipeId-----:'+ pipeId);
        pipe = [Select Id,Name,phone from Account where Id =:pipeId];
        system.debug('pipe-----:'+ pipe);
        return pipe;
    }
    @httpDelete
    global static string doDeleteAccount(){
        Account pipe = new Account();
        map<string,string> pipes = RestContext.request.params;
        system.debug('pipes-----:'+ pipes);
        string pipeId = pipes.get('Id');
        system.debug('pipeId-----:'+ pipeId);
        pipe = [Select Id,Name,phone from Account where Id =:pipeId];
        system.debug('pipe-----:'+ pipe);
        delete pipe;
        return 'record deleted';
    }
    @HttpPost
    global static account doPostAccount(string name,string phone){
        Account acc = new Account(Name= name, Phone = phone);
        insert acc;
        return acc;
        
    }
    @HttpPut
    global static account doUpdateAccount(string name){
        map<string,string> pipes = RestContext.request.params;
        system.debug('pipes-----:'+ pipes);
        string pipeId = pipes.get('id');
        system.debug('pipeId-----:'+ pipeId);
        Account acc = new Account(Name= name,Id = pipeId);
        update acc;
        return acc;
    }
}