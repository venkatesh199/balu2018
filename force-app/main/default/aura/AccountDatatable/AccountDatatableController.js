({
    doInit: function (cmp, event, helper) {
        var actions = [{
            label : "Show details",
            name : "show_details",
            iconName : 'action:preview'
        },
                       {
                       label : "Delete",
                       name : "delete",
                       iconName : 'action:delete'   
                       }];
        cmp.set('v.columns', [
            {label: 'Account name', fieldName: 'Name', type: 'text',editable: true},
            {label: 'Phone', fieldName: 'Phone', type: 'phone',editable: true},
            {label: 'Industry', fieldName: 'Industry', type: 'text',editable: true},
            {type : "action", typeAttributes : {rowActions : actions }}
        ]);
        var action = cmp.get('c.fetchAccountRecords');
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS" || state === "DRAFT") {
                var responseValue = response.getReturnValue();
                console.log('responseValue ', responseValue);
                cmp.set('v.data',  responseValue);
            }
            
        });
        $A.enqueueAction(action);
    },
    doselectedRecord :function (cmp, event, helper) {
        var selectedRows = event.getParam('selectedRows')
        //alert('Record has been selected');
        console.log('selectedRows', selectedRows);
    },
    handleRowAction :function (cmp, event, helper){
        var action = event.getParam('action');
        var row = event.getParam('row');
        console.log('action', action.name);
        console.log('row', row.id);
        
        
    }
    
})