public class RestRequestController {

    @AuraEnabled
    public static Response service(
        String path, 
        String method, 
        String responseFormat, 
        String bodyContent, 
        String bodyContentType
    ) {
        HttpRequest request = buildRequest(path, method, responseFormat, bodyContent, bodyContentType);
        HttpResponse httpRes = sendRequest(request);
        Response restRes = buildResponse(httpRes);
        
        return restRes;
    }
    
    private static HttpRequest buildRequest(String path, String method, String responseFormat, String bodyContent, String bodyContentType) {
        HttpRequest request = new HttpRequest();
        
        request.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm() + path);
        request.setMethod(method);
        
        if (bodyContent != null) {
            request.setBody(bodyContent);
            request.setHeader('Content-Type', bodyContentType); 
        }
        
        request.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());
        request.setHeader('ACCEPT', responseFormat);
        
        return request;
    }
      
    private static HttpResponse sendRequest(HttpRequest request) {    
        return new Http().send(request);
    }
    
    private static Response buildResponse(HttpResponse httpRes) {
        Response restRes = new Response();
        
        restRes.status = httpRes.getStatus();
        restRes.statusCode = httpRes.getStatusCode();
        restRes.body = httpRes.getBody();
        
        return restRes;
    }

    public class Response {

        @AuraEnabled
        public String status { get; set; }
        
        @AuraEnabled
        public Integer statusCode { get; set; }
        
        @AuraEnabled
        public String body { get; set; }
    }
}