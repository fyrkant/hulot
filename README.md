[![Build Status](https://travis-ci.org/mw222rs/hulot.svg?branch=master)](https://travis-ci.org/mw222rs/hulot)
[![Coverage Status](https://coveralls.io/repos/github/mw222rs/hulot/badge.svg?branch=master)](https://coveralls.io/github/mw222rs/hulot?branch=master)

<p align="center"><img src="hulot.png" /></p>

`hulot` is a React component and test generator.

## Usage:

* `$ hulot <COMPONENT-NAME>`
    => Generates a component called CoolComponent and a matching test file.
* `$ hulot -c <COMPONENT-NAME>`
    => Generates component only, no test. (Why aren't you testing?!)
* `$ hulot -t <COMPONENT-NAME>`
    => Generates test only, no component. (Yep, get testing!)

## Adding proptypes:

If you want to add prop validation via Reacts proptypes you can do so *"rails style"*:  
`$ hulot <COMPONENT-NAME> <PROPNAME>:<PROPTYPE>`  
And if you want the prop to be required you just add `:req` at the end:  
`$ hulot <COMPONENT-NAME> <PROPNAME>:<PROPTYPE>:req`  
The proptypes supported by hulot are: `array`, `bool`, `func`, `number`, `object`, `string`, `node` and `element`.

For more on proptypes, see the [official documentation][1].

## Example:
If we wanted to create a component (and the matching test file) called `Greeter` that takes a **required** `string` name-prop and an **optional** `boolean` isVIP-prop we would write it like this:  
`$ hulot greeter name:string:req isVIP:bool`


## Details

The goal of `hulot` is to make it as easy as possible to get started writing and testing React components.

It takes the name of the wanted component component using dash-case - so for example, if you want a `HelloWorld` component you enter `hello-world` - and `hulot` spits out a component with that name, `hello-world.js` and a test file with the name plus `-spec.js` added to the end (so `hello-world-spec.js` in our case).

## Configuration

The default for hulot assumes that your component and test files are layed out like this:
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
If you want to change this you can do so on a per project basis by adding a hulot property to you package.json file, like this:
```
inside package.json
{
  // boring stuff redacted
"hulot": {
  "components": "path/to/were/you/places/your/components/",
  "tests": "path/to/your/tests/"
  },
// more boring stuff
}
```

[1]: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
