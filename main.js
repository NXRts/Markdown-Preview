import './style.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

// --------------------------------------------------------------------------
// 1. PRESET TEMPLATES
// --------------------------------------------------------------------------
const TEMPLATES = {
  tutorial: `# 📝 Panduan Lengkap Markdown Studio

Selamat datang di **Markdown Previewer Studio**! Gunakan editor ini untuk menulis dokumentasi, catatan, dan artikel keren.

## 1. Format Teks & Tipografi
Anda dapat membuat teks **tebal (bold)**, *miring (italic)*, ***tebal & miring***, atau ~~dicoret (strikethrough)~~.
Format \`inline code\` juga didukung untuk highlight variabel atau perintah singkat.

---

## 2. Heading / Judul Dokumen
### Heading Level 3
#### Heading Level 4
##### Heading Level 5

---

## 3. Daftar & Checklist Tugas
### Checklist Task:
- [x] Merombak tampilan UI ke Glassmorphism Studio
- [x] Menambahkan parser KaTeX Matematika
- [x] Menambahkan Diagram Mermaid.js
- [ ] Menulis konten luar biasa Anda!

### Daftar Tanpa Urutan (Unordered List):
- Kopi Panas ☕
- Kode Program 💻
- Ide Kreatif 💡

---

## 4. Blok Kode dengan Syntax Highlighting
Gunakan tiga backtick (\`\`\`) untuk menulis blok kode:

\`\`\`javascript
// Fungsi menyapa pengguna di MD Studio
function greet(name) {
  console.log(\`Halo \${name}! Selamat datang di Markdown Studio.\`);
}

greet('NXRts Developer');
\`\`\`

\`\`\`css
/* Efek Glassmorphism Modern */
.glass-panel {
  background: rgba(18, 18, 28, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(124, 58, 237, 0.18);
}
\`\`\`

---

## 5. Tabel Data
| Fitur Studio | Status | Performa | Rating |
| :--- | :---: | :---: | ---: |
| Real-time Preview | ✅ Aktif | Fast ⚡ | 10/10 |
| Math KaTeX | ✅ Aktif | Smooth 📐 | 10/10 |
| Diagram Mermaid | ✅ Aktif | Dynamic 🧬 | 10/10 |

---

## 6. Kutipan (Blockquote) & Link
> "Tampilan yang hebat bukan hanya apa yang Anda lihat, tetapi juga bagaimana itu terasa saat digunakan."  
> — *Prinsip UI/UX Studio*

Kunjungi [Dokumentasi GitHub](https://github.com) untuk referensi lebih lanjut.

---
*Dibuat dengan ❤️ oleh NXRts*`,

  readme: `# 🚀 Nama Proyek Anda

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

Deskripsi singkat namun mengagumkan tentang proyek aplikasi web Anda. Jelaskan latar belakang dan masalah yang diselesaikan oleh proyek ini.

## ✨ Fitur Utama
- ⚡ **Super Cepat**: Dibangun dengan teknologi web modern tanpa lag.
- 🎨 **Desain UI Premium**: Antarmuka Dark Mode & Glassmorphism yang menawan.
- 📐 **Dukungan Matematika**: Render rumus matematika presisi tinggi.
- 🧬 **Diagram Visual**: Gambar flowchart & diagram alir langsung dari teks.

## 📦 Instalasi & Penggunaan

Jalankan perintah berikut untuk mengkloning dan menjalankan proyek secara lokal:

\`\`\`bash
# Klon repositori ini
git clone https://github.com/username/project-name.git

# Masuk ke direktori proyek
cd project-name

# Install dependensi
npm install

# Jalankan server pengembang
npm run dev
\`\`\`

## 🛠️ Teknologi yang Digunakan
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES Modules), Vite
- **Parsing**: Marked.js, DOMPurify, Highlight.js, KaTeX, Mermaid.js
`,

  bug_report: `# 🐛 Report Masalah / Bug Report

## 📌 Ringkasan Masalah
Berikan deskripsi singkat dan jelas mengenai bug yang ditemukan.

---

## 🔄 Langkah untuk Mereproduksi Bug
1. Buka halaman '...'
2. Klik pada tombol '...'
3. Scroll ke bawah sampai '...'
4. Lihat error yang terjadi.

---

## 🎯 Perilaku yang Diharapkan
Jelaskan secara spesifik apa yang seharusnya terjadi saat langkah di atas dilakukan.

---

## 📸 Tangkapan Layar (Screenshots)
Jika ada, tambahkan gambar screenshot untuk membantu menjelaskan masalah:
![Contoh Bug](https://via.placeholder.com/600x300?text=Bukti+Screenshot+Bug)

---

## 💻 Lingkungan Perangkat (Environment)
- **OS**: Windows / Linux / macOS
- **Browser**: Chrome / Firefox / Edge (Versi terbaru)
- **Versi App**: v1.0.0`,

  tech_doc: `# 📄 Dokumentasi Arsitektur Sistem

Dokumen teknis ini menjelaskan spesifikasi arsitektur modul dan alur data utama aplikasi.

## 🏗️ Struktur Arsitektur
Aplikasi menggunakan pola pemisahan tugas (*Separation of Concerns*) berbasis modul JavaScript ES.

\`\`\`javascript
// Konfigurasi Kunci Editor
const StudioConfig = {
  version: "2.0.0",
  syncScroll: true,
  maxDocs: 50,
  defaultTheme: "cyber"
};
\`\`\`

## 🔄 Alur Data Pembacaan
1. **Input Event**: Pengguna mengetik teks pada kursor editor.
2. **Preprocessing**: Pengubahan sintaks Math (\`$$...\$\`) & Emoji (\`:fire:\`).
3. **Markdown Parsing**: \`marked.parse()\` mengonversi markdown ke HTML raw.
4. **Sanitization**: \`DOMPurify.sanitize()\` menghapus skrip berbahaya.
5. **Render Postprocessing**: Injeksi KaTeX & rendering diagram Mermaid.`,

  math_diagram: `# 📐 Rumus Matematika (KaTeX) & Diagram (Mermaid)

Halaman ini mendemonstrasikan kemampuan rendering **Persamaan Matematika Presisi** dan **Diagram Alir Visual** di Markdown Studio.

---

## 1. Persamaan Matematika (KaTeX)

### Rumus Inline
Persamaan Ekuivalensi Massa-Energi Einstein adalah $E = mc^2$.  
Fungsi kuadrat sederhana: $f(x) = a x^2 + b x + c$.

### Rumus Blok (Display Mode)
$$
\\int_{0}^{\\infty} x^2 e^{-x} dx = 2
$$

$$
A = \\begin{pmatrix} 
a & b \\\\ 
c & d 
\\end{pmatrix}
$$

---

## 2. Diagram Visual (Mermaid.js)

### Flowchart / Diagram Alir
\`\`\`mermaid
graph TD;
    A[Mulai Editor] --> B{Ketik Teks};
    B --> C[Realtime Parser];
    C --> D[Sanitasi DOMPurify];
    D --> E[Render Preview Studio];
    E --> F[Export PDF / HTML];
\`\`\`

### Sequence Diagram (Alur Interaksi)
\`\`\`mermaid
sequenceDiagram
    participant U as Pengguna
    participant E as Editor Textarea
    participant P as Parser Engine
    participant V as Preview Window

    U->>E: Ketik Markdown
    E->>P: Trigger Input Event
    P->>P: Render Math & Mermaid
    P->>V: Perbarui HTML Preview
\`\`\``
};

// --------------------------------------------------------------------------
// 2. STATE & SELEKTOR DOM
// --------------------------------------------------------------------------
const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');
const docSelectorBtn = document.querySelector('#doc-selector-btn');
const activeDocTitleEl = document.querySelector('#active-doc-title');
const docDropdown = document.querySelector('#doc-dropdown');
const docListContainer = document.querySelector('#doc-list');
const btnNewDoc = document.querySelector('#btn-new-doc');
const btnRenameDoc = document.querySelector('#btn-rename-doc');
const btnDeleteDoc = document.querySelector('#btn-delete-doc');
const presetTemplateSelect = document.querySelector('#preset-template-select');
const themeSelect = document.querySelector('#theme-select');
const exportTriggerBtn = document.querySelector('#export-trigger-btn');
const exportMenu = document.querySelector('#export-menu');
const btnFullscreen = document.querySelector('#btn-fullscreen');
const mainContent = document.querySelector('#main-content');

// Stats Elements
const statWords = document.querySelector('#stat-words');
const statChars = document.querySelector('#stat-chars');
const statLines = document.querySelector('#stat-lines');
const statReading = document.querySelector('#stat-reading');

// Toggle Sync
const btnToggleSync = document.querySelector('#btn-toggle-sync');
let isSyncScrollEnabled = true;

// Toast Container
const toastContainer = document.querySelector('#toast-container');

// View Mode Buttons
const viewSplitBtn = document.querySelector('#view-split');
const viewEditorBtn = document.querySelector('#view-editor');
const viewPreviewBtn = document.querySelector('#view-preview');

// --------------------------------------------------------------------------
// 3. EMOJI & KATEX PREPROCESSOR
// --------------------------------------------------------------------------
const EMOJI_MAP = {
  ':fire:': '🔥',
  ':rocket:': '🚀',
  ':sparkles:': '✨',
  ':check:': '✅',
  ':x:': '❌',
  ':warning:': '⚠️',
  ':heart:': '❤️',
  ':star:': '⭐',
  ':bug:': '🐛',
  ':memo:': '📝',
  ':bulb:': '💡',
  ':tada:': '🎉',
  ':eyes:': '👀',
  ':gear:': '⚙️',
  ':lock:': '🔒',
  ':computer:': '💻',
  ':coffee:': '☕',
  ':100:': '💯'
};

function parseEmojis(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/:[a-z0-9_]+:/g, match => EMOJI_MAP[match] || match);
}

// Preprocessing KaTeX Math safely
function parseKaTeXMath(text) {
  if (typeof text !== 'string') return '';
  if (typeof window === 'undefined' || !window.katex || typeof window.katex.renderToString !== 'function') {
    return text;
  }

  try {
    // Block math: $$ ... $$
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
      try {
        return `<div class="katex-display">${window.katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
      } catch (e) {
        return match;
      }
    });

    // Inline math: $ ... $
    text = text.replace(/(^|[^\\])\$([^\$\n]+?)\$/g, (match, prefix, math) => {
      try {
        return `${prefix}<span class="katex-inline">${window.katex.renderToString(math.trim(), { displayMode: false, throwOnError: false })}</span>`;
      } catch (e) {
        return match;
      }
    });
  } catch (err) {
    console.warn('KaTeX preprocessing notice:', err);
  }

  return text;
}

// --------------------------------------------------------------------------
// 4. CONFIGURE MARKED ENGINE
// --------------------------------------------------------------------------
const customRenderer = {
  code(token) {
    let code = '';
    let language = '';

    if (typeof token === 'object' && token !== null) {
      code = token.text || '';
      language = token.lang || '';
    } else {
      code = String(token || '');
      language = String(arguments[1] || '');
    }

    if (language.trim() === 'mermaid') {
      return `<div class="mermaid-container"><div class="mermaid">${code}</div></div>`;
    }

    let highlighted = code;
    try {
      if (language && hljs.getLanguage(language)) {
        highlighted = hljs.highlight(code, { language }).value;
      } else if (code.trim()) {
        highlighted = hljs.highlightAuto(code).value;
      }
    } catch (err) {
      highlighted = code;
    }

    const langLabel = language || 'code';
    return `
      <div class="code-block-wrapper">
        <div class="code-header">
          <span class="code-lang">${langLabel}</span>
          <button class="copy-code-btn" data-code="${encodeURIComponent(code)}">📋 Copy</button>
        </div>
        <pre><code class="hljs language-${langLabel}">${highlighted}</code></pre>
      </div>
    `;
  }
};

marked.use({
  renderer: customRenderer,
  gfm: true,
  breaks: true
});

// --------------------------------------------------------------------------
// 5. UPDATE & RENDER LOGIC
// --------------------------------------------------------------------------
let renderDebounceTimer = null;

async function updatePreview() {
  try {
    const rawContent = editor.value || '';

    // Update statistics immediately
    updateStats(rawContent);

    // Save active document content
    saveCurrentDocContent(rawContent);

    // Pre-process Emojis & Math
    let processedText = parseEmojis(rawContent);
    processedText = parseKaTeXMath(processedText);

    // Parse Markdown to HTML asynchronously
    const rawHtml = await marked.parse(processedText);

    // Sanitize with DOMPurify
    const cleanHtml = DOMPurify.sanitize(rawHtml, {
      ADD_TAGS: ['div', 'span', 'svg', 'path', 'g', 'circle', 'line', 'rect', 'polyline', 'polygon', 'math', 'annotation', 'semantics', 'mrow', 'mspace', 'msqrt', 'mfrac', 'mn', 'mo', 'mi', 'ms', 'style'],
      ADD_ATTR: ['class', 'style', 'data-code', 'viewBox', 'fill', 'stroke', 'stroke-width', 'cx', 'cy', 'r', 'x', 'y', 'width', 'height', 'points', 'd', 'rx', 'ry', 'xmlns', 'display', 'aria-hidden']
    });

    preview.innerHTML = cleanHtml;

    // Render Mermaid diagrams
    if (window.mermaid) {
      try {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dark',
          securityLevel: 'loose'
        });
        
        const mermaidNodes = preview.querySelectorAll('.mermaid');
        if (mermaidNodes.length > 0) {
          await window.mermaid.run({ nodes: mermaidNodes });
        }
      } catch (err) {
        console.warn('Mermaid rendering notice:', err);
      }
    }

    // Attach copy listeners to code blocks
    preview.querySelectorAll('.copy-code-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const codeToCopy = decodeURIComponent(btn.getAttribute('data-code'));
        navigator.clipboard.writeText(codeToCopy).then(() => {
          btn.textContent = '✅ Copied!';
          setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
        });
      });
    });
  } catch (error) {
    console.error('Error rendering preview:', error);
  }
}

function updateStats(text) {
  if (typeof text !== 'string') text = '';
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const chars = text.length;
  const lines = text ? text.split('\n').length : 0;
  const readingTime = Math.ceil(words / 200);

  if (statWords) statWords.textContent = words.toLocaleString();
  if (statChars) statChars.textContent = chars.toLocaleString();
  if (statLines) statLines.textContent = lines.toLocaleString();
  if (statReading) statReading.textContent = `~${readingTime} min`;
}

// --------------------------------------------------------------------------
// 6. MULTI-DOCUMENT DRAFT MANAGER
// --------------------------------------------------------------------------
const DEFAULT_DOCS = [
  { id: 'doc-1', title: 'Panduan Studio', content: TEMPLATES.tutorial }
];

function getSavedDocs() {
  try {
    const saved = localStorage.getItem('md-studio-docs');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading saved docs:', e);
  }
  return DEFAULT_DOCS;
}

function getActiveDocId() {
  return localStorage.getItem('md-studio-active-id') || 'doc-1';
}

function saveDocsToStorage(docs, activeId) {
  try {
    localStorage.setItem('md-studio-docs', JSON.stringify(docs));
    if (activeId) localStorage.setItem('md-studio-active-id', activeId);
  } catch (e) {
    console.error('Error saving docs:', e);
  }
}

function saveCurrentDocContent(content) {
  const docs = getSavedDocs();
  const activeId = getActiveDocId();
  const index = docs.findIndex(d => d.id === activeId);
  if (index !== -1) {
    docs[index].content = content;
    saveDocsToStorage(docs, activeId);
  }
}

function renderDocList() {
  const docs = getSavedDocs();
  const activeId = getActiveDocId();
  if (docListContainer) docListContainer.innerHTML = '';

  const activeDoc = docs.find(d => d.id === activeId) || docs[0];
  if (activeDocTitleEl) {
    activeDocTitleEl.textContent = activeDoc ? activeDoc.title : 'Dokumen';
  }

  if (docListContainer) {
    docs.forEach(doc => {
      const btn = document.createElement('button');
      btn.className = `doc-item-btn ${doc.id === activeId ? 'active' : ''}`;
      btn.innerHTML = `<span>📄 ${doc.title}</span>`;
      btn.addEventListener('click', () => {
        switchDocument(doc.id);
        if (docDropdown) docDropdown.classList.add('hidden');
      });
      docListContainer.appendChild(btn);
    });
  }
}

function switchDocument(id) {
  const docs = getSavedDocs();
  const targetDoc = docs.find(d => d.id === id);
  if (targetDoc) {
    localStorage.setItem('md-studio-active-id', id);
    editor.value = targetDoc.content || '';
    renderDocList();
    updatePreview();
  }
}

// Create new document
if (btnNewDoc) {
  btnNewDoc.addEventListener('click', () => {
    const docs = getSavedDocs();
    const newId = `doc-${Date.now()}`;
    const newTitle = `Dokumen ${docs.length + 1}`;
    docs.push({ id: newId, title: newTitle, content: '# Dokumen Baru\n\nMulai menulis di sini...' });
    saveDocsToStorage(docs, newId);
    switchDocument(newId);
    if (docDropdown) docDropdown.classList.add('hidden');
    showToast(`Dokumen "${newTitle}" berhasil dibuat!`);
  });
}

// Rename active document
if (btnRenameDoc) {
  btnRenameDoc.addEventListener('click', () => {
    const docs = getSavedDocs();
    const activeId = getActiveDocId();
    const doc = docs.find(d => d.id === activeId);
    if (doc) {
      const newName = prompt('Masukkan nama baru untuk dokumen ini:', doc.title);
      if (newName && newName.trim()) {
        doc.title = newName.trim();
        saveDocsToStorage(docs, activeId);
        renderDocList();
        showToast('Nama dokumen berhasil diperbarui!');
      }
    }
    if (docDropdown) docDropdown.classList.add('hidden');
  });
}

// Delete active document
if (btnDeleteDoc) {
  btnDeleteDoc.addEventListener('click', () => {
    let docs = getSavedDocs();
    if (docs.length <= 1) {
      alert('Anda harus menyisakan setidaknya satu dokumen!');
      if (docDropdown) docDropdown.classList.add('hidden');
      return;
    }
    const activeId = getActiveDocId();
    const doc = docs.find(d => d.id === activeId);
    if (confirm(`Apakah Anda yakin ingin menghapus "${doc.title}"?`)) {
      docs = docs.filter(d => d.id !== activeId);
      const nextActiveId = docs[0].id;
      saveDocsToStorage(docs, nextActiveId);
      switchDocument(nextActiveId);
      if (docDropdown) docDropdown.classList.add('hidden');
      showToast('Dokumen telah dihapus.');
    }
  });
}

// Toggle Dropdown Menu
if (docSelectorBtn) {
  docSelectorBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (docDropdown) docDropdown.classList.toggle('hidden');
    if (exportMenu) exportMenu.classList.add('hidden');
  });
}

// --------------------------------------------------------------------------
// 7. FORMATTING TOOLBAR FUNCTIONS
// --------------------------------------------------------------------------
function insertMarkdown(startTag, endTag = '', defaultContent = '') {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selectedText = editor.value.substring(start, end) || defaultContent;
  const replacement = `${startTag}${selectedText}${endTag}`;

  editor.value = editor.value.substring(0, start) + replacement + editor.value.substring(end);
  
  // Set cursor focus
  editor.focus();
  editor.setSelectionRange(start + startTag.length, start + startTag.length + selectedText.length);
  updatePreview();
}

document.querySelectorAll('.fmt-btn[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.getAttribute('data-action');
    switch (action) {
      case 'bold': insertMarkdown('**', '**', 'tebal'); break;
      case 'italic': insertMarkdown('*', '*', 'miring'); break;
      case 'strike': insertMarkdown('~~', '~~', 'coret'); break;
      case 'code': insertMarkdown('`', '`', 'code'); break;
      case 'h1': insertMarkdown('# ', '', 'Judul Utama'); break;
      case 'h2': insertMarkdown('## ', '', 'Sub Judul'); break;
      case 'h3': insertMarkdown('### ', '', 'Bagian Judul'); break;
      case 'ul': insertMarkdown('- ', '', 'Item list'); break;
      case 'ol': insertMarkdown('1. ', '', 'Item terurut'); break;
      case 'task': insertMarkdown('- [ ] ', '', 'Tugas baru'); break;
      case 'quote': insertMarkdown('> ', '', 'Kutipan hebat'); break;
      case 'codeblock': insertMarkdown('```javascript\n', '\n```', '// Tulis kode'); break;
      case 'table': insertMarkdown('| Kolom 1 | Kolom 2 |\n| :--- | :--- |\n| Data 1 | Data 2 |\n'); break;
      case 'link': insertMarkdown('[Judul Link](', 'https://example.com)', ''); break;
      case 'image': insertMarkdown('![Deskripsi Gambar](', 'https://via.placeholder.com/600x300)', ''); break;
      case 'math': insertMarkdown('$$\n', '\n$$', 'E = mc^2'); break;
      case 'mermaid': insertMarkdown('```mermaid\ngraph TD;\n    A[Mulai] --> B[Selesai];\n```\n'); break;
      case 'hr': insertMarkdown('\n---\n'); break;
    }
  });
});

// Clear Editor
const btnClearEditor = document.querySelector('#btn-clear-editor');
if (btnClearEditor) {
  btnClearEditor.addEventListener('click', () => {
    if (editor.value.trim()) {
      if (confirm('Bersihkan seluruh teks di editor?')) {
        editor.value = '';
        updatePreview();
        showToast('Editor dibersihkan.');
      }
    }
  });
}

// Preset Templates Selector
if (presetTemplateSelect) {
  presetTemplateSelect.addEventListener('change', (e) => {
    const key = e.target.value;
    if (TEMPLATES[key]) {
      if (confirm('Muat template preset ini ke editor? Teks saat ini akan digantikan.')) {
        editor.value = TEMPLATES[key];
        updatePreview();
        showToast(`Template loaded!`);
      }
    }
    presetTemplateSelect.selectedIndex = 0;
  });
}

// --------------------------------------------------------------------------
// 8. THEME & VIEW MODES
// --------------------------------------------------------------------------
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('md-studio-theme', themeName);
  updatePreview();
}

if (themeSelect) {
  themeSelect.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });
}

// Load saved theme
const savedTheme = localStorage.getItem('md-studio-theme') || 'cyber';
if (themeSelect) themeSelect.value = savedTheme;
setTheme(savedTheme);

// View Switcher logic
function setViewMode(mode) {
  [viewSplitBtn, viewEditorBtn, viewPreviewBtn].forEach(b => { if (b) b.classList.remove('active'); });
  if (mainContent) mainContent.classList.remove('mode-editor', 'mode-preview');

  if (mode === 'editor') {
    if (viewEditorBtn) viewEditorBtn.classList.add('active');
    if (mainContent) mainContent.classList.add('mode-editor');
  } else if (mode === 'preview') {
    if (viewPreviewBtn) viewPreviewBtn.classList.add('active');
    if (mainContent) mainContent.classList.add('mode-preview');
  } else {
    if (viewSplitBtn) viewSplitBtn.classList.add('active');
  }
}

if (viewSplitBtn) viewSplitBtn.addEventListener('click', () => setViewMode('split'));
if (viewEditorBtn) viewEditorBtn.addEventListener('click', () => setViewMode('editor'));
if (viewPreviewBtn) viewPreviewBtn.addEventListener('click', () => setViewMode('preview'));

// Fullscreen mode
if (btnFullscreen) {
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error entering fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
}

// --------------------------------------------------------------------------
// 9. EXPORT & DOWNLOAD LOGIC
// --------------------------------------------------------------------------
if (exportTriggerBtn) {
  exportTriggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (exportMenu) exportMenu.classList.toggle('hidden');
    if (docDropdown) docDropdown.classList.add('hidden');
  });
}

// Export .md file
const btnExportMd = document.querySelector('#btn-export-md');
if (btnExportMd) {
  btnExportMd.addEventListener('click', () => {
    const docs = getSavedDocs();
    const activeId = getActiveDocId();
    const doc = docs.find(d => d.id === activeId) || { title: 'document' };
    
    const blob = new Blob([editor.value], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title.toLowerCase().replace(/\s+/g, '_')}.md`;
    a.click();
    URL.revokeObjectURL(url);
    if (exportMenu) exportMenu.classList.add('hidden');
    showToast('File .md berhasil diunduh!');
  });
}

