import { getVersion } from "@dfs-demo/component-a";
import { getVersion as getVersionB } from "@dfs-demo/component-b";
import { getVersion as getVersionC } from "@dfs-demo/component-c";

console.log(`App can reference A directly (using ${getVersion()})`);
console.log(`App can reference B who references A (using ${getVersionB()})`);
console.log(`App can reference C who references A (using ${getVersionC()})`);
