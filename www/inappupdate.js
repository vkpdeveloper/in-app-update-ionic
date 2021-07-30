
function InAppUpdatePlugin() {}

InAppUpdatePlugin.prototype.checkAppUpdate = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'InAppUpdatePlugin', 'checkAppUpdate', [options]);
}

InAppUpdatePlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.inAppUpdate = new InAppUpdatePlugin();
  return window.plugins.inAppUpdate;
};
cordova.addConstructor(InAppUpdatePlugin.install);