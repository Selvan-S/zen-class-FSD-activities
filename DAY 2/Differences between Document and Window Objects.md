# Table of Contents
1. [Introduction](#introduction)
    - [Document Object](#document-object)
    - [Window Object](#window-object)
2. [Differences between Document and Window Objects](#differences-between-document-and-window-objects)
## Introduction
### Document Object
The document object represents a web page that loaded in the browser. With the help of documents object, we can add or change the content dynamically in our web page.<br>

The document object can be accessed with a window.document or just document.<br>

Syntax:
``` JS
document.property_name;
```
### Window Object
The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.

Syntax:
``` JS
window.property_name;
```

## Differences between Document and Window Objects
| <center>Document Object</center> | <center>Window Object</center> |
| ----------- | ----------- |
| It represents any HTML document or web page that is loaded in the browser. | It represents a browser window or frame that displays the contents of the webpage. |
| It is loaded inside the window. | It is the very first object that is loaded in the browser. | 
| It is the object of window property. | It is the object of the browser. | 
| We can access the document from a window using the window. document | We can access the window from the window only. i.e. window.window | 
| The document is part of BOM (browser object model) and DOM (Document object model) | The window is part of BOM, not DOM. | 
| <center>***Syntax***:<br> document.property_name;</center>| <center>***Syntax***:<br> window.property_name; </center>| 
| <center>***Example***: <br> document.title :  will return the title of the document</center> | <center>***Example***:<br>window.Document: It returns a reference to the document object of that window. </center> | 