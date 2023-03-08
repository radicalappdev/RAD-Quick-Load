# JS Dev Kit for FileMaker Developers

*Develop, Render, and Deploy JavaScript for a FileMaker App*

# This Kit
## What it does
This environment allows a FileMaker developer to start coding their widget and see the results right away in a FileMaker file. Once done developing, the can be inlined and pushed to the FileMaker file for use offline.
<br/>
It's a template file, so you can use to start other projects.
## Consists of
- A repository template on Github
- A basic html / JS set up.
- package.json file for install
- A FileMaker file to show the widget rendered
- Scripts to build and upload the inlined code to FileMaker
## TO GET STARTED Using this file
1. `npm install`
2. `npm start`
3. Open the jsDev.fmp12 file.
4. Allow it to work in Dev mode.

At this point you should see the web viewer on the layout load up with the HTML and JavaScript here. Edit the JavaScript or the HTML and you'll see the render in the web viewer update.

## Use this kit
Now you're ready to use this kit to create awesome JS widgets.

## Adding Vue to the project
- run `npm install vue` to add Vue JS to the project
- Create a new file in the src folder called `App.vue`
  - Note, parsel will add a dependency called `"@parcel/transformer-vue": "^2.8.1",`

App.vue contents
```
<template>
  <div>Hello {{ name }}!</div>
</template>

<script>
  export default {
    data() {
      return {
        name: "Vue",
      };
    },
  };
</script>
```


- Replace the contents of the index.js file with something like this:
index.js content
```
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
```

