<script>
  export let title;
  export let mainText;
</script>

<style lang="scss">
  .terminal {
    max-width: 480px;
    border: 1px solid #04263f;
    border-radius: 10px;
    font-family: 'Fira Code', monospace;
    font-weight: 500;
    font-size: 1em;
    color: rgba(255, 255, 255, 0.65);

    &__titleBar {
      background-color: #04263f;
      padding: 8px;
      display: flex;
      justify-content: center;
    }

    &__mainContent {
      backdrop-filter: blur(8px) brightness(110%);
      background-color: rgba(4, 38, 63, 0.5);
      padding: 0.5rem;

      a {
        text-decoration: none;
        color: inherit;
        display: inline-block;
        padding: 2px;
        border-radius: 3px;
        position: relative;

        &:hover {
          color: white;

          &::before {
            content: '->';
            position: absolute;
            left: -25px;
            color: #fff;
          }
        }
      }
    }
  }
</style>

<div class="terminal mt-10">
  <div class="terminal__titleBar">
    <!-- Add your 3 buttons here -->
    <p>k3m@dev: ~</p>
  </div>
  <div class="terminal__mainContent">
    <p class="text-white mb-2"><span>>_</span> {title}</p>
    <p class="mb-2 text-wrap">{mainText}</p>
    <ul class="ml-6">
      <li>
        <a href="#projects">Past projects</a>
      </li>
      <li>
        <a href="#contact">Contact me</a>
      </li>
    </ul>
    <p>Enter or click to select</p>
  </div>
</div>
