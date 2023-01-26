# Connecticut- Program to Increase the View Count of the a Notice on Connect
This guide is included in the .js file also.
## How to:
1. Navigate to the notices tab of any class.
2. Open the JS Console (Chrome: `Ctrl` + `Shift` + `J`; Firefox: `Ctrl` + `Shift` + `K`).
3. Find the notice you want to target calculate its notice index:
    1. Starting at the most recent notice (top left), count forward (left-right, top-bottom) until you reach the target notice.
    2. Subtract 1 from the number. (e.g., for the third notice, the notice index will be `3 - 1 = 2`)
4. Paste the contents of this file/drag the file into the console input bar.
5. Replace the `0` in the last line `letsaGo(0);` with the notice index.
6. To stop (note it won't stop immediately), input `exit = true`.
7. To start it again, input `exit = false; letsaGo(n)` where n is the notice index.

## Notes:
- If you get any console errors or it doesn't start, refresh the page (`Ctrl + R`).
- After a while, your connection to connect may slow down, but it will go back to normal upon refreshing.
- You can close the console if you wish(at least on Firefox)
- You can have this running in multiple tabs at the same time (though too many may throttle your computer's performance)
- You can still use your browser whilst it is running (at least on Firefox)
