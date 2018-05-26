---
title: pwnedOrNot
post: post
date: 2018-05-26 00:00:00 +0000
image: "/images/pwned3-1.png"
---
<h1 class="cyan-text title">pwnedOrNot</h1>

<img class="responsive-img z-depth-5" src="/images/pwned3.png">

<h2 class="cyan-text subtitle">Introduction</h2>

<p class="content white-text">

<b>pwnedOrNot</b> is a python script which checks if the email account has  been compromised in a data breach, if the email account is compromised  it proceeds to find <b>passwords</b> for the compromised account. 

<br> <br>

It uses <b><a href="[**https://haveibeenpwned.com/API/v2**](https://haveibeenpwned.com/api/v2)">haveibeenpwnd</a></b> v2 api to test email accounts and searches for the <b> passwords </b> in <b>Pastebin Dumps.</b>

<br><br>

This script has been tested on : 

<br>

<ul>

<li>Kali Linux 18.2</li>

<li>Kali Nethunter</li>

<li>Ubuntu 18.04</li>

<li>Termux</li>

</ul>

<h3 class="cyan-text subtitle">Installation</h3>

<b class="cyan-text">Ubuntu and Kali :</b>

<pre><code class="grey darken-4 red-text">
pip install cfscrape
apt-get install nodejs
</code></pre>

<b class="cyan-text">Termux :</b>

<br>

<pre><code class="grey darken-4 red-text">

pkg install python2

pip2 install requests

pip2 install cfscrape

python2 pwnedornot.py

</code></pre>

<br>

Other common standard python modules pwnedornot uses :

<ul>

<li>os</li>

<li>re</li>

<li>time</li>

<li>json</li>

<li>requests</li>

<br>

<h4>Usage</h4>

<br>

<pre><code class="grey darken-4 red-text">

git clone https://github.com/thewhiteh4t/pwnedOrNot.git

cd pwnedOrNot/

python pwnedornot.py

</code></pre>

<br>

<h5>Features</h5>

<b><a href="[https://haveibeenpwned.com/API/v2](https://haveibeenpwned.com/API/v2)">haveibeenpwned</a></b> offers a lot of information about the compromised email, some useful information is displayed by this script :

<ul>

<li>Name of Breach</li>

<li>Domain Name</li>

<li>Date of Breach</li>

<li>Fabrication status</li>

<li>Verification Status</li>

<li>Retirement status</li>

<li>Spam Status</li>

<li>Source of Dump</li>

<li>ID of Dump</li>

<br>

And with all this information <b>pwnedOrNot</b> can easily find passwords for compromised emails if the dump is accessible and it contains the password

<br>

<h6>Screenshots</h6>

!\[example\](https://github.com/thewhiteh4t/pwnedOrNot/blob/master/pwned1.png)

!\[example\](https://github.com/thewhiteh4t/pwnedOrNot/blob/master/pwned2.png)

Also works on Kali Nethunter

!\[example\](https://github.com/thewhiteh4t/pwnedOrNot/blob/master/nethunter1.png)

!\[example\](https://github.com/thewhiteh4t/pwnedOrNot/blob/master/nethunter2.png)