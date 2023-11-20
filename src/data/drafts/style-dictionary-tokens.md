# YouTube: Style Dictionary Tokens

## Intro

Hey everyone!

I've been looking into adding design tokens to the component library I'm working on, and have been using Style Dictionary to help with that process.

In this video, I'm going to share with you what's possible using this tool, and some of the neat things I've discovered while working with it.

### Design Tokens

Now, if you're not familiar with the concept of design tokens - they are essentially your design system decisions and specifications, translated to code.

Design Tokens follow a specific format, and have a draft spec currently being worked on by the W3C - or the World Wide Web Consortium - which is a web standards governing body. This means that they will eventually have an official format approved by the W3C that everyone can then adhere to.

Design Tokens are usually stored in JSON files, and are composed of a variety of different properties of your design system.

Usually, you will have your "core" tokens - things like `color`, `fontSize`, `spacing`, and so on... And then you can have semantic tokens, which are an additional layer of abstraction. For example, you can have a color that's "primary" or "secondary" - and those will map to one of the existing core tokens.

One of the biggest benefits of design tokens is they provide you with a design language that can be shared between design and development. This allows you to take specs from a tool like Figma and implement them in code using the exact same naming conventions.

This gives you great consistency across design and development, and is extremely useful for something like a design system component library.

But, how exactly do we do that - share this language?

Well, this is where Style Dictionary comes into play.

### Style Dictionary

Style Dictionary is a tool that transforms design tokens into assets that can be consumed by a variety of different platforms (web, iOS, Android, etc.).

You can specify different formats and apply transformations to your tokens before they get converted. For example, you can convert pixel values into `rem`, transform colors from RGB values to HEX, and do all sorts of other neat stuff!

Using this tool, we can take our design tokens - which adhere to the W3C format - and turn them into CSS or any other supported format, that can then be consumed in applications.

## Overview

So, in this video, I'm going to show you what's possible using a very simple setup and some sample tokens.

The beauty of this setup is that it scales very well, and can be applied to a variety of different token structures and design systems.

## Design Token Format

First, before we get started, let's take a closer look at what design tokens look like, and what all goes into a token.

A design token, as it's represented in code, is essentially a platform-agnostic collection of attributes that are key-value pairs which describe a specific design decision. Simply put, they give structure to the various design system specifications and rules.

So, for instance, a design token in the official W3C format looks something like this:

https://tr.designtokens.org/format/#design-token-0

So we have the token name, it's value, and the type of token it is.

There are different types of tokens, some of which we can see over here. And these map to some of the most common properties that you would want to abstract into a token - such as `color`, `dimension` (which represents values related to spacing and size, most often in either `rem` or `px` units), `fontFamily`, `fontWeight`, and so on.

Now, it's important to keep in mind that this spec is still in DRAFT state as of November 2023, but it's actively being worked on - and at this stage is not expected to change much.

When it comes to tools like Style Dictionary, some of them have been around longer than this official format - and as such, there may be minor differences in the format it expects.

With Style Dictionary, the main difference is in the attribute keys, where there is no dollar sign `$` before the `value` and other keys.

Now, luckily - there are complimentary tools that help bridge the gap and let us work with the official design token format.

One such tool is the `style-dictionary-utils` library, which we'll be utilizing today:

https://github.com/lukasoppermann/style-dictionary-utils

This library essentially lets us define our tokens in the official draft token spec, and it will take care of translating them into the format that Style Dictionary expects.

## Project Setup

Alright, so with that in mind - let's go ahead and jump into some code.

To get started, we'll need to create a new Node project.

Let's go ahead and create a folder called `style-dictionary-tokens`:

```
mkdir style-dictionary-tokens && cd style-dictionary-tokens
```

And run `npm init` to bootstrap an empty Node project in this folder:

```
npm init -y
```

Next, we'll need to install `style-dictionary` itself and the helper library `style-dictionary-utils`:

```
npm install style-dictionary style-dictionary-utils
```

And lastly, let's add `prettier` to keep our code nice and clean:

```
npm i -D prettier && echo {}> .prettierrc
```

## Creating Tokens

Next, let's go ahead and create a new folder called `tokens` which will store all of our design token files in one place.

We can categorize our token files in whatever way works best with our design system. One common convention that works pretty well universally is to have a separate file for each type of token in your design system, denoted with the `tokens.json` file name.

So, for example - let's create a file called `color.tokens.json`, and this file will contain all of our `color` design tokens.

I'm going to add some sample `color` tokens in here:

```json
{
  "color": {
    "violet": {
      "$type": "color",
      "$value": "#7c3aed"
    },
    "rose": {
      "$type": "color",
      "$value": "#e11d48"
    }
  }
}
```

Similarly, we can create another file called `spacing.tokens.json` and define our spacing tokens here:

```json
{
  "spacing": {
    "small": {
      "$type": "dimension",
      "$value": "12px"
    },
    "medium": {
      "$type": "dimension",
      "$value": "16px"
    },
    "large": {
      "$type": "dimension",
      "$value": "20px"
    }
  }
}
```

And another to store all of our typography values in `typography.tokens.json`:

```json
{
  "fontSize": {
    "small": {
      "$type": "dimension",
      "$value": "12px"
    },
    "medium": {
      "$type": "dimension",
      "$value": "16px"
    },
    "large": {
      "$type": "dimension",
      "$value": "24px"
    }
  },
  "fontWeight": {
    "light": {
      "$type": "fontWeight",
      "$value": 300
    },
    "normal": {
      "$type": "fontWeight",
      "$value": 400
    },
    "bold": {
      "$type": "fontWeight",
      "$value": 600
    }
  }
}
```

Alright, so that's a pretty good starting point, to keep things simple. Next, let's look at how we'll use these with Style Dictionary.

## Using Style Dictionary

Now, there are a few different ways of using Style Dictionary - you can use it as a CLI, or as an NPM module - which is what we're doing - but whatever method you choose, at the core of it is the Style Dictionary configuration object, which is where we specify all the options for transforming our tokens.

Now this configuration object can also be defined several ways. You can do it either as a separate JSON or JavaScript file, or directly in your code.

Since we'll be using Style Dictionary as an NPM module, we'll define our configuration right in our code.

So, to run our Style Dictionary, let's create a new file called `index.js` under the `src` folder. Once we have it configured, we can simply run this file as an NPM script.

The basic usage of Style Dictionary looks something like this:

https://amzn.github.io/style-dictionary/#/using_the_npm_module

So we import Style Dictionary, then extend it using the provided configuration - and you can see here how we can use either the external configuration file, or just passing the configuration object directly.

This configuration object is what drives Style Dictionary - it tells it where to find our source token files, how to transform and format them, which platforms to build for, where to generate the output files, and so on.

### Transforms

When it comes to transforming design tokens, Style Dictionary has the concept of "transforms", which are essentially functions that modify a token in some specific way, in order for it to be understood by a specific target platform.

Transforms are isolated per platform; each platform begins with the same design token and makes the modifications it needs without affecting other platforms. The order you use transforms matters because transforms are performed sequentially.

There are several ways of specifying which transforms to apply - you can either specify each individual transform, or can use an entire transform group - which includes a curated collection of specific transforms.

Style Dictionary includes a number of pre-defined transforms and transform groups out of the box. These cover a wide range of platforms and formats for many different use cases, and you can combine them in whichever way is needed for your usage.

One important thing to keep in mind is that you can only specify one OR the other, not both at the same time. So if there is a transform group you use, but then want to also apply an additional transform that's not included in that group - you will have to define a custom group yourself to be able to do that.

There are 3 main types of transforms - attribute, name and value:

https://amzn.github.io/style-dictionary/#/transforms?id=transform-types

Additionally, you can find 3rd party libraries on GitHub which provide even more transforms, and if you want to get your hands real dirty - Style Dictionary lets you define your own custom transforms as well.

### Format

The other important configuration option is the format of the output files. This is what lets you specify the expected format of the generated files for the given platform. Similar to transforms, Style Dictionary includes a number of common pre-defined formats.

For example, here we have the `css/variables` format specified for the CSS platform:

https://amzn.github.io/style-dictionary/#/formats?id=formats

### Platforms

And speaking of platforms, this is how you define your target environments, and you need to have at least one platform defined.

Now, since we're using the `style-dictionary-utils` helper library, we'll need to use its instance of Style Dictionary, rather than importing the one from the main `style-dictionary` package.

Doing this will automatically include the W3C token parser, so that we can use the W3C format for our tokens, and have Style Dictionary understand it.

Note as well that this library also includes a number of additional formats you can use - but for our example today we won't be utilizing any of them.

So, let's go ahead and do that first:

```js
import StyleDictionary from 'style-dictionary-utils';
```

Next, let's define our config and specify the `source` of our tokens:

```js
const config = {
  source: ['tokens/**/*.tokens.json'],
};
```

We will also need to specify our `platform`. For this example, we'll stick with CSS only to keep things simple:

```js
const config = {
  source: ['tokens/**/*.tokens.json'],
  platforms: {
    css: {
      buildPath: 'dist/css/',
      transformGroup: 'css',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css',
          // options: {
          //   outputReferences: true,
          // },
        },
      ],
    },
  },
};
```

With our basic configuration defined, all that's left is to extend Style Dictionary with this config, and then build it:

```js
const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
```

Back in our `package.json`, let's define our `build` script which will run this file:

```json
"scripts": {
  "build": "node src/index.js"
}
```

We'll also need to set the `type` to "module" to tell Node we're using ESM:

```json
"type": "module"
```

Alright, now let's run it:

```
npm run build
```

And you'll see this generated our assets in the `dist` folder!

## Setting up Aliases

One of the really neat things with design tokens, is they support aliasing - which lets us refer to other tokens when defining new token values - allowing us to create complex relationships between tokens.

This is very useful for creating "semantic" layers of abstractions which utilize the core tokens.

For example, in our `color` tokens - we can create a `primary` and `secondary` color, which maps to one of the existing ones:

```json
{
  "colors": {
    // ...
    "primary": {
      "$type": "color",
      "$value": "{color.violet}"
    },
    "secondary": {
      "$type": "color",
      "$value": "{color.rose}"
    }
  }
}
```

And now if we run `build` again, we'll see that these aliases got resolved to the core token values in the generated CSS file.

## Token Aliases

Now, you'll notice that in the output CSS, the aliases were resolved with their core token values. That's great and all, but that means that our aliases only exist at the token source, and are lost in generated assets.

Well, turns out we can make this even better.

You see, there is an option that will allow us to retain the references in output files, which means that Style Dictionary will use the appropriate mechanism for a given format to establish those relationships between token aliases.

So, in the case of our CSS, CSS variables themselves can be used as the link between token aliases.

Now, one thing to keep in mind, is that this option is not available for ALL formats - but in our case CSS is one of the supported ones, so we can use it here.

## Use Token Aliases

To enable this, set `outputReferences` to `true` for the given `files` options:

```js
files: [
  {
    // ...
    options: {
      outputReferences: true,
    },
  },
];
```

And now if we run our `build` script again and look at the CSS output, we'll see that it now uses CSS variables wherever we had the aliases specified. This is bonkers!

## Package Setup

Now, in order for this to be consumable in other projects, we need to specify which paths are exported.

To do this, update `package.json` to include an `"exports"` field:

```json
"exports": {
  "./css/*": "./dist/css/*",
},
"files": [
  "dist"
],
```

which will specify the paths that other projects can then import.

For example:

```js
import vars from '@acme/tokens/js/variables.js';
```

or

```css
@import '@acme/tokens/dist/css/variables.css';
```

We also need to set `files` to `"dist"` in order for the `dist` folder to be included in the package.

## Outro

Well that about does it for this video. It's pretty neat what's doable with Style Dictionary with a fairly minimal setup, and we haven't even began to scratch the surface here. So I'm going to keep experimenting with this tool, and hopefully this inspires you to check it out for yourself.

But for now, thanks for watching, and I'll see you in the next one!
