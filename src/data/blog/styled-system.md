---
title: 'Design System Components with Styled System'
date: '2022-01-04'
summary: ''
canonical: 'https://misha.wtf/blog/styled-system'
tags: ['CSS-in-JS', 'Styled System', 'System-UI']
seo:
  [
    'CSS-in-JS',
    'Styled System',
    'System-UI',
    'styling',
    'design system',
    'component library',
  ]
author:
  name: 'Mykhaylo Ryechkin'
  url: 'https://twitter.com/mryechkin'
---

One of the key factors for the success of a [Design System](https://rangle.io/ds-hub/) is its adoption. If nobody is using it, then all the work of setting it up has really been for nothing.

It's important to have a well-designed and documented design system. It's also equally as important to provide a good developer experience ("DX") in a component library that implements that design system. Getting your components' API _right_ is the difference between happy and frustrated users. And in some cases, it's the deciding factor of whether your design system sees any adoption across different teams in a large company.

One of the things I've recently been investigating for our React-based component library at Manulife is how to give our users more control over the customization and theming of components, while still retaining some guard rails when it comes to adhering to the design system. This meant revisiting our component API, and because it would most likely end up being a breaking change for our users, we need to be cognizant of just how much new API we're introducing.

I had spent the last few months exploring our options, and wanted to share my findings with you. Our component library is currently using CSS-in-JS for styling (by means of [styled-components](http://www.styled-components.com/) and a custom theme config), so my research has been mainly focused around that. I wanted to see what all the current popular CSS-in-JS solutions and are, and how well they could complement our library. I also focused on the DX of each option, putting myself in the shoes of our users, and evaluating each option from perspectives of both a user and a maintainer of the library.

Andrei Pfeiffer has done a [fantastic analysis](https://github.com/andreipfeiffer/css-in-js) of the current state of CSS-in-JS solutions, and I highly recommend to check it out for an in-depth look at all the currently available options, as there are quite a few!

In this series of posts, however, I'm going to present what I believe to be the top contenders, and show what each has to offer.

To start off, with [styled-system](https://styled-system.com).
