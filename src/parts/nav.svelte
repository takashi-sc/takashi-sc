<script>
  import { useNavigate, useLocation } from "svelte-navigator"
  import { t, locale, locales } from "../lang/i18n";
  const navigate = useNavigate();
  const location = useLocation();
  function isActive(path){
    return ($location.pathname == path ? true : false)
  }

</script>

<div class="na">
  <!-- As a heading -->
  <nav class="headerNav shadow-sm navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="headerTitle navbar-brand" href="/">kypecocoon.com</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="headerLink nav-link" class:active="{isActive('/')}" on:click={() => navigate("/")} >{$t("home.title")}</span>
          </li>
          <li class="nav-item">
            <span class="headerLink nav-link me-5" class:active="{isActive('/works')}" on:click={() => navigate("/works")} >{$t("works.title")}</span>
          </li>
        </ul>
        <div class="lang">
          <select class="lang form-select bg-light" bind:value={$locale}>
            {#each locales as l}
              <option value={l}>{l}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </nav>
</div>

<style>
  .headerNav {
    background: rgb(249, 189, 189);
  }
  .headerTitle {
    color:rgb(73, 73, 73);
    letter-spacing: 4px;
  }
  .headerLink {
    color:rgb(73, 73, 73);
    letter-spacing: 2px;
    cursor: pointer;
  }
  .lang {
    text-transform: uppercase;
  }
</style>