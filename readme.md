
<!-- Q-1 -->
getElementById selects one element using its unique ID.
getElementsByClassName selects all elements that share the same class name.
querySelector selects the first element that matches any CSS-style selector (like .class, #id, or tag).
querySelectorAll selects all elements that match a CSS selector and returns them as a list.
<!-- Q 2 -->
Create the element using document.createElement("tagName")
Add content or attributes like textContent, classList, or id
Insert it into the DOM using methods like appendChild() or insertBefore()
<!-- Q 3 -->
Event Bubbling is a behavior in JavaScript where an event starts from the element that was clicked (or interacted with) and then moves upward through its parent elements in the DOM.
<!-- Q 4 -->
Event Delegation is a technique where I attach a single event listener to a parent element, and use it to handle events triggered by its child elements. Instead of adding separate listeners to each child, I “delegate” the event handling to the parent.
<!-- Q 5 -->
preventDefault() stops the browser’s default behavior for an event.
For example, clicking a link normally takes you to another page—preventDefault() stops that.
stopPropagation() stops the event from bubbling up to parent elements.
So if a button inside a div is clicked, and both have click listeners, stopPropagation() prevents the div’s listener from firing.
