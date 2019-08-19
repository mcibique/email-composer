# Email Composer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Implementation notes

Several things were not specified in the design mockups, so I made them up. In the regular case, I would spend an hour with the design team to sort them out:

1. Text colors for the body, email form header, submit button, placeholders
1. Font-family used in mockups - I used system fonts only
1. Focus states for inputs - I used the blue color from the "Send" button
1. Hover state for buttons
1. Hover and focus states for links
1. Attachment thumbnail should have a border specified in case the image has a transparent background - I added the border
1. How fields "cc" and "bcc" should be displayed in the email detail

I would also discuss the design consistency with them too:

1. I counted more than 10 shades of grey
1. The paddings are also changing from screen to screen
1. First screen has a header, the second one doesn't. Is it intentional?

I haven't written any tests because I was running out of time and I've already spent more than 16 hours on this task.

I have tested the solution only in the latest Chrome and Firefox because I don't have any machine with Windows at home.
