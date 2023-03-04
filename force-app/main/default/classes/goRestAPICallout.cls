public with sharing class goRestAPICallout {
    @AuraEnabled
    public static string getGoRestUsers(){
        try {
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setEndPoint('https://gorest.co.in/public/v2/users');
            req.setMethod('GET');
            HttpResponse response = http.send(req);
            return response.getBody();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static string postGoRestUsers(String JsonString){
        system.debug('JsonString--:'+JsonString);
        try {
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setEndPoint('https://gorest.co.in/public/v2/users');
            req.setBody(JsonString);
            req.setHeader('Content-Type', 'application/json;charset=UTF-8');
            req.setHeader('Authorization', 'Bearer 7b95731a4a6394bc8b967fbb8a4ecf584324c4e390b1359b8c577d615eb8905c');
            req.setMethod('POST');
            system.debug('req--:'+req);
            HttpResponse response = http.send(req);
            system.debug('response--:'+response.getStatusCode());
            system.debug('response--:'+response.getBody());
            return response.getBody();

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}