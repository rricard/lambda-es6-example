type BlockFn = (done: (err?: Error) => void) => void;

declare function describe(description: string, block: BlockFn): void;
declare function it(description: string, block: BlockFn): void;
declare function before(description: string, block: BlockFn): void;
declare function beforeAll(description: string, block: BlockFn): void;
declare function after(description: string, block: BlockFn): void;
declare function afterAll(description: string, block: BlockFn): void;
