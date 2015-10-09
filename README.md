# sails-hook-events

[![NPM Version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
![Runs on Node][node-badge]
![Built with GNU Make][make-badge]
![Uses ECMAScript 2015][es-badge]

> Use events to manage and observe Waterline models' lifecycle

## Description

This hook allows you to use event-driven programming when working with your Waterline models. It adds new events emitted from the global `sails` object that you can subscribe to and perform actions when such an event is emitted.

## Usage

### Events added

The events are named separately for each model you have defined. they have the following structure:

`model:event`

Where `model` is the name of your model in lowercase, i.e. `user`, and `event` is one of the following:

- `created`
- `updated`
- `destroyed`

To put it all together, here are some examples of events emitted:

- `user:created`
- `order:updated`

### Example usage

```js
// First, set up an event handler to listen for newly created users

// Assuming you have sails exposed as global property
sails.on('user:created', model => {
  // model is the object which has been created in the database
  //  with all its properties etc.

  // Perhaps send this user an email? We will use an imaginary
  // email service in our app:
  sails.services.email.send({ to: model.email, subject: 'Welcome' }, 'emails/welcome')
})

// And here is the code which will trigger the above event

sails.models.user.create({ email: 'user@example.com' })
.then(user => {
  // ...
})
```

## Installation

Just add this npm module into your Sails' *package.json*:

`$ npm install --save sails-hook-events`

## License

This software is licensed under the **BSD-3-Clause License**. See the [LICENSE](LICENSE) file for more information.


[npm-badge]: https://img.shields.io/npm/v/sails-hook-events.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sails-hook-events

[travis-badge]: https://img.shields.io/travis/Dreamscapes/sails-hook-events.svg?style=flat-square
[travis-url]: https://travis-ci.org/Dreamscapes/sails-hook-events

[coveralls-badge]: https://img.shields.io/coveralls/Dreamscapes/sails-hook-events.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/Dreamscapes/sails-hook-events

[node-badge]: https://img.shields.io/node/v/sails-hook-events.svg?style=flat-square
[make-badge]: https://img.shields.io/badge/built%20with-GNU%20Make-brightgreen.svg?style=flat-square
[es-badge]: https://img.shields.io/badge/ECMA-2015-f0db4f.svg?style=flat-square
