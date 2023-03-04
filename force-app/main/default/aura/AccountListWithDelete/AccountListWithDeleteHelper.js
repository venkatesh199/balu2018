({
    onLoad : function(component, event) {
        var action = component.get('c.fetchAccounts');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == "SUCCESS"){
                component.set('v.AccountList', response.getReturnValue());
                component.set("v.selectedCount", 0);
                component.find("box3").set("v.value", false);
            }
        });
        $A.enqueueAction(action);
    },
    deleteSelectedHelper: function(component, event, deleteRecordsIds) {
  var action = component.get('c.deleteAccountRecords');
  action.setParams({
   "lstRecordId": deleteRecordsIds
  });
  action.setCallback(this, function(response) {
   var state = response.getState();
   if (state === "SUCCESS") {
    console.log(state);
    if (response.getReturnValue() != '') {
     alert('The following error has occurred. while Delete record-->' + response.getReturnValue());
    } else {
     console.log('check it--> delete successful');
    }
    this.onLoad(component, event);
   }
  });
  $A.enqueueAction(action);
 },
    
})