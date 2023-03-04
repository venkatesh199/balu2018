({
    init: function(cmp, evt, helper) {
        var myPageRef = cmp.get("v.pageReference");
        console.log('myPageRef---:',myPageRef);
        var propertyValue = myPageRef.state.c__propertyValue;
        console.log('propertyValue---:',propertyValue);
        cmp.set("v.propertyValue", propertyValue);
    }
})