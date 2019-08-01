
var _isARSupported = undefined;

/**
 * AR Feature detection
 */
export function isArSupported(){

    if( _isARSupported === undefined ){
        const a = document.createElement("a");
        if (a.relList.supports("ar")) {
            _isARSupported = true;
        }else{
            _isARSupported = false;
        }
    }

    return _isARSupported;

}