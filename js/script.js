fetch("https://ipapi.co/json/").then(response => {
  return response.json();
}).then(data => {
  var cit = data.city;
  var cnt = data.country_name;
  var isp = data.org;
  var lat = data.latitude;
  var lon = data.longitude;
  var ipa = data.ip;
  var rgn = data.region;
  var tzn = data.timezone;
  var zip = data.postal;
  document.getElementById('IP').innerHTML=ipa;
  document.getElementById('ISP').innerHTML=isp;
  document.getElementById('COUNTRY').innerHTML=cnt;
  document.getElementById('CITY').innerHTML=cit;
  document.getElementById('LAT').innerHTML=lat;
  document.getElementById('LON').innerHTML=lon;
  document.getElementById('RGN').innerHTML=rgn;
  document.getElementById('TZN').innerHTML=tzn;
  document.getElementById('ZIP').innerHTML=zip;

  window.onload = function(){
    var ua = navigator.userAgent;
    var ver = navigator.appVersion;
    var scw = window.screen.width;
    var sch = window.screen.height;
    var name = navigator.appCodeName;
    var ptf = navigator.platform;
    var cores = navigator.hardwareConcurrency;
    var ram = navigator.deviceMemory;

    gl = document.createElement('canvas').getContext('webgl');
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    var render = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    document.getElementById('VER').innerHTML=ver;
    document.getElementById('SCW').innerHTML=scw;
    document.getElementById('SCH').innerHTML=sch;
    document.getElementById('NAME').innerHTML=name;
    document.getElementById('PTF').innerHTML=ptf;
    document.getElementById('CORES').innerHTML=cores;
    document.getElementById('RAM').innerHTML=ram;
    document.getElementById('VENDOR').innerHTML=vendor;
    document.getElementById('RENDER').innerHTML=render;
  };
}).catch(err => {console.log(err)});
