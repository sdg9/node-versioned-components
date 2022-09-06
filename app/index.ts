import { getVersion } from "@dfs-demo/component-a";
import { getVersion as getVersionB } from "@dfs-demo/component-b";
import { getVersion as getVersionC } from "@dfs-demo/component-c";

console.log("I can pull in the package component-a directly", getVersion());
console.log(
  "I can pull in the package component-b with transient remote component-a",
  getVersionB()
);
console.log(
  "I can pull in the package component-c with transient local component-a",
  getVersionC()
);
