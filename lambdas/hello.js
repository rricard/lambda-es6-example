/* @flow */

import type {LambdaContext} from "../lib/lambda-types.js";

type HelloOptions = {
  name: string
};

export function hello(options: HelloOptions, context: LambdaContext): void {
  context.succeed(`Hello ${options.name || "world"}!`);
}
