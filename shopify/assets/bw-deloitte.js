
/* Deloitte en BEWAY · Interacciones de la ficha. */
(() => {
  'use strict';
  const root = document.querySelector('#beway-deloitte');
  if (!root) return;
  const DATA = {"modules": [{"title": "El trabajo de un auditor y su criterio profesional", "description": "Comprende qué aporta una auditoría financiera y por qué la independencia, la ética y el escepticismo profesional atraviesan todo el encargo.", "lessons": ["Qué aporta una auditoría y quién utiliza sus resultados", "Independencia, ética y escepticismo profesional", "Cómo se organiza un equipo de auditoría", "Primeras preguntas sobre Conecta Retail"], "resource": "Glosario y mapa del proceso de auditoría."}, {"title": "Leer las cuentas y comprender el negocio", "description": "Interpreta un balance y una cuenta de resultados simplificados y relaciona las cifras con las operaciones de la empresa.", "lessons": ["Conocer el modelo de negocio antes de revisar cifras", "Balance, resultados y flujos de efectivo", "Ventas, gastos y estimaciones contables", "Lectura guiada de las cuentas de Conecta Retail"], "resource": "Estados financieros simplificados y explicación del caso."}, {"title": "Identificar riesgos y definir qué es relevante", "description": "Relaciona las señales del negocio con posibles incorrecciones y comprende cómo la materialidad ayuda a planificar el trabajo.", "lessons": ["Riesgos que pueden afectar a la información financiera", "Materialidad: por qué unas diferencias importan más", "Afirmaciones de los estados financieros", "Mapa de riesgos y prioridades del caso"], "resource": "Matriz de riesgos y ejemplo de materialidad."}, {"title": "Entender y revisar los controles internos", "description": "Reconoce controles en ventas, compras y pagos y comprende cómo se estudia su diseño y funcionamiento.", "lessons": ["El recorrido de una operación y sus autorizaciones", "Separación de funciones y trazabilidad", "Controles de acceso a los sistemas", "Recorrido y prueba comentada de un control"], "resource": "Matriz de riesgos y controles de Conecta Retail."}, {"title": "Obtener evidencia y seleccionar las pruebas", "description": "Comprende qué hace que una evidencia sea útil y cómo se seleccionan operaciones para comprobar una cuestión.", "lessons": ["Suficiencia, calidad y procedencia de la evidencia", "Documentos, confirmaciones, observación y recuentos", "Introducción al muestreo y sus limitaciones", "Elegir una prueba para responder a un riesgo"], "resource": "Comparativa de evidencias y muestra comentada."}, {"title": "Revisar ingresos, cuentas por cobrar y existencias", "description": "Sigue comprobaciones sencillas sobre ingresos y saldos y aprende a documentar las diferencias y las preguntas pendientes.", "lessons": ["Ingresos y operaciones próximas al cierre", "Cuentas por cobrar y confirmaciones", "Existencias, recuentos y posibles deterioros", "Papeles de trabajo de las pruebas del caso"], "resource": "Ejemplos de papeles de trabajo resueltos."}, {"title": "Analizar datos con Excel y apoyo tecnológico", "description": "Utiliza datos para detectar cuestiones que necesitan revisión y comprende las posibilidades y límites de la automatización y la IA.", "lessons": ["Integridad de datos y preparación de una tabla", "Filtros, tablas dinámicas y conciliaciones en Excel", "Duplicados, diferencias y fechas atípicas", "Automatización e IA con revisión del profesional"], "resource": "Hoja de cálculo de operaciones y análisis comentado."}, {"title": "Documentar hallazgos y comunicar conclusiones", "description": "Distingue hechos, hipótesis y cuestiones pendientes y comprende cómo se reúnen los resultados en el cierre de una auditoría.", "lessons": ["Redactar una observación con evidencias", "Diferencias detectadas y asuntos pendientes", "Estructura y lectura introductoria de un informe", "Cierre del caso y comunicación al equipo"], "resource": "Informe comentado y esquema para presentar conclusiones."}], "projects": [{"id": "riesgos-expansion", "symbol": "01", "label": "NEGOCIO · RIESGOS", "title": "Prioriza los riesgos de una empresa en expansión", "short": "Estudia cómo cambia el control de un negocio cuando empieza a operar en varios países.", "duration": "45–60 min", "level": "Inicial", "skills": ["Análisis de riesgos", "Control interno", "Prioridades"], "intro": "Construye una matriz con cinco riesgos y propón cómo comprobarlos.", "caseText": "Caso ficticio: Conecta Retail vende por internet en España, México y Colombia. Las ventas han crecido un 35 %, las devoluciones se registran una vez a la semana y una misma persona puede crear proveedores y autorizar pagos. Las conciliaciones de cobros llevan dos meses de retraso y cada país utiliza su propio archivo de inventario. Debes decidir dónde concentrarías una primera revisión.", "data": [["Mercados", "3 países"], ["Crecimiento de ventas", "35 %"], ["Tu objetivo", "5 riesgos"], ["Entrega", "Matriz de una página"]], "steps": ["Identifica cinco riesgos y relaciónalos con ventas, cobros, existencias o pagos.", "Explica qué información financiera podría verse afectada y prioriza los riesgos.", "Propón un control y una comprobación concreta para cada riesgo."], "fields": ["Los cinco riesgos y las partidas que podrían verse afectadas", "Su prioridad y el motivo de tu elección", "Control propuesto y evidencia que solicitarías"], "deliverable": "Una matriz de una página con riesgo, prioridad, control y evidencia necesaria."}, {"id": "ventas-cierre", "symbol": "02", "label": "DATOS · EXCEL", "title": "Revisa las ventas de fin de año", "short": "Busca operaciones que necesitan revisión y comprueba qué documentación falta para explicarlas.", "duration": "60–90 min", "level": "Inicial", "skills": ["Excel", "Ingresos", "Evidencias"], "intro": "Descarga las 40 operaciones y prepara tres observaciones fundamentadas.", "caseText": "Caso ficticio: Conecta Retail te entrega 40 registros de ventas próximos al cierre. Incluyen la fecha de factura, la fecha de expedición, el importe y el importe registrado. Hay referencias repetidas y operaciones con datos que requieren explicación. La fecha de expedición es una señal para revisar el contrato y la transferencia de control; por sí sola no determina cuándo se reconoce el ingreso.", "data": [["Archivo", "CSV para Excel"], ["Registros", "40 operaciones"], ["Tu objetivo", "3 observaciones"], ["Origen", "Datos ficticios"]], "asset": "assets/ventas-cierre.csv", "assetLabel": "Descargar las 40 operaciones · CSV", "steps": ["Revisa identificadores, referencias, importes y fechas; identifica duplicados y diferencias.", "Selecciona tres cuestiones y explica qué dato merece una comprobación adicional.", "Indica qué contrato, documento de entrega o conciliación pedirías antes de concluir."], "fields": ["Operaciones que has señalado y diferencias observadas", "Posible impacto y explicaciones alternativas", "Documentos o comprobaciones que faltan"], "deliverable": "El Excel marcado y una nota con tres observaciones, su posible impacto y las comprobaciones pendientes."}, {"id": "memo-hallazgos", "symbol": "03", "label": "CRITERIO · COMUNICACIÓN", "title": "Presenta tus hallazgos al equipo", "short": "Convierte varias diferencias en una nota que otro miembro del equipo pueda revisar.", "duration": "45–60 min", "level": "Inicial", "skills": ["Documentación", "Comunicación", "Juicio profesional"], "intro": "Distingue lo que puedes demostrar de lo que todavía debes investigar.", "caseText": "Caso ficticio: una factura de 20.000 € se registró como venta el 29 de diciembre y la mercancía se expidió el 5 de enero. Todavía no has leído el contrato. Además, el inventario contable de un almacén asciende a 50.000 € y el recuento físico preliminar a 45.000 €, pendiente de conciliación. Debes comunicar las diferencias sin dar por demostrada una incorrección ni su causa.", "data": [["Venta registrada", "20.000 €"], ["Expedición", "5 de enero"], ["Inventario contable", "50.000 €"], ["Recuento preliminar", "45.000 €"]], "steps": ["Relaciona cada diferencia con la documentación disponible.", "Separa los hechos, las hipótesis y la información que falta.", "Prepara una nota para el responsable del equipo con los siguientes pasos."], "fields": ["Hechos y evidencias disponibles", "Posible efecto y cuestiones que siguen abiertas", "Comprobaciones siguientes y mensaje al equipo"], "deliverable": "Una nota de una página. Puedes acompañarla de una explicación grabada de un minuto."}], "people": [{"id": "CLH-054", "name": "Sebastián Vigueras Araya", "country": "Chile", "university": "Pontificia Universidad Católica de Chile", "area": "Ingeniería e innovación", "slug": "sebastian-vigueras-araya", "image": "assets/sebastian-vigueras.webp", "linkedIn": "https://www.linkedin.com/in/sebasti%C3%A1n-vigueras-araya-6680b9295/"}, {"id": "CLH-026", "name": "Kevin Luna Palacios", "country": "El Salvador", "university": "ESEN", "area": "Software y ciberseguridad", "slug": "kevin-elias-luna-palacios", "image": "assets/kevin-luna.webp", "linkedIn": "https://www.linkedin.com/in/kevin-luna-a0b024325/?locale=es"}, {"id": "CLH-056", "name": "Sthephany Cajamarca", "country": "Ecuador", "university": "UEES", "area": "Negocios Internacionales", "slug": "stephany-cajamarca", "image": "assets/stephany-cajamarca.svg", "linkedIn": "https://www.linkedin.com/in/stephany-cajamarca-7548ab3b0/"}, {"id": "CLH-008", "name": "Cristóbal Vargas Marchant", "country": "Chile", "university": "Universidad de Chile", "area": "Economía y finanzas", "slug": "cristobal-vargas-marchant", "image": "assets/cristobal-vargas.webp", "linkedIn": "https://www.linkedin.com/in/crist%C3%B3bal-vargas-marchant-4289151b5/"}, {"id": "CLH-034", "name": "Santiago Nariño Rivera", "country": "Colombia", "university": "Universidad del Rosario", "area": "Negocios y finanzas", "slug": "santiago-narino-rivera", "image": "assets/santiago-narino.jpeg", "linkedIn": "https://www.linkedin.com/in/santiago-nari%C3%B1o-rivera-10351429b/"}], "sources": [["Deloitte España", "https://www.deloitte.com/es/es.html", "Presentación de la firma y sus servicios."], ["Deloitte Challenges", "https://www.deloitte.com/es/es/careers/explore-your-fit/students/deloitte-challenges.html", "Financial Challenge de Audit & Assurance: casos IFRS y requisitos generales."], ["Financial Challenge Madrid 2026", "https://empleo.es.deloitte.com/job/Madrid-Deloittte-Financial-Challenge-Madrid-2026/1443085833/", "Convocatoria presencial publicada para el 26 de octubre de 2026."], ["Deloitte IFRS e-learning", "https://www.deloitte.com/global/en/services/audit-assurance-overview/services/ifrs-elearning.html", "Formación digital con teoría, escenarios y ejemplos comentados."], ["Deloitte-SMU Audit Analytics", "https://www.deloitte.com/southeast-asia/en/careers/explore-your-fit/students/audit-analytics.html", "Referencia de formación en analítica aplicada a auditoría."], ["Deloitte Omnia", "https://www.deloitte.com/latam/es/about/press-room/deloitte-lanza-capacidades-de-inteligencia-agentica-conectada.html", "Datos, IA y revisión profesional en auditoría."], ["Master in Audit and Business Analytics", "https://www.comillas.edu/noticias/nuevo-programa-in-company-de-comillas-icade/", "Programa presentado en 2021 por ICADE, Deusto y Deloitte."], ["Máster en Auditoría de Comillas", "https://www.comillas.edu/postgrados/master-universitario-en-auditoria-de-cuentas-y-contabilidad-superior/", "Normas, áreas de auditoría, ética y analítica."], ["Maestría en Auditoría de San Marcos", "https://posgradocontabilidad.unmsm.edu.pe/age/", "Riesgos, control interno y auditoría financiera."], ["Comunidad de Líderes Hispanoamericanos", "https://clhglobal.org/", "Identidad, universidades, perfiles y fotografías disponibles de los miembros."]]};
  const asset = path => window.BEWAY_DELOITTE_ASSETS?.[path] || path;
  DATA.people.forEach(person => { person.image = asset(person.image); });
  DATA.projects.forEach(project => { if (project.asset) project.asset = asset(project.asset); });
  const { modules, projects, people, sources } = DATA;
  const officialChallenge = 'https://www.deloitte.com/es/es/careers/explore-your-fit/students/deloitte-challenges.html';
  const challengeTerms = 'https://empleo.es.deloitte.com/job/Madrid-Deloittte-Financial-Challenge-Madrid-2026/1443085833/';
  const escapeText = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const external = (label, url, cls = 'btn outline') => `<a class="${cls}" href="${url}" target="_blank" rel="noopener">${label} <span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a>`;
  const dialog = root.querySelector('#detail-dialog');
  const body = root.querySelector('#dialog-body');
  let previousFocus;

  function show(kicker, html) {
    if (!dialog.open) previousFocus = document.activeElement;
    root.querySelector('#dialog-kicker').textContent = kicker;
    body.innerHTML = `<div class="dialog-inner">${html}</div>`;
    const title = body.querySelector('h2');
    if (title) title.id = 'dialog-title';
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('beway-deloitte-modal-open');
    dialog.scrollTop = 0;
    root.querySelector('[data-close]').focus();
  }
  function close() {
    dialog.close();
    document.body.classList.remove('beway-deloitte-modal-open');
    if (previousFocus?.isConnected) previousFocus.focus();
  }
  root.querySelector('[data-close]').addEventListener('click', close);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close();
  });


  function moduleHTML(m, i) {
    return `<details class="module"><summary><span class="module-number">${String(i + 1).padStart(2, '0')}</span><div class="module-summary-text"><h4>${m.title}</h4><small>60 min · 40 min de vídeo + 20 min de aplicación</small></div></summary><div class="module-content"><p>${m.description}</p><ul class="lesson-list">${m.lessons.map(t => `<li><span>${t}</span><span>10 min</span></li>`).join('')}</ul><p class="module-timing">Después de los vídeos: 20 minutos de práctica guiada o evaluación, incluidos en la hora del módulo.</p><span class="module-resource">Material de apoyo: ${m.resource}</span></div></details>`;
  }

  function openCourse() {
    show('DELOITTE EN BEWAY / PROGRAMA DEL CURSO', `
      <p class="eyebrow">CURSO DE AUDITORÍA FINANCIERA</p><h2>Comprende cómo se revisa<br>la información de una empresa.</h2>
      <p class="dialog-lead">Una introducción práctica al trabajo de auditoría, desde el conocimiento del negocio hasta la comunicación de conclusiones fundamentadas.</p>
      <div class="course-modal-intro"><span>8 horas en total</span><span>2 días de 4 horas</span><span>100 % asíncrono</span><span>Nivel inicial</span></div>
      <div class="time-breakdown"><div><strong>5 h 20 min</strong><span>vídeos grabados</span></div><div><strong>2 h 40 min</strong><span>práctica y evaluación</span></div><div><strong>8 módulos</strong><span>de una hora cada uno</span></div></div>
      <div class="detail-block"><h3>Un caso que avanza contigo</h3><p>Conecta Retail es una empresa ficticia que vende por internet en España, México y Colombia. Trabajarás con sus cuentas simplificadas, facturas y operaciones para identificar riesgos, seleccionar comprobaciones y reunir evidencias.</p><p>Cada módulo contiene cuatro vídeos de diez minutos y veinte minutos de aplicación. Puedes pausar y retomar el contenido; el itinerario se distribuye en dos días de cuatro horas. Se recomiendan conocimientos básicos de contabilidad.</p></div>
      <div class="journey-head"><span>DÍA 1 · 4 HORAS EN TOTAL</span><h3>Entender la empresa y planificar la revisión</h3></div>${modules.slice(0, 4).map(moduleHTML).join('')}
      <div class="journey-head"><span>DÍA 2 · 4 HORAS EN TOTAL</span><h3>Comprobar evidencias y comunicar conclusiones</h3></div>${modules.slice(4).map((m, i) => moduleHTML(m, i + 4)).join('')}
      <div class="certificate-box"><span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg></span><div><h3>Acreditación de superación propuesta a Deloitte</h3><p>La propuesta contempla que Deloitte valide el programa y participe en las grabaciones y la acreditación. Para superar el curso se plantea completar los ocho módulos, resolver el caso y obtener al menos un 80 % en una evaluación de diez preguntas.</p></div></div>
      <div class="detail-block"><h3>Qué te llevarías al terminar</h3><p>Un archivo de comprobaciones y una nota de conclusiones que relacione los riesgos identificados, las evidencias obtenidas y las preguntas pendientes. Las actividades y la evaluación están incluidas en las ocho horas.</p><p>El curso introduce conceptos de NIIF/IFRS y NIA y utiliza Excel para practicar. Es una aproximación inicial al trabajo de auditoría. El uso de Omnia se presenta como referencia de Deloitte; no requiere acceso a su plataforma.</p></div>
      <div class="dialog-actions"><a class="btn primary" href="${asset('assets/programa-auditoria-deloitte.txt')}" download="Programa-Auditoria-Deloitte-BEWAY.txt">Descargar programa <span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-7-7 7 7 7-7"/></svg></span></a></div>
      <p class="demo-context">Propuesta académica BEWAY para presentar a Deloitte. El programa, las grabaciones, la acreditación y la inscripción están sujetos a su validación.</p>`);
  }

  function openChallenge() {
    show('DELOITTE ESPAÑA / CHALLENGE OFICIAL', `
      <p class="eyebrow">FINANCIAL CHALLENGE · AUDIT & ASSURANCE</p><h2>Resuelve un caso<br>con profesionales de Deloitte.</h2>
      <p class="dialog-lead">Una iniciativa de Deloitte España en la que los participantes trabajan en equipo sobre casos financieros y ponen en práctica su criterio y capacidad de análisis.</p>
      <div class="course-modal-intro"><span>España</span><span>Trabajo en equipo</span><span>Casos basados en IFRS</span></div>
      <div class="challenge-scope"><strong>Participación según convocatoria</strong>La página general se dirige a estudiantes de último o penúltimo curso de titulaciones financieras. Cada edición concreta sus perfiles, lugar y condiciones de participación.</div>
      <div class="activity-block"><h3>Qué puedes encontrar</h3><ol><li>Un caso financiero para analizar con estudiantes de otras universidades.</li><li>Trabajo en equipo y acompañamiento de profesionales de Audit & Assurance.</li><li>Decisiones justificadas y feedback sobre tu forma de resolver el caso.</li></ol></div>
      <div class="event-box"><p class="eyebrow">CONVOCATORIA PUBLICADA · MADRID 2026</p><h3>26 de octubre de 2026</h3><p>Edición presencial en las oficinas de Deloitte en Madrid, dirigida a estudiantes de último curso y recién graduados según el anuncio. Deloitte indica que la jornada puede permitir iniciar su proceso de selección. La inscripción y admisión se gestionan en sus canales oficiales.</p></div>
      <div class="dialog-actions">${external('Ver la iniciativa oficial', officialChallenge, 'btn primary')}${external('Consultar Madrid 2026', challengeTerms)}</div>
      <p class="section-note">Consulta el calendario y los requisitos antes de solicitar tu participación. BEWAY propone dar visibilidad a la iniciativa; Deloitte organiza el evento y selecciona a los participantes.</p>`);
  }
  root.querySelector('#mini-projects-grid').innerHTML = projects.map(p => `<article class="mini-project"><div class="project-symbol" aria-hidden="true">${p.symbol}</div><p class="project-label">${p.label}</p><h3>${p.title}</h3><p>${p.short}</p><div class="project-skills">${p.skills.map(s => `<span>${s}</span>`).join('')}</div><div class="project-facts"><div><strong>${p.duration}</strong><small>orientativos</small></div><div><strong>Inicial</strong><small>dificultad</small></div><div><strong>Individual</strong><small>caso guiado</small></div></div><button data-project="${p.id}">Explorar miniproyecto <span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></button></article>`).join('');

  function readDraft(id) {
    try {
      const data = JSON.parse(localStorage.getItem('beway-deloitte-draft-' + id) || '{}');
      if (!data || typeof data !== 'object' || Array.isArray(data)) return {};
      return Object.fromEntries([0, 1, 2].map(i => ['answer' + i, typeof data['answer' + i] === 'string' ? data['answer' + i].slice(0, 5000) : '']));
    } catch { return {}; }
  }
  function openProject(id) {
    const p = projects.find(p => p.id === id);
    if (!p) return;
    const draft = readDraft(id);
    show('BEWAY / MINIPROYECTO DE PRÁCTICA', `<p class="eyebrow">${p.label}</p><h2>${p.title}</h2><p class="dialog-lead">${p.intro}</p><div class="course-modal-intro"><span>${p.duration} orientativos</span><span>Nivel inicial</span><span>Trabajo individual</span></div><div class="project-case"><h3>El caso</h3><p>${p.caseText}</p><div class="case-data">${p.data.map(([k, v]) => `<div>${k}<strong>${v}</strong></div>`).join('')}</div></div>${p.asset ? `<div class="project-download"><a class="btn outline" href="${p.asset}" download="BEWAY-Deloitte-operaciones.csv">${p.assetLabel} <span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-7-7 7 7 7-7"/></svg></span></a></div>` : ''}<div class="activity-block"><h3>Qué tienes que hacer</h3><ol>${p.steps.map(t => `<li>${t}</li>`).join('')}</ol><h3>Tu entrega</h3><p>${p.deliverable}</p></div><form class="project-form" data-project-form="${p.id}"><h3>Prepara tu borrador</h3>${p.fields.map((label, i) => `<div class="field"><label for="answer-${p.id}-${i}">${i + 1}. ${label}</label><textarea id="answer-${p.id}-${i}" name="answer${i}" rows="4" maxlength="5000" placeholder="Escribe tu respuesta...">${escapeText(draft['answer' + i] || '')}</textarea></div>`).join('')}<div class="dialog-actions"><button type="button" class="btn primary" data-save="${p.id}">Guardar borrador <span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg></span></button><button type="button" class="btn outline" data-export="${p.id}">Descargar trabajo <span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-7-7 7 7 7-7"/></svg></span></button></div><p class="project-save-status" role="status" aria-live="polite">${Object.values(draft).some(s => s.trim()) ? 'Borrador recuperado de este dispositivo.' : ''}</p><p class="project-storage-note">Tu borrador se guarda en este navegador. Puedes descargarlo para conservar una copia.</p></form>`);
  }
  function answers(form) {
    const fd = new FormData(form);
    return Object.fromEntries([0, 1, 2].map(i => ['answer' + i, String(fd.get('answer' + i) || '').slice(0, 5000)]));
  }
  function saveProject(form, id) {
    try {
      localStorage.setItem('beway-deloitte-draft-' + id, JSON.stringify(answers(form)));
      form.querySelector('.project-save-status').textContent = 'Borrador guardado en este dispositivo.';
    } catch { form.querySelector('.project-save-status').textContent = 'El navegador no permite guardar el borrador. Descarga tu trabajo para conservarlo.'; }
  }
  function exportProject(form, id) {
    const p = projects.find(p => p.id === id);
    const data = answers(form);
    const text = ['BEWAY · PRÁCTICA DE AUDITORÍA', p.title, '', 'Caso ficticio. Borrador de trabajo.', '', ...p.fields.flatMap((label, i) => [(i + 1) + '. ' + label, data['answer' + i] || '(Sin respuesta)', ''])].join('\n');
    const url = URL.createObjectURL(new Blob([text], {type: 'text/plain;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url; link.download = 'BEWAY-Deloitte-' + id + '.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    form.querySelector('.project-save-status').textContent = 'Tu trabajo está preparado para descargar.';
  }

  root.querySelector('#ambassadors-grid').innerHTML = people.map(p => `<article class="ambassador"><div class="member-photo ${p.slug === 'sebastian-vigueras-araya' ? 'member-photo-sebastian' : ''}"><img src="${p.image}" alt="${escapeText(p.name)}" width="78" height="78" loading="lazy"></div><span class="member-badge">CLH</span><h3>${escapeText(p.name)}</h3><p>${escapeText(p.university)}</p><span class="campus">${escapeText(p.country)} · ${escapeText(p.area)}</span><button class="text-button" data-person="${p.slug}">Conocer perfil <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></button></article>`).join('');
  function openPerson(slug) {
    const p = people.find(p => p.slug === slug);
    if (!p) return;
    show('BEWAY / COMUNIDAD CLH', `<div class="member-profile-top"><div class="member-photo ${p.slug === 'sebastian-vigueras-araya' ? 'member-photo-sebastian' : ''}"><img src="${p.image}" alt="${escapeText(p.name)}" width="104" height="104"></div><div><h2>${escapeText(p.name)}</h2><p>${escapeText(p.university)} · ${escapeText(p.country)}</p><span class="member-badge">MIEMBRO DE CLH</span></div></div><div class="chips"><span>${escapeText(p.area)}</span></div><div class="detail-block"><h3>Su papel propuesto en BEWAY</h3><p>Acercar el curso y las actividades al campus, orientar a otros estudiantes y recoger sus preguntas e ideas. La difusión del Financial Challenge respetaría el ámbito y los requisitos de cada convocatoria de Deloitte España.</p></div><div class="dialog-actions">${external('Ver LinkedIn', p.linkedIn, 'btn primary')}${external('Conocer CLH', 'https://clhglobal.org/')}</div><p class="section-note">Perfil público de CLH incluido en la propuesta de embajadores BEWAY.</p>`);
  }


  function openInfo(id) {
    const info = {
      auditoria: { title: 'Comprender la empresa antes de comprobar sus cifras', lead: 'La auditoría financiera requiere entender el negocio, evaluar riesgos y reunir evidencias que permitan fundamentar las conclusiones.', text: 'El curso propone seguir ese recorrido con un caso sencillo: conocer la empresa, planificar, seleccionar comprobaciones y documentar los resultados.', links: [['Conocer Deloitte', 'https://www.deloitte.com/es/es.html']] },
      digital: { title: 'Los datos ayudan a decidir dónde mirar', lead: 'Deloitte integra capacidades de datos e inteligencia artificial en Omnia, su plataforma global de Auditoría y Assurance.', text: 'Nuestra propuesta introduce comprobaciones en Excel y el análisis de anomalías. La tecnología ayuda a revisar información; sus resultados necesitan supervisión y juicio profesional.', links: [['Conocer Omnia', 'https://www.deloitte.com/latam/es/about/press-room/deloitte-lanza-capacidades-de-inteligencia-agentica-conectada.html'], ['Deloitte-SMU Audit Analytics', 'https://www.deloitte.com/southeast-asia/en/careers/explore-your-fit/students/audit-analytics.html']] },
      carrera: { title: 'Explora tu siguiente paso en auditoría', lead: 'Deloitte publica oportunidades de prácticas y primer empleo y cuenta con referencias de formación en auditoría y análisis de datos.', text: 'Puedes conocer las oportunidades para estudiantes y explorar sus recursos digitales sobre normas internacionales de información financiera.', links: [['Estudiantes y primer empleo', 'https://www.deloitte.com/es/es/careers/explore-your-fit/estudiantes-y-primer-empleo.html'], ['Deloitte IFRS e-learning', 'https://www.deloitte.com/global/en/services/audit-assurance-overview/services/ifrs-elearning.html']] }
    }[id];
    if (info) show('DELOITTE / CONOCE LA FIRMA', `<h2>${info.title}</h2><p class="dialog-lead">${info.lead}</p><div class="detail-block"><p>${info.text}</p></div><div class="dialog-actions">${info.links.map(([t, u]) => external(t, u)).join('')}</div>`);
  }

  function openSources() {
    show('DELOITTE EN BEWAY / FUENTES Y ALCANCE', `<p class="eyebrow">REFERENCIAS OFICIALES</p><h2>Conoce la base<br>de esta propuesta.</h2><p class="dialog-lead">Ficha de colaboración preparada por BEWAY. El curso, los miniproyectos y la selección de embajadores se presentan como propuestas. Financial Challenge es una iniciativa publicada por Deloitte España.</p><ul class="sources-list">${sources.map(([t, u, note], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><div><a href="${u}" target="_blank" rel="noopener">${t} <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a><small>${note}</small></div></li>`).join('')}</ul><p class="sources-note">Información consultada el 22 de octubre de 2026. Las condiciones y la vigencia del challenge se comprueban en los canales oficiales de Deloitte. Los miniproyectos utilizan datos ficticios. Los perfiles de CLH respaldan la identificación de los miembros; su inclusión no atribuye una relación laboral con Deloitte.</p>`);
  }
  root.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.hasAttribute('data-course')) openCourse();
    else if (button.hasAttribute('data-challenge')) openChallenge();
    else if (button.hasAttribute('data-sources')) openSources();
    else if (button.dataset.info) openInfo(button.dataset.info);
    else if (button.dataset.project) openProject(button.dataset.project);
    else if (button.dataset.person) openPerson(button.dataset.person);
    else if (button.dataset.save) saveProject(button.closest('form'), button.dataset.save);
    else if (button.dataset.export) exportProject(button.closest('form'), button.dataset.export);
  });
  root.addEventListener('submit', event => {
    const form = event.target.closest('[data-project-form]');
    if (!form) return;
    event.preventDefault(); saveProject(form, form.dataset.projectForm);
  });

  const nav = [...root.querySelectorAll('.section-nav a')];
  const sections = nav.map(a => root.querySelector(a.getAttribute('href')));
  let ticking = false;
  function updateNav() {
    let index = 0;
    sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= 180) index = i; });
    nav.forEach((a, i) => {
      a.classList.toggle('active', i === index);
      if (i === index) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(updateNav); } }, {passive: true});
  updateNav();
})();

