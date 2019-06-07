<template class="lil-app__content">
  <div class="lil-taskpaket">

    <div class="lil-taskpaket__entry">
      <img class="lil-taskpaket__certificate" src="@/assets/images/oekotex_de.png"/>
      <div class="lil-taskpaket__discover">
        <span class="lil-taskpaket__discover-label">Entdecke unsere Hautfreundlichkeit</span>
        <a class="lil-button lil-taskpaket__button"> Jetzt Deine Größe wählen</a>
      </div>
    </div>

    <div class="lil-taskpaket__main-product">
      <div class="lil__main-product--photo">
        <img class="lil__main-product--img" src=""/>
      </div>
      <div class="lil__main-product--description">
        <span class="lil__description--title"></span>
        <div class="lil__description--buttons"></div>
        <div class="lil__description--content"></div>
        <button class="lil__button lil__main-product--button">IN DEN WARENKORB LEGEN</button>
      </div>
    </div>

    <div class="lil-taskpaket__functions">
      <h2 class="lil-taskpaket__functions--title lil-align lil-align--h-center">Wie es funktioniert</h2>
      <div class="lil-taskpaket__functions--items">
        <div class="lil__item">
          <img class="lil__item--img" src="@/assets/images/flexibility-icon.png"/>
          <span class="lil__item--title">DEIN TESTPAKET</span>
          <span class="lil__item--description">
            Wir schenbken Dir die Produkte,
            du übernimmst nur das Porto.
          </span>
        </div>
        <div class="lil__item">
          <img class="lil__item--img" src="@/assets/images/flexibility-icon.png"/>
          <span class="lil__item--title">DEINE FLEXIBILITÄT</span>
          <span class="lil__item--description">
            Erste Monatsbox nach 14 Tagen für 49,50 € erhalten.
            Oder noch vor der ersten Lieferung kündigen.
          </span>
          <a class="lil-app__link lil__item--link">
            Erfahre hier mehr über das
            LILLYDOO Windel-Abo.
          </a>
        </div>
        <div class="lil__item">
          <img class="lil__item--img" src="@/assets/images/trialbox-icon.png"/>
          <span class="lil__item--title">DEINE MONATSBOX</span>
          <span class="lil__item--description">
            Jederzeit Designs oder Lieferintervalle anpassen
            oder die Windelgröße ändern.
          </span>
          <a class="lil__item--link"></a>
        </div>
      </div>
    </div>
    <div class="lil-taskpaket__contents-products">
      <h2 class="lil__contents-products--title">Dein Testpaket enthält</h2>
      <div class="lil__contents-products--items">
        <div class="lil__product">
          <img class="lil__product--img" src=""/>
          <span class="lil__product--title">10 LILLYDOO WINDELN</span>
          <span class="lil__product--description">
            <ul>
              <li>0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz</li>
              <li>Extra weich und mit idealer Passform</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),
    methods: {
    }
  }
</script>
