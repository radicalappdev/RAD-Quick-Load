<template>
  <div class="container">
    <nav>
      <ul>
        <hgroup>
          <h1>FMComparison Export</h1>
          <h2>Quick Load Demo</h2>
        </hgroup>
      </ul>
      <ul>
        <input type="file" @change="handleFileUpload" accept="text/json" />
      </ul>
    </nav>
    <article>
      <pre>
        {{ jsonData }}
      </pre>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Vue",
      jsonData: null,
    };
  },
  methods: {
    handleFileUpload(e) {
      console.log(e);
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target.result;
        const jsonData = JSON.parse(contents);
        this.jsonData = jsonData;
      };
      reader.readAsText(file);
    },
  },
};
</script>