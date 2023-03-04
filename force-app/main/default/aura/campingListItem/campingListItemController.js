({
    packItem: function(component, event, helper)
    {	var btnClicked = event.getSource(); 
        var item = btnClicked.get("v.item.Packed__c");
        var a = component.get("v.item",true);
        a.Packed__c = true;
        component.set("v.item",a);
        component.set("v.disabled", true)
    },
})