trigger AvoidDupConName on Contact (before insert) {
    list<string> newlistcons = new list<string>();
    for(contact newcons : trigger.new){
        newlistcons.add(newcons.lastname);
    }
    list<contact> listOfDuplicatecontacts=[select id,lastname from contact where name in :newlistcons];
    for(contact newcons : trigger.new){
        if(listOfDuplicatecontacts.size()!=0){
            newcons.addError('Account already exists with this name');
        }
        
        
    }

}