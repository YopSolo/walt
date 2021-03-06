# Changelog

## [0.2.0]

### Added

- sizeof
- typecasts `(1 : f32), (0.5 : i32)` etc.
- top-level typecasts for expressions
- type promotions in math expressions
- type safety and warnings in binary expressions
- Canvas example
- Increment/decrement and assign +=/-=
- basic support for the break keyword
- node mapper

### Changed

- Cleaned up type parser
- Debug type literal info

### Removed

- Unary ++/--

### Fixed

- Array indexing into user types and arrays of buit-ins
- Many incorrectly name type conversion opcodes
- Loop condition code
- Cleaned up tons of build warnings
- Tests, false positive tests.
- Coverage improvements
- Corrected float memory load encodings

## [0.1.0]

### Added

- Stand-Alone `.walt` example files
- Object literals generated into the binary
- Object literal `.walt` example

### Changed

- Improved Type parser, generator
- Array Type declaration are now required
- Split generator into it's own `src/generator/` namespace

### Removed

- `parser/generator.js` The generator should be it's own entity

### Fixed

- User defined object literal type parser

## [0.0.2] - 2017-10-15

### Added

* `CHANGELOG.md`
* `Memory` pre-defined type
* Object literal syntax parser. Memory only see memory example
* Single line comments

### Changed

* `Memory` type must be explicitly defined before memory can be used
* Arrays can be indexed on any i32 offset

### Removed

* `new` keyword support
* Implicit import of memory

### Misc

* A lot o f cleanup
* Coverage improvements
* Improved expression parser

## [0.0.1]

### Added

* Everything

