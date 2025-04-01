# Hackyholidays : Hacker 101

#### Flag 0 -- Found

I usually go straight to straight to /robots.txt for any target I am engaging with, it quite quickly paid off for this CTF. First flag down

Looks like there is an interesting path as well "/s3cr3t-ar3a"

#### Flag 1 -- Found

Browsing to "/s3cr3t-ar3a" we are met with the message

```html
I've moved this page to keep people out! If you're allowed access you'll know where to look for the
proper page!
```

Always check your dev tools. The div element containing the message has the attributes "data-info" and "next-page".
data-info has the next flag
next-page has our next point of interest "/apps-home"

#### Flag 2

Looks like quite a few interesting links, starting from the top
People-Rater

This shows a list of names that when clicked on trigger an alert() with a negative comment.

Looking at the requests in burp we can see a URI that returns a user in json with a base64 encoded parameter of id. Many systems utilize the first few ids for admin or internal users; so the value {"id":1} returns user details of The Grinch and a flag.

hydra -L /usr/share/wordlists/rockyou.txt -p pass 5c3b7137fd3db091a7bc8fa2b15c105d.ctf.hacker101.com http-post-form "/secure-login:username=^USER^&password=^PASS^:Invalid Username" -S -t 64

#### Flag 3

On to the swag shop
Interacting with stock triggers a modal to login. In real world situations anything that has stock or user interaction like this I like to use dirb or some other directory scanner.

from this I found
/swag-shop/api/sessions
/swag-shop/api/stock
/swag-shop/api/user

starting with /api/sessions
This returned a number of Base64 encoded values.

Over to cyberchef to bake some results

Note: This can also be done by selecting the /swag-shop/api/sessions request and sending the Base64 values from the response to Burp's decoder.

The value

```json
{
  "user": "C7DCCE-0E0DAB-B20226-FC92EA-1B9043",
  "cookie": "NDU0ODI5MmY3ZDY2MjRiMWE0MmY3NGQxMWE0ODMxMzg2MGE1YWRhMTc0YjhkYWE3MzU1MjZjNDg5MDQ2Y2JhYjY3YTFhY2Q3YjBmYTk4N2Q5ZWQ5MWQ5OWFkNWE2MjIyZmZjMzZjMDQ3ODk5ZmI4ZjZjOWU0OGJhMjIwNmVkMTY="
}
```

we now have a uuid for a user

/api/stock
returns stock data in json format, I'll come back to this I think; for now I want to use this user id I have found

/api/user
returns

```json
{ "error": "Missing required fields" }
```

This means that the application is expecting a field either within the body or url.

Given that there isn't a Content-Type error I'm going to assume it has something to do with a URL parameter.

I used burp to fuzz potential parameters along with the ID value from previously and /api/user/?uuid=
gave me user details for the grinch.

```json
{
  "uuid": "C7DCCE-0E0DAB-B20226-FC92EA-1B9043",
  "username": "grinch",
  "address": {
    "line_1": "The Grinch",
    "line_2": "The Cave",
    "line_3": "Mount Crumpit",
    "line_4": "Whoville"
  },
  "flag": "^FLAG^$FLAG$"
}
```

#### Flag 4

Secure Login

use burp to brute

access:computer

cookie in base64, admin: false
change to admin true and convert back to base64
use cookie to access web either through browser or burp

now that admin
access to .zip file
download
needs password
fcrackzip -D -p <wordlist> -u <target>

use password to unzip

flag.txt
xxx.png

### Flag 5

Diary

application uses template engine, this is always a good time to check for php.

I used burp to access the entries.html request and then changes template to ?template=index.php

reveals URLs within functions for string replacement

/admin.php
/secretadmin.php

payload to bypass filter
secretadmsecretadmadmin.phpin.phpin.php

send in burp or browser and flag is under title

### Flag 6

hate mail generator

``
preview*markup=hello{{template:cbdj3*/_grinch_/_header.html}}{{77}}&preview_data={"name":"admin","email":"admin@admin.com","admin":true,"administrator":true,"77":"{{template:38dhs_/_admins_only_/\_header.html}}"}

### Flag 7

### Flag 8

### Flag 9

### Flag 10

https://57bf2c94525d3f9bc9c7797c196ec8c2.ctf.hacker101.com/r3c0n_server_4fdk59/album/?hash=jdh34k

Forum

When first arriving on this page I quickly found that I could only read post, not create them. So I went straight back to my directory enumeration tools and found

/phpmyadmin

Flag0 -- Found
You don't have any hints for this flag yet.
Flag1 -- Found
You don't have any hints for this flag yet.
Flag2 -- Found
You don't have any hints for this flag yet.
Flag3 -- Found
You don't have any hints for this flag yet.
Flag4 -- Not Found
You don't have any hints for this flag yet.
Flag5 -- Not Found
You don't have any hints for this flag yet.
Flag6 -- Not Found
You don't have any hints for this flag yet.
Flag7 -- Not Found
You don't have any hints for this flag yet.
Flag8 -- Not Found
You don't have any hints for this flag yet.
Flag9 -- Not Found
You don't have any hints for this flag yet.
Flag10 -- Not Found
You don't have any hints for this flag yet.
Flag11 -- Not Found
You don't have any hints for this flag yet.
