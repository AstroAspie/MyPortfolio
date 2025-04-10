# Exploiting server-side parameter pollution in a query string

[Portswigger Lab](https://portswigger.net/web-security/learning-paths/api-testing/api-testing-testing-for-server-side-parameter-pollution-in-the-query-string/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-query-string#)

## Task

To solve the lab, log in as the administrator and delete carlos.

## My Approach

The task states that we need to login as administrator and delete the user carlos.

I decided to only use skills mentioned in the learning content for this path and therefore, I steered clear of terminal tools and stuck with burp and the burp browser.

browsing to /login we can see that there is a route for /forgot-password
and keeping an eye on the dev tools within the browser we can see that there is a javascript file at /static/js/forgotPassword.js

opening this in the browser shows that there is a reset_token parameter
/forgot-password?reset_token=${resetToken}

I attempted to add some random values to reset_token; to no avail.

On to testing some fields.
Sending the reset password (/forgot-password) request with a random username returns "Invalid Username"

Add administrator to the usernamefield and truncate (don't forget to URL encode)
username=administrator%23

This request returns Field not specified. So perhaps there is a "field" parameter.

add a field parameter like so: username=administrator%26field=xyz%23

and we get "Invalid field"

send this request to burp intruder and then
for burp-pro you can use the built in Server-Side Variable Names payload list.
for burp-community you can visit this [github repo](https://github.com/antichown/burp-payloads/blob/master/Server-side%20variable%20names.pay) as I did

look for 200 reponses. in this case we can see username and email as valid entries.

I made a short list of username, email and the previously found "reset_token".

As I hoped, 200 responses for all

View the reponse for the reset_token payload and copy the token.

In the browser use the /forgor-password?reset_token={token you just found}

You can now reset the administrator password.

Login with the new credentials as the administrator, access the admin panel and delete carlos to complete the lab.
