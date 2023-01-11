// 從 redux source code 搬來的
// 用來串接 hoc, hof
export function compose(...funcs) {
    if (funcs.length === 0) return (arg) => arg;
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce(
        (a, b) =>
            (...args) =>
                a(b(...args)),
    );
}
