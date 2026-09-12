---
layout: center
---
# Introduction to Deep Learning

---

# How Do ML and DL Relate to Each Other?
<br>
<br>
<center>
  <figure>
    <img src="/What_is_ML.drawio.png" style="width: 400px !important;">
  </figure>
</center>

---
zoom: 1.0
---

# DL is not "Classical ML with More Layers"

#### The first difference is **who designs the features**

<style scoped>
.pl { display: flex; align-items: center; gap: 7px; margin: 2px 0; }
.bx { border: 2px solid; border-radius: 8px; padding: 5px 9px; font-size: 13px;
      text-align: center; line-height: 1.2; }
.bx small { font-size: 10.5px; color: #555; }
.ar { font-size: 20px; color: #999; }
.cml { border-color: #2b7bba; background: #eaf3fa; }
.hum { border-color: #2b7bba; background: #c9e0f4; font-weight: 600; }
.dlx { border-color: #e8743b; background: #fdeee6; }
.lrn { border-color: #e8743b; background: #f8d5c1; font-weight: 600; }
.tag { font-size: 14px; font-weight: 700; width: 108px; }
.note { font-size: 12px; color: #666; margin: 1px 0 10px 118px; }
</style>

<div class="pl">
  <div class="tag" style="color:#2b7bba">Classical ML</div>
  <div class="bx cml">Raw data</div><div class="ar">→</div>
  <div class="bx hum">Hand-crafted features<br><small>SIFT / HOG, MFCC, TF-IDF, <br>ratios, lags, domain rules</small></div><div class="ar">→</div>
  <div class="bx cml">Learning algorithm<br><small>SVM, Random Forest, <br>Boosting, Logistic Regression</small></div><div class="ar">→</div>
  <div class="bx cml">Output</div>
</div>
<div class="note">↑ months of work by a <b>domain expert</b> &nbsp;·&nbsp; the model itself is shallow and only <b>one</b> stage is trained</div>

<br>

<div class="pl">
  <div class="tag" style="color:#e8743b">Deep Learning</div>
  <div class="bx dlx">Raw data</div><div class="ar">→</div>
  <div class="bx lrn">Layer 1<br><small>edges,<br>n-grams</small></div><div class="ar">→</div>
  <div class="bx lrn">Layer 2<br><small>parts,<br>phrases</small></div><div class="ar">→</div>
  <div class="bx lrn">Layer 3<br><small>objects,<br>meaning</small></div><div class="ar">→</div>
  <div class="bx dlx">Output</div>
</div>
<div class="note">↑ a <b>hierarchy of representations learned from the data</b> &nbsp;·&nbsp; <b>every</b> stage is trained together, end-to-end</div>

<v-clicks>

* Classical ML learns a **decision rule** on features you give it. DL also learns the **features**
* Each layer transforms the previous one — simple, non-linear modules composed into a deep stack
* Consequence: DL replaces *feature engineering* with *architecture design* + *data collection*

</v-clicks>

<div style="font-size: 12px; margin-top: 6px">
See: LeCun, Bengio &amp; Hinton, <a href="https://www.nature.com/articles/nature14539"><em>Deep learning</em>, Nature 521 (2015)</a>,
Bengio et al., <a href="https://arxiv.org/abs/1206.5538">Representation Learning: A Review and New Perspectives</a><br>
<a href="https://atcold.github.io/NYU-DLSP21/">Yann LeCun's NYU Deep Learning course</a>
</div>

---
zoom: 1.0
---

# Classical ML vs DL: What Changes in Practice

<style scoped>
table { font-size: 15px; border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #ccc; padding: 5px 9px; vertical-align: top; text-align: left; }
th { background: #f0f0f0; font-weight: 700; }
td:nth-child(2) { background: #f4f9fd; }
td:nth-child(3) { background: #fef6f2; }
</style>

<br>

| | **Classical ML** | **Deep Learning** |
|---|---|---|
| **Features** | Engineered by a human | Learned from data |
| **What you tune** | Features + a few hyper-parameters | Architecture, optimizer, learning rate, data |
| **Data appetite** | Works from $10^2 - 10^4$ examples | Usually needs $10^4 - 10^9$ examples |
| **Hardware** | CPU is enough | GPU / TPU, often many of them |
| **Scaling with data** | Performance **plateaus** | Performance keeps **improving** |
| **Best suited to** | Tabular data, small clean datasets | Perceptual & sequential data: images, audio, text, video, graphs |
| **Interpretability** | Often high (tree paths, coefficients) | Low by default — needs separate tooling |
| **Reuse** | Retrain per task | **Transfer learning**: pre-train once, fine-tune everywhere |
| **Engineering style** | Write the pipeline | **"Software 2.0"**: curate data, let the optimizer write the weights |

<br>

<div style="font-size: 12.5px; margin-top: 8px">
See: Andrej Karpathy, <a href="https://karpathy.medium.com/software-2-0-a64152b37c35">Software 2.0</a> ·
Sebastian Raschka, <a href="https://www.youtube.com/watch?v=1nqCZqDYPp0">L1.0 Intro to Deep Learning</a>
and <a href="https://sebastianraschka.com/blog/2021/dl-course.html">the full DL course (Stat 453)</a>
</div>

---
zoom: 0.9
---

# Why Did Deep Learning Take Off?

#### Not one new idea — the same ideas met **data**, **compute** and better **algorithms**

<div class="grid grid-cols-[5fr_5fr] gap-6">
<div>

<br>
<br>

<svg viewBox="0 0 420 165" style="width: 420px">
  <line x1="42" y1="140" x2="405" y2="140" stroke="#666" stroke-width="1.5"/>
  <line x1="42" y1="140" x2="42" y2="18" stroke="#666" stroke-width="1.5"/>
  <text x="220" y="158" style="font-size:11px" fill="#444" text-anchor="middle">amount of labeled data →</text>
  <text x="14" y="80" style="font-size:11px" fill="#444" text-anchor="middle" transform="rotate(-90 14 80)">performance →</text>
  <path d="M46,133 C 96,104 136,90 186,88 C 256,86 326,85 400,85" fill="none" stroke="#2b7bba" stroke-width="2.5"/>
  <path d="M46,136 C 106,120 166,96 246,74 C 306,58 356,52 400,50" fill="none" stroke="#e8743b" stroke-width="2.5" stroke-dasharray="5 3"/>
  <path d="M46,138 C 126,131 186,106 266,66 C 326,36 366,30 400,26" fill="none" stroke="#e8743b" stroke-width="2.5"/>
  <text x="330" y="79" style="font-size:10.5px" fill="#2b7bba">classical ML</text>
  <text x="336" y="64" style="font-size:10.5px" fill="#e8743b">medium NN</text>
  <text x="330" y="20" style="font-size:10.5px" fill="#e8743b">large NN</text>
</svg>

<div style="font-size: 12px; color: #555; margin-top: -4px">
Classical methods saturate; larger networks keep converting extra data into extra accuracy.<br>
Redrawn after <a href="https://www.deeplearning.ai/courses/deep-learning-specialization/">Andrew Ng, <em>Deep Learning Specialization</em></a>.<br><br>
<br>

See also:<br>Empirical scaling laws: Hestness et al.,
<a href="https://arxiv.org/abs/1712.00409">Deep Learning Scaling is Predictable, Empirically</a>
</div>
</div>
<div>

<v-clicks>

* **Data** — the internet, ImageNet, smartphones: labeled datasets grew by orders of magnitude
* **Compute** — GPUs made training a large net a matter of days instead of decades
* **Algorithms** — ReLU, better initialization, batch normalization, Adam, dropout, residual connections, attention
* **Open tooling** — PyTorch / TensorFlow / JAX turned research code into a few lines
* **Consequence:** with classical ML "get more data" stops helping at some point. With DL it is a **strategy**

</v-clicks>
</div>
</div>

---
zoom: 0.99
---

# Deep Learning Breaks Some Classical Rules

<div class="grid grid-cols-[5fr_4fr] gap-6">
<div>

#### The classical picture (by [Abu-Mostafa](https://work.caltech.edu/telecourse.html)):

* A model has a **capacity**; more capacity → better fit, worse generalization
* So: keep the model small, regularize, stop at the bottom of the U-curve

<v-click at="1">

#### What actually happens in DL:

* Networks with **more parameters than training points** still generalize well
* The U-curve is only the *first half* of the story — a **second descent** follows
* Big models + heavy data + implicit regularization from SGD

</v-click>
</div>
<div>
<br>
<br>
<svg viewBox="0 0 420 175" style="width: 450px">
  <line x1="42" y1="150" x2="405" y2="150" stroke="#666" stroke-width="1.5"/>
  <line x1="42" y1="150" x2="42" y2="18" stroke="#666" stroke-width="1.5"/>
  <text x="225" y="168" style="font-size:11px" fill="#444" text-anchor="middle">model size / number of parameters →</text>
  <text x="14" y="85" style="font-size:11px" fill="#444" text-anchor="middle" transform="rotate(-90 14 85)">test error →</text>
  <line x1="185" y1="24" x2="185" y2="150" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="185" y="16" style="font-size:10px" fill="#666" text-anchor="middle">interpolation threshold</text>
  <path d="M48,32 C 78,100 96,115 118,116 C 148,117 168,60 185,42" fill="none" stroke="#2b7bba" stroke-width="2.5"/>
  <path d="M185,42 C 215,32 250,88 300,110 C 340,124 375,128 400,130" fill="none" stroke="#e8743b" stroke-width="2.5"/>
  <text x="80" y="140" style="font-size:10.5px" fill="#2b7bba">classical regime</text>
  <text x="255" y="52" style="font-size:10.5px" fill="#e8743b">modern regime</text>
  <text x="255" y="66" style="font-size:10.5px" fill="#e8743b">(over-parameterized)</text>
</svg>

<div style="font-size: 12px; color: #555">
The "double descent" risk curve.

<br>
<br>
<br>
<br>

<div style="font-size: 12px; margin-top: 6px">
See also: Yaser Abu-Mostafa, <a href="https://www.youtube.com/playlist?list=PLD63A284B7615313A"><em>Learning From Data</em> (Caltech CS 156)</a> —
start with <a href="https://www.youtube.com/watch?v=mbyG85GZ0PI">Lecture 1: The Learning Problem</a><br>
Zhang et al., <a href="https://arxiv.org/abs/1611.03530">Understanding Deep Learning Requires Rethinking Generalization</a><br>
Nakkiran et al., <a href="https://arxiv.org/abs/1912.02292">Deep Double Descent</a>
</div>
</div>
</div>
</div>

---
zoom: 0.9
---

# When Classical ML Is Still the Right Answer

#### "Deep" is a tool, not a default. Choose it when the data is **raw and perceptual**

<div class="grid grid-cols-[1fr_1fr] gap-8">
<div>

#### Prefer classical ML when:

<v-clicks>

* The data is **tabular** — gradient boosting (XGBoost / LightGBM / CatBoost) still usually wins
* You have **hundreds**, not millions, of examples
* You must **explain** every decision (medicine, credit scoring, law)
* You need CPU-only, millisecond inference
* You need a result **this week**

</v-clicks>
</div>
<div>

#### Prefer deep learning when:

<v-clicks>

* Inputs are **images, audio, text, video, graphs** — features are hard to name
* A **pre-trained model** for your domain already exists
* Data is plentiful, or keeps arriving
* The task is **generative** or sequential

</v-clicks>
</div>
</div>

<br>

<v-click>

#### In practice: always build a **simple baseline first**, then show that deep learning beats it

</v-click>

<br>
<div style="font-size: 12px; margin-top: 8px">
See also: Grinsztajn et al., <a href="https://arxiv.org/abs/2207.08815">Why do tree-based models still outperform deep learning on tabular data?</a> ·
Andrej Karpathy, <a href="http://karpathy.github.io/2019/04/25/recipe/">A Recipe for Training Neural Networks</a> ·
Josh Starmer, <a href="https://www.youtube.com/watch?v=CqOfi41LfDw">StatQuest: The Essential Main Ideas of Neural Networks</a>
</div>

---
zoom: 0.9
---

# Biological NNs and Artificial NNs

<div class="grid grid-cols-[5fr_2fr]">
<div>
  <figure>
    <img src="/Neuron3.svg" style="width: 500px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute;"><br>Image source:
      <a href="https://commons.wikimedia.org/wiki/File:Neuron3.svg">https://commons.wikimedia.org/wiki/File:Neuron3.svg</a>
    </figcaption>
  </figure>
</div>
<div>
  <figure>
    <img src="/ISLRv2_figure_10.1.png" style="width: 250px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute;"><br>Feed-forward NN. Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=412">ISLR Fig. 10.1</a>
    </figcaption>
  </figure>
</div>
</div>

<div class="grid grid-cols-[1fr_1fr]">
<div>
<br>
<br>
<v-clicks>

* <small>Both have *multiple* **inputs** from and **outputs** to other neurons</small>
* <small>Both use **activation** of the neurons</small>
* <small>Both are **designed to learn** an optimal behavior</small>

</v-clicks>
</div>
<div>
<v-clicks>
<small>In ANN:</small>

* <small>"**Synapses**" are the **weights**: learnt strengths of the connections</small>
* <small>"**Dendrites**" carry the weighted inputs to the "**soma**", which sums them; the **activation function** models the neuron's **firing rate**</small>

</v-clicks>
</div>
</div>

---
zoom: 0.9
---

# Biological NNs and Artificial NNs

<div class="grid grid-cols-[5fr_2fr]">
<div>
  <figure>
    <img src="/Neuron3.svg" style="width: 500px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute;"><br>Image source:
      <a href="https://commons.wikimedia.org/wiki/File:Neuron3.svg">https://commons.wikimedia.org/wiki/File:Neuron3.svg</a>
    </figcaption>
  </figure>
</div>
<div>
  <figure>
    <img src="/ISLRv2_figure_10.1.png" style="width: 250px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute;"><br>Feed-forward NN. Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=412">ISLR Fig. 10.1</a>
    </figcaption>
  </figure>
</div>
</div>

<div class="grid grid-cols-[3fr_2fr]">
<div>
<br>
<small>Further reading on biological NNs. <a href="https://christofkoch.com">Christof Koch:</a></small>

* <small><a href="https://christofkoch.com/biophysics-book/">Biophysics of Computation: Information Processing in Single Neurons
</a></small>
* <small><a href="https://www.cse.psu.edu/~rtc12/CSE597E/papers/Itti_etal98pami.pdf">A model of saliency-based visual attention for rapid scene analysis</a></small>
* <small><a href="https://www.youtube.com/watch?v=indbWawx3Hs">Consciousness & Reality Colloquium Series: Inaugural Lecture</a></small>
</div>
<div>

* <small>Neuroscience by Dale Purves et al. (6th ed., 2018)</small><br>
<small>Vyacheslav Dubynin (in russian):</small>
* <small>Мозг и его потребности: От питания до признания (2021)</small>
* <small><a href="https://www.youtube.com/@dubynin/playlists">Lectures on the YouTube</a></small>
</div>
</div>

---

# Biological NNs and Artificial NNs
<div>
</div>

Artificial neural networks (ANNs) are **inspired by** the biological neural networks (BNNs)<br> but most of them are only **loosely based on** the BNNs.<br>

<a href="https://en.wikipedia.org/wiki/Spiking_neural_network">Spiking neural networks</a> are ANNs that more closely mimic natural neural networks

<div class="grid grid-cols-[5fr_3fr]">
<div>
  <figure>
    <img src="/Unsupervised_learning_with_ferroelectric_synapses.png" style="width: 490px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute;"><br>Unsupervised learning with ferroelectric synapses. Image source:
      <a href="https://www.nature.com/articles/ncomms14736"><em>Nature Communications</em> 8, 14736 (2017)</a>
    </figcaption>
  </figure>
</div>
<div>

#### [Brain Score](http://www.brain-score.org)
<br>
  <figure>
    <img src="/gr3_lrg.jpg" style="width: 400px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute;"><br>Integrative Benchmarking to Advance Neurally Mechanistic Models of Human Intelligence. Image source:
      <a href="https://doi.org/10.1016/j.neuron.2020.07.040"><em>Neuron</em> 108.3 (2020)</a>
    </figcaption>
  </figure>
</div>
</div>

---
zoom: 0.85
---

# Why Deep Learning Model?
<v-click at="1">

#### Because neural networks are universal approximators of **continuous multivariate functions** on compact domains
</v-click>
<br>

<div class="grid grid-cols-[3fr_4fr] gap-10">
<div>
<v-click at="2">

#### Arbitrary/bounded width

<figure>
    <img src="/2407.12895v1_uat_1.svg" style="width: 275px !important;">
</figure>
<br>

#### [Cybenko, G. (1989, Sigmoid)](https://link.springer.com/content/pdf/10.1007/BF02551274.pdf)
</v-click>
<br>
<v-click at="4">

See also:<br>
#### [arXiv:1710.11278 (2017, ReLU, minimal width)](https://arxiv.org/abs/1710.11278)
#### [Zhou (2020, CNN, arbitrary depth)](https://www.sciencedirect.com/science/article/pii/S1063520318302045)
</v-click>
</div>
<div>
<v-click at="3">

#### Arbitrary/bounded depth

<figure>
    <img src="/2407.12895v1_uat_2.svg" style="width: 435px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute"><br>Image source:
      <a href="https://arxiv.org/abs/2407.12895v1">arXiv:2407.12895</a>
    </figcaption>
</figure>
</v-click>
<br>
<v-click at="5">
<br>

#### Kolmogorov–Arnold representation theorem (1957):
$f(\mathbf x) = f(x_1,\ldots ,x_n) = \sum\limits_{q=0}^{2n} \Phi_{q}\!\left(\sum\limits_{p=1}^{n} \phi_{q,p}(x_{p})\right)$  
</v-click>
<br>

<v-click at="5">

#### Kolmogorov-Arnold Networks [Liu (2024)](https://arxiv.org/abs/2404.19756)

#### $w \to$ arbitrary univariate function
</v-click>
</div>
</div>

---
zoom: 0.9
---

# Artificial Neural Networks: Examples

<v-clicks>

1. [RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network) for sequence data with short dependencies
1. [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) for sequence data with short and long dependencies
1. [CNN](https://en.wikipedia.org/wiki/Convolutional_neural_network) for images with 2D and 3D (+[RGB](https://en.wikipedia.org/wiki/RGB_color_model)) spatial dependencies
1. [U-Net](https://en.wikipedia.org/wiki/U-Net) is an improved CNN
1. [VAE](https://en.wikipedia.org/wiki/Variational_autoencoder) to compress representation of images, audio, ...
1. [GAN](https://en.wikipedia.org/wiki/Generative_adversarial_network) to generate new observations (e.g. faces, voices) from the training distribution
1. [Transformers](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)) builds "*attention*" to the "*important*" input data
   * [LLMs](https://en.wikipedia.org/wiki/Large_language_model) utilize the transformer architecture
1. [Deep RL](https://en.wikipedia.org/wiki/Deep_reinforcement_learning) trains an agent to take max-reward actions based on current state and past history (e.g. gaming, robotics)
1. [GNN](https://en.wikipedia.org/wiki/Graph_neural_network) for graph-based data (e.g. social network, street maps, citation network)
1. [RBM](https://en.wikipedia.org/wiki/Restricted_Boltzmann_machine) to learn the distribution of input for generative tasks
1. [SOM](https://en.wikipedia.org/wiki/Self-organizing_map) for dimension reduction with maintaining the topological structure

</v-clicks>

---

# Essentials of Artificial Neural Networks

### Building blocks:
<div class="grid grid-cols-[3fr_2fr_2fr] gap-3">
<div>

* Neuron
* Loss function
* Activation function
* Optimizer
<!-- * <span style="color:#FA9370">Optimizer</span> -->
</div>

<div>

* Linear layer
* Convolution layer
* Pooling layer
* Recurrent layer
* Attention layer
</div>

<div>
  <figure>
    <img src="/lego_A.jpg" style="width: 190px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br>Image source:
      <a href="http://sgaguilarmjargueso.blogspot.com/2014/08/de-lego.html">http://sgaguilarmjargueso.blogspot.com</a>
    </figcaption>
  </figure>   
</div>
</div>
<br>

### Concepts:
<div class="grid grid-cols-[2fr_2fr_3fr] gap-2">
<div>

* Weights & Biases
* Backpropagation
* Gradient descent

</div>
<div>

* Learning rate
* MiniBatch
* Regularization
</div>

<div>

* Long Short-Term Memory (LSTM)
* Encoder - Decoder
</div>

</div>