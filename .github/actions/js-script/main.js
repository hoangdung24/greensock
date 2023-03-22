const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // console.log("HELLO WORLD FROM GITHUB ACTION");
  core.notice(core.getInput("bucket"));
  core.notice("HELLO WORLD FROM GITHUB ACTION");
}

run();
