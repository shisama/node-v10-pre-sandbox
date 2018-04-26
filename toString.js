// Note the comment between the `function` keyword
// and the function name, as well as the space following
// the function name.
function /* a comment */ foo () {}

// Previously:
foo.toString();
// → 'function foo() {}'
//             ^ no comment
//                ^ no space

// Now:
foo.toString();
// → 'function /* comment */ foo () {}'