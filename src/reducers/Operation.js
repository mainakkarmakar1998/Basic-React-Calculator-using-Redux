

const initialState = "";
const result = (state=initialState,action) =>{
    switch (action.type) {
       // case "INCREMENT": return state+1;
        //case "DECREMENT": return state-1; 
        case "CLICK" : state= state + action.payload; 
        				
        return state;

        case "CLEAR": state="";
        			 return state;

        case "BACKSPACE": 	try{
        					state=state.slice(0,state.length - 1);
        					return state;
        					}
        					catch(error)
   							 {
        						state="";
        						return state;
    						}
    	case "RESULT":  try{
        					return eval(state);
        					}
       					 catch{
           					 state= "Wrong input";
           					 return state;
       						 }
           
    
        default: return state;
            
    }

}
export default result;



