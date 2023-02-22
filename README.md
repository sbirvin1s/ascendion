# :computer: Assessment

## :page_facing_up: Prompt:

> A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
>
> A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
>
> (e.g. a $120 purchase = 2 x $20 + 1 x $50 = 90 points).
>
> Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
>
> - [x] Use React JS (do not use TypeScript)
> - [x] Simulate an asynchronous API call to fetch data
> - [x] Make up a data set to best demonstrate your solution
> - [x] Check solution into GitHub

## How to Use:

 1. Fork and clone the repo
 1. Install Dependencies using either `npm install` or `yarn add`
 1. Start the client using `npm run build` or `yarn build`
 1. Clicking the `IMPORT RECORDS` button will:
    - Perform an call to the mocked API to retrieve the client's previous sales records
    - Disable the Import Button
    - Enable the Reset Button
    - Upon completion of the API call the total number of points for each month will be caluculated
    - Upon completion of the API call, each month is rendered in an accordian with the number of points displayed in the title
    - Upon completion of each month's points being calculated, the total number of points for the customer will be calculated and displayed at the top
 1. Clicking the `RESET RECORDS` button will:
    - Wipe the imported data
    - Disable the Reset Button
    - Enable the Import Button