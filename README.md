[![Build Status](https://travis-ci.org/mw222rs/hulot.svg?branch=master)](https://travis-ci.org/mw222rs/hulot)
[![Coverage Status](https://coveralls.io/repos/github/mw222rs/hulot/badge.svg?branch=master)](https://coveralls.io/github/mw222rs/hulot?branch=master)

<p align="center"><img src="/mw222rs/hulot/raw/master/hulot.png" /></p>

`hulot` is a React component and test generator.

## Usage:

* `$ hulot <cool-component>`
    => Generates a component called CoolComponent and a matching test file.
* `$ hulot -c <cool-component>`
    => Generates component only, no test. (Why aren't you testing?!)
* `$ hulot -t <cool-component>`
    => Generates test only, no component. (Yep, get testing!)

## Details

The goal of `hulot` is to make it as easy as possible to get started writing and testing React components.

It takes the name of the wanted component component using dash-case - so for example, if you want a `HelloWorld` component you enter `hello-world` - and `hulot` spits out a component with that name, `hello-world.js` and a test file with the name plus `-spec.js` added to the end (so `hello-world-spec.js` in our case).

`hulot` was created for a very specific project and is therefore **very opinionated and not at all configurable**. It assumes that you are using mocha, expect and expect-jsx to test your components and that your files are layed out like this:
```
+---src
|   +---components
|   |   hello-world.js
|   |   // ALL OF YOUR COMPONENTS
+---spec
|   +---components
|   |   hello-world-spec.js
|   |   //ALL OF YOUR TESTS
```

The possibility to be able to configure component- and test paths (and maybe even provide your own templates for how you want your components and tests to look) through a dot-file config or in the package.json might be added in the future. It's on my todo list.