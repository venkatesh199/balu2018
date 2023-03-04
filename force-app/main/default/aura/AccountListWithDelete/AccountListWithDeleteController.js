({
	loadAccountList : function(component, event, helper) {
		helper.onLoad(component,event);
	},
    checkboxSelect: function(component, event, helper) {
        var selectedRec = event.getSource().get("v.value");
        var getSelectedNumber = component.get("v.selectedCount");
        if(selectedRec== true){
            getSelectedNumber++;
        }else{
            getSelectedNumber--;
        }
        component.set("v.selectedCount", getSelectedNumber);
    },
    selectAll: function(component, event, helper) {
  var selectedHeaderCheck = event.getSource().get("v.value");
  var getAllId = component.find("boxPack");
     if(! Array.isArray(getAllId)){
       if(selectedHeaderCheck == true){ 
          component.find("boxPack").set("v.value", true);
          component.set("v.selectedCount", 1);
       }else{
           component.find("boxPack").set("v.value", false);
           component.set("v.selectedCount", 0);
       }
     }else{
       
        if (selectedHeaderCheck == true) {
        for (var i = 0; i < getAllId.length; i++) {
  		  component.find("boxPack")[i].set("v.value", true);
   		 component.set("v.selectedCount", getAllId.length);
        }
        } else {
          for (var i = 0; i < getAllId.length; i++) {
    		component.find("boxPack")[i].set("v.value", false);
   			 component.set("v.selectedCount", 0);
  	    }
       } 
     }  
 
 },
    deleteSelected: function(component, event, helper) {
  var delId = [];
  var getAllId = component.find("boxPack");
     if(! Array.isArray(getAllId)){
         if (getAllId.get("v.value") == true) {
           delId.push(getAllId.get("v.text"));
         }
     }else{
     for (var i = 0; i < getAllId.length; i++) {
       if (getAllId[i].get("v.value") == true) {
         delId.push(getAllId[i].get("v.text"));
       }
      }
     } 
      helper.deleteSelectedHelper(component, event, delId);
 },
})