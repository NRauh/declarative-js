Notes
=====

This is going to be a project demonstrating Hapi and Vue.
It has a strong emphasis on modular code, and effectivly uses a monorepo (using Lerna).

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
