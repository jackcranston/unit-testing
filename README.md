# Unit Testing JavaScript with Mocha and Chai

## Introduction

This project demonstrates some of the ways to use MochaJS and Chai for test driven development.

It is intended as a reference guide for creating tests and to gain a better understanding of how everything works together.

**Test-Driven Development (TDD)**
Test-Driven Development is a development style where tests are written before the actual code.

The idea behind this is so that all implemented features are testable which:

- reduces bugs
- improves code quality
- encourages simpler code to be written
- improves scalability as new features can be easily tested against the existing code

**Behaviour-Driven Development (BDD)**
Behaviour-Driven Development can be seen as an variation of TDD.

BDD tests are written based on how the end user will interact with the application.

**Unit Tests**
Unit tests are functions or methods written to test small independent _units_ of code to see if they return the expected result.

The principle is that the more tests you create, the more robust your application will be.

**MochaJS**
Mocha JS is A JavaScript test framework where automated tests can be created which will run serially, it provides features that help unit tests become more descriptive and useful.

**Chai**
Chai is an assertion library which can be paired with various JavaScript test frameworks.

## Organising Tests

### describe()

```javascript
describe("#Name()", function(callback))
```

Describe is used to group tests, it takes 2 arguments (test group name, callback function)

### context()

```javascript
context("name", function(callback))
```

Context is used to give each test within a group (describe) context, it takes 2 arguments (test name, callback function) and is nested inside the describe function.

This is not always needed, it is useful when doing multiple tests on the same function to provide more detail as to what is being tested.

### it()

```javascript
it("what the test should do", function(callback))
```

It is used to say what the test should do, it takes 2 arguments (what the test should do, callback function) and is nested inside with the describe function or the context function.

### Example:

Chain the above together to create the layout of your tests. Like this:

```javascript
describe("#function()", function() {
  context("without arguments", function() {
    it("should return 0", function() {
      // Test will run here
    });
  });
});
```

_The syntax for unit tests is designed to be very similar to how we might think which makes writing them a little easier._

**Useful Extensions**
These can be used in addition to the above (e.g describe.skip())

- skip _skips this part of the test_
- only _only do this part of the test_

## Testing Methods

When testing code we use assertions. These are conditions that are required to be true in order for a function or method to be run.

They are used in unit testing to prove that nothing is violating expected return values.

Chai gives us 3 assertion styles:

- `assert` (TDD)
- `expect` (BDD)
- `should` (BDD)

_TIP: all of the methods are assertion styles despite having different names_

### Assert

`assert` is a standard TDD assertion style.

```javascript
describe("#sum", function() {
  it("should return 2", function() {
    assert.isNumber(2);
  });
});
```

In this example we are asserting that the number is 2.

_NOTE: Chai and Node.js' pre-packaged assert are similar in syntax_

### Expect

`expect` is a BDD assertion style. It begins with function which makes chaining multiple assertions really simple.

```javascript
describe("#sum", function() {
  it("should return 2", function() {
    expect(1 + 1).to.equal(2);
  });
});
```

In this example we _expect_ 1 + 1 to equal 2.

### Should

`should` is a BDD assertion style.

```javascript
context("the array", function() {
  it("should have a length of 3", function() {
    [1, 3, 0].should.have.lengthOf(3);
  });
});
```

This example is testing an array that _should_ have a length of 3.

- You cannot set custom messages with this
