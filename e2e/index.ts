import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { baka } from '../src/';

const markdown =
`# Milkdown Vanilla Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vanilla Typescript**.`

Editor
  .make()
  .config(ctx => {
    ctx.set(rootCtx, '#app')
    ctx.set(defaultValueCtx, markdown)
  })
  .config(baka)
  .use(commonmark)
  .create()
