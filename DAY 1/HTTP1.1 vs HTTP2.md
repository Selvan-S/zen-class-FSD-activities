# Table of Contents
1. [About](#about)
2. [HTTP/1.1 vs HTTP/2](#http11-vs-http2)
## About
**HTTP** stands for hypertext transfer protocol. It is used in client-server communication.</br>

By using HTTP, user sends the request to the server and the server sends the response to the user.</br>

HTTP/1.1 which was created in 1997 and the new one is HTTP/2 which was created in 2015.
## HTTP/1.1 vs HTTP/2
| HTTP/1.1 | HTTP/2 |
| ----------- | ----------- |
| It Transfer all the request & responses in plain text form | It Converts all the messages in binary format |
| It can do one request at a time | It can do multiple requests | 
| Header file is repeated in every request | It uses HPACK which is used to split data from header | 
| It compresses data by itself. | It uses HPACK for data compression. | 
| It uses requests resource Inlining for use getting multiple pages | It uses PUSH frame by server that collects all multiple pages  | 