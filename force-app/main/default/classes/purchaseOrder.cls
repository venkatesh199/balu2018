public with sharing class purchaseOrder {
        public interface puechaseOrderValue {
            Double percentageDiscountTobeApplied(); // method signature only
         }
         public class PremiumCustomer implements puechaseOrderValue {
            public Double percentageDiscountTobeApplied () {
                Double  discountValue = 0.30;
                system.debug('discount ---:'+discountValue);
               return discountValue;
            }
         }
         public class NormalCustomer implements puechaseOrderValue {
            public Double percentageDiscountTobeApplied () {
                Double  discountValue = 0.10;
                system.debug('discount 1 ---:'+discountValue);
               return discountValue;
            }
         }    
    
}