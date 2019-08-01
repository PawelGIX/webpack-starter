
/**
 * Callbak odpalany gdy wykonał się load
 * ```
  winLoad(function() {
    console.log('Window is loaded');
  });
  ```
 * @param {function} callback 
 */
export function windownLoad(callback) {
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.addEventListener("load", callback);
    }
  }
  
 