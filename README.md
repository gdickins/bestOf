# Weirdest of Austin
  - members:
    1. Gabe
    2. Haley
    3. Rob
    4. Shannon

## Style Guide
  1. **Code-indentation (White-space)**
    - Use the tab, spaced at two-spaces
  2. **Naming**
    - All names start with a lower-case letter
    - All javascript variable names use camel-case
    - All HTML attribute names separated by a `-` (if needed)
    - _Views_:
      - Views begin with a lower-case letter
      - View file names end with `View` ('V' is upper-cased)
    - _Models_:
      - Models begin with a lower-case letter
      - Model files names end with `Model` ('M' is upper-cased)
    - _Collections_:
      - Collection names start with an upper-case letter
      - Collection file names end in `Collection` ('C' is upper-cased)
  3. **Spacing**
    - Only use tab-spacing (at 2-space size)
    - Math operators separated by a single-space around operators
    - Must use a single-space after `,`
  3. **Syntax**
    - Always end a simple-statement with a '`;`'
    - Use trailing commas in object-properties`{}` and arrays`[]`
        ex:
            ```js
            routes: {
              'login'   : 'loginFunction',
              'logout'  : 'logoutFunction',
            }
            ```
    - Put closing bracket on new line
    - Functions must have a single-space before and after ()s
  4. **Quotes**
    - HTML quotes must be in double-quotes, `""`
      - This includes all HTML elements/attributes that are created in javascript
    - Javascript quotes must be in single-quotes `''`
