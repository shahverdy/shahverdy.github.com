---
title: "Firefox's going evil"
modified:
excerpt: "Singing addons"
categories: [Programing, Browsers]
tags: [Browsers]

header:
  teaser: /assets/images/posts/firefox-add-ons.jpeg

---

![Firefox](/assets/images/posts/firefox-add-ons.jpeg){:style="float: right ;margin-right: 7px;margin-top: 7px;"}

Firefox's add-ons environment is generally very open. Developers have a wide range of access to APIs, from changing the core to distribute their add-on from their own channel and not Mozilla's. In this way developers are more free to develop, but also they are more free to take the advantages of users!

You might have seen add-ons that change the homepage of the browser, or inject ads to websites, or even some of them that change the results of famous search engines like google. Such add-ons are found outside mozilla's [AMO](https://addons.mozilla.org) and there were no easy way to fight this. One way would be to force all developers to distribute their add-on under AMO - like what google chrome does. But that would kind of close the circle of the ecosystem.

Recently Mozilla decided to change their policy for publishing add-ons, and that would be signing them. So:

- AMO hosted add-ons that pass reviews are singned automatically.
- Add-ons that are not hosted on AMO have to get submitted to AMO for a review process and getting signed.

Soon all firefox add-ons will get affected by this. For developers hosting their add-ons on AMO this means a new simple test of installation. But for those who host their add-ons where others that AMO, this may cause a bit of problem. 

So, the model of trust and privacy for such system is like that "trust anyone Mozilla trusts, and share your stuffs with Mozilla". This is not a good idea, specially if you have a private extenssion for your own company, which happens a lot here in my country.

They are also giving a power to government and corporations to force them not to sign add-ons they don't like. If you are from Iran or china you understand what I mean. Months ago I wrote a Google Chrome extenssion, and my team where using it for a while. I decided to share it in Google Chrome Websore, and guess what! I wasn't allowed to do so because of USA sanctions, as [decribed here](http://stackoverflow.com/questions/15312584/how-can-i-prove-google-chrome-web-store-that-im-a-developer-and-not-a-spammer-i). Such decisions can affect millions of people in the whole world. The fact is that Mozilla is becoming the next Google and this is more about control, of the stupid kind of course.

Except a short period of time (that I used google chrome and chromium), I've been a firefox fan all the time! But now, sadly, it seems that firefox is going one step away from a free-world browser. I understand that they kind of have to do so, also I don't have any other solution for them either; Maybe the best solution would be to educate users how to use add-ons. Maybe its time to migrate to a new browser (Oh my god! What about Vimperator then?!)
