# brackets

## Project Description

Create an html page where we can enter player names to generate a team, seed the team by giving them an order which can be changed and then generate tournament brackets based on the seeding.

Given below are the requirements to be implemented to support above functionality.

Requirement 1: At the top of the page, have a section of input fields that allow 2 player names to be entered. A button to generate a team will place the 2 team members in a bracket. Bracket should look like this once generated: https://prnt.sc/tlk4g9
As teams are generated they are given a seed/order number and placed in order such as this: https://prnt.sc/tlk5cj

Requirement 2: Allow teams to be dragged and placed in a different order so that it will change the seeding of that team and others teams respectively. For ex. moving a team from 4th position to 2nd position will update the seed/order number for teams 2, 3 and 4.

Requirement 3: Add a button in the bottom on the page to generate brackets matchup where teams are matched with each other based on their order. Assume that you will always have an even number of teams when generating matchups. The result should look like this: https://prnt.sc/tlk5vy as a fully generated tournament bracket.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
