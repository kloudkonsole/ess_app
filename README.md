# Essentials
Essentails teams and socials app

## Setup

### Setup Env
Is recommended to env at parent folder instead of with `-g` npm parameter

Example folder structure
```
cordova/ # all "global modules should install here"
  |
  - essentials # project folder
```

Install all golbal dependecies in parant folder
```bash
npm i cordova tailwindcss lean-wrap pico-common pojs pico-client pico-args
```

create a cordova project
```bash
npx cordova {{path}} {{project_name}}
vi {{project_name/config.xml}} # change the name
npx pclient-create {{project_name}}/src {{proj_name}} {{Display Name}}
```

## Setup Project

At project folder do the following

```bash
cd {{project_name}}
npx cordova platform add ios
cp src/cfg/{{proj_name}}.env.json src/cfg/{{proj_name}}.dev.json
npx tailwindcss init
```
