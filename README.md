# stock-trader-system

create a stock trading system  where users can buy and sell stocks. The system will support two types of users. One is the customer who will buy and sell stocks and second is the administrator of the system who is responsible for creating the stocks and setting the initial price.


Customer Required Functions:

Create a user account with full name, username, and email.
Can buy and sell stocks at market price.
The user will have the option to cancel this order before it gets executed.

View their current portfolio of stocks and cash.
View their history of transactions.
Ability to deposit and withdraw cash.
The user when depositing cash will have the funds go into a cash account.
The user will only be able to withdraw money from their cash account.
When stocks are sold the funds will go to cash account.
 

Administrators Functions:

Create new stocks.
Include Company name, stock ticker, volume, and initial price.
Volume will be total amount of shares purchased.
Change market hours.
Users will only be able to execute trades during market hours.
Change market schedule
Market will only be open during weekdays and closed on holidays.
 

Design & Develop a Client/Server Application comprise of:

1.  Graphic User interface (web pages) :

Display available stocks that can be traded.
Show stock ticker, price, volume, and market capitalization (volume X price)
Show opening price for the stock
Show high and low during the day
Perform the user and administrator functions
2.  Relational Database Backend to store the data.

3.  Random Stock Price Generator:   Allow the stock prices to fluctuate during the day with a custom random price generator. The price will gradually go up or down throughout the day.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/stock-trader-system.git
cd stock-trader-system
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
