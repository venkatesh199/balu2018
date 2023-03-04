({
    onInit : function(component,event,helper){
        // Setting column information.To make a column sortable,set sortable as true on component load
        component.set("v.accountColumns",[
            {
                label : 'Name',
                fieldName : 'Name',
                type : 'text',
                sortable : true
            },
            {
                label : 'Account Source',
                fieldName : 'AccountSource',
                type : 'text',
                sortable : true
            },
            {
                label : 'Rating',
                fieldName : 'Rating',
                type : 'text',
                sortable : true
            },
            {
                label : 'Employees',
                fieldName : 'NumberOfEmployees',
                type : 'number',
                sortable : true
            }
        ]);
        // call helper function to fetch account data from apex
        helper.getAccountData(component);
    },
    
    //Method gets called by onsort action,
    handleSort : function(component,event,helper){
        //Returns the field which has to be sorted
        var sortBy = event.getParam("fieldName");
        //returns the direction of sorting like asc or desc
        var sortDirection = event.getParam("sortDirection");
        //Set the sortBy and SortDirection attributes
        component.set("v.sortBy",sortBy);
        component.set("v.sortDirection",sortDirection);
        // call sortData helper function
        helper.sortData(component,sortBy,sortDirection);
    }
})