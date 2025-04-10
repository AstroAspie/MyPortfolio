# Exploiting an API endpoint using documentation

[Portswigger Lab](https://portswigger.net/web-security/api-testing/lab-exploiting-api-endpoint-using-documentation)

<p>
APIs (Application Programming Interfaces) enable software systems and applications to communicate and share data. API testing is important as vulnerabilities in APIs may undermine core aspects of a website's confidentiality, integrity, and availability.
</p>

### Lab Objective

<p>
To solve the lab, find the exposed API documentation and delete carlos. You can log in to your own account using the following credentials: wiener:peter
</p>

### My Approach

Given that we know the task is user related, logging in first is the logical choice.

The endpoint for logging in "/login" doesnt't reveal any API endpoints.

Let's update the email address and see what we get

Viewing the HTTP History through Burp (or a proxy tool of your choosing) find the request

PATCH /api/user/wiener

Change the HTTP method

GET /api/user/wiener
and we see that the email is what was given with the PATCH method

```json
{ "username": "wiener", "email": "email@email.com" }
```

So we have our API with confirmed path of /api/user/&lt;some_user_name&gt;

Now to begin understanding the API

simply suffixing /api to the Lab URL results in a docs page

with this we can see that there are HTTP methods GET, PATCH & DELETE for /api/user/&lt;some_user_name&gt;

Now to the target at hand <i>"Carlos"</i>

add /api/user/carlos to the target url. This will return the JSON data for user Carlos

```json
{ "username": "carlos", "email": "carlos@carlos-montoya.net" }
```

We have now confirmed that Carlos is indeed a user for application

In burp find the GET /api/user/carlos request in Proxy -> HTTP History and send it to the repeater.

Whilst in the repeater CHANGE the HTTP method to DELETE and send the request.

```json
{ "status": "User deleted" }
```

SUCCESS! Carlos is deleted and Lab is complete.

---

# Alternate Approach

In a real world scenario it would be quite common to brute force directories to find API end points or directories of interest. For this scenario we know our area of interest and no matter the scan done; /api is going to be found some way or another. So assuming that we navigate to "/api" and see the docs page.

Let's attempt the GET request for /api/users/username

It seems we need to login or find a way to bypass Authentication. Simply logging in is usually smart.

After logging in attempt the check again in the browser; it will return the user data for an existing user i.e. (/api/user/wiener).

Back in burp suite, find the last GET /api/user/wiener request and send it to the repeater.

```json
{ "username": "wiener", "email": "email@email.com" }
```

In repeater change wiener to carlos and send the request. We can now see Carlos' user data.

```json
{ "username": "carlos", "email": "carlos@carlos-montoya.net" }
```

Using the same repeater tab, change the request method from GET to DELETE and send.

```json
{ "status": "User deleted" }
```
