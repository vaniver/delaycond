/**
 * delaycondChrome namespace.
 */
if ("undefined" == typeof(delaycondChrome)) {
  var delaycondChrome = {};
};

_loadHandler = function(event) {
    alert(gBrowser.currentURI.spec);
    //VDomCheckerChrome.BrowserOverlay._onPageLoad(event);
};

gBrowser.addEventListener("load", _loadHandler, true);
/**
 * Controls the browser overlay for the Hello World extension.
 */
delaycondChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
   
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let message = stringBundle.getString("xulschoolhello.greeting.label");

    //window.alert(message);
	
	window.alert(gBrowser.currentURI.spec);
  }
};