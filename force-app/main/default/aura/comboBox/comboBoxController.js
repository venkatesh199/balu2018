({
    handleChange: function (component, event, helper) {
        var options = [
            { value: "red", label: "red" },
            { value: "green", label: "green" },
            { value: "blue", label: "blue" },
            { value: "yellow", label: "yellow" },
            { value: "white", label: "white" },
            { value: "black", label: "black" },
            { value: "orange", label: "orange" },
        ];
            component.set("v.options", options);
            },
            nameThatButton: function (component, event, helper) {
            var whichOne = event.getSource().getLocalId();
            var whichButtName = event.getSource().get("v.name")
            console.log(whichOne);
            console.log(whichButtName);
            component.set("v.whichButton", whichOne);
            component.set("v.whichButtonName", whichButtName);
            }
            })