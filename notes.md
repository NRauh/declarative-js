Notes
=====

This is going to be a project demonstrating Hapi and Vue.
It has a strong emphasis on modular code, and effectivly uses a monorepo (using Lerna).

It's going to be a cat wall board, twitter like thing.
Cats will have profiles, and public messages.
There'll also be the functionality to view all messages in a timeline.

Cats don't really talk or use computers, so there's not going to be any logins.
Anyone can post anything for a cat and claim they said it.
Just like in real life.

Packages we will eventually have

* api: the consuming api
* configs: common configuration (jest config, eslint rules)
* front: SPA front end
* logger: a utility to provide consistent server logging
* server: the main server for the api

First I'm going to create the server.

From the root, run `lerna create @catter/server`

Using the format `@project/package` allows for scoped packages on NPM.
The main benefit of scoped packages is that it helps prevent name conflicts.
You might want to substitute `project` with your company, or name.
This isn't unique to a monorepo or lerna, but they complement each other well.

A package will be scaffolded out.
I removed `__tests__` because I prefer my tests to be next to my source files.
I also modified `package.json` to remove some fields I don't care about.

In the server package dir, install Hapi with `yarn add hapi`.

We're going to build out the functionality to get the profile for a cat.
To reduce complexity, this lists will just be in memory using native javascript objects.

The end result is we'll have one profile, and when we do `GET http://localhost:3000/api/profiles/0`, we'll want back a response that looks like this:

```json
{
  "name": String,
  "age": Int,
  "messages": [
    {
      "message": String,
      "postDate": String,
    }
  ]
}
```

We'll create a server in Hapi.
https://hapijs.com/tutorials

We'll do this in `lib/server.js`.

First let's create a fake data.

```js
// lib/cats.js

module.export = [
  {
    id: '1',
    name: 'mr. fluffs',
    age: 4,
    messages: [
      {
        message: 'meow',
        postDate: new Date(),
      },
    ],
  },
];
```

This is just a normal collection of cats, that currently has one cat.
This file will act as our datastore.

First I'm going to create the logic for getting the profile, then we'll actually say to use it.
This will be our handler for a routes.

```js
// lib/profiles.js
```

Afterwards, I'll create a routes file.
As it sounds like, this will define our routing.

```js
// lib/routes.js
```

Keep in mind that Hapi will give params back as strings.

Next add `server.route(routes)` to `server.js`.

Lastly add a start command to the `package.json` file.
I'm going to use nodemon for it.

---

Now let's add a bit of error handling to our handler.

If the profile wasn't found, we want to return a 404 error.

```js
// lib/profiles.js
// code for if profile is empty
```

Out of the box, Hapi returns JSON instead of text responses.
Meaning if there's an error, Hapi will return any errors in JSON.

It doesn't return the error itself, so you still need to do error handling.
But defaults for 404, unexpected errors, etc will return in JSON.
This can be nice if you're http client is expecting JSON by default (the HttpClient service in Angular for example).
