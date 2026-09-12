---
layout: center
---
# Conclusions

---
zoom: 0.9
---

# Conclusions

<style scoped>
li { line-height: 1.3; margin: 0.28em 0; }
ul { margin: 0.2em 0; }
h4 { margin-bottom: 0.25em; }
</style>

<div class="grid grid-cols-[1fr_1fr] gap-7">
<div>

#### What deep learning *is*

<v-clicks depth="2">

* DL is a **part of ML**, not a rival to it — the same problems, a different way of building the model
* The dividing line is **representation learning**: classical ML learns a rule on *your* features, DL learns the **features and the rule together**, end-to-end
* A network is a stack of **simple, differentiable blocks**; depth turns simple parts into a hierarchy of concepts
* Neural networks are **universal approximators**, but the theorems only promise that a good network *exists* — training must still find it

</v-clicks>
</div>
<div>

#### What it means for you as an engineer

<v-clicks depth="2">

* DL took off because **data + GPUs + better algorithms** arrived together — not because of a single breakthrough
* **More data keeps paying off** with DL, while classical models plateau
* DL is **not** a default: on small tabular problems, boosted trees are still the strong baseline
* Always ship a **simple baseline first**, then prove the deep model beats it
* Your effort moves from *writing features* to **curating data and designing architectures**<br> (a.k.a. "Software 2.0")

</v-clicks>
</div>
</div>

---
zoom: 0.9
---

# Conclusions: How Neural Networks Work

<style scoped>
li { line-height: 1.3; margin: 0.28em 0; }
ul { margin: 0.2em 0; }
h4 { margin-bottom: 0.25em; }
</style>

<div class="grid grid-cols-[1fr_1fr] gap-7">
<div>

#### What a network computes

<v-clicks>

* A neuron takes a **weighted sum** of its inputs plus a **bias**, then applies a **non-linear activation** (ReLU, sigmoid, tanh, …)
* Without the non-linearity, stacked layers collapse into **one linear model**
* **Hidden layers** build new features from the inputs, even products such as $X_1 X_2$
* For classification, **softmax** turns the outputs into class probabilities

</v-clicks>
</div>
<div>

#### How it learns

<v-clicks>

* Training means finding the weights that minimize a **loss**, e.g. squared error
* **Gradient descent** takes small steps against the gradient; the **learning rate** sets the step size
* The loss is **non-convex**, so the starting point (**initialization**) matters
* **Backpropagation** computes every gradient with the **chain rule**; PyTorch, TensorFlow and JAX do it automatically

</v-clicks>
</div>
</div>
<br>
<v-click>

#### Next lectures: each building block in depth, from loss functions and optimizers to convolutional, recurrent and attention layers

</v-click>

---
zoom: 0.9
---

# Learn From the People Who Built the Field

<style scoped>
li { line-height: 1.28; margin: 0.3em 0; }
li small { line-height: 1.15; color: #555; }
ul { margin: 0.2em 0; }
h4 { margin-bottom: 0.3em; }
</style>

<div class="grid grid-cols-[1fr_1fr] gap-7">
<div>

#### Courses & lectures

* **Andrew Ng** — [Deep Learning Specialization](https://www.deeplearning.ai/courses/deep-learning-specialization/) · [Neural Networks and Deep Learning](https://www.coursera.org/learn/neural-networks-deep-learning)<br><small>the gentlest serious entry point</small>
* **Yaser Abu-Mostafa** — [Learning From Data, Caltech CS 156](https://work.caltech.edu/telecourse.html) · [video playlist](https://www.youtube.com/playlist?list=PLD63A284B7615313A)<br><small>*why* learning works at all: generalization, overfitting</small>
* **Yann LeCun** — [NYU Deep Learning (DS-GA 1008)](https://atcold.github.io/NYU-DLSP21/)<br><small>energy-based models, self-supervised learning</small>
* **Sebastian Raschka** — [Introduction to Deep Learning (Stat 453)](https://sebastianraschka.com/blog/2021/dl-course.html)<br><small>clean, PyTorch-first, closest to this course</small>
* **Andrej Karpathy** — [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) · [CS231n notes](https://cs231n.github.io/)<br><small>build backprop and a small GPT from scratch</small>

</div>
<div>

#### Papers, essays & explainers

* LeCun, Bengio & Hinton — [*Deep learning*, Nature 521 (2015)](https://www.nature.com/articles/nature14539)<br><small>the 10-page overview of the whole field</small>
* Bengio, Courville & Vincent — [Representation Learning: A Review](https://arxiv.org/abs/1206.5538)
* Karpathy — [Software 2.0](https://karpathy.medium.com/software-2-0-a64152b37c35) · [A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/)<br><small>read the recipe before your first project</small>
* Grinsztajn et al. — [Why tree-based models still outperform DL on tabular data](https://arxiv.org/abs/2207.08815)
* **Josh Starmer (StatQuest)** — [Neural Networks playlist](https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1) · [statquest.org](https://statquest.org/)<br><small>when an idea refuses to click, start here</small>
* **Sebastian Raschka** — [blog](https://sebastianraschka.com/blog/) · [Machine Learning Q and AI](https://sebastianraschka.com/books/ml-q-and-ai/)

</div>
</div>

<div style="font-size: 12.5px; margin-top: 6px">
Course textbooks: <a href="https://d2l.ai/">Dive into Deep Learning</a> (main) ·
<a href="https://www.deeplearningbook.org/">Deep Learning</a> by Goodfellow, Bengio &amp; Courville (additional)
</div>
