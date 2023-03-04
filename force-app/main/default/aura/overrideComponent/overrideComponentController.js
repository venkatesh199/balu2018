({
    createAccount : function(component, event, helper) {
        var action = component.get("c.saveAccount");
        action.setParams({
            "accRec":component.get("v.acc")
        });
        action.setCallback(this, function(response){
            if(response.getState()==='SUCCESS'){
                var accId = response.getReturnValue();
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "type":"Success",
                    "message": "Account created successfully."
                });
                toastEvent.fire();
                
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": accId,
                    "slideDevName": "related"
                });
                navEvt.fire();
            }
        });
        $A.enqueueAction(action);
    },
})