public with sharing class spoonacular_API_Integration {
    private static final string spoonacular_api = 'https://api.spoonacular.com';
    private static final string api_key = '91335c3897094336aa1787926210aa63';
    @AuraEnabled
    public static string getRecipeSearch(string query, integer intp){
        system.debug('query--:'+query);
        try {
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setEndPoint(spoonacular_api+'/recipes/autocomplete?apiKey='+api_key+'&number='+intp+'&query='+query);
            req.setMethod('GET');
            system.debug('request---:'+req);
            HttpResponse response = http.send(req);
            system.System.debug('response---:'+response.getBody());
            return response.getBody();            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}