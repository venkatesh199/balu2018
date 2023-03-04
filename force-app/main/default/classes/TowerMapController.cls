public inherited sharing class TowerMapController {
     @AuraEnabled
     public static List<Tower__c> getAllTowers() {
          String theObject = 'Tower__c';
          List<String> theFields = new List<String>{'Id', 'Name', 'State__r.Name', 'Location__Latitude__s', 'Location__Longitude__s'};
          List<String> theFilters = new List<String>();  //empty filter list
          String sortField = 'Name';
          String sortOrder = 'ASC';
          List<Tower__c> allTowers = UtilityClass.queryObjects(theObject, theFields, theFilters, sortField, sortOrder);
          return allTowers;
     }
}