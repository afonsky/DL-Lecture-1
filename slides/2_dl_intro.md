---
layout: center
---
# Deep Learning introduction


---

# Classical ML vs Deep Learning
### From a researcher/developer point of view
<br>

<div class="grid grid-cols-[2fr,2fr]">
<div>
  <figure>
    <img src="/car.jpg" style="width: 390px !important">
    <figcaption style="color:#b3b3b3ff; font-size: 11px;"><br>"Moskvitch 40x" Dashboard
    </figcaption>
  </figure>
</div>
<div>
  <figure>
    <img src="/airplane.jpg" style="width: 420px !important">
    <figcaption style="color:#b3b3b3ff; font-size: 11px;"><br>Image source:
    <a href="https://en.m.wikipedia.org/wiki/File:STSCPanel.jpg">https://en.m.wikipedia.org/wiki/File:STSCPanel.jpg</a>
    </figcaption>
  </figure>
</div>
</div>
<br>

---

# Artificial Neural Networks: Overview

* [ANN](https://en.wikipedia.org/wiki/Artificial_neural_network) is a flxible class of models, which can find highly non-linear relations in I/O
* ANN is an old technology, revived with recent boom in GPU/TPU, novel algorithms, revenue generation and big investors
* ANN is built from neurons, basic building blocks
* **ANN encompasses many infrastructures**
* ANN help focus efforts on engineering infrastructure, rather than engineering input features
* ANN are more effective with tasks on unstructured data: text, audio, images,<br> video, video-captioning, ...

---

# Artificial Neural Networks: Examples

<div style="font-size:19px; ">

1. [RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network) for sequence data with short dependencies
1. [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) for sequence data with short and long dependencies
1. [CNN](https://en.wikipedia.org/wiki/Convolutional_neural_network) for images with 2D and 3D (+[RGB](https://en.wikipedia.org/wiki/RGB_color_model)) spatial dependencies
1. [U-Net](https://en.wikipedia.org/wiki/U-Net) is an improved CNN
1. [VAE](https://en.wikipedia.org/wiki/Variational_autoencoder) to compress representation of images, audio, ...
1. [GAN](https://en.wikipedia.org/wiki/Generative_adversarial_network) to generate new observations (e.g. faces, voices) from the training distribution
1. [Transformers](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)) builds "*attention*" to the "*important*" input data (e.g. lesser value of common stop words in text)
1. [DRL](https://en.wikipedia.org/wiki/Deep_reinforcement_learning) trains an agent to take max-reward actions based on current state and past history (e.g. gaming, robotics)
1. [GNN](https://en.wikipedia.org/wiki/Graph_neural_network) for graph-based data (e.g. social network, street maps, citation network)
1. [RBM](https://en.wikipedia.org/wiki/Restricted_Boltzmann_machine) to learn the distribution of input for generative tasks
1. [SOM](https://en.wikipedia.org/wiki/Self-organizing_map) for dimension reduction with maintaining the topological structure
</div>

---

# Deep Learning tools

<div>
  <figure>
    <img src="/ml_infrastructure.png" style="width: 900px; position: relative">
    <figcaption style="color:#b3b3b3ff; font-size: 11px">Slide by Sergey Karayev:
      <a href="https://fullstackdeeplearning.com/course/2022/lecture-5-deployment/">https://fullstackdeeplearning.com/course/2022/lecture-5-deployment/</a>
    </figcaption>
  </figure>
</div>

---

# Deep Learning tools

<div>
  <figure>
    <img src="/popular_ml_tools.png" style="width: 700px; position: relative">
    <figcaption style="color:#b3b3b3ff; font-size: 11px">Graph source:
      <a href="https://paperswithcode.com/trends">https://paperswithcode.com/trends</a>
    </figcaption>
  </figure>
</div>

Recommended Python-based frameworks for common Deep Learning problem solving:
<div class="grid grid-cols-[3fr,3fr,3fr]">
<div>
<br>
<br>
<img src="/Pytorch_logo.png" style="width: 200px; position: relative">
</div>
<div>
<img src="/TensorFlow_logo.svg" style="width: 200px; position: relative">
</div>
<div>
<br>
<img src="/Google_JAX_logo.svg" style="width: 150px; position: relative">
</div>
</div>

---

# Deep Learning tools: Tensorflow Playground <a href="https://playground.tensorflow.org">[link]</a>

<iframe src="https://playground.tensorflow.org" width="1100" height="550" style="-webkit-transform:scale(0.8);-moz-transform-scale(0.8); position: relative; top: -65px; left: -120px"></iframe>

---

# Deep Learning tools: Netron <a href="https://netron.app">[link]</a>

<img src="/netron.png" style="width: 900px; position: relative">

---

# Deep Learning tools: Comet ML <a href="https://www.comet.com/demo/raytune/view/new/panels">[link]</a>

<iframe src="https://www.comet.com/demo/raytune/view/new/panels" width="1100" height="550" style="-webkit-transform:scale(0.8);-moz-transform-scale(0.8); position: relative; top: -65px; left: -120px"></iframe>