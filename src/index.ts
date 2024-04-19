//From @milkdown/theme-nord
import type { Ctx } from '@milkdown/ctx'
import { editorViewOptionsCtx } from '@milkdown/core'
import clsx from 'clsx'

import '@milkdown/prose/view/style/prosemirror.css'
import '@milkdown/prose/tables/style/tables.css'
import 'virtual:uno.css'
import './style.css'

export function baka(ctx: Ctx): void {
  ctx.update(editorViewOptionsCtx, (prev) => {
    const prevClass = prev.attributes

    return ({
      ...prev,
      attributes: (state) => {
        const attrs = typeof prevClass === 'function' ? prevClass(state) : prevClass

        return {
          ...attrs,
          class: clsx('prose dark:prose-invert outline-none', attrs?.class || '', 'milkdown-theme-baka'),
        }
      },
    })
  })
}