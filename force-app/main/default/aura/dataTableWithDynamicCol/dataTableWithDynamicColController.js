({
    doInit: function(component, event, helper) {
        var action = component.get("c.fetchAccountRecords");
        action.setCallback(this, function(response) {
            var state = response.getState(); 
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                // set searchResult list with return value from server.
                component.set("v.searchResult", storeResponse);
            }
            
        });
        $A.enqueueAction(action);
    },
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
    },
    
    closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
    },
})