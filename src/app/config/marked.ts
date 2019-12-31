import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
/**
 * markdown and highlight
 */
hljs.configure({
  tabReplace: '  ',
  usrBR: true,
  classPrefix: 'hljs-'
});
hljs.registerLanguage('javascript', javascript);
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

export default marked;
