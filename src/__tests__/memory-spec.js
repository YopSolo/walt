import test from "ava";
import compile from "..";

const compileAndRun = (src, imports) =>
  WebAssembly.instantiate(compile(src), imports);
const outputIs = (t, value) => result =>
  t.is(result.instance.exports.test(), value);

test("memory can be defined", t => {
  return compileAndRun(
    `
  const memory: Memory = { 'initial': 2 };

  export function test(): i32 {
    let x: i32[] = 0;
    let y: i32 = 5;
    x[0] = 21;
    x[y] = 2;
    return x[0] * x[y];
  }`
  ).then(outputIs(t, 42));
});
