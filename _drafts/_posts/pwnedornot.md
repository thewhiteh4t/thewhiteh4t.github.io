---
title: pwnedOrNot
post: post
date: 2018-05-26 00:00:00 +0000
image: "/uploads/pwned1.png"
---
<h1 class="cyan-text title">pwnedOrNot</h1>

<img class="responsive-img z-depth-5" src="/thewhitehat/images/pwned1.png">

<h2 class="cyan-text subtitle">Introduction</h2> 

<p class="content white-text">

pwnedOrNot is a python script which checks if the email account has  been compromised in a data breach, if the email account is compromised  it proceeds to find **passwords** for the compromised account.

<br>

It uses [**haveibeenpwned**](https://haveibeenpwned.com/API/v2) v2 api to test email accounts and searches for the **password** in **Pastebin Dumps**

<br>

This script has been tested on : 

<br> 

    * **Kali Linux 18.2**
    * **Ubuntu 18.04**
    * **Kali Nethunter**
    * **Termux**

<br>