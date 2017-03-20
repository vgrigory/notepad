**Description**

*Notepad* project is a simple, single page app allowing users to enter quick notes.
In order to do that user needs to click on icon at the bottom right corner,
which opens a small dialog where user can enter note text. Note is being added after a second user
has clicked on add note button. Additionally it will also appear on main page after
2 seconds from initial click.

It is written in Angular 1.6.3 using ES6 + Babel, has different components (Notepad, NoteDialog, NotesList)
which are covered by unit tests using Jasmine and Karma.

**Component structure**

* *Notepad component*
It serves as main component and entry point for the app. Notepad component is responsible to
importing dependant components and holding basic logic for maintaining this dialog.

* *NotepadDialog component*
It holds logic of opening a small dialog (popover), entering notes by user
(makes sure they are safe by usage of Angular's $sce.trustAsHtml() method),
displaying them in a popover and firing event about note has been added by user,
so that other interested components of the system can handle that.

Additionally component scrolls down popover content automatically,
so that user can always see last note he/she has added.

* *NotesList component*
This component is responsible for handling event from NoteDialog component about note being added by user,
and adding that note also to the main page for user's convenience.

This compoenent also scrolls down page content automatically,
so that user can always see last note he/she has added.


**Tests**

NotepadDialog and NotesList components are covered with unit tests using Jasmine and Karma.


**Design**

* using Twitter Bootstrap as a CSS framework for general styling and resposivness
* using https://angular-ui.github.io/bootstrap as Bootstrap's javascript adaptation for Angular
to have basic Bootstrap js components as Angular directives/components: Popover, Dialog, ...
* using SASS to write styles for components


**Bundling**

Using Webpack to bundle project, available commands are:

* *npm install* - after cloning repo into your machine, run this at first to fetch all dependencies
* *npm start* - run this to start serving project locally (e.g. http://localhost:8080/).
Additionally applies eslint to project sources.
* *npm run bundle* - bundles (contact, minify/uglify) entire project into dist/ folder
* *npm test* - runs all mentioned tests