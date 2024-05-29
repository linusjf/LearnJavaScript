#!/usr/bin/env node

/* eslint-disable no-unused-vars, no-inner-declarations, no-undef */
let array = [10, 20, 30, 40, 50];
const obj = {
  a: 1,
  b: 2
};
let a = 10,
  b = 20,
  a1 = 25,
  b1 = 35,
  c,
  d,
  rest,
  pop,
  push;
const key = "z";
{
  let a, b, rest;
  [a, b] = [10, 20];
  console.log("[a, b] = [10, 20]");

  console.log(a);
  // Expected output: 10

  console.log(b);
  // Expected output: 20

  [a, b, ...rest] = [10, 20, 30, 40, 50];

  console.log(rest);
}
// Expected output: Array [30, 40, 50]
{
  const [a, b] = array;
  console.log("const [a, b] = array");
  console.log(a);
  console.log(b);
} {
  const [a, , b] = array;
  console.log("const [a, , b] = array");
  console.log(a);
  console.log(b);
} {
  const [a = aDefault, b] = array;
  console.log("const [a = aDefault, b] = array");
  console.log(a);
  console.log(b);
} {
  const [a, b, ...rest] = array;
  console.log("const [a, b, ...rest] = array");
  console.log(a);
  console.log(b);
  console.log(rest);
} {
  const [a, , b, ...rest] = array;
  console.log("const [a, , b, ...rest] = array");
  console.log(a);
  console.log(b);
  console.log(rest);
} {
  const [a, b, ...{
    pop,
    push
  }] = array;
  console.log("const [a, b, ...{ pop, push }] = array");
  console.log(a);
  console.log(b);
} {
  const [a, b, ...[c, d]] = array;
  console.log("const [a, b, ...[c, d]] = array");
  console.log(a);
  console.log(b);
} {
  const {
    a,
    b
  } = obj;
  console.log("const { a, b } = obj");
  console.log(a);
  console.log(b);
} {
  const {
    a: a1,
    b: b1
  } = obj;
  console.log("const { a: a1, b: b1 } = obj");
  console.log(a);
  console.log(b);
} {
  const {
    a: a1 = aDefault,
    b = bDefault
  } = obj;
  console.log("const { a: a1 = aDefault, b = bDefault } = obj");
  console.log(a);
  console.log(b);
} {
  const {
    a,
    b,
    ...rest
  } = obj;
  console.log("const { a, b, ...rest } = obj");
  console.log(a);
  console.log(b);
  console.log(rest);
} {
  const {
    a: a1,
    b: b1,
    ...rest
  } = obj;
  console.log("const { a: a1, b: b1, ...rest } = obj");
  console.log(a);
  console.log(b);
  console.log(rest);
} {
  const o = ({
    [key]: a
  } = obj);
  console.log("const o = ({ [key]: a } = obj)");
  console.log(o);
} {
  const x = [1, 2, 3, 4, 5];
  console.log("const x = [1, 2, 3, 4, 5]");
  const [y, z] = x;
  console.log("const [y, z] = x");
  console.log(y); // 1
  console.log(z); // 2
} {
  const obj = {
    a: 1,
    b: {
      c: 2
    }
  };
  console.log("const obj = { a: 1, b: { c: 2 } }");
  const {
    a,
    b: {
      c: d
    }
  } = obj;
  console.log(`const {
    a,
    b: { c: d },
  } = obj;`);
  // Two variables are bound: `a` and `d`
  console.log(a); // 1
  console.log(d); // 2
} {
  const obj = {
    a: 1,
    b: {
      c: 2
    }
  };
  const {
    a
  } = obj; // a is constant
  console.log("const { a } = obj");
  let {
    b: {
      c: d
    }
  } = obj; // d is re-assignable
  console.log(`let {
    b: { c: d },
  } = obj`);
  // Two variables are bound: `a` and `d`
  console.log(a); // 1
  console.log(d); // 2
} {
  const numbers = [];
  const obj = {
    a: 1,
    b: 2
  };
  ({
    a: numbers[0],
    b: numbers[1]
  } = obj);
  // The properties `a` and `b` are assigned to properties of `numbers`
  console.log(numbers);
} {
  const [a = 1] = []; // a is 1
  const {
    b = 2
  } = {
    b: undefined
  }; // b is 2
  const {
    c = 2
  } = {
    c: null
  }; // c is null
  console.log(a, b, c);
} {
  const {
    b = console.log("hey")
  } = {
    b: 2
  };
  // Does not log anything, because `b` is defined and there's no need
  // to evaluate the default value.
  console.log(b);
} {
  const {
    a,
    ...others
  } = {
    a: 1,
    b: 2,
    c: 3
  };
  console.log(others); // { b: 2, c: 3 }

  const [first, ...others2] = [1, 2, 3];
  console.log(others2); // [2, 3]
} {
  const foo = ["one", "two", "three"];
  const [red, yellow, green] = foo;
  console.log(red); // "one"
  console.log(yellow); // "two"
  console.log(green); // "three"
} {
  const foo = ["one", "two"];

  const [red, yellow, green, blue] = foo;
  console.log(red); // "one"
  console.log(yellow); // "two"
  console.log(green); // undefined
  console.log(blue); // undefined
} {
  let a = 1;
  let b = 3;

  [a, b] = [b, a];
  console.log(a); // 3
  console.log(b); // 1

  const arr = [1, 2, 3];
  [arr[2], arr[1]] = [arr[1], arr[2]];
  console.log(arr); // [1, 3, 2]
} {
  function f() {
    return [1, 2];
  }

  const [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2
} {
  function f() {
    return [1, 2, 3];
  }

  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3

  const [c] = f();
  console.log(c); // 1
} {
  [, , ] = f();
} {
  const [a, b, ...{
    length
  }] = [1, 2, 3, 4];
  console.log(a, b, length); // 1 2 2
} {
  const [a, b, ...[c, d]] = [1, 2, 3, 4];
  console.log(a, b, c, d); // 1 2 3 4
} {
  const [a, b, ...[c, d]] = [1, 2, 3, 4];
  console.log(a, b, c, d); // 1 2 3 4
} {
  const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
} {
  function parseProtocol(url) {
    const parsedURL =
      /^(?<protocol>\w+):\/\/(?<domain>[^/]+)\/(?<path>.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
  }
  console.log(
    parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
  );
  // "https"
  console.log(parseProtocol("ftp://aeneas.mit.edu/"));
} {
  const [a, b] = new Map([
    [1, 2],
    [3, 4]
  ]);
  console.log(a, b); // [1, 2] [3, 4]
} {
  const obj = {
    *[Symbol.iterator]() {
      for (const v of [0, 1, 2, 3]) {
        console.log(v);
        yield v;
      }
    }
  };
  const [a, b] = obj; // Only logs 0 and 1
  console.log(a, b);
} {
  const obj = {
    *[Symbol.iterator]() {
      for (const v of [0, 1, 2, 3]) {
        console.log(v);
        yield v;
      }
    }
  };
  const [a, b, ...rest] = obj; // Logs 0 1 2 3
  console.log(rest); // [2, 3] (an array)
} {
  const user = {
    id: 42,
    isVerified: true
  };

  const {
    id,
    isVerified
  } = user;

  console.log(id); // 42
  console.log(isVerified); // true
} {
  const o = {
    p: 42,
    q: true
  };
  const {
    p: foo,
    q: bar
  } = o;

  console.log(foo); // 42
  console.log(bar); // true
} {
  const {
    a: aa = 10,
    b: bb = 5
  } = {
    a: 3
  };

  console.log(aa); // 3
  console.log(bb); // 5
} {
  const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
      firstName: "Jane",
      lastName: "Doe"
    }
  };

  function userId({
    id
  }) {
    return id;
  }
  console.log(userId(user)); // 42
  function userDisplayName({
    displayName: dname
  }) {
    return dname;
  }
  console.log(userDisplayName(user)); // "jdoe"
  function whois({
    displayName,
    fullName: {
      firstName: name
    }
  }) {
    return `${displayName} is ${name}`;
  }
  console.log(whois(user)); // "jdoe is Jane"
} {
  function drawChart({
    size = "big",
    coords = {
      x: 0,
      y: 0
    },
    radius = 25
  } = {}) {
    console.log(size, coords, radius);
    // do some chart drawing
  }

  drawChart({
    coords: {
      x: 18,
      y: 30
    },
    radius: 30
  });
  drawChart();
} {
  const metadata = {
    title: "Scratchpad",
    translations: [{
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung"
    }],
    url: "/en-US/docs/Tools/Scratchpad"
  };

  const {
    title: englishTitle, // rename
    translations: [{
      title: localeTitle // rename
    }]
  } = metadata;

  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle); // "JavaScript-Umgebung"
} {
  const people = [{
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith"
      },
      age: 35
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones"
      },
      age: 25
    }
  ];

  for (const {
      name: n,
      family: {
        father: f
      }
    }
    of people) {
    console.log(`Name: ${n}, Father: ${f}`);
  }

  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"
} {
  const key = "z";
  const {
    [key]: foo
  } = {
    z: "bar"
  };
  console.log(foo); // "bar"
} {
  const foo = {
    "fizz-buzz": true
  };
  const {
    "fizz-buzz": fizzBuzz
  } = foo;
  console.log(fizzBuzz); // true
} {
  const {
    a,
    toFixed
  } = 1;
  console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
} {
  const props = [{
      id: 1,
      name: "Fizz"
    },
    {
      id: 2,
      name: "Buzz"
    },
    {
      id: 3,
      name: "FizzBuzz"
    }
  ];
  const [, , {
    name
  }] = props;
  console.log(name); // "FizzBuzz"
} {
  const obj = {
    self: "123",
    __proto__: {
      prot: "456"
    }
  };
  const {
    self,
    prot
  } = obj;

  console.log(self); // "123"
  console.log(prot); // "456"
}