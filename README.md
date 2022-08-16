# Quandoo frontend interview task

Thanks for taking the time to interview with Quandoo! This task should not take more that 2 hours. Please do not worry if you don't completely finish in the allotted time! After you complete the task, we will hold a technical interview where you show us your solution, and you can walk us through any ideas you have that you didn't have time to implement.

## Getting started

Clone or fork the app (see [When you're finished](#when-youre-finished) for instructions on how to submit the project). This is a React project build with `create-react-app`. First, install the dependencies with `npm install`, then run the project with `npm start`.

## Your task

We have created a simple page for a restaurant owner to view reservations and sort them by different criteria. Unfortunately, the existing code was written by one of our Kindergarten Interns and is of very poor quality. We ask you to make the following changes:

1. Identify any places where you think the existing code could be improved and make the appropriate changes. These can be any type of improvements you notice: related to performance, maintainability, accessibility, or anything else. You may have to refactor some parts in order to make the code easier to read.

Although proper testing and internationalization are very important to us at Quandoo, they are out of the scope of this interview task, and you don't need to consider these in your solution.

2. Add a new feature to this app: Allow the user to filter the reservations by status. We have already added the status checkboxes, but these currently have no functionality. We don't expect you to modify any of the CSS or styling, unless it is necessary for your solution.

The mock reservation data is found in `reservations.json`. The structure of a reservation is as follows:
```
{
    id: string;
    guest: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    };
    startsAt: string;
    endsAt: string;
    guestCount: number;
    status: string; // one of the following: 'Upcoming', 'Cancelled', 'Checked-in', 'Checked-out'
    table: {
        id: string;
        name: string;
    };
}
```


## When you're finished

1. Fork it to a private Gitlab repository (go to `Settings` -> `General` -> `Visibility, project features, permissions` -> `Project visibility`).
2. Share the project with gitlab user `quandoo_recruitment_task` (go to `Settings` -> `Members` -> `Invite member`, find the user in Select members to invite and set `Choose a role permission` to `Developer`)
3. Send us an ssh clone link to the repository.

Alternatively, you can create a new repository somewhere where we can access it, and send over the link.
