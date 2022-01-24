<script>
  import Nav from "../parts/nav.svelte"
  import { blur } from 'svelte/transition';
</script>

<div transition:blur|local class="wrapper">
  <Nav />
  <div class="mainContainer p-3">
    <div class="drops">
      <div class="drop"></div>
      <div class="drop"></div>
     
    </div>

  </div>
</div>


<style>
  .mainContainer {
    background: rgb(224, 224, 224);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .drops {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .drop {
    position: absolute;
    width: 350px;
    height: 350px;
    background: transparent;
    border-radius: 40% 60% 56% 44% / 65% 30% 70% 35%;
    box-shadow: inset 20px 20px 20px rgba(0,0,0,0.05), 
      15px 25px 10px rgba(0,0,0,0.1),
      15px 20px 20px rgba(0,0,0,0.05),
      inset -10px -10px 15px rgba(255,255,255,0.9);
  }
  .drop::before {
    content: '';
    position: absolute;
    top: 55px;
    left: 75px;
    background: #fff;
    width: 35px;
    height: 35px;
    border-radius: 70% 30% 69% 31% / 65% 30% 70% 35% ;
  }
  .drop::after {
    content: '';
    position: absolute;
    top: 45px;
    left: 125px;
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 70% 30% 69% 31% / 65% 30% 70% 35% ;
  }
  .drop:nth-child(2) {
    transform:scale(0.4) translate(-750px, 250px);
    border-radius: 46% 54% 54% 46% / 65% 46% 54% 35% ;
  }
  

</style>