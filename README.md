# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

    *Use moment to grab current day of week, month day, year*

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
    *Create a block for each hour of the day with time, a textarea, and button*

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
For loop

WHEN I click into a timeblock
THEN I can enter an event
    *Create a textarea, use event.preventDefault():*

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
    *Use event.preventDefault():* Save button, add to local storage,#


WHEN I refresh the page
THEN the saved events persist
    *Events added to local storage*
```

The following animation demonstrates the application functionality:

## Review

You are required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
