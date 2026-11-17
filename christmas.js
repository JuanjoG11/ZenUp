// christmas.js — Temática navideña para ZenUp
// Servir en UTF-8. Incluir con:
//   <script src="christmas.js?v=1" defer></script>
(function () {
  "use strict";

  // ── Configuración ────────────────────────────────────────────────────────────
  var ENABLED = true;   // false = desactiva todo sin tocar nada más
  var SEASONAL = false; // true = solo activo del 1-dic al 6-ene

  // ── Guard de temporada ───────────────────────────────────────────────────────
  if (!ENABLED) return;
  if (SEASONAL) {
    var now = new Date();
    var m = now.getMonth() + 1; // 1-12
    var d = now.getDate();
    var inSeason = m === 12 || (m === 1 && d <= 6);
    if (!inSeason) return;
  }

  // ── Guard de duplicados ──────────────────────────────────────────────────────
  if (document.querySelector(".xmas-greet-login, .xmas-greet-banner")) return;

  // ── Utilidades ───────────────────────────────────────────────────────────────
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function isDark() {
    return (
      document.documentElement.classList.contains("dark") ||
      document.body.classList.contains("dark") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  //  1.  NIEVE
  // ════════════════════════════════════════════════════════════════════════════
  function initSnow() {
    if (prefersReducedMotion) return;

    var canvas = document.createElement("canvas");
    canvas.className = "xmas-snow-canvas";
    canvas.style.cssText = [
      "position:fixed",
      "top:0",
      "left:0",
      "width:100%",
      "height:100%",
      "pointer-events:none",
      "z-index:99999",
      "display:block"
    ].join(";");
    document.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    var flakes = [];
    var COUNT = 80;
    var paused = false;
    var rafId = null;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function randomFlake() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: 1.5 + Math.random() * 2.5,          // radio 1.5–4 px
        speed: 0.4 + Math.random() * 0.7,       // píxeles/frame
        swing: Math.random() * Math.PI * 2,     // fase inicial del balanceo
        swingSpeed: 0.008 + Math.random() * 0.012,
        swingAmp: 0.6 + Math.random() * 1.0,   // amplitud px
        opacity: 0.15 + Math.random() * 0.2    // 0.15–0.35
      };
    }

    function init() {
      resize();
      flakes = [];
      for (var i = 0; i < COUNT; i++) {
        var f = randomFlake();
        f.y = Math.random() * canvas.height; // distribuir al arrancar
        flakes.push(f);
      }
    }

    function step() {
      if (paused) { rafId = requestAnimationFrame(step); return; }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var color = isDark() ? "255,255,255" : "80,80,80";

      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.swing += f.swingSpeed;
        f.x += Math.sin(f.swing) * f.swingAmp;
        f.y += f.speed;

        if (f.y > canvas.height + 10) {
          // reutilizar el copo desde arriba
          flakes[i] = randomFlake();
          flakes[i].y = -10;
          continue;
        }

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + color + "," + f.opacity + ")";
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    function handleVisibility() {
      paused = document.hidden;
    }

    init();
    step();

    window.addEventListener("resize", function () {
      resize();
      // reposicionar copos fuera del nuevo ancho
      flakes.forEach(function (f) {
        if (f.x > canvas.width) f.x = Math.random() * canvas.width;
      });
    });

    document.addEventListener("visibilitychange", handleVisibility);
  }

  // ════════════════════════════════════════════════════════════════════════════
  //  2.  GORRITO DE NAVIDAD
  // ════════════════════════════════════════════════════════════════════════════
  function drawHat(canvas) {
    var W = canvas.width;
    var H = canvas.height;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, W, H);

    var brimH    = H * 0.22;
    var bodyBaseY = H - brimH;

    // Cuerpo rojo
    ctx.beginPath();
    ctx.moveTo(0, bodyBaseY);
    ctx.lineTo(W * 0.5, 0);
    ctx.lineTo(W, bodyBaseY);
    ctx.closePath();
    ctx.fillStyle = "#D42B2B";
    ctx.fill();

    // Sombra interior
    var bodyGrad = ctx.createLinearGradient(0, 0, W, bodyBaseY);
    bodyGrad.addColorStop(0, "rgba(0,0,0,0.0)");
    bodyGrad.addColorStop(1, "rgba(0,0,0,0.18)");
    ctx.fillStyle = bodyGrad;
    ctx.fill();

    // Aro blanco
    ctx.beginPath();
    ctx.rect(0, bodyBaseY, W, brimH);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    var brimGrad = ctx.createLinearGradient(0, bodyBaseY, 0, H);
    brimGrad.addColorStop(0, "rgba(255,255,255,0.0)");
    brimGrad.addColorStop(1, "rgba(200,200,200,0.4)");
    ctx.fillStyle = brimGrad;
    ctx.fill();

    // Pompón
    var pomR = W * 0.18;
    ctx.beginPath();
    ctx.arc(W * 0.5, pomR * 0.9, pomR, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0,0,0,0.15)";
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function initHat() {
    var hatW = 58;
    var hatH = 52;

    var canvas = document.createElement("canvas");
    canvas.className = "xmas-hat-canvas";
    canvas.width  = hatW;
    canvas.height = hatH;
    canvas.style.cssText = [
      "position:fixed",
      "pointer-events:none",
      "z-index:100000",
      "transform:rotate(-45deg)",
      "transform-origin:center center",
      "display:block",
      "transition:left 0.3s ease,top 0.3s ease"
    ].join(";");
    document.body.appendChild(canvas);
    drawHat(canvas);

    // ── Anclar al login-card (usa getBoundingClientRect porque puede estar
    //    centrado en pantalla en cualquier posición)
    function anchorToLogin() {
      var loginCard = document.querySelector(".login-card");
      if (!loginCard) return false;
      var r = loginCard.getBoundingClientRect();
      canvas.style.left = (r.left - hatW * 0.5) + "px";
      canvas.style.top  = (r.top  - hatH * 0.5) + "px";
      return true;
    }

    // ── Anclar al header: busca el logo .header-brand, si no existe usa (0,0)
    function anchorToHeader() {
      var brand = document.querySelector(".header-brand");
      if (brand) {
        var r = brand.getBoundingClientRect();
        canvas.style.left = (r.left - hatW * 0.5) + "px";
        canvas.style.top  = (r.top  - hatH * 0.5) + "px";
      } else {
        // Fallback: esquina del header con offset visible
        canvas.style.left = Math.round(-hatW * 0.33) + "px";
        canvas.style.top  = Math.round(-hatH * 0.33) + "px";
      }
    }

    // Decide cuál ancla usar según si el loginOverlay está activo
    function isLoginVisible() {
      var ov = document.getElementById("loginOverlay");
      if (!ov) return false;
      var s = window.getComputedStyle(ov);
      // Visible si display no es none Y opacity > 0 Y no tiene clase hidden
      return s.display !== "none" &&
             s.visibility !== "hidden" &&
             parseFloat(s.opacity) > 0.01 &&
             !ov.classList.contains("hidden");
    }

    function positionHat() {
      if (isLoginVisible()) {
        anchorToLogin();
      } else {
        anchorToHeader();
      }
    }

    positionHat();

    // Reposicionar al hacer resize (el login-card puede cambiar de posición)
    window.addEventListener("resize", positionHat);

    // Observar cambios en el loginOverlay para reanclar cuando cierre
    var loginOverlay = document.getElementById("loginOverlay");
    if (loginOverlay) {
      var observer = new MutationObserver(function () {
        // Esperar al siguiente frame para que la transición CSS haya aplicado
        requestAnimationFrame(positionHat);
      });
      observer.observe(loginOverlay, {
        attributes: true,
        attributeFilter: ["style", "class"]
      });
    }
  }

  // ════════════════════════════════════════════════════════════════════════════
  //  3.  TEXTO FESTIVO
  // ════════════════════════════════════════════════════════════════════════════

  // Construye un nodo de saludo con degradado correcto para emojis
  // text: "🎄 ¡Feliz Navidad! 🎅"  → se parte en [emoji][texto][emoji]
  function makeGreetNode(htmlText, extraCss) {
    var wrap = document.createElement("p");
    wrap.className = "xmas-greet-text";
    wrap.style.cssText = [
      "margin:6px 0 0 0",
      "font-size:0.92rem",
      "font-weight:600",
      "letter-spacing:0.01em",
      "line-height:1.4",
      "text-align:center"
    ].join(";") + (extraCss ? ";" + extraCss : "");

    // El degradado se aplica solo al texto, los emojis van en <span> aparte
    wrap.innerHTML = htmlText;
    return wrap;
  }

  // Genera el HTML con emojis aislados del degradado
  // Patrón: emoji | texto | emoji
  function greetHTML(leftEmoji, middleText, rightEmoji) {
    var gradSpan =
      '<span style="' +
        'background:linear-gradient(90deg,#fbbf24,#ef4444,#22c55e);' +
        '-webkit-background-clip:text;' +
        'background-clip:text;' +
        '-webkit-text-fill-color:transparent;' +
        'color:transparent' +
      '">' + middleText + '</span>';

    var emojiStyle =
      'style="background:none;-webkit-text-fill-color:initial;color:initial"';

    return (
      '<span ' + emojiStyle + '>' + leftEmoji + '</span>' +
      gradSpan +
      '<span ' + emojiStyle + '>' + rightEmoji + '</span>'
    );
  }

  function injectLoginGreet() {
    var loginCard = document.querySelector(".login-card");
    if (!loginCard) return;
    if (document.querySelector(".xmas-greet-login")) return;

    // Insertar debajo del <h2> dentro del .login-header
    var loginHeader = loginCard.querySelector(".login-header");
    var h2 = loginHeader ? loginHeader.querySelector("h2") : null;

    var node = makeGreetNode(
      greetHTML("&#127876;&nbsp;", "&#161;Feliz Navidad!", "&nbsp;&#127877;"),
      "margin-top:4px"
    );
    node.className += " xmas-greet-login";

    if (h2 && h2.nextSibling) {
      h2.parentNode.insertBefore(node, h2.nextSibling);
    } else if (loginHeader) {
      loginHeader.appendChild(node);
    } else {
      loginCard.insertBefore(node, loginCard.firstChild.nextSibling);
    }
  }

  function injectDashboardBanner() {
    var dashView = document.getElementById("view-dashboard");
    if (!dashView) return;
    if (document.querySelector(".xmas-greet-banner")) return;

    var banner = document.createElement("div");
    banner.className = "xmas-greet-banner";
    banner.style.cssText = [
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "padding:7px 14px",
      "margin:0 0 12px 0",
      "border-radius:10px",
      "background:rgba(251,191,36,0.08)",
      "border:1px solid rgba(251,191,36,0.2)"
    ].join(";");

    var text = makeGreetNode(
      greetHTML(
        "&#127876;&nbsp;",
        "&#161;Feliz Navidad y Pr&#243;spero A&#241;o Nuevo!",
        "&nbsp;&#127877;"
      ),
      "margin:0;font-size:0.88rem"
    );
    text.className += " xmas-greet-banner-text";

    banner.appendChild(text);

    var pageHeader = dashView.querySelector(".page-header");
    if (pageHeader && pageHeader.nextSibling) {
      dashView.insertBefore(banner, pageHeader.nextSibling);
    } else {
      dashView.insertBefore(banner, dashView.firstChild);
    }
  }

  // ════════════════════════════════════════════════════════════════════════════
  //  4.  INICIALIZACIÓN
  // ════════════════════════════════════════════════════════════════════════════
  function init() {
    initSnow();
    initHat();
    injectLoginGreet();
    injectDashboardBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
