<template class="lil-app__content">
  <div class="lil-taskpaket">

    <section class="lil-taskpaket__entry">
      <img class="lil-taskpaket__certificate" src="@/assets/images/oekotex_de.png"/>
      <div class="lil-taskpaket__discover">
        <span class="lil-taskpaket__discover-label">Entdecke unsere Hautfreundlichkeit</span>
        <a class="lil-button lil-taskpaket__button"> Jetzt Deine Größe wählen</a>
      </div>
    </section>

    <section class="lil-taskpaket__main-product">
      <div class="lil-taskpaket__main-product--photo">
        <img class="lil-taskpaket__main-product--photo-img" src="@/assets/images/lightblue_lightblue.jpg"/>
        <img class="lil-taskpaket__main-product--photo-certificate" src="@/assets/images/oekotex_de.png"/>
      </div>
      <div class="lil-taskpaket__main-product--description">
        <div class="details">
          <h2 class="details__title">Unser gratis Testpaket</h2>
          <div class="details__button-section">
            <span class="details__button-section--title">WÄHLE DEINE GRÖSSE</span>
            <ul class="details__button-section--buttons">
              <li class="lil__main-product--button">
                <p class="order">1</p>
                <p class="type">(2-3 KG)</p>
              </li>
              <li class="lil__main-product--button">
                <p class="order">2</p>
                <p class="type">(3-4 KG)</p>
              </li>
              <li class="lil__main-product--button">
                <p class="order">3</p>
                <p class="type">(4-7 KG)</p>
              </li>
              <li class="lil__main-product--button">
                <p class="order">4</p>
                <p class="type">(7-10 KG)</p>
              </li>
              <li class="lil__main-product--button">
                <p class="order">5</p>
                <p class="type">(10-12 KG)</p>
              </li>
            </ul>
          </div>
          <div class="details__content">
            <span class="details__content--summary">
              Teste jetzt unsere Windeln und Feuchttücher. Wir zahlen dieProdukte, Du nur den Versand.
            </span>
            <ul class="details__content--list">
              <li class="details__content--list-item lil-app__link lil-cursor__default">Automatischer Übergang ins jederzeit kündbare Windel-Abo
                für 49,50 € pro Lieferung.
              </li>
              <li class="details__content--list-item">
                Preise inkl. MwSt., ggf. zzgl. Versandkosten.
              </li>
            </ul>
          </div>
          <button class="lil-button details--button">IN DEN WARENKORB LEGEN</button>
        </div>
      </div>
    </section>

    <section class="lil-taskpaket__functions">
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
    </section>
    <section class="lil-taskpaket__products">
      <h2 class="lil-taskpaket__products--title lil-align lil-align--h-center">Dein Testpaket enthält</h2>
      <div class="lil-taskpaket__products--items">
        <div class="lil__product">
          <div class="lil__product--img">
            <img src="@/assets/images/windeln.jpg"/>
          </div>
          <div class="lil__product--description">
            <span class="lil__product--description-title">10 LILLYDOO WINDELN</span>
            <div class="lil__product--description-content">
            <ul>
              <li>0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz</li>
              <li>Extra weich und mit idealer Passform</li>
            </ul>
          </div>
          </div>
        </div>
        <div class="lil__product">
          <div class="lil__product--img">
            <img src="@/assets/images/sensitive-wipes_one.jpg"/>
          </div>
          <div class="lil__product--description">
            <span class="lil__product--description-title">10 LILLYDOO WINDELN</span>
            <div class="lil__product--description-content">
              <ul>
                <li>0 % Parfüme & PEGs, 100 % biologisch abbaubar</li>
                <li>Extra dickes und kompostierbares Tuch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
