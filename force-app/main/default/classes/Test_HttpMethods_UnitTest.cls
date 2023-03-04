@IsTest
public class Test_HttpMethods_UnitTest {
    static testMethod void MyPostMethod(){
        Account acc = new Account();
        acc.Name = 'test';
        acc.Phone  = '8500780259';
        insert acc;
        RestRequest request = new RestRequest();
        RestResponse res = new RestResponse();
        request.requestURI  ='/services/apexrest/abc/xyz/';
        request.httpMethod = 'POST';
        RestContext.request = request;
        Test_HttpMethods.doPostAccount( acc.Name,acc.Phone);
    }
    /*static testMethod void MyPutMethod(){
        Id accid = createRecord();
        RestRequest request = new RestRequest();
        RestResponse res = new RestResponse();
        request.requestURI  ='/services/apexrest/abc/xyz/';
        request.requestBody = Blob.valueOf('Updated the Name');
        //String jsonBody = JSON.serialize(body);
        //request.requestBody = Blob.valueOf(jsonBody);
        request.addParameter('Id',accid);
        request.httpMethod = 'PUT';
        RestContext.request = request;
        test.startTest();
        Account acct = Test_HttpMethods.doUpdateAccount('testBala');
        System.assertEquals('Test', acct.Name);
        System.assertEquals(null, acct.id);
        test.stopTest();
    }*/
    static testMethod void MyGetMethod(){
        Id accid = createRecord();
        RestRequest request = new RestRequest();
        RestResponse res = new RestResponse();
        request.params.put('region', 'my_region');
        request.addHeader('Content-Type', 'application/json'); // Add a JSON Header as it is validated 
        request.requestURI  ='/services/apexrest/abc/xyz/';
        request.addParameter('Id',accid);
        request.httpMethod = 'GET';
        RestContext.request = request;
        test.startTest();
        Account acct = Test_HttpMethods.dogetAccount();
        System.assertEquals('Test', acct.Name);
        //System.assertEquals('0010o00002wTzmfAAC', acct.id);
        test.stopTest();
    }
    static testMethod void MyDeleteMethod(){
        Id accid = createRecord();
        RestRequest request = new RestRequest();
        RestResponse res = new RestResponse();
        request.requestURI  ='/services/apexrest/abc/xyz/';
        request.addParameter('Id',accid);
        request.httpMethod = 'DELETE';
        RestContext.request = request;
        test.startTest();
        String acct = Test_HttpMethods.doDeleteAccount();
        
        test.stopTest();
    }
    public static Id createRecord(){
        Account acc = new account(Name = 'Test');
        insert acc;
        return acc.Id;
    }
}