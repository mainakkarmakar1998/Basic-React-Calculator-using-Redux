

export const incNumber = () =>{
    return{
        type: "INCREMENT"
    }
}
export const decNumber = () =>{
    return{
        type: "DECREMENT"
    }
}
export const clear = () =>{
	return{
		type: "CLEAR"
	}
}
export const res = () =>{
	return{
		type: "RESULT"
	}
}
export const backspace = () =>{
	return{
		type: "BACKSPACE"
	}
}
export const click = (val) =>{
	return{
		type: "CLICK",
        payload: val
        
	}
}

