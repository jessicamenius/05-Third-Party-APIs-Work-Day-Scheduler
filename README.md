# 05 Third-Party APIs: Work Day Scheduler

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
    *If/else statement  - if now < start of hour - red, elseif now = start of hour - red, else now > start of hour - green  *

WHEN I click into a timeblock
THEN I can enter an event
    *Create a textarea, use event.preventDefault():*
    *If/else statement - if now < start of hour, no comments can be added, else now >start of hour, comments can be added.

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
    *Use event.preventDefault():* Save button, add time/meeting info to  local storage.#


WHEN I refresh the page
THEN the saved events persist
    *Events added to local storage*
    *Events don't leave page
```
