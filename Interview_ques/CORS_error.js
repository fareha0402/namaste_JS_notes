/* CORS- Cross origin resource sharing is a mechanism
uses additional http headers to tell browser whether web app can share resource with another web app(don't have same origin)

Browsers never allowed web app to share resource with other different origin web apps. But now with CORS Standard we can achieve tis

-- eg : www.google.com wants to share /access data from https:xyz.in, www.xyz.in:5050, http:localhos:8080
-- We have different applications under microservices architecture. we need to share resource between app
*/
// -- CORS preflight:

/* When we try to make call to non parent domain(domain other than the domain from which you re making the api call
, browsers block those calls.

Failed to load https://write.geeksforgeeks.org/: 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
 Origin 'https://www.google.com' is therefore not allowed access.

We need to pass an additiona header from source to target.
HTTP header takes following values : 
1. Access-control- allow -origin:[origin]
This require an additional header called ORIGIN sent from the requesting client containing its hostname. 
This origin header is matched against the allowed origin and the access to the resource is decided.

2. Access-Control-Allow-Origin: *
Wildcard character (*) means that any site can access the resource you have it in your site and obviously its unsafe.

Based on the request methods (GET/PUT/POST/DELETE) and the request headers,
 the requests are classified into two categories.

 ** Simple Requests **-- simple arequest is made to 3rd party with origin header.
 -- target compares the origin values with allowed origins.
 --If source is allowed one, resource access is granted else denied.

** Non Simple/Complex Requests** -
-- Before actual request, a pre-flight request is sent via to target site.
--This pre-flight request is sent via OPTIONS HTTP Request method.
-- Response  to pre-flight request  would contain the Allowed methods, allowed origin details about target site.

*/