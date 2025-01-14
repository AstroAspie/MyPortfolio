# Pet Shop Pro

---

#### Flag 0

-- <b>Hints</b> --

- Something looks out of place with checkout
- It's always nice to get free stuff

For this challenge I went straight to the source code for the application.

I saw that the checkout form had an input element with the purchase data present and editable.

By changing the price to 0 and clicking checkout I was presented with a flag.. and free stuff.

---

#### Flag 1

-- <b>Hints</b> --

- There must be a way to administer the app
- Tools may help you find the entrypoint
- Tools are also great for finding credentials

for this challenge I used simple logic and went to the /login page

however, in the wild you can use

```sh
dirb <target>
```

which returned a /login

```sh
hydra -L /path/to/username-list.txt -p pass <target> http-post-form "/login:username=^USER^&password=^PASS^:Invalid Username" -S -t 64
```

my scan returned the value "shelagh", so now I can use that to run a new hydra scan and see if I can find a password.

```sh
hydra -l shelagh -P SecLists/Passwords/xato-net-10-million-passwords.txt <target> http-post-form "/login:username=^USER^&password=^PASS^:Invalid password" -S -t 64
```

using this I found that the password is sheffield; and with that I have credentials to login.

Upon logging in I was presented with the flag.

---

#### Flag 2

-- <b>Hints</b> --

- Always test every input
- Bugs don't always appear in a place where the data is entered

Going back to the home page I now have the capability to edit images.

After quickly checking each field for simple xss

```html
<img src="astro" onerror="alert(1)" />
```

I went back to the homepage and then fuzzed the url to see if I was missing something. I then went to the hints and the second hint for this flag caught me out... So I went through each page and route and knew and presto! Flag was waiting for me on the /cart page.

But I've added payloads to each field, where did the flag come from. I'm not one to just walk away without knowing what triggered what when I'm hacking... The input field was the one that triggered the flag upon inspection.

---
