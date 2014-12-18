# Heroic Fontest
It quickly creates static pages which can be opened on different devices\browsers for convenient testing fonts.

## Advantages
	Fast generation using Gulp, SASS and Jade
	Simple and crossbrowser HTML\CSS
	Just open page or take screenshot, not need to do other clicks\settings on page
	There is no need to deploy on hosting

## Installation
First, ensure that you have the latest Node.js and npm installed.

```
git clone git@github.com:kozach/heroic-fontest.git
cd heroic-fontest
npm install
```
## Usage

### Find 2 fonts
Choose two fonts that you want to test ( it can be as different fonts and font the same but the downloaded\generated in different places)

### Add fonts to fontest
	Font-face insert - put fonts files to /build/fonts and add @font-face to /sass/app.scss) 
	or
	Google Fonts link insert - get font on Google Fonts and insert link to /jade/index.jade after "block styles" (there commented line like example). 
### Configure app.scss 
	Open file /sass/app.scss, change font names and uncomment the necessary font-weigth and font-style selectors 

### Generate files
Run in your terminal:
```
cd heroic-fontest
gulp (or gulp watch)
```
### Open page
	All resulting files are in folder /build.

	* If you run "gulp watch" then you can open the page from any device on the LAN (URL should appear in the terminal after running the command). In this case, if you change files Jade or SASS is on all devices automatically refresh the page
	* You can upload files to your hosting
	* You can use "gulp proxy" that would make the page accessible on the Internet (but you have to go to the file /Gulpfile.js and change the line "fontest" to to something unique).

### Test
	Opens the page in diffrent browsers on different devices.
	Produces automatic screenshots (http://www.browserstack.com/).
	Share your URL with a type designer.

## Multilanguage
	
	Open file /text.json. Here is the text for all languages. Modify existing or add your own.
	Then specify which language to use in the file /jade/_layouts/_main.jade first line.