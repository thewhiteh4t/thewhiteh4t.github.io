---
title: Seeker - Find Geolocation with High Accuracy
post: post
date: 2018-11-16 09:48
image: ''

---
<h1 class="cyan-text title">Seeker - Find Geolocation with High Accuracy</h1>

<br>

<p><img class="responsive-img z-depth-5" src="https://imgur.com/cg82a8k" /></p>

<br>

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

**This tool is a Proof of Concept and is for Educational Purposes  Only, Seeker shows what data a malicious website can gather about you  and your devices and why you should not click on random links and allow  critical permissions such as Location etc.**

<br>

<ul class="browser-default">

<li>Other tools and services offer IP Geolocation which is not very accurate and does not give location of user.</li>

<li>Generally if a user accepts location permsission, Accuracy of the information recieved is **accurate to approximately 30 meters**.</li>

</ul>

<br>

<h3 class="cyan-text subtitle">Tested On :</h3>

<ul class="browser-default">

<li>Kali Linux 2018.2</li>

<li>Ubuntu 18.04</li>

<li>Arch Linux based Distro</li>

<li>Termux</li>

<li>Kali Linux (WSL)</li>

<li>Parrot OS</li>

<li>Zorin OS</li>

</ul>

<br>

<h4 class="cyan-text subtitle">Installation</h4>

<h5 class="cyan-text subtitle">Ubuntu/Kali Linux</h5>

<pre><code class="grey darken-4 red-text">git clone [https://github.com/thewhiteh4t/seeker.git](https://github.com/thewhiteh4t/seeker.git "https://github.com/thewhiteh4t/seeker.git")
cd seeker/
chmod 777 install.sh
./install.sh

\# OR using Docker

\# Install docker

curl -fsSL [https://get.docker.com](https://get.docker.com "https://get.docker.com") -o get-docker.sh
sh get-docker.sh

\# Build Seeker
cd seeker/
docker build -t seeker .

\# Launch seeker
docker run -t --rm seeker

</code></pre>

<br>

\[!\[asciicast\](https://asciinema.org/a/195052.png)\](https://asciinema.org/a/195052)

<br>

<h6 class="cyan-text subtitle">Arch Linux Based Distro</h6>

<br>

<pre><code class="grey darken-4 red-text"># Install docker

pacman -Syy pacman -S docker

systemctl start docker.service

\# Build Seeker

cd seeker/ docker build -t seeker .

\# Launch seeker docker run -t --rm seeker

</code></pre>

<br>

<h7 class="cyan-text subtitle">Demo</h7>

<br>

<iframe width="560" height="315" src="[https://www.youtube.com/embed/ggUGPq4cjSM](https://www.youtube.com/embed/ggUGPq4cjSM "Seeker")" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>