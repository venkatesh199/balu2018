({
    handleShowModal : function(component, event, helper) {
        component.find('overlayLib').showCustomModal({
            header: "Application Confirmation",
            body: 'This is for Test',
            footer: 'footer',
            showCloseButton: true,
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    },
    handleClick: function(cmp, event, helper) {
        var navService = cmp.find("navService");
        // Uses the pageReference definition in the init handler
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: "AllAccounts"
            }
        };
        navService.navigate(pageReference);
    }
})