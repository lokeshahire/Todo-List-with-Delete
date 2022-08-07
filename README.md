# Todo-List-with-Delete


## You are given an app where you have the following components.

<li>List.jsx</li>
<li>AddItem.jsx</li>
<li>ListItem.jsx</li>
<li>Link to Codesandbox</li>


<hr/>

## Requirement:

You need to add the following functionality

<li>A user should be able to type into the input box and add a new item into the list</li>
<li>it will create a new item, which has title and staus as keys along with an unique id (use date.now and append title to it to create a unique id )</li>
<li>A user should be able to delete an item</li>
<li>Once a user adds 5 items, user should not be able to add any item after that, they have reached the limit</li>
<li>To add again, user will have to delete an item</li>

<li>it should accept a handleAdd property, on clicking add button, it will trigger handleAdd</li>
<li>it should also accept a disabled property (boolean), which decides if the add button should be disabled once the limit is reached
ListItem.jsx</li>
<li>it should accept id, status, title as props</li>
<li>if status is true, then the text should be DONE, otherwise NOT DONE</li>
<li>it should accept a handleDelete property, on clicking the delete button, it will trigger the handleDelete</li>
