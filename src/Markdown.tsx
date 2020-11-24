import React from 'react'

import unified from 'unified'
import markdown from 'remark-parse'
import gfm from 'remark-gfm'
import capitalize from 'remark-capitalize'
import smartypants from '@silvenon/remark-smartypants'
import plantuml from '@akebifiky/remark-simple-plantuml'
import hint from 'remark-hint'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import raw from 'rehype-raw'
import katex from 'rehype-katex'
import highlight from 'rehype-highlight'

import 'highlight.js/styles/atom-one-dark.css'

import Image from './Image'

var processor = unified()
  .use(markdown)
  .use(math)
  .use(gfm)
  .use(capitalize)
  .use(smartypants)
  .use(plantuml)
  .use(hint)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(highlight)
  .use(katex)
  .use(raw)
  .use(rehype2react, {
    createElement: React.createElement,
    components: { img: Image as any },
  })

interface Props {
  children: string
  styling?: string
}

function Markdown({ children, styling }: Props) {
  let defaultStyle = 'p-2 prose prose-sm cms-content'

  return (
    <div className={defaultStyle}>
      <div className={styling}>{processor.processSync(children).result}</div>
    </div>
  )
}

export default Markdown
