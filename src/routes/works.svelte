<script>
  import Nav from "../parts/nav.svelte"
  import { blur } from 'svelte/transition';
  import { t, locale, locales } from "../lang/i18n";

  let url = "https://kypecocoon.com/data/data.json?hoge=12ww3"

  async function parseDevContent(lang) {
    const res = await fetch(url);
    const text = await res.text();
    console.log("text;", text)
    let jsonData = JSON.parse(text);
    let devWorks = jsonData.workhistory[lang].development;

    return devWorks;
  }

  $: retrievedDevData = parseDevContent($locale);

  async function presentationContent(lang) {
    const res = await fetch(url);
    const text = await res.text();
    console.log("text;", text)
    let jsonData = JSON.parse(text);
    let presentationWorks = jsonData.workhistory[lang].presentation;

    return presentationWorks;
  }

  $: retrievedPresentationData = presentationContent($locale);
  
</script>

<div class="wrapper">
  <Nav />
  <div class="mainContainer p-3 mt-5">
    <div class="row">
      <div class="col-xl-6">
        <div class="card shadow-sm mt-3">
          <div transition:blur|local class="card-header">
            {$t("development.title")}
          </div>
          <div class="card-body">
            <p class="card-text">
            
              <!-- {#each parseDevContent as { year, company, project, details }, i}

              {/each} -->
              {#await retrievedDevData}
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              {:then data }
                <ul transition:blur|local class="list-group list-group-flush">
                  {#each data as { year, company, project, details }}
                    <li class="list-group-item">
                      <div class="workTitle h4">{year} : { company}</div>
                      <div class="projectTitle h5">{project}</div>
                      <ul class="list-group list-group-flush">
                        {#each details as {description}}
                        <li class="list-group-item">
                          {description}
                        </li>
                        {/each}
                      </ul>
                    </li>
                  {/each}
                </ul>
              {:catch error}
                <div class="text-danger">{error.message}</div>
              {/await}
                

            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card shadow-sm mt-3">
          <div class="card-header">
            {$t("presentation.title")}
          </div>
          <div class="card-body">
            <p class="card-text">
              {#await retrievedPresentationData}
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              {:then data }
                <ul transition:blur|local class="list-group list-group-flush">
                  {#each data as { year, event, title, link, place, role }}
                    <li class="list-group-item">
                      <div class="workTitle h4">{year} : { event}</div>
                      <div class="title h4">{title}</div>
                      <div > <a href="{link}" target="_blank">{link}</a></div>
                      <div class="h5">{place}</div>
                      <div class="h5">{role}</div>
                    </li>
                  {/each}
                </ul>
              {:catch error}
                <div class="text-danger">{error.message}</div>
              {/await}
            </p>
            
          </div>
        </div>
      </div>
    </div>
    


  </div>
</div>


<style>
  .wrapper {
    background: rgb(224, 224, 224);
    height: 100vh;
  }
</style>