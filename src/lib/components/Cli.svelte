<script>
  export let title;
  export let mainText;

  let selectedItem = '';

function handleMouseOver(item) {
    selectedItem = item;
}

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
      font-size: 12px;
      padding: 8px;
      display: flex;
      align-items: center;
      gap: 33%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &__mainContent {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      backdrop-filter: blur(8px) brightness(110%);
      background-color: rgba(4, 38, 63, 0.5);
      padding: 16px 8px;
    }
  }

  .arrow {
    visibility: hidden;
    color: white;
  }

  .link:hover a {
    color: #fff;
  }
  .link:hover .arrow {
    visibility: visible;
  }
</style>

<div class="terminal h-fit mt-10">
  <div class="terminal__titleBar">
    <div class="flex" style="gap: 4px">
      <div class="rounded-full bg-red-400 w-2 h-2" />
      <div class="rounded-full bg-yellow-400 w-2 h-2" />
      <div class="rounded-full bg-green-400 w-2 h-2" />
    </div>
    <p>k3m@dev: ~</p>
  </div>
  <div class="terminal__mainContent">
    <p class="text-white mb-2"><span>>_</span> {title}</p>
    <p class="mb-6 text-wrap">{mainText}</p>
      <ul class="ml-2 mb-4">
        <li on:mouseover={() => {handleMouseOver('projects')}} on:focus={() => {handleMouseOver('projects')}} class:link={selectedItem==="projects"}>
          <span class="arrow">{`->`}</span>
          <a href="#projects">Past projects</a>
        </li>
        <li on:mouseover={() => {handleMouseOver('contact')}} on:focus={() => {handleMouseOver('contact')}} class:link={selectedItem==="contact"}>
          <span class="arrow">{`->`}</span>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    <p>Enter or click to select</p>
  </div>
</div>
