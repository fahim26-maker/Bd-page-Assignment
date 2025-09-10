
<!-- Q-1 -->
getElementById selects one element using its unique ID.
getElementsByClassName selects all elements that share the same class name.
querySelector selects the first element that matches any CSS-style selector (like .class, #id, or tag).
querySelectorAll selects all elements that match a CSS selector and returns them as a list.
<!-- Q 2 -->
- First, use document.createElement("tagName") to create the element. For example, document.createElement("div") creates a new <div>.
- Then, set its content or attributes—like element.textContent = "Hello" or element.className = "greeting".
- Finally, insert it into the DOM using a method like appendChild() or insertBefore(). For example, document.body.appendChild(element) adds it to the end of the <body>.
<!-- Q 3 -->
Event Bubbling is a behavior in JavaScript where an event starts from the element that was clicked (or interacted with) and then moves upward through its parent elements in the DOM.
<!-- Q 4 -->
Event Delegation is a technique where I attach a single event listener to a parent element, and use it to handle events triggered by its child elements. Instead of adding separate listeners to each child, I “delegate” the event handling to the parent.
It is useful because,
- Performance: Reduces the number of event listeners, which is especially helpful when dealing with many child elements.
- Dynamic Content: Works seamlessly with elements added to the DOM after the listener is set—no need to reattach listeners.
- Cleaner Code: Keeps your JavaScript more maintainable and less cluttered.
For example, if you have a list of items and want to handle clicks on each one, you can attach a single listener to the <ul> and use event.target to figure out which <li> was clicked.
Want to see a quick code snippet to make it click (pun intended)?

<!-- Q 5 -->
preventDefault() stops the browser’s default behavior for an event.
For example, clicking a link normally takes you to another page—preventDefault() stops that.
stopPropagation() stops the event from bubbling up to parent elements.
So if a button inside a div is clicked, and both have click listeners, stopPropagation() prevents the div’s listener from firing.
