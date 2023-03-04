public class ExternalServiceCall {
public PageReference callMethod() {
String Endpoint = '';
Http http = new Http();
HttpRequest req = new HttpRequest();
req.setEndpoint(Endpoint);
req.setMethod('POST');
HTTPResponse res = http.send(req);
System.debug('----------------'+res.getBody());
return null;
}
}