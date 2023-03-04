public abstract class GameCoin { 
     
    public abstract Integer coinValue(); 
       
    public Integer absorbCoin(Integer existingPoint){ 
        system.debug('absorbCoin---:'+existingPoint + coinValue());
      return existingPoint + coinValue(); 
    }     
  }