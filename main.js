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

const defaultText = `# 📝 Ultimate Markdown Guide & Template

Welcome to your premium Markdown Previewer! Use this as a playground or a guide for your documents.

## 1. Typography
You can make text **bold**, *italic*, ***bold & italic***, or ~~strikethrough~~.
Even \`inline code\` is supported!

---

## 2. Headings
### H3 Heading
#### H4 Heading
##### H5 Heading

---

## 3. Lists
### Task List
- [x] Create a beautiful UI
- [x] Implement real-time preview
- [ ] Write amazing content

### Unordered List
- Coffee ☕
- Code 💻
- Sleep 😴

### Ordered List
1. First thing
2. Second thing
3. Third thing

---

## 4. Code Blocks
We support multiple languages with syntax highlighting:

\`\`\`javascript
// A simple function to greet the user
function greet(name) {
  console.log(\`Hello, \${name}! Welcome to MD Previewer.\`);
}

greet('NXRts');
\`\`\`

\`\`\`css
/* Glassmorphism Effect */
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
\`\`\`

---

## 5. Tables
| Feature | Status | Rating |
| :--- | :---: | ---: |
| Real-time | ✅ | 10/10 |
| Syntax | ✅ | 9/10 |
| Aesthetic | ✅ | ✨ |

---

## 6. Blockquotes & Links
> "The only way to do great work is to love what you do."  
> — *Steve Jobs*

[Check out the source on GitHub](https://github.com)

---
*Created with ❤ by NXRts*`;

function update() {
  const content = editor.value;
  localStorage.setItem('md-content', content);
  
  // Parse markdown
  const rawHtml = marked.parse(content);
  
  // Sanitize HTML
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  
  preview.innerHTML = cleanHtml;
}

// Event Listeners
editor.addEventListener('input', update);

clearBtn.addEventListener('click', () => {
   if(editor.value.trim() !== '') {
       if(confirm('Clear all content? Click "Cancel" to restore the tutorial.')) {
           editor.value = '';
           update();
       } else {
           editor.value = defaultText;
           update();
       }
   } else {
       editor.value = defaultText;
       update();
   }
});

// Initialize
const savedContent = localStorage.getItem('md-content');
// Use defaultText if nothing is saved OR if the saved content is empty
editor.value = (savedContent && savedContent.trim() !== '') ? savedContent : defaultText;
// Initial render
update();

// Scroll Sync (Simple)
const syncScroll = () => {
    const percentage = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
    preview.scrollTop = percentage * (preview.scrollHeight - preview.clientHeight);
};

editor.addEventListener('scroll', syncScroll);
