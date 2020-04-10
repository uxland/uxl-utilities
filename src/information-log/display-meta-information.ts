export const displayMetaInformation = () => {
  console.log('');
  console.log('|--------- METADATA INFORMATION --------|');
  console.log(`%c|-- Browser version: ${get_browser().name} ${get_browser().version}`, 'color:#388e3c');
  console.log(`%c|-- Browser language: ${window.navigator.language}`, 'color:#388e3c');
  console.log(`%c|-- System Platform: ${window.navigator.platform}`, 'color:#388e3c');
  console.log(`%c|-- User Agent: ${window.navigator.userAgent}`, 'color:#388e3c');
  console.log(`%c|-- Cookies enabled: ${window.navigator.cookieEnabled}`, 'color:#388e3c');
  console.log(`%c|-- Online: ${window.navigator.onLine}`, 'color:#388e3c');
  console.log(`%c|-- Lit-element version: ${window.litElementVersions[0]}`, 'color:#388e3c');
  console.log(`%c|-- Lit-html version: ${window.litHtmlVersions[0]}`, 'color:#388e3c');
  console.log(`%c|-- Browser bar visible: ${window.locationbar.visible}`, 'color:#388e3c');
  console.log(`%c|-- Orientation: ${window.orientation === 0 ? 'Portrait' : window.orientation === 90 ? 'landscape' : 'unknown'}`, 'color:#388e3c');
  console.log(`%c|-- Pixel depth: ${window.screen.pixelDepth}`, 'color:#388e3c');
  console.log('');
};

const get_browser = () => {
  var ua = navigator.userAgent,
    tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: tem[1] || '' };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem != null) {
      return { name: 'Opera', version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1],
  };
};
