# Finding and exploiting an unused API endpoint

[Portswigger Lab](https://portswigger.net/web-security/api-testing/lab-exploiting-unused-api-endpoint)

I am using Postman and a Chromium browser, however, I will write the steps for Burp and note the alternate approach where applicable.

## Task

To solve the lab, exploit a hidden API endpoint to buy a Lightweight l33t Leather Jacket. You can log in to your own account using the following credentials: wiener:peter.

## My Approach

The task suggest a hidden API; this can be a HTTP method or URI within an endpoint.

**Examining Application / API**
"Opening up Burp-Suite and viewing <i>Proxy -> HTTP-History</i> @ "/resources/js/api/productPrice.js" we can see a javascript file "productPrice.js", this file reveals the API path
fetch(`//${url.host}/api/products/${encodeURIComponent(productId)}/price`)

<p><i>Note: </i>This form of recon is also achievable via browser dev tools. Press F12 in your chosen browser and browse the javascript files associated with the application.</p>

This confirms that there is an API endpoint that will GET product prices; in this case, probably to populate the prices for the list of products.
Let's try simply adding the /api/products/1/price to the URL in the browser

We get

```json
{
  "price": "$1337.00",
  "message": "&#x1F525; Over 3 sold in the last 3 hours, only 7 remaining! &#x1F525;"
}
```

Find this request in Burp's HTTP History and send the previous request to Burp Intruder and select the GET method for the payload position
I am using Burp Suite Community so I added the HTTP methods PUT, POST, DELETE, PATCH in the payloads section and start the attack.

POST, DELETE, and PUT all return 405 - "method not allowed".
PATCH returns 401 - "unauthorized"

The PATCH method requires some form of authorization. Let's login and try again

after logging in send the request again in the browser, find that new request in burp and send it to the repeater.
Change the method to PATCH again and send the request.

We get 400 - Bad Request
This means that the request is not formatted in a way that the application is expecting.

```json
{ "type": "ClientError", "code": 400, "error": "Only 'application/json' Content-Type is supported" }
```

Sometimes the application will tell you what you are missing to complete the request, thankfully this lab is such case.

Add the header
Content-Type: application/json

We can also assume now that the required payload is something like

```json
{
  "price": 0
}
```

so we add this json to our request and send

we get

```json
{ "price": "$0.00" }
```

So it would appear that we have changed the price of the product. Go back to the browser and add the product to cart and checkout.
Checkout price is $0.0 so we have bypassed payment, changed the price and completed the lab.
