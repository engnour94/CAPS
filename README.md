# CAPS
# LAB: Event Driven Applications

CAPS Phase 1: Begin the build of an application for a company called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

Tactically, this will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

**Author:** Nour Abu El-Enein

**Links:**
- [Repo Link](https://github.com/engnour94/CAPS)
- [GitHub Actions](https://github.com/engnour94/CAPS/actions)


## Setup

### Install

- Clone the repository from GitHub
- Run the command `npm i dotenv faker jest` to install dependencies
- create .env file with STORE variable with the store name

### Test

- Run the command `npm test` to test and verify the events are being called.

### Run

- Run the command `nodemon` or `npm start` .



## Documentation

### UML Diagram


![UML Lab11](/lab11.jpg)

