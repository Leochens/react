

export const ADD = 'ADD' 
export const INCREASE='INCREASE'
export function addThing(thing){
    return {type:ADD,thing}
}

export function increase(){
    return {type:INCREASE}
}
