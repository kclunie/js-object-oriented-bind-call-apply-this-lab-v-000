//Your code here

function justInvoke(fn){
    return fn();
}

function setThisWithCall(fn, thisValue, arg){
    return fn.call(thisValue, arg);

}

function setThisWithApply(fn, thisValue, arg){
    return fn.apply(thisValue, arg);

}

function returnNewFunctionOf(functionToBeCopied, thisValue){
    const copyfunc = functionToBeCopied.bind(thisValue);
    return copyfunc
}