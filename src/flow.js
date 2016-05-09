/* Flow-Based Programming

From WikiPedia:

In computer science, flow-based programming (FBP) is a programming paradigm
that defines applications as networks of "black box" processes, which exchange
data across predefined connections by message passing, where the connections
are specified externally to the processes. These black box processes can be
reconnected endlessly to form different applications without having to be
changed internally. FBP is thus naturally component-oriented.


The return value is of a form agreeable to the input arguments to the other.

*/

function createPerson() {
    var firstname = "";
    var lastname = "";
    var age = 0;

    // when a method is called, we return the createPerson object itself,
    // so that we are capable of creating a chain.
    return {
        setFirstName: function(fn) {
            firstname = fn;
            return this;
        },
        setLastName: function(ln) {
            lastname = ln;
            return this;
        },
        setAge: function(a) {
            age = a;
            return this;
        },
        toString: function() {
            return [firstname, lastname, age].join(' ');
        }
    };
}

createPerson()
    .setFirstName('gabriel')
    .setLastName('lundgren')
    .setAge(22)
    .toString();
