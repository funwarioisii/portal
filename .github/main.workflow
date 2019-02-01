workflow "New workflow" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "docker://node:10"
  args = "yarn install"
}

action "Build" {
  uses = "docker://node:10"
  needs = ["Install"]
  args = "yarn build"
}

action "Deploy" {
  uses = "docker://node:10"
  needs = ["Build"]
  args = ["bash", "-c", "yarn firebase deploy --token $FIREBASE_TOKEN"]
  secrets = ["FIREBASE_TOKEN"]
}
