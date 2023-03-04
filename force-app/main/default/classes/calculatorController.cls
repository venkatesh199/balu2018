public with sharing class calculatorController {
    @AuraEnabled
    public static decimal addMethod(decimal x, decimal y){
        try {
            decimal result = x + y ;
            return result;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static decimal devideMethod(decimal x, decimal y){
        try {
            decimal result = x / y ;
            system.debug(result);
            return result;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}