# RPS logic.

### Start

1. Display Startup screen.
   **Button ""(N)ew game"**
   Click button > Button dissapear
2. R-P-S buttons appear, ask for USER INPUT
   Wait for mouse click on button or R-P-S key.
   (maybe implement Timeout here)

_input received_

3. If key input > check if ctrl, alt, meta key down. If yes > display alert, go back for waiting user input.
   if no > pass the result 0-1-2
4. Hide unselected option buttons, hilight selected choice and make it unclickable.

### Game

5. Display: "computer is processing", wait.
   Invoke computer play, pass result.
6. Show computer choice.
   Compare user and computer play results.
7. Display single game winner or draw.
   Pass result: Draw 0, Userwin 1, Comp win 2
   If 0 no points, if 1 add point to user, if 2 add point to computer.

8. Check if U || C has 5 points already.
   If yes- announce tournament winner. OK, go to (1) Start screen,

9. If NO- go to "Wait user input" (2)

body
background: hsl(333, 61%, 24%);

.header
background: hsl(192, 100%, 17%);

.buttonsWrap
background: hsl(30, 100%, 27%);

.comp
background: hsl(176, 43%, 25%);
