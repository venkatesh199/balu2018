({
    doInit: function (cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Account name', fieldName: 'Name', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'text'},
            {label: 'Industry', fieldName: 'industry', type: 'text'}
        ]);
        var action = cmp.get('c.fetchAccounts'); 
        alert('I am in action....');
        action.setCallback(this, function(response) {
            var state = response.getState();
            alert(state);
            if(state=='SUCCESS' || state == 'DRAFT'){
                var responsevalue = response.getReturnValue();
                console.log('responsevalue|')
                cmp.set('v.data',responsevalue);
            }
        });
        $A.enqueueAction(action);
    }
})