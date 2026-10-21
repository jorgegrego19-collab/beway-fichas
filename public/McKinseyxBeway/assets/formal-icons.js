(function () {
  'use strict';

  const symbols = new Map([
    ['↗', 'arrow-up-right'], ['↖', 'arrow-up-left'], ['↘', 'arrow-down-right'], ['↙', 'arrow-down-left'],
    ['→', 'arrow-right'], ['➡', 'arrow-right'], ['←', 'arrow-left'], ['⬅', 'arrow-left'],
    ['↑', 'arrow-up'], ['⬆', 'arrow-up'], ['↓', 'arrow-down'], ['⬇', 'arrow-down'],
    ['✓', 'check'], ['✔', 'check'], ['✅', 'check'], ['✕', 'close'], ['✖', 'close'], ['❌', 'close'],
    ['✧', 'sparkle'], ['✦', 'sparkle'], ['◇', 'badge'], ['◎', 'target'],
    ['▣', 'building'], ['♙', 'users'], ['⌘', 'network'], ['⌕', 'search'], ['🔍', 'search'], ['🔎', 'search'],
    ['▶', 'play'], ['▷', 'play'], ['◷', 'clock']
  ]);

  const paths = {
    'arrow-up-right': ['M6 18 18 6M6 6h12v12'],
    'arrow-up-left': ['M18 18 6 6M6 18V6h12'],
    'arrow-down-right': ['M6 6 18 18M6 18h12V6'],
    'arrow-down-left': ['M18 6 6 18M6 6v12h12'],
    'arrow-right': ['M4 12h16M13 5l7 7-7 7'],
    'arrow-left': ['M20 12H4M11 5l-7 7 7 7'],
    'arrow-up': ['M12 20V4M5 11l7-7 7 7'],
    'arrow-down': ['M12 4v16M5 13l7 7 7-7'],
    check: ['m5 12 4 4L19 6'],
    close: ['M6 6l12 12M6 18 18 6'],
    sparkle: ['m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z'],
    badge: ['m12 3 3 2 3.5.5.5 3.5 2 3-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5L5 15l-2-3 2-3 .5-3.5L9 5Z', 'm8 12 2.5 2.5L16 9'],
    target: ['M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z', 'M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z', 'M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'],
    building: ['M4 21V5h10v16M14 10h6v11M8 9h2M8 13h2M8 17h2M17 14h1M17 18h1M2 21h20'],
    users: ['M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z', 'M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 7M19 15a6 6 0 0 1 3 5v1'],
    network: ['M9 3h6v6H9ZM3 16h6v6H3ZM15 16h6v6h-6ZM12 9v4M6 16v-3h12v3'],
    search: ['M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z', 'm16 16 5 5'],
    play: ['m8 4 12 8-12 8Z'],
    clock: ['M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z', 'M12 6v6l4 2'],
    'map-pin': ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z', 'M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z']
  };

  const labels = {
    'arrow-up-right': 'Abrir enlace', 'arrow-up-left': 'Volver',
    'arrow-right': 'Siguiente', 'arrow-left': 'Anterior', 'arrow-up': 'Subir', 'arrow-down': 'Ver más',
    close: 'Cerrar', search: 'Buscar', play: 'Reproducir', check: 'Confirmar'
  };
  const ignored = 'script,style,noscript,textarea,input,select,option,code,pre,svg,math,[contenteditable],[data-beway-formal-icon]';
  const tokens = /(?:[↗↖↘↙→➡←⬅↑⬆↓⬇✓✔✅✕✖❌✧✦◇◎▣♙⌘⌕🔍🔎▶▷◷][\uFE0E\uFE0F]?|[\u{1F1E6}-\u{1F1FF}]{2})/gu;
  const flag = /^[\u{1F1E6}-\u{1F1FF}]{2}$/u;

  function makeIcon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const attributes = {
      viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor',
      'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      'aria-hidden': 'true', focusable: 'false', class: 'beway-formal-icon', 'data-beway-formal-icon': name
    };
    Object.entries(attributes).forEach(([key, value]) => svg.setAttribute(key, value));
    paths[name].forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      svg.append(path);
    });
    return svg;
  }

  function replaceText(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest(ignored)) return;
    const value = node.nodeValue;
    const matches = Array.from(value.matchAll(tokens));
    if (!matches.length) return;
    const fragment = document.createDocumentFragment();
    let cursor = 0;
    let lastName;
    matches.forEach(match => {
      const token = match[0].replace(/[\uFE0E\uFE0F]/g, '');
      const name = flag.test(token) ? 'map-pin' : symbols.get(token);
      if (!name) return;
      fragment.append(document.createTextNode(value.slice(cursor, match.index)), makeIcon(name));
      cursor = match.index + match[0].length;
      lastName = name;
    });
    fragment.append(document.createTextNode(value.slice(cursor)));
    node.replaceWith(fragment);
    const control = parent.closest('button,a,[role="button"]');
    if (control && !control.textContent.trim() && !control.hasAttribute('aria-label') && !control.hasAttribute('aria-labelledby') && !control.hasAttribute('title')) {
      control.setAttribute('aria-label', labels[lastName] || 'Ver detalle');
    }
  }

  function scan(root) {
    if (!root.isConnected) return;
    if (root.nodeType === Node.TEXT_NODE) {
      replaceText(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || root.closest(ignored)) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceText);
  }

  function start() {
    if (!document.body || document.documentElement.hasAttribute('data-beway-formal-icons-ready')) return;
    document.documentElement.setAttribute('data-beway-formal-icons-ready', 'true');
    scan(document.body);
    const pending = new Set();
    let scheduled = false;
    const options = { childList: true, characterData: true, subtree: true };
    const observer = new MutationObserver(records => {
      records.forEach(record => {
        if (record.type === 'characterData') pending.add(record.target);
        else record.addedNodes.forEach(node => pending.add(node));
      });
      if (scheduled || !pending.size) return;
      scheduled = true;
      queueMicrotask(() => {
        scheduled = false;
        observer.disconnect();
        try {
          pending.forEach(scan);
          pending.clear();
        } finally {
          observer.observe(document.body, options);
        }
      });
    });
    observer.observe(document.body, options);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
