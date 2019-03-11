$.getJSON("https://ipapi.co/json/", function(data){
  var cit = data.city;
  var cnt = data.country_name;
  var isp = data.org;
  var lat = data.latitude;
  var lon = data.longitude;
  var ipa = data.ip;
  var rgn = data.region;
  var tzn = data.timezone;
  var zip = data.postal;
  $("#IP").append(ipa);
  $("#ISP").append(isp);
  $("#CITY").append(cit);
  $("#COUNTRY").append(cnt);
  $("#LAT").append(lat);
  $("#LON").append(lon);
  $("#RGN").append(rgn);
  $("#TZN").append(tzn);
  $("#ZIP").append(zip);
});

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

  $("#VER").append(ver);
  $("#SCW").append(scw);
  $("#SCH").append(sch);
  $("#NAME").append(name);
  $("#PTF").append(ptf);
  $("#CORES").append(cores);
  $("#RAM").append(ram);
  $("#VENDOR").append(vendor);
  $("#RENDER").append(render);
};
