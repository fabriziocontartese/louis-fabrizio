Recipe Book app
An app allowing the user to create and manage their favorite recipes.
Besides the basic project requirements, the user should be able to upload the image from their filesystem when creating a new recipe.


Create a React application that has the following features:
It should be an app made for a single user.
Navbar - A component that displays the name and the logo of the app, shown on all the pages.
Footer - A component that displays a link to the GitHub repo of the project, shown on all the pages.
Sidebar - A sidebar component shown on all the pages. The component should display links to pages added to the app at a later stage.
Items List - A list of items showing the JSON data.
Conditional Rendering - Conditionally render content using boolean properties from the project’s JSON data.
Delete Items - A button on each list item that allows the user to delete the item from the list.
Item Details Page - A page showing the details of the selected item from the list of items.
About Page - A page showing the project description and information about the team members (students) working on the project, including links to their GitHub and LinkedIn profiles.
*Not Found Page -* A page shown whenever the user navigates to a URL route that doesn’t exist in the app.
Create Item Form - A form that allows the user to create a new item and add it to the items list.
Update Item Form - A form that allows the user to update an existing item on the list.
Keep your code clean and organized by using descriptive variable names, correct indentation, removing any unused code, and maintaining proper file structure and naming.

ℹ️ You should use the above list as a checklist during the project to ensure that your app meets all the requirements.

Topics by Day
Every day, you will work on different topics and their corresponding features. Instructions for each day are provided below. Keep in mind that this is just a suggested path to ensure that your app meets all the requirements. However, you can manage your time as you see fit, advance faster, and add extra features to your project if you wish to do so.


Day 1
Development Tasks:

Set up a GitHub repository for the project:
One team member should create a new GitHub repository for the project on their GitHub account and add other team members as collaborators (instructions).
All team members should clone the created GitHub repository locally.
Create a new React application locally in the folder of the cloned repository.
Remember to commit your changes often and push them to the GitHub repo after creating the new React app.
Create a Home Page in your React app that has the following features:
The *Navbar component* that displays the app’s name and logo.
The *Footer component* with the link to the GitHub repository of the project.
The *Sidebar component* with the links to the Home and About page.
Add basic styling to your app.

Research Tasks:

Read “React Docs: Quick Start” (est. time ~20 min).
Read “React Docs: Passing Props to a Component” (est. time ~20 min).

Day 2
Development Tasks:

Render your JSON data as a list.
Conditionally render content in the list items. Here is how you can do it:
Include a condition to conditionally render content on each item in the list. For example, if your list items have a property isCompleted, show ✔️ if it is true and ❌ if it is false.
If objects in your JSON dataset don't contain any boolean property, make a conditional check that results in true or false. For example, you can check if a value is greater or less than a specified number.
Include a delete button on each list item that allows the user to delete the item from the list.
Make the list a separate component by extracting the code for better code organization (for example, <List />).
Make the list item a separate component and use the new component to render the list items (for example, <ListItem /> or <ItemCard />).

Research Tasks:

Read “React Docs: Adding Interactivity” (est. reading time ~25 min). If interested, you can dive deeper into any of the topics on the page for a more thorough understanding.

Day 3
Development Tasks:

Install and set up react-router in your React app.
Create the following page components and the routes to render them in the app:
Dashboard Page - A page that the user sees first when they open the app. It should show the items list that you created previously.
*Item Details Page -* A page that displays all the details of an item selected from the items list.
*About Page -* A page showing the *project description* and information about the team members (students) working on the project, including links to your GitHub and LinkedIn profiles.
Not Found Page - A page that renders whenever a user navigates to a URL route that doesn’t exist in the app.
The Navbar, Footer, and Sidebar components should be displayed on all the pages.

Research Tasks:

Read “React Docs: Reacting to Input with State” (est. time ~25 min).

Day 4
Development Tasks:

Create a form component that allows the user to create and add a new item to the items list. The form component should be displayed on the Dashboard page.
Create a form component that allows the user to update an existing item from the items list.
If you haven’t done so yet, finish styling your application.

Research Tasks:

Read “React Docs: Sharing State Between Components” (est. time ~30 min).

Day 5
Development Tasks:

Finish implementing any remaining features in your app.
To make sure that everything is working properly, open the React app and verify that all the pages are accessible and that all the features are working properly. Additionally, check the browser’s Dev Console and make sure there are no lingering console logs or unresolved errors.
If you have not started already, prepare a brief presentation summarizing the work you did and the lessons learned from this project (see project brief for presentation guidelines).

Research Tasks:

Read the article “React Folder Structure in 5 Steps” (est. time ~20 min).

Day 6
Development Tasks:

Finish implementing any remaining features in your app.
If you have not started already, prepare a brief presentation summarizing the work you did and the lessons learned from this project (see project brief for presentation guidelines).

Research Tasks:

After finishing all the tasks, you can explore adding an additional feature mentioned in the "Additional Features" section below.

Additional Features (Optional)
If you are looking into implementing additional features and expanding your learning beyond your daily tasks, we recommend exploring the following topics. We've included some suggested reading materials to help you get started:

Tailwind CSS
Tailwind in 100 Seconds
Tailwind CSS website
Install Tailwind CSS with Vite

State Management and Context API:
React Docs: Passing Data Deeply with Context
Extracting State Logic into a Reducer
Scaling Up with Reducer and Context

Submission
For the mini project to be considered complete, you must finish all the tasks listed in the project brief and submit the project repo in the Student Portal before the deadline.

:::warning ☝️ The deadline for finishing the mini-project and submitting the project repo is Wednesday of the following week.