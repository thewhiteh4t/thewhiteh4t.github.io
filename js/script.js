$.getJSON("https://ipapi.co/json/", function(data){
  console.log(data)
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
  $("#MOB").append(Mob);
  $("#PXY").append(Pxy);
});