// Export Ready .html file
const btnExportHtml = document.querySelector('#btn-export-html');
if (btnExportHtml) {
  btnExportHtml.addEventListener('click', () => {
    const docs = getSavedDocs();
    const activeId = getActiveDocId();
    const doc = docs.find(d => d.id === activeId) || { title: 'document' };

    const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>${doc.title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; color: #1e293b; line-height: 1.7; }
    pre { background: #0f172a; color: #f8fafc; padding: 1rem; border-radius: 8px; overflow-x: auto; }
    code { background: #f1f5f9; color: #0284c7; padding: 0.2rem 0.4rem; border-radius: 4px; }
    pre code { background: transparent; color: inherit; padding: 0; }
    blockquote { border-left: 4px solid #7c3aed; background: #f3e8ff; padding: 0.8rem 1.2rem; margin: 1rem 0; font-style: italic; }
    table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
    th, td { border: 1px solid #cbd5e1; padding: 0.6rem 1rem; text-align: left; }
    th { background: #f8fafc; color: #7c3aed; }
  </style>
</head>
<body>
  ${preview.innerHTML}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title.toLowerCase().replace(/\s+/g, '_')}.html`;
    a.click();
    URL.revokeObjectURL(url);
    if (exportMenu) exportMenu.classList.add('hidden');
    showToast('File HTML berhasil diunduh!');
  });
}

// Copy Raw Markdown
const btnCopyRaw = document.querySelector('#btn-copy-raw');
if (btnCopyRaw) {
  btnCopyRaw.addEventListener('click', () => {
    navigator.clipboard.writeText(editor.value).then(() => {
      if (exportMenu) exportMenu.classList.add('hidden');
      showToast('Raw Markdown disalin ke clipboard!');
    });
  });
}

// Copy Rendered HTML
const btnCopyHtml = document.querySelector('#btn-copy-html');
if (btnCopyHtml) {
  btnCopyHtml.addEventListener('click', () => {
    navigator.clipboard.writeText(preview.innerHTML).then(() => {
      if (exportMenu) exportMenu.classList.add('hidden');
      showToast('Rendered HTML disalin ke clipboard!');
    });
  });
}

// Print / Save PDF
const btnPrintPdf = document.querySelector('#btn-print-pdf');
if (btnPrintPdf) {
  btnPrintPdf.addEventListener('click', () => {
    if (exportMenu) exportMenu.classList.add('hidden');
    window.print();
  });
}

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  if (docDropdown) docDropdown.classList.add('hidden');
  if (exportMenu) exportMenu.classList.add('hidden');
});

// --------------------------------------------------------------------------
// 10. SYNC SCROLL & DRAG DROP
// --------------------------------------------------------------------------
if (btnToggleSync) {
  btnToggleSync.addEventListener('click', () => {
    isSyncScrollEnabled = !isSyncScrollEnabled;
    btnToggleSync.classList.toggle('active', isSyncScrollEnabled);
    const span = btnToggleSync.querySelector('span');
    if (span) span.textContent = `Sync Scroll: ${isSyncScrollEnabled ? 'ON' : 'OFF'}`;
    showToast(`Sync Scroll: ${isSyncScrollEnabled ? 'Aktif' : 'Non-aktif'}`);
  });
}

if (editor && preview) {
  editor.addEventListener('scroll', () => {
    if (!isSyncScrollEnabled) return;
    const percentage = editor.scrollTop / (editor.scrollHeight - editor.clientHeight || 1);
    preview.scrollTop = percentage * (preview.scrollHeight - preview.clientHeight);
  });
}

// Drag & Drop File Import
const dropZone = document.querySelector('#drop-zone');
const dropOverlay = document.querySelector('#drop-overlay');

if (dropZone && dropOverlay) {
  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropOverlay.classList.remove('hidden');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropOverlay.classList.add('hidden');
    });
  });

  dropZone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.name.endsWith('.md') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          editor.value = event.target.result;
          updatePreview();
          showToast(`File "${file.name}" berhasil diimpor!`);
        };
        reader.readAsText(file);
      } else {
        alert('Tolong lemparkan file berformat .md atau .txt');
      }
    }
  });
}

// Toast notification helper
function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --------------------------------------------------------------------------
// 11. INITIALIZATION
// --------------------------------------------------------------------------
if (editor) {
  editor.addEventListener('input', () => {
    clearTimeout(renderDebounceTimer);
    renderDebounceTimer = setTimeout(updatePreview, 50);
  });

  // Keyboard shortcuts (Ctrl+B, Ctrl+I)
  editor.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        insertMarkdown('**', '**', 'tebal');
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        insertMarkdown('*', '*', 'miring');
      }
    }
  });
}

// Initial Setup
const activeId = getActiveDocId();
const docs = getSavedDocs();
const currentDoc = docs.find(d => d.id === activeId) || docs[0];

if (editor) {
  if (currentDoc && currentDoc.content && currentDoc.content.trim() !== '') {
    editor.value = currentDoc.content;
  } else {
    editor.value = TEMPLATES.tutorial;
  }
}

renderDocList();
updatePreview();
