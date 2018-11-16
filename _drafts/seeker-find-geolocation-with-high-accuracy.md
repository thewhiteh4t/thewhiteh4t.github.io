---
title: Seeker - Find Geolocation with High Accuracy
post: post
date: 2018-11-16 09:48
image: ''

---
<h1 class="cyan-text title">Seeker - Find Geolocation with High Accuracy</h1>

<a href="[https://imgur.com/cg82a8k](https://imgur.com/cg82a8k "https://imgur.com/cg82a8k")"><img src="![](https://i.imgur.com/cg82a8k.png)" title="source: imgur.com"/></a>

<h2 class="cyan-text subtitle">Introduction</h2>

<p class="content white-text">

Concept behind Seeker is simple, just like we host phishing pages to  get credentials why not host a fake page that requests your loction just  like many popular location based websites.

<br>

Seeker Hosts a fake website on **In Built PHP Server** and uses **Ngrok**, website asks for Location Permission and if the user allows it, we can get :

<br>

<ul class="browser-default">

<li>Longitude</li>

<li>Latitude</li>

<li>Accuracy</li>

<li>Altitude - Not always available</li>

<li>Direction - Only available if user is moving</li>

<li>Speed - Only available if user is moving</li>

</ul>

<br>

Along with Location Information we also get **Device Information** without any permissions :

<br>

<ul class="browser-default">

<li>Operating System</li>

<li>Platform</li>

<li>Number of CPU Cores</li>

<li>Amount of RAM - Approximate Results</li>

<li>Screen Resolution</li>

<li>GPU information</li>

<li>Browser Name and Version</li>

<li>Public IP Address</li>

</ul>