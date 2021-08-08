---
title: 'Easy user authentication in Next.js with Supabase and Supabase UI'
date: 'Sat Aug 07 2021 16:50:31 GMT-0400 (Eastern Daylight Time)'
summary: 'See how easy it is to get full authenticatoion in your Next.js app with Supabase and Supabase UI!'
canonical: 'https://misha.wtf/blog/nextjs-supabase-auth'
tags: ['Next.js', 'Supabase', 'Supabase UI', 'Authentication']
seo:
  [
    'Vercel',
    'Next.js',
    'NextJS',
    'Supabase',
    'Supabase UI',
    'Auth',
    'Authentication',
    'OSS',
    'Open Source',
  ]
author:
  id: 'mryechkin'
  name: 'Mykhaylo Ryechkin'
---

[Supabase](https://www.supabase.io) has been getting a lot of attention in the tech community lately, and for good reason. This open source platform makes it super easy to get started building complex full-stack applications, and in this post we will take a look at how to utilize one of its core offerings: **user authentication**.

## Supabase Client

Supabase provides several [client libraries](https://supabase.io/docs/guides/client-libraries) to make it easy to integrate it in your project, and supports [multiple languages](https://supabase.io/docs/reference/javascript/supabase-client).

## Supabase UI

Supabase also provides a component library called [Supabase UI](https://ui.supabase.io/), which is a collection of high-level components meant to help users create beautiful experiences quickly and efficiently. Its styling is heavily inspired by [Tailwind CSS](https://www.tailwindcss.com/), so you _know_ it will look good out of the box ☺

> **NOTE:** this library is still in early alpha stage at the time of this writing, so the API and components may still change in the full release.

The component we'll be using today is called [Auth](https://ui.supabase.io/components/auth), and it provides us with everything we need to render a fully functional authentication flow UI.

## Setup

First, let's create a Next.js application using `create-next-app` and the `TailwindCSS` starter template:

```bash
npx create-next-app next-with-supabase --example with-tailwindcss
```

Next, let's add the Supabase JS client, and the Supabase UI component library:

```bash
npm install @supabase/supabase-js @supabase/ui
```
