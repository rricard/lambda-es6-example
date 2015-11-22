/* @flow */

type HelloOptions = {
  name: string
};

export function hello(options: HelloOptions, context: any): void {
  context.succeed(`Hello ${options.name || "world"}!`);
}
