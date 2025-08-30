| Case                                | Hoisted? | Value before init    | Can call before line?        |
| ----------------------------------- | -------- | -------------------- | ---------------------------- |
| `var` variable                      | ✅ yes    | `undefined`          | Accessible (but `undefined`) |
| `let` / `const` variable            | ✅ yes    | TDZ (ReferenceError) | ❌ Not accessible             |
| Function Declaration                | ✅ yes    | Full function        | ✅ Works                      |
| Function Expression (`var`)         | ✅ yes    | `undefined`          | ❌ TypeError                  |
| Function Expression (`let`/`const`) | ✅ yes    | TDZ (ReferenceError) | ❌ Not accessible             |
