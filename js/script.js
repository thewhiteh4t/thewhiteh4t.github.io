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

  function info() {
    var ua = navigator.userAgent;
    var str = ua;
    var os = ua;
    var scw = window.screen.width;
    var sch = window.screen.height;
    var name = navigator.appCodeName;
    var cores = navigator.hardwareConcurrency;
    var ram = navigator.deviceMemory;
    if (ram == undefined) { ram = 'Not Available'; }

    if (ua.indexOf('Firefox') != -1)
    {
      str = str.substring(str.indexOf('Firefox/'));
      str = str.split(' ');
      name = str[0];
    }
    else if (ua.indexOf('Vivaldi') != -1)
    {
      str = str.substring(str.indexOf('Vivaldi/'));
      str = str.split(' ');
      name = str[0];
    }
    else if (ua.indexOf('Chrome') != -1)
    {
      str = str.substring(str.indexOf('Chrome/'));
      str = str.split(' ');
      name = str[0];
    }
    else if (ua.indexOf('Safari') != -1)
    {
      str = str.substring(str.indexOf('Safari/'));
      str = str.split(' ');
      name = str[0];
    }
    else if (ua.indexOf('Edge') != -1)
    {
      str = str.substring(str.indexOf('Edge/'));
      str = str.split(' ');
      name = str[0];
    }
    else
    {
      brw = 'Not Available'
      console.log('Browser is not available')
    }

    var ver = name.match(/-?\d+\.\d+/);
    var ver = ver.toString();

    var brw = name.match(/[a-zA-Z]+/g);
    brw = brw.toString();

    os = os.substring(0, os.indexOf(')'));
    os = os.split(';');
    os = os[1];
    if (os == undefined)
    {
      os = 'Not Available';
      console.log('OS is not available')
    }
    os = os.trim();

    var canvas = document.createElement('canvas');
    var gl;
    var debugInfo;
    var ven;
    var ren;

    try
    { gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl'); }

    catch (e) { console.log(e); }

    if (gl)
    {
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      ven = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      ren = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }

    if (ven == undefined)
    { ven = 'Not Available'; }

    if (ren == undefined)
    { ren = 'Not Available'; }

    document.getElementById('VER').innerHTML=ver;
    document.getElementById('SCW').innerHTML=scw;
    document.getElementById('SCH').innerHTML=sch;
    document.getElementById('NAME').innerHTML=brw;
    document.getElementById('OS').innerHTML=os;
    document.getElementById('CORES').innerHTML=cores;
    document.getElementById('RAM').innerHTML=ram;
    document.getElementById('VENDOR').innerHTML=ven;
    document.getElementById('RENDER').innerHTML=ren;
  }
  window.onload = info();
}).catch(err => {console.log(err)});
