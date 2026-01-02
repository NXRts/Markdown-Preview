import './style.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

// Configure Marked for syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  langPrefix: 'hljs language-',
  breaks: true,
  gfm: true
});

const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');
const clearBtn = document.querySelector('#clear-btn');

const defaultText = `# Welcome to MD Previewer ✨

This is a **live preview** editor crafted with *Vite* and *Vanilla JS*.

## Features
- ⚡ Real-time rendering
- 🎨 Syntax Highlighting
- 🔒 Secure (DOMPurified)
- 💎 Glassmorphism UI

### Code Example
\`\`\`javascript
function createMagic() {
  const element = document.createElement('div');
  element.classList.add('glass-panel');
  return element;
}
\`\`\`

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci

Enjoy writing!
`;

function update() {
  const content = editor.value;
  localStorage.setItem('md-content', content);
  
  // Parse markdown
  // Marked is synchronous by default unless using async extensions, which we aren't.
  const rawHtml = marked.parse(content);
  
  // Sanitize HTML
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  
  preview.innerHTML = cleanHtml;
}

// Event Listeners
editor.addEventListener('input', update);

clearBtn.addEventListener('click', () => {
   if(editor.value.trim() !== '') {
       if(confirm('Clear all content?')) {
           editor.value = '';
           update();
       }
   }
});

// Initialize
const savedContent = localStorage.getItem('md-content');
editor.value = savedContent !== null ? savedContent : defaultText;
// Initial render
update();

// Scroll Sync (Simple)
const syncScroll = () => {
    const percentage = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
    preview.scrollTop = percentage * (preview.scrollHeight - preview.clientHeight);
};

editor.addEventListener('scroll', syncScroll);
