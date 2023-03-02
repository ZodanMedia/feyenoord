# Feyenoord for jQuery

When you are from Rotterdam, you don't want to use jQuery.ajax()

> Kijkt. Azzie nou jQuery gebruik en je mot een xhr request lope te doen, dan zitje mooi met die kl&#42;te ajax-calls in je maag.

Or, in English: when you are using jQuery and need xhr requests in your code AND you don't really favor that amsterdam football team, using \$.ajax() call just don't feel good.
So just simply include this small file into your project and start using \$.feyenoord() instead.


## What does it do?

It simply wraps jQuery ajax calls into a decent $.feyenoord() function. Simple as that ;)

## Usage example

```
$.feyenoord({
    method: "POST",
    url: "rest/endpoint/",
    data: { id: "2023", content: "winner" }
})
```


## Project page

See https://speelwei.zodan.nl/feyenoord/

