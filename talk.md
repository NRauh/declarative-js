Declarative JS
==============

An introduction about using Hapi & Vue, and declarative programming.
Shows how the two tools and general concept can help create better code.

* Introduction
* Only tangentally related becaue they're both declarative, and have good code reusability aspect
* What is declarative programming
  - Benefits
  - More common example
* Hapi
  - Introduction
    * Between a framework and bare server
    * Compare to express
  - History
  - Adoptors
  - Plugin architecture
  - How to create a few endpoints
  - How to create a plugin (that's a utility)
  - Show easy swagger and built in validation
* Vue
  - Introduction
  - History
  - Adopters
    * Relation to Laravel
  - Vue Instance
  - Creating an app
  - Creating a component
  - Modifying component
  - Be sure to show off
    * Computed reactivity
    * Two way data flow that looks one way
    * Progressive framework (maybe show jquery/backbone -> vue)
    * Can react to changes imposed outside of app
  - Vuex
    * Inform don't use
    * Mention that it should be used with Vue instead of Redux (even if you prefer Redux)
* Dojo
  - Bear in mind
    * Don't want to teach more than needed
    * Needs to be super portable and one or two command setup
    * No more libraries than really needed (no UI library, but maybe Bootstrap/CSS lib)
  - Monorepo of:
    * Hapi util
    * Hapi server (in memory database not sqlite)
    * JS library to consume API (axios or Vue http)
    * Vue app
  - If easy to teach, use Lerna
    * If not, still use Lerna but mention how to use with yarn
  - Possible goals for attendees
    * Add new API route
    * Consume that API
    * Modify components
    * Add a new form
    * Build a Hapi plugin
    * Create new component
  - Have tests and good readme
    * Possibly have tests for possible goals to act as specs (or write specs that really nudge)
