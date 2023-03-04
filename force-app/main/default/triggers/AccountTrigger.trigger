trigger AccountTrigger on Account (before insert,before update,after insert) {
    if(trigger.isBefore && trigger.isInsert){
        AccountController.insertTriggerRecs(trigger.new);
    }
    if(trigger.isBefore && trigger.isUpdate){
        AccountController.UpdateTriggerRecs(trigger.new);
    }
    if(trigger.isAfter && trigger.isInsert){
        AccountController.upsertcontactRecords(trigger.new);
    }
    
}