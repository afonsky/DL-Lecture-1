---
theme: seriph
addons:
  - "@twitwi/slidev-addon-ultracharger"
addonsConfig:
  ultracharger:
    inlineSvg:
      markersWorkaround: false
    disable:
      - metaFooter
      - tocFooter
background: /logo/mountain.jpg
highlighter: shiki
routerMode: hash
lineNumbers: false

css: unocss
title: Deep Learning
subtitle: Introduction to Deep Learning
date: 07/09/2026
venue: HSE
author: Alexey Boldyrev, Maksim Karpov
---

# <span style="font-size:28.0pt" v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>
# <span style="font-size:32.0pt" v-html="$slidev.configs.subtitle?.replaceAll(' ', '<br/>')"></span>
# <span style="font-size:18.0pt" v-html="$slidev.configs.author?.replaceAll(' ', '<br/>')"></span>

<span style="font-size:18.0pt" v-html="$slidev.configs.date?.replaceAll(' ', '<br/>')"></span>

<div class="abs-tl mx-5 my-10">
  <img src="/logo/FCS_logo_full_L.svg" class="h-18">
</div>

<div class="abs-tr mx-5 my-5">
  <img src="/logo/DSBA_logo.png" class="h-28">
</div>

<style>
  :deep(footer) { padding-bottom: 3em !important; }
</style>

---
src: ./slides/0_logistics.md
---

---
src: ./slides/0_introduction.md
---

---
src: ./slides/1_single_layer_NN.md
---

---
src: ./slides/2_multilayer_NN.md
---

---
src: ./slides/3_fitting_NN.md
---

---
src: ./slides/4_backpropagation.md
---

---
src: ./slides/9_DL_tools.md
---

---
src: ./slides/0_end.md
---