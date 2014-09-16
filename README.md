MultiAmazon
===========

----- What is it?  -----

MultiAmazon is a simple Chrome extension to make faster queries across different Amazon stores. Sometimes one might want to search the same item on more than one Amazon store (e.g.: UK, DE) to find the best price.
This means opening n tabs, writing n queries; with MultiAmazon you only need to make 1 query and all the stores you want will be opened.

The extension supports 5 european stores: UK, IT, DE, FR, ES. You can choose which stores are to be opened in the options page.


----- How to use it ----- 

Chrome Store: https://chrome.google.com/webstore/detail/multiamazon/ikcjffbnmkmhdpljenoklpdodeohoama

1) Install the extension
2) Click the icon on the top right corner of the screen
3) Write a query
4) Click "GO" or press Enter
5) That's it

On the options page you can modify which Amazon stores to open among UK, IT, DE, FR, ES


----- Code Overview -----

popup.html represents the window opened upon pressing the MultiAmazon button on the top right corner of the chrome UI;
this file only contains the form and a reference to popup.js.

popup.js contains a clickHandler; whenever a click is performed, the function openTabs(query) is executed.
This function will attempt to open the Amazon Stores tabs; to do so, it must first retrieve the user's preferences and then only open the desired stores.

options.html represents the options page; it contains the checkboxes, the Save button and a reference to options.js.

options.js loads the preferences when the options.html page is loaded (restore_optiopns is called when the DOMContentLoaded event is fired), and saves them as the Save button is pressed.

