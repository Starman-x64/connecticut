/*
 * Connecticut - Program to Increase the View Count of the a Notice on Connect
 * 
 * How to:
 * 1. Navigate to the notices tab of any class.
 * 2. Open the JS Console (Chrome: Ctrl + Shift + J; Firefox: Ctrl + Shift + K).
 * 3. Find the notice you want to target calculate its notice index:
 *    3.1. Starting at the most recent notice (top left), count forward (left-right, 
 *         top-bottom) until you reach the target notice.
 *    3.2. Subtract 1 from the number.
 *             (e.g., for the third notice, the notice index will be 3 - 1 = 2)
 * 4. Paste the contents of this file/drag the file into the console input bar.
 * 5. Replace the "0" in the last line "letsaGo(0);" with the notice index.
 * 6. To stop (note it won't stop immediately), input "exit = true".
 * 7. To start it again, input "exit = false; letsaGo(n)" where n is the notice index.
 * 
 * Notes:
 *  - If you get any console errors or it doesn't start, refresh the page (Ctrl + R).
 *  - After a while, your connection to connect may slow down, but it will go back to 
 *    normal upon refreshing.
 *  - You can close the console if you wish
 *  - You can have this running in multiple tabs at the same time (though too many may 
 *    throttle your computer's performance)
 *  - You can still use your browser whilst it is running (at least on Firefox)
 */

var backButton; // holds the element which returns to the main notices page
var noticeLink; // holds the element which contains the link to the notice
var exit = false; // exit flag

// trigger mouse event from https://stackoverflow.com/a/47736861
function triggerMouseEvent(node, eventType) {
  var clickEvent = document.createEvent('MouseEvents');
  clickEvent.initEvent(eventType, true, true);
  node.dispatchEvent(clickEvent);
}
// function which simulates a full click event on a HTML element
function doClick(node) {
	triggerMouseEvent(node, "mousedown");
	triggerMouseEvent(node, "mouseup");
	triggerMouseEvent(node, "click");
}

// old delay code, may use later in future updates
//const delay = ms => new Promise(res => setTimeout(res, ms));

// main function which clicks on the buttons if in the corresponding view
function getViews(n) {
	noticeLink = document.getElementsByClassName("v-label v-widget eds-u-white-space--normal v-label-eds-u-white-space--normal eds-u-flexitext v-label-eds-u-flexitext eds-u-interactive v-label-eds-u-interactive eds-c-heading v-label-eds-c-heading eds-c-heading--md v-label-eds-c-heading--md eds-s-is-first v-label-eds-s-is-first eds-s-is-last v-label-eds-s-is-last v-label-undef-w")[n];
	backButton = document.getElementsByClassName("v-button v-widget eds-o-button v-button-eds-o-button eds-c-icon-button v-button-eds-c-icon-button eds-o-button--size-sm v-button-eds-o-button--size-sm eds-o-button--captionless v-button-eds-o-button--captionless eds-u-separator--right v-button-eds-u-separator--right")[1];
	if (typeof noticeLink !== "undefined") doClick(noticeLink);
	if (typeof backButton !== "undefined") doClick(backButton);
}

// looping function
function letsaGo(n) {
	if(!exit) setTimeout(() => { letsaGo(n) }, 100);
	getViews(n);
}

// replace the 0 with the notice index
letsaGo(0);
