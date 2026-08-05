/* ============================================================
   ZenUp – Lógica principal
   LocalStorage como base de datos offline-first
   ============================================================ */

'use strict';

// ── DATOS INICIALES ───────────────────────────────────────────
const DIAS = ['LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADO'];
const DIA_MAP = { 0:'DOMINGO', 1:'LUNES', 2:'MARTES', 3:'MIÉRCOLES', 4:'JUEVES', 5:'VIERNES', 6:'SÁBADO' };

const CATALOGO_INICIAL = [
  { id:'1089614', codigo:'1089614', nombre:'CHRZ. IDEAL RICA X 1000 G',    precio:28373, categoria:'CHORIZO' },
  { id:'1089617', codigo:'1089617', nombre:'CHRZ. IDEAL RICA X 200 G',     precio:6950,  categoria:'CHORIZO' },
  { id:'1089615', codigo:'1089615', nombre:'CHRZ. IDEAL RICA X 400 G',     precio:13511, categoria:'CHORIZO' },
  { id:'1038382', codigo:'1038382', nombre:'CHRZ. RANCHERA X 520 G',       precio:23839, categoria:'CHORIZO' },
  { id:'1080677', codigo:'1080677', nombre:'CHRZ. SANTARROSANO ZENU X 250G', precio:9134, categoria:'CHORIZO' },
  { id:'1080678', codigo:'1080678', nombre:'CHRZ. SANTARROSANO ZENU X 480G', precio:17455, categoria:'CHORIZO' },
  { id:'1063597', codigo:'1063597', nombre:'CHRZ. TERNERA GDE. ZENU X 450 G', precio:19418, categoria:'CHORIZO' },
  { id:'1083633', codigo:'1083633', nombre:'CHRZ. TERNERA ZENU X 250G',    precio:10354, categoria:'CHORIZO' },
  { id:'1063595', codigo:'1063595', nombre:'CHRZ. TERNERA ZENU X 440 G',   precio:18222, categoria:'CHORIZO' },
  { id:'1042549', codigo:'1042549', nombre:'EMPA. CNE. ZENU X 180G',       precio:9813,  categoria:'EMPANADA' },
  { id:'1070250', codigo:'1070250', nombre:'EMPA. CNE. ZENZ X 420G',       precio:21726, categoria:'EMPANADA' },
  { id:'1070199', codigo:'1070199', nombre:'EMPA. CNE. ZENZ X 500 G',      precio:25354, categoria:'EMPANADA' },
  { id:'1075722', codigo:'1075722', nombre:'EMPANADA COCTEL ZENU X 300G',  precio:9702,  categoria:'EMPANADA' },
  { id:'1080896', codigo:'1080896', nombre:'HAMBURG. PROFS. ZENU X 500G',  precio:14661, categoria:'HAMBURGUESA' },
  { id:'1000878', codigo:'1000878', nombre:'HAMBURG. RANCHERA X 130 G',    precio:6456,  categoria:'HAMBURGUESA' },
  { id:'1000873', codigo:'1000873', nombre:'HAMBURG. RANCHERA X 400 G',    precio:24534, categoria:'HAMBURGUESA' },
  { id:'1060292', codigo:'1060292', nombre:'HAMBURG. RICA X 900 G',        precio:24200, categoria:'HAMBURGUESA' },
  { id:'1012544', codigo:'1012544', nombre:'HAMBURG. ZENU X 3 KG',        precio:102513, categoria:'HAMBURGUESA' },
  { id:'1020417', codigo:'1020417', nombre:'HAMBURG. ZENU X 400 G',        precio:22796, categoria:'HAMBURGUESA' },
  { id:'1028548', codigo:'1028548', nombre:'JAMON RICACHEF RICA X 500G',   precio:16888, categoria:'JAMÓN' },
  { id:'1000418', codigo:'1000418', nombre:'JMN. IDEAL RICA X 230 G',      precio:8215,  categoria:'JAMÓN' },
  { id:'1009621', codigo:'1009621', nombre:'JMN. IDEAL RICA X 400 G',      precio:11760, categoria:'JAMÓN' },
  { id:'1044596', codigo:'1044596', nombre:'JMN. PIETRAN ESTD. 167G SIN C', precio:10230, categoria:'JAMÓN' },
  { id:'1035356', codigo:'1035356', nombre:'JMN. PIETRAN ESTD. 230 G SIN C', precio:13608, categoria:'JAMÓN' },
  { id:'1035355', codigo:'1035355', nombre:'JMN. PIETRAN ESTD. X 100 G SIN C', precio:5692, categoria:'JAMÓN' },
  { id:'1033261', codigo:'1033261', nombre:'JMN. SDW ZENU X 111G',         precio:4555,  categoria:'JAMÓN' },
  { id:'1000395', codigo:'1000395', nombre:'JMN. SDW. ZENU X 230 G',       precio:8932,  categoria:'JAMÓN' },
  { id:'1000445', codigo:'1000445', nombre:'JMN. SDW. ZENU X 450 G',       precio:18280, categoria:'JAMÓN' },
  { id:'1082840', codigo:'1082840', nombre:'FILETE DE TRUCHA PIETRAN X 420G', precio:25000, categoria:'MARISCOS' },
  { id:'1052999', codigo:'1052999', nombre:'LGNA. ZENU CNE. X 320G NP',    precio:17374, categoria:'LASAÑA' },
  { id:'1053001', codigo:'1053001', nombre:'LGNA. ZENU MIXTA X 320G NP',   precio:17374, categoria:'LASAÑA' },
  { id:'1053000', codigo:'1053000', nombre:'LGNA. ZENU PLL. X 320G NP',    precio:17374, categoria:'LASAÑA' },
  { id:'1000548', codigo:'1000548', nombre:'MORCILLA ZENU X 500 G',        precio:14692, categoria:'MORCILLA' },
  { id:'1079080', codigo:'1079080', nombre:'MORTADELA RAPIYA PRECOCIDA RICA X 300G', precio:6290, categoria:'MORTADELA' },
  { id:'1000555', codigo:'1000555', nombre:'MTDELA. RICA X 250 G',         precio:5817,  categoria:'MORTADELA' },
  { id:'1000577', codigo:'1000577', nombre:'MTDELA. RICA X 450 G',         precio:8673,  categoria:'MORTADELA' },
  { id:'1001155', codigo:'1001155', nombre:'MTDELA. TRADI. ZENU X 100 G',  precio:3168,  categoria:'MORTADELA' },
  { id:'1000581', codigo:'1000581', nombre:'MTDELA. TRADI. ZENU X 250 G',  precio:6468,  categoria:'MORTADELA' },
  { id:'1000582', codigo:'1000582', nombre:'MTDELA. TRADI. ZENU X 450 G',  precio:10427, categoria:'MORTADELA' },
  { id:'1000571', codigo:'1000571', nombre:'MTDELA. ZENU PLL. X 250 G',    precio:6783,  categoria:'MORTADELA' },
  { id:'1000572', codigo:'1000572', nombre:'MTDELA. ZENU PLL. X 450 G',    precio:10731, categoria:'MORTADELA' },
  { id:'1062716', codigo:'1062716', nombre:'NUGGETS PLL. APAN. ZENU X 160G', precio:11626, categoria:'NUGGETS' },
  { id:'1062717', codigo:'1062717', nombre:'NUGGETS PLL. APAN. ZENU X 320G', precio:19242, categoria:'NUGGETS' },
  { id:'1064512', codigo:'1064512', nombre:'PALITOS PLL. APAN. ZENU X 330G', precio:21004, categoria:'APANADOS' },
  { id:'1064514', codigo:'1064514', nombre:'PALITOS PLL. APAN. ZENU X 608G', precio:36521, categoria:'APANADOS' },
  { id:'2012795', codigo:'2012795', nombre:'PAPAS DELGADAS ZENU 500 GR',   precio:9068,  categoria:'PAPAS' },
  { id:'2012794', codigo:'2012794', nombre:'PAPAS DELGADAS ZENU 900 GR',   precio:14982, categoria:'PAPAS' },
  { id:'2012050', codigo:'2012050', nombre:'PAPAS EN CASCOS ZENU 1 KG',    precio:16755, categoria:'PAPAS' },
  { id:'2012051', codigo:'2012051', nombre:'PAPAS EN CASCOS ZENU 500G',    precio:9294,  categoria:'PAPAS' },
  { id:'1075721', codigo:'1075721', nombre:'PASTEL DE POLLO ZENU X 300G',  precio:9744,  categoria:'PASTELES' },
  { id:'1031534', codigo:'1031534', nombre:'SALCH. RANCHERA X 230 G 7UN',  precio:13817, categoria:'SALCHICHA' },
  { id:'1031533', codigo:'1031533', nombre:'SALCH. RANCHERA X 480 G',      precio:25020, categoria:'SALCHICHA' },
  { id:'1012331', codigo:'1012331', nombre:'SALCH. RICA X 500 G',          precio:12357, categoria:'SALCHICHA' },
  { id:'1000852', codigo:'1000852', nombre:'SALCH. TRADI. ZENU X 225 G',   precio:8104,  categoria:'SALCHICHA' },
  { id:'1000853', codigo:'1000853', nombre:'SALCH. TRADI. ZENU X 450 G',   precio:14998, categoria:'SALCHICHA' },
  { id:'1000814', codigo:'1000814', nombre:'SALCH. ZENU POP X 1 KG',       precio:27662, categoria:'SALCHICHA' },
  { id:'1017925', codigo:'1017925', nombre:'SALCH. SP. PERRO ZENU X 1280 G', precio:48275, categoria:'SALCHICHA' },
  { id:'1012347', codigo:'1012347', nombre:'SALCH. SP. PERRO ZENU X 640 G', precio:26118, categoria:'SALCHICHA' },
  { id:'1000820', codigo:'1000820', nombre:'SALCH. LONG ZENU LB.',         precio:15534, categoria:'SALCHICHA' },
  { id:'1000821', codigo:'1000821', nombre:'SALCH. LONG ZENU X 2.2 KG',    precio:56740, categoria:'SALCHICHA' },
  { id:'1015605', codigo:'1015605', nombre:'SALCH. PERRO CLNTE. ZENU X 240G', precio:8682, categoria:'SALCHICHA' },
  { id:'1012343', codigo:'1012343', nombre:'SALCH. PERRO CLNTE. ZENU X 480 G', precio:17347, categoria:'SALCHICHA' },
  { id:'1000862', codigo:'1000862', nombre:'SCHON. RICA X 250 G',          precio:3691,  categoria:'SALCHICHÓN' },
  { id:'1040683', codigo:'1040683', nombre:'SCHON. RICA X 480 G',          precio:6605,  categoria:'SALCHICHÓN' },
  { id:'1040684', codigo:'1040684', nombre:'SCHON. RICA X 850 G',          precio:7979,  categoria:'SALCHICHÓN' },
  { id:'1000889', codigo:'1000889', nombre:'SCHON. TRADI. ZENU X 225 G',   precio:4704,  categoria:'SALCHICHÓN' },
  { id:'1000890', codigo:'1000890', nombre:'SCHON. TRADI. ZENU X 450 G',   precio:8001,  categoria:'SALCHICHÓN' },
  { id:'1040682', codigo:'1040682', nombre:'SCHON. TRADI. ZENU X 620 G',   precio:8778,  categoria:'SALCHICHÓN' },
  { id:'1040681', codigo:'1040681', nombre:'SCHON. TRADI. ZENU X 850 G',   precio:11393, categoria:'SALCHICHÓN' },
  { id:'1040851', codigo:'1040851', nombre:'SCHON. CERVERONI ZENU X 500G', precio:14228, categoria:'SALCHICHÓN' },
  { id:'1040852', codigo:'1040852', nombre:'SCHON. CERVERONI ZENU X 1000 G', precio:24707, categoria:'SALCHICHÓN' },
  { id:'1000872', codigo:'1000872', nombre:'SCHON. ZENU PLL. X 250 G',     precio:5072,  categoria:'SALCHICHÓN' },
  { id:'1000871', codigo:'1000871', nombre:'SCHON. ZENU PLL. X 500 G',     precio:9681,  categoria:'SALCHICHÓN' },
  { id:'1000860', codigo:'1000860', nombre:'SCHON. ZENU PLL. X 750 G',     precio:12432, categoria:'SALCHICHÓN' },
  { id:'1044566', codigo:'1044566', nombre:'TCTA. RICACHEF RICA X 250 GR', precio:16555, categoria:'TOCINETA' },
  { id:'1075645', codigo:'1075645', nombre:'TOCINETA RICA X 120G',         precio:8562,  categoria:'TOCINETA' },
  { id:'1037764', codigo:'1037764', nombre:'VEGGIE BITES PIETRAN 200 G',   precio:14998, categoria:'VEGGIE' },
  { id:'1037765', codigo:'1037765', nombre:'VEGGIE BURGER PIETRAN 360 G',  precio:23353, categoria:'VEGGIE' },
  { id:'1051494', codigo:'1051494', nombre:'SCHON. CERVEC. RICA X 450 G',  precio:8883,  categoria:'SALCHICHÓN' },
  { id:'1032954', codigo:'1032954', nombre:'SCHON. CERVEC. RICA X 700 G',  precio:13734, categoria:'SALCHICHÓN' },
  { id:'1028494', codigo:'1028494', nombre:'SCHON. CERVEC. PREMIUM RANCHERA X 480 G', precio:21641, categoria:'SALCHICHÓN' },
  { id:'1059834', codigo:'1059834', nombre:'PRACTI SANDUCHE ZENU X 388 G', precio:26646, categoria:'OTROS' },
  { id:'1016004', codigo:'1016004', nombre:'PRACTICARNE ZENU X 200G',      precio:8493,  categoria:'OTROS' },
  { id:'1058591', codigo:'1058591', nombre:'MASA DE HOJALDRE HORN. ZENU 500G', precio:13817, categoria:'OTROS' },
];

// ── STORAGE ──────────────────────────────────────────────────
const DB = {
  get: (key, def = []) => { try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  getObj: (key, def = {}) => { try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; } }
};

function getSemanaNum(fechaStr) {
  if (!fechaStr) return 1;
  const parts = fechaStr.split('-');
  if (parts.length < 3) return 1;
  const dayOfMonth = parseInt(parts[2], 10);
  if (isNaN(dayOfMonth)) return 1;
  if (dayOfMonth <= 7) return 1;
  if (dayOfMonth <= 14) return 2;
  if (dayOfMonth <= 21) return 3;
  return 4;
}

function loadTrabajadores() { return DB.get('ap_trabajadores', []); }
function saveTrabajadores(d) { DB.set('ap_trabajadores', d); }

function getSession() { return DB.getObj('ap_session', null); }
function setSession(sess) { DB.set('ap_session', sess); }
function logout() {
  localStorage.removeItem('ap_session');
  location.reload();
}

function loadClientes(all = false) {
  const list = DB.get('ap_clientes', []);
  const sess = getSession();
  if (all || !sess || sess.rol === 'admin') return list;
  // Cada trabajador solo ve sus propios clientes asignados
  return list.filter(c => c.trabajadorId === sess.cedula);
}
function saveClientes(d) { DB.set('ap_clientes', d); }
function loadProductos() {
  const p = DB.get('ap_productos', null);
  if (!p) { DB.set('ap_productos', CATALOGO_INICIAL); return CATALOGO_INICIAL; }
  return p;
}
function saveProductos(d) { DB.set('ap_productos', d); }
function loadVisitas() { return DB.get('ap_visitas', []); }
function saveVisitas(d) { DB.set('ap_visitas', d); }
function loadConfig() { return DB.getObj('ap_config', { codigo: '', nombre: 'Asesor', zona: '' }); }
function saveConfig(d) { DB.set('ap_config', d); }

// ── UTILS ─────────────────────────────────────────────────────
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function fmt$(n) {
  if (!n && n !== 0) return '-';
  return '$ ' + Number(n).toLocaleString('es-CO');
}
function todayISO() { return new Date().toISOString().split('T')[0]; }
function todayDia() { return DIA_MAP[new Date().getDay()] || 'LUNES'; }
function diasLabel(d) {
  const m = { LUNES:'Lun', MARTES:'Mar', 'MIÉRCOLES':'Mié', JUEVES:'Jue', VIERNES:'Vie', 'SÁBADO':'Sáb' };
  return m[d] || d;
}
function fmtDate(iso) {
  if (!iso) return '';
  const [y,m,d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ── ESTADO ACTUAL ─────────────────────────────────────────────
let currentView = 'dashboard';
let visitaProductos = []; // productos en el modal de visita abierto

// ── LOGIN HANDLERS ────────────────────────────────────────────
function checkLogin() {
  const sess = getSession();
  const loginOverlay = document.getElementById('loginOverlay');
  if (!sess) {
    if (loginOverlay) loginOverlay.classList.remove('hidden');
  } else {
    if (loginOverlay) loginOverlay.classList.add('hidden');
    renderPerfil();
    renderDashboard();
  }
}

function handleLogin(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('loginCedula');
  const ced = input ? input.value.trim() : '';
  if (!ced) {
    showToast('Ingresa una cédula válida', 'error');
    return;
  }

  if (ced === '0000') {
    setSession({ cedula: '0000', nombre: 'Administrador General', zona: 'Todas las zonas', rol: 'admin' });
    showToast('¡Bienvenido Administrador! 👑', 'success');
    checkLogin();
    // Subir todos los datos locales al servidor en segundo plano
    setTimeout(() => {
      if (typeof uploadAllLocalData === 'function') uploadAllLocalData();
    }, 1500);
    return;
  }

  const trabajadores = loadTrabajadores();
  const t = trabajadores.find(x => x.cedula === ced);
  if (t) {
    setSession({ cedula: t.cedula, codigoVentas: t.codigoVentas || '', nombre: t.nombre, zona: t.zona || 'Zona General', rol: 'trabajador' });
    showToast(`¡Bienvenido ${t.nombre}! 👋`, 'success');
    checkLogin();
    // Sincronizar visitas del asesor
    setTimeout(() => {
      if (typeof fullSync === 'function') fullSync();
    }, 1500);
  } else {
    showToast('Cédula no registrada. Contacta al Administrador.', 'error');
  }
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Asegurar catálogo
  loadProductos();

  // Ocultar splash
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    checkLogin();
  }, 1200);

  // Formulario de login por Cédula
  const loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);

  // Botón logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  // PWA offline detection
  function updateOnline() {
    const b = document.getElementById('offlineBadge');
    if (b) b.style.display = navigator.onLine ? 'none' : 'flex';
  }
  window.addEventListener('online', updateOnline);
  window.addEventListener('offline', updateOnline);
  updateOnline();

  // Menú sidebar
  document.getElementById('menuBtn').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  // Nav items
  document.querySelectorAll('.nav-item[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(el.dataset.view);
      closeSidebar();
    });
  });

  // FAB
  document.getElementById('fab').addEventListener('click', () => {
    openVisitaModal(null);
  });

  // Settings btn sidebar
  document.getElementById('settingsBtn').addEventListener('click', () => {
    closeSidebar();
    openConfigModal();
  });

  // Modales – cerrar
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });
  document.querySelectorAll('.modal-bg').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); });
  });

  // Botón Nuevo Cliente
  document.getElementById('addClienteBtn').addEventListener('click', () => openClienteModal(null));

  // Guardar cliente
  document.getElementById('saveClienteBtn').addEventListener('click', saveCliente);

  // Botones e inputs de Trabajadores (Admin)
  const addTrabajadorBtn = document.getElementById('addTrabajadorBtn');
  if (addTrabajadorBtn) addTrabajadorBtn.addEventListener('click', () => openTrabajadorModal(null));
  const saveTrabajadorBtn = document.getElementById('saveTrabajadorBtn');
  if (saveTrabajadorBtn) saveTrabajadorBtn.addEventListener('click', saveTrabajador);
  const searchTrabajador = document.getElementById('searchTrabajador');
  if (searchTrabajador) searchTrabajador.addEventListener('input', e => renderTrabajadores(e.target.value));

  // Botón Nuevo Producto catálogo
  document.getElementById('addProductoBtn').addEventListener('click', () => openProductoModal(null));
  document.getElementById('saveProductoBtn').addEventListener('click', saveProducto);

  // Búsqueda clientes
  document.getElementById('searchCliente').addEventListener('input', e => renderClientes(e.target.value));

  // Búsqueda productos catálogo
  document.getElementById('searchProducto').addEventListener('input', e => renderProductos(e.target.value));

  // Filtro en tabla de visita
  document.getElementById('filterVisitaProductos').addEventListener('input', e => {
    renderVisitaTable(e.target.value.trim());
  });

  // Guardar visita
  document.getElementById('completeVisitaBtn').addEventListener('click', () => {
    const totalProductos = visitaProductos.filter(vp => vp.pedira > 0 || vp.tiene > 0 || vp.agotado > 0 || vp.vencido > 0).length;
    const msg = totalProductos > 0
      ? `¿Marcar visita como completada?\n${totalProductos} producto(s) con datos registrados.`
      : '¿Completar visita sin productos registrados?';
    if (confirm(msg)) saveVisita('completada');
  });
  document.getElementById('saveDraftBtn').addEventListener('click', () => saveVisita('pendiente'));

  // Config
  document.getElementById('saveConfigBtn').addEventListener('click', saveConfigData);
  document.getElementById('btnClearData').addEventListener('click', clearAllData);

  document.getElementById('dashDate').textContent = new Date().toLocaleDateString('es-CO', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
});

// ── NAVEGACIÓN ────────────────────────────────────────────────
function navigateTo(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item[data-view]').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) el.classList.add('active');
  const nav = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (nav) nav.classList.add('active');
  currentView = view;
  if (view === 'dashboard') renderDashboard();
  if (view === 'trabajadores') renderTrabajadores();
  if (view === 'clientes') renderClientes();
  if (view === 'visitas') renderVisitasHoy();
  if (view === 'semana') renderSemana();
  if (view === 'productos') renderProductos();
  if (view === 'reportes') renderReportes();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ── PERFIL ────────────────────────────────────────────────────
function renderPerfil() {
  const sess = getSession();
  if (!sess) return;
  const inicial = (sess.nombre || 'A')[0].toUpperCase();
  document.getElementById('profileAvatar').textContent = inicial;
  document.getElementById('profileName').textContent = sess.nombre;
  if (sess.rol === 'admin') {
    document.getElementById('profileZona').textContent = '👑 Administrador General';
  } else {
    const cod = sess.codigoVentas ? `Cód. ${sess.codigoVentas}` : `CC: ${sess.cedula}`;
    document.getElementById('profileZona').textContent = `📋 Asesor Comercial: ${cod}`;
  }
  if (sess.rol === 'trabajador') {
    document.body.classList.add('is-trabajador');
  } else {
    document.body.classList.remove('is-trabajador');
  }
}

// ── DASHBOARD ─────────────────────────────────────────────────
function renderDashboard() {
  const sess = getSession();
  if (!sess) return;

  const hoy = todayISO();
  const diaHoy = todayDia();

  if (sess.rol === 'admin') {
    renderAdminDashboard();
    return;
  }

  // TRABAJADOR DASHBOARD
  const clientes = loadClientes(); // Solo clientes de este trabajador
  const visitas = loadVisitas().filter(v => clientes.some(c => c.id === v.clienteId));

  const visitasHoy = visitas.filter(v => v.fecha === hoy);
  const completadas = visitasHoy.filter(v => v.estado === 'completada').length;
  const pendientes = visitasHoy.filter(v => v.estado === 'pendiente' || v.estado === 'en_curso').length;
  const clientesHoy = clientes.filter(c => c.dia === diaHoy).length;
  const totalPedido = visitasHoy.filter(v => v.estado === 'completada')
    .reduce((s, v) => s + (v.totalPedido || 0), 0);

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${clientesHoy}</div>
      <div class="stat-label">Mis Clientes Hoy</div>
    </div>
    <div class="stat-card green">
      <div class="stat-value">${completadas}</div>
      <div class="stat-label">Visitados</div>
    </div>
    <div class="stat-card red">
      <div class="stat-value">${pendientes}</div>
      <div class="stat-label">Pendientes</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-value">${fmt$(totalPedido)}</div>
      <div class="stat-label">Total Mi Pedido</div>
    </div>
  `;

  // Visitas de hoy
  const clientesDelDia = clientes.filter(c => c.dia === diaHoy);
  const dashDiv = document.getElementById('dashTodayVisits');
  if (clientesDelDia.length === 0) {
    dashDiv.innerHTML = emptyState('No tienes clientes asignados para hoy.', 'Los clientes creados o asignados por el Admin aparecerán aquí.');
  } else {
    dashDiv.innerHTML = clientesDelDia.map(c => {
      const vis = visitas.filter(v => v.clienteId === c.id && v.fecha === hoy);
      const last = vis.sort((a,b) => b.creadoEn - a.creadoEn)[0];
      const estado = last ? last.estado : 'sin_visita';
      return clienteVisitaCard(c, estado, last);
    }).join('');
    dashDiv.querySelectorAll('.btn-visit').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        openVisitaModal(btn.dataset.clienteId);
      });
    });
  }

  // Progreso semanal
  const semanaDiv = document.getElementById('dashWeekProgress');
  semanaDiv.innerHTML = '<div class="week-progress-grid">' +
    DIAS.map(dia => {
      const cnt = clientes.filter(c => c.dia === dia).length;
      const done = visitas.filter(v => {
        const cl = clientes.find(c => c.id === v.clienteId);
        return cl && cl.dia === dia && v.estado === 'completada';
      }).length;
      const isToday = dia === diaHoy;
      return `<div class="week-day-card${isToday ? ' today':''}">
        <div class="day-name">${diasLabel(dia)}</div>
        <div class="day-count">${cnt}</div>
        <div class="day-done">${done} ✓</div>
      </div>`;
    }).join('') + '</div>';
}

// ── DASHBOARD ADMIN (DRILL-DOWN: KPIs → Asesor → Cliente) ────
let adminSemanaFiltro = 1;

function renderAdminDashboard() {
  const todosClientes = DB.get('ap_clientes', []);
  const todasVisitas = DB.get('ap_visitas', []);
  const trabajadores = loadTrabajadores();
  const hoy = todayISO();
  const diaHoy = todayDia();

  // KPIs principales
  const visitasHoy = todasVisitas.filter(v => v.fecha === hoy);
  const completadasHoy = visitasHoy.filter(v => v.estado === 'completada').length;
  const clientesHoy = todosClientes.filter(c => c.dia === diaHoy).length;
  const ventaHoy = visitasHoy.filter(v => v.estado === 'completada').reduce((s, v) => s + (v.totalPedido || 0), 0);
  const pendientesHoy = todosClientes.filter(c => c.dia === diaHoy && !visitasHoy.some(v => v.clienteId === c.id && v.estado === 'completada')).length;
  const ventaTotal = todasVisitas.filter(v => v.estado === 'completada').reduce((s, v) => s + (v.totalPedido || 0), 0);
  const pctGlobal = clientesHoy ? Math.round((completadasHoy / clientesHoy) * 100) : 0;

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card green">
      <div class="stat-value">${fmt$(ventaHoy)}</div>
      <div class="stat-label">Venta Hoy</div>
    </div>
    <div class="stat-card ${pendientesHoy > 0 ? 'red' : 'green'}">
      <div class="stat-value">${pendientesHoy}</div>
      <div class="stat-label">Pendientes Hoy</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-value">${fmt$(ventaTotal)}</div>
      <div class="stat-label">Acumulado Mes</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${pctGlobal}%</div>
      <div class="stat-label">Cumplimiento Día</div>
    </div>
  `;

  // Ocultar bloque de semanas redundante
  const semanaDiv = document.getElementById('dashWeekProgress');
  if (semanaDiv) semanaDiv.innerHTML = '';

  // Cuadrícula interactiva de Asesores
  const dashDiv = document.getElementById('dashTodayVisits');
  if (!dashDiv) return;

  if (trabajadores.length === 0) {
    dashDiv.innerHTML = emptyState('No hay asesores registrados', 'Ve a "Trabajadores / Equipo" en el menú para agregar tu equipo.');
    return;
  }

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin: 16px 0 12px 0; flex-wrap:wrap; gap:8px;">
      <span style="font-size:1.05rem; font-weight:800; color:var(--gray-900);">👥 Equipo de Asesores</span>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button onclick="fullSync && fullSync()" class="btn-outline btn-sm">🔄 Sincronizar</button>
        <button onclick="uploadAllLocalData && uploadAllLocalData()" class="btn-primary btn-sm">☁️ Subir al servidor</button>
      </div>
    </div>
    <div class="admin-vendors-grid">`;

  trabajadores.forEach(t => {
    const cls = todosClientes.filter(c => c.trabajadorId === t.cedula);
    const clsHoy = cls.filter(c => c.dia === diaHoy);
    const vts = todasVisitas.filter(v => cls.some(c => c.id === v.clienteId));
    const vtsHoy = vts.filter(v => v.fecha === hoy);
    const doneHoy = vtsHoy.filter(v => v.estado === 'completada').length;
    const pendVend = clsHoy.length - doneHoy;
    const $hoy = vtsHoy.filter(v => v.estado === 'completada').reduce((s, v) => s + (v.totalPedido || 0), 0);
    const $acum = vts.filter(v => v.estado === 'completada').reduce((s, v) => s + (v.totalPedido || 0), 0);
    const pct = clsHoy.length ? Math.round((doneHoy / clsHoy.length) * 100) : 0;
    const inicial = (t.nombre || 'A')[0].toUpperCase();

    html += `
      <div class="admin-vendor-card" onclick="openAsesorPanel('${t.cedula}')">
        <div class="avc-top">
          <div class="avc-avatar">${inicial}</div>
          <div class="avc-info">
            <div class="avc-name">${t.nombre}</div>
            <div class="avc-zona">CC: ${t.cedula} · ${t.zona || 'Sin zona'}</div>
          </div>
          <div class="avc-badge ${pendVend > 0 ? 'warn' : 'ok'}">
            ${pendVend > 0 ? `⚠️ ${pendVend} pend.` : '✓ Al día'}
          </div>
        </div>
        <div class="avc-progress-wrap">
          <div class="avc-progress-bar" style="width:${pct}%"></div>
        </div>
        <div class="avc-bottom">
          <div class="avc-metric">
            <span class="lbl">Visitas Hoy</span>
            <span class="val">${doneHoy} / ${clsHoy.length} (${pct}%)</span>
          </div>
          <div class="avc-metric text-right">
            <span class="lbl">Venta Hoy</span>
            <span class="val highlight">${fmt$($hoy)}</span>
          </div>
        </div>
        <div class="avc-footer">
          <span>Acumulado: <strong>${fmt$($acum)}</strong> (${cls.length} clientes)</span>
          <span class="avc-arrow">Ver detalle ›</span>
        </div>
      </div>`;
  });

  html += '</div>';
  dashDiv.innerHTML = html;
}

function setAdminSemana(semanaNum) {
  adminSemanaFiltro = semanaNum;
  renderAdminDashboard();
}

// ── DRILL-DOWN: PANEL DEL ASESOR ─────────────────────────────
let asesorPanelSemana = 1;
let asesorPanelDia = '';

function openAsesorPanel(cedula) {
  const trabajadores = loadTrabajadores();
  const t = trabajadores.find(x => x.cedula === cedula);
  if (!t) return;

  const todosClientes = DB.get('ap_clientes', []);
  const todasVisitas = DB.get('ap_visitas', []);
  const clsAsesor = todosClientes.filter(c => c.trabajadorId === cedula);
  const vtsAsesor = todasVisitas.filter(v => clsAsesor.some(c => c.id === v.clienteId));

  // Visitas del asesor en la semana seleccionada (Semana 1, 2, 3, 4 o 'ALL')
  const vtsSemana = vtsAsesor.filter(v => {
    if (asesorPanelSemana === 'ALL') return true;
    const sem = v.semana || getSemanaNum(v.fecha);
    return sem === asesorPanelSemana;
  });

  // Clientes del día seleccionado
  const clsDia = clsAsesor.filter(c => c.dia === asesorPanelDia);
  const vtsDia = vtsSemana.filter(v => {
    const cl = clsAsesor.find(c => c.id === v.clienteId);
    return cl && cl.dia === asesorPanelDia;
  });

  const completadasDia = vtsDia.filter(v => v.estado === 'completada');
  const ventaDia = completadasDia.reduce((s, v) => s + (v.totalPedido || 0), 0);
  const ventaAcumMes = vtsAsesor.filter(v => v.estado === 'completada').reduce((s, v) => s + (v.totalPedido || 0), 0);

  // Header info
  document.getElementById('asesorPanelAvatar').textContent = (t.nombre || 'A')[0].toUpperCase();
  document.getElementById('asesorPanelNombre').textContent = t.nombre;
  document.getElementById('asesorPanelMeta').textContent =
    `${t.codigoVentas ? `Cód. ${t.codigoVentas} · ` : ''}CC: ${t.cedula} · ${t.zona || 'Sin zona'} · ${clsAsesor.length} clientes`;

  // Render week pills (Semana 1, 2, 3, 4 + Total Mes)
  const semanasDiv = document.getElementById('asesorPanelSemanas');
  if (semanasDiv) {
    semanasDiv.innerHTML = [1, 2, 3, 4].map(s => `
      <button class="ap-pill ${s === asesorPanelSemana ? 'active' : ''}" onclick="changeAsesorSemana('${cedula}', ${s})">Semana ${s}</button>
    `).join('') + `
      <button class="ap-pill ${asesorPanelSemana === 'ALL' ? 'active' : ''}" onclick="changeAsesorSemana('${cedula}', 'ALL')" style="font-weight:700;">📊 Total Mes</button>
    `;
  }

  // Render day pills
  const diasDiv = document.getElementById('asesorPanelDias');
  if (diasDiv) {
    diasDiv.innerHTML = DIAS.map(d => {
      const cnt = clsAsesor.filter(c => c.dia === d).length;
      return `<button class="ap-pill ${d === asesorPanelDia ? 'active' : ''}" onclick="changeAsesorDia('${cedula}', '${d}')">${diasLabel(d)} (${cnt})</button>`;
    }).join('');
  }

  // Label para el KPI
  const lblVentaSem = asesorPanelSemana === 'ALL' ? 'Venta Acum. Días' : `Venta Día (Sem ${asesorPanelSemana})`;

  // KPIs panel
  document.getElementById('asesorPanelKpis').innerHTML = `
    <div class="ap-kpi-card">
      <div class="ap-kpi-num">${clsDia.length}</div>
      <div class="ap-kpi-lbl">Clientes ${diasLabel(asesorPanelDia)}</div>
    </div>
    <div class="ap-kpi-card green">
      <div class="ap-kpi-num">${completadasDia.length}</div>
      <div class="ap-kpi-lbl">Visitados</div>
    </div>
    <div class="ap-kpi-card orange">
      <div class="ap-kpi-num">${fmt$(ventaDia)}</div>
      <div class="ap-kpi-lbl">${lblVentaSem}</div>
    </div>
    <div class="ap-kpi-card blue">
      <div class="ap-kpi-num">${fmt$(ventaAcumMes)}</div>
      <div class="ap-kpi-lbl">Acumulado Mes (Sem 1-4)</div>
    </div>
  `;

  // Render client list
  const listDiv = document.getElementById('asesorPanelClientes');
  if (clsDia.length === 0) {
    listDiv.innerHTML = '<div style="text-align:center; padding:30px; color:var(--gray-500); background:white; border-radius:12px;">Sin clientes asignados para este día</div>';
  } else {
    listDiv.innerHTML = clsDia.map(c => {
      // Visita del cliente en la semana seleccionada
      const visSemana = vtsSemana.find(v => v.clienteId === c.id);
      const est = visSemana ? visSemana.estado : 'sin_visita';
      
      const badgeHtml = est === 'completada' 
        ? '<span class="ap-cl-badge done">✅ Visitado</span>'
        : est === 'pendiente'
        ? '<span class="ap-cl-badge pend">⏳ Pendiente</span>'
        : '<span class="ap-cl-badge">⚪ Sin visita</span>';

      const montoSemana = visSemana && visSemana.estado === 'completada' ? fmt$(visSemana.totalPedido || 0) : '-';
      
      // Total acumulado del cliente en todas las semanas del mes
      const acumCliente = vtsAsesor
        .filter(v => v.clienteId === c.id && v.estado === 'completada')
        .reduce((s, v) => s + (v.totalPedido || 0), 0);

      return `
        <div class="ap-client-item" onclick="closeModal('modalAsesorPanel'); openHistorialModal('${c.id}');">
          <div class="ap-ci-left">
            <div class="ap-ci-title">${c.nombre}</div>
            <div class="ap-ci-sub">Cód: ${c.codigo} · ${c.poblacion || c.zona || 'Pereira'}</div>
          </div>
          <div class="ap-ci-right">
            ${badgeHtml}
            <div style="text-align:right">
              <div class="ap-ci-monto">${montoSemana} <small style="font-size:0.7rem; color:#64748B; font-weight:normal">(Sem ${asesorPanelSemana})</small></div>
              ${acumCliente > 0 ? `<div style="font-size:0.75rem; font-weight:700; color:#1565C0">Acum. Mes: ${fmt$(acumCliente)}</div>` : ''}
            </div>
            <div class="ap-ci-arrow">📊</div>
          </div>
        </div>
      `;
    }).join('');
  }

  openModal('modalAsesorPanel');
}

function changeAsesorSemana(cedula, semana) {
  asesorPanelSemana = semana;
  openAsesorPanel(cedula);
}

function changeAsesorDia(cedula, dia) {
  asesorPanelDia = dia;
  openAsesorPanel(cedula);
}

function clienteVisitaCard(c, estado, visita) {
  const estLabel = { 'sin_visita':'Sin visitar', 'pendiente':'Pendiente', 'en_curso':'En curso', 'completada':'Completada', 'no_visitado':'No visitado' };
  return `<div class="visit-card ${estado}">
    <div class="visit-status-dot"></div>
    <div class="visit-body">
      <div class="visit-client">${c.nombre}</div>
      <div class="visit-meta">
        ${c.codigo} &nbsp;·&nbsp; ${c.poblacion || ''}
        ${visita ? `&nbsp;·&nbsp; <span class="status-badge ${visita.estado}">${estLabel[visita.estado]||visita.estado}</span>` : ''}
      </div>
    </div>
    <div class="visit-actions">
      <button class="btn-visit" data-cliente-id="${c.id}">
        ${visita ? '✏️ Editar' : '📋 Visitar'}
      </button>
    </div>
  </div>`;
}

function emptyState(title, sub = '') {
  return `<div class="empty-state">
    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 12l-4-4 1.4-1.4L12 12.2l6.6-6.6L20 7l-8 8z" fill="currentColor"/></svg>
    <strong>${title}</strong>
    ${sub ? `<p>${sub}</p>` : ''}
  </div>`;
}

// ── TRABAJADORES (ADMIN) ──────────────────────────────────────
function renderTrabajadores(q = '') {
  let trabajadores = loadTrabajadores();
  if (q) {
    const ql = q.toLowerCase();
    trabajadores = trabajadores.filter(t =>
      t.nombre.toLowerCase().includes(ql) ||
      t.cedula.toLowerCase().includes(ql) ||
      (t.zona || '').toLowerCase().includes(ql)
    );
  }

  const list = document.getElementById('trabajadoresList');
  if (!list) return;

  if (trabajadores.length === 0) {
    list.innerHTML = emptyState('No hay trabajadores registrados', 'Agrega asesores usando el botón "+ Registrar Asesor".');
    return;
  }

  const clientes = DB.get('ap_clientes', []);

  list.innerHTML = trabajadores.map(t => {
    const cantClientes = clientes.filter(c => c.trabajadorId === t.cedula).length;
    return `
      <div class="worker-card" style="margin-bottom:12px">
        <div class="worker-avatar">${t.nombre[0].toUpperCase()}</div>
        <div class="worker-info">
          <div class="worker-name">${t.nombre} <span class="role-badge trabajador">Asesor</span></div>
          <div class="worker-meta">
            ${t.codigoVentas ? `<strong>Cód. ${t.codigoVentas}</strong> &nbsp;·&nbsp;` : ''}
            CC: ${t.cedula} &nbsp;·&nbsp; ${t.zona || 'Sin zona'}
          </div>
          ${t.telefono ? `<div class="worker-meta">📞 ${t.telefono}</div>` : ''}
        </div>
        <div class="worker-stats" style="display:flex;align-items:center;gap:10px">
          <div>
            <div class="worker-sales">${cantClientes} Clientes</div>
          </div>
          <button class="btn-edit-sm" data-edit-t="${t.id}" title="Editar">✏️</button>
          <button class="btn-del-sm" data-del-t="${t.id}" title="Eliminar">🗑</button>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('[data-edit-t]').forEach(btn => {
    btn.addEventListener('click', () => openTrabajadorModal(btn.dataset.editT));
  });
  list.querySelectorAll('[data-del-t]').forEach(btn => {
    btn.addEventListener('click', () => deleteTrabajador(btn.dataset.delT));
  });
}

function openTrabajadorModal(id) {
  const trabajadores = loadTrabajadores();
  const t = id ? trabajadores.find(x => x.id === id) : null;
  document.getElementById('modalTrabajadorTitle').textContent = t ? 'Editar Asesor / Trabajador' : 'Nuevo Asesor / Trabajador';
  document.getElementById('trabajadorId').value = t ? t.id : '';
  document.getElementById('trabajadorCodigoVentas').value = t ? t.codigoVentas || '' : '';
  document.getElementById('trabajadorCedula').value = t ? t.cedula : '';
  document.getElementById('trabajadorNombre').value = t ? t.nombre : '';
  document.getElementById('trabajadorZona').value = t ? t.zona || '' : '';
  document.getElementById('trabajadorTelefono').value = t ? t.telefono || '' : '';
  openModal('modalTrabajador');
}

function saveTrabajador() {
  const id = document.getElementById('trabajadorId').value;
  const cedula = document.getElementById('trabajadorCedula').value.trim();
  const nombre = document.getElementById('trabajadorNombre').value.trim();

  if (!cedula || !nombre) {
    showToast('Cédula y nombre son obligatorios', 'error');
    return;
  }

  const trabajadores = loadTrabajadores();
  const existe = trabajadores.find(x => x.cedula === cedula && x.id !== id);
  if (existe) {
    showToast('Ya existe un trabajador con esa cédula', 'error');
    return;
  }

  const data = {
    id: id || uid(),
    cedula,
    codigoVentas: document.getElementById('trabajadorCodigoVentas').value.trim(),
    nombre,
    zona: document.getElementById('trabajadorZona').value.trim(),
    telefono: document.getElementById('trabajadorTelefono').value.trim(),
    rol: 'trabajador'
  };

  if (id) {
    const idx = trabajadores.findIndex(x => x.id === id);
    if (idx >= 0) trabajadores[idx] = data; else trabajadores.push(data);
  } else {
    trabajadores.push(data);
  }

  saveTrabajadores(trabajadores);
  closeModal('modalTrabajador');
  showToast(id ? 'Asesor actualizado ✓' : 'Asesor registrado ✓', 'success');
  renderTrabajadores();
  renderDashboard();
}

function deleteTrabajador(id) {
  if (!confirm('¿Eliminar este trabajador del sistema?')) return;
  const trabajadores = loadTrabajadores().filter(x => x.id !== id);
  saveTrabajadores(trabajadores);
  renderTrabajadores();
  renderDashboard();
  showToast('Trabajador eliminado', 'warning');
}

// ── CLIENTES ──────────────────────────────────────────────────
function renderClientes(q = '', diaFiltro = '') {
  let clientes = loadClientes();
  if (q) {
    const ql = q.toLowerCase();
    clientes = clientes.filter(c =>
      c.nombre.toLowerCase().includes(ql) ||
      c.codigo.toLowerCase().includes(ql) ||
      (c.poblacion || '').toLowerCase().includes(ql)
    );
  }
  if (diaFiltro) clientes = clientes.filter(c => c.dia === diaFiltro);

  // Filtros de día
  const df = document.getElementById('dayFilter');
  if (df && !df.dataset.built) {
    df.dataset.built = '1';
    df.innerHTML = `<button class="day-btn active" data-dia="">Todos</button>` +
      DIAS.map(d => `<button class="day-btn" data-dia="${d}">${diasLabel(d)}</button>`).join('');
    df.querySelectorAll('.day-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        df.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderClientes(document.getElementById('searchCliente').value, btn.dataset.dia);
      });
    });
  }

  const list = document.getElementById('clientesList');
  if (clientes.length === 0) {
    list.innerHTML = emptyState(
      q ? 'Sin resultados' : 'No hay clientes registrados',
      q ? '' : 'Presiona + Nuevo para agregar tu primer cliente.'
    );
    if (!q) {
      const btn = document.createElement('button');
      btn.className = 'btn-primary';
      btn.textContent = '+ Agregar primer cliente';
      btn.onclick = () => openClienteModal(null);
      list.querySelector('.empty-state').appendChild(btn);
    }
    return;
  }

  list.innerHTML = clientes.map(c => `
    <div class="client-card" data-id="${c.id}">
      <div class="client-icon">${c.nombre[0].toUpperCase()}</div>
      <div class="client-body">
        <div class="client-code">${c.codigo}</div>
        <div class="client-name">${c.nombre}</div>
        <div class="client-meta">
          ${c.poblacion ? `<span>${c.poblacion}</span>` : ''}
          <span class="day-pill">${diasLabel(c.dia)}</span>
          ${c.telefono ? `<span>📞 ${c.telefono}</span>` : ''}
        </div>
      </div>
      <div class="client-actions">
        <button class="btn-historial" data-hist="${c.id}" title="Ver historial">📊</button>
        <button class="btn-visit" data-cliente-id="${c.id}" title="Registrar visita">📋</button>
        <button class="btn-edit-sm" data-edit="${c.id}" title="Editar">✏️</button>
        <button class="btn-del-sm" data-del="${c.id}" title="Eliminar">🗑</button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.client-body').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const card = el.closest('.client-card');
      if (card) openHistorialModal(card.dataset.id);
    });
  });

  list.querySelectorAll('.btn-visit').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); openVisitaModal(btn.dataset.clienteId); })
  );
  list.querySelectorAll('[data-edit]').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); openClienteModal(btn.dataset.edit); })
  );
  list.querySelectorAll('[data-del]').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); deleteCliente(btn.dataset.del); })
  );
  list.querySelectorAll('[data-hist]').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); openHistorialModal(btn.dataset.hist); })
  );
}

function openClienteModal(id) {
  const clientes = loadClientes(true);
  const c = id ? clientes.find(x => x.id === id) : null;
  document.getElementById('modalClienteTitle').textContent = c ? 'Editar Cliente' : 'Nuevo Cliente';
  document.getElementById('clienteId').value = c ? c.id : '';
  document.getElementById('clienteCodigo').value = c ? c.codigo : '';
  document.getElementById('clienteNombre').value = c ? c.nombre : '';
  document.getElementById('clientePoblacion').value = c ? c.poblacion || '' : '';
  document.getElementById('clienteDia').value = c ? c.dia : 'LUNES';
  document.getElementById('clienteTelefono').value = c ? c.telefono || '' : '';
  document.getElementById('clienteNotas').value = c ? c.notas || '' : '';

  const selTrab = document.getElementById('clienteTrabajador');
  if (selTrab) {
    const trabajadores = loadTrabajadores();
    selTrab.innerHTML = '<option value="">-- Sin Asignar --</option>' +
      trabajadores.map(t => `<option value="${t.cedula}"${c && c.trabajadorId === t.cedula ? ' selected' : ''}>${t.nombre} (CC: ${t.cedula})</option>`).join('');
  }

  openModal('modalCliente');
}

function saveCliente() {
  const id = document.getElementById('clienteId').value;
  const codigo = document.getElementById('clienteCodigo').value.trim();
  const nombre = document.getElementById('clienteNombre').value.trim();
  if (!codigo || !nombre) { showToast('Completa los campos obligatorios', 'error'); return; }

  const clientes = loadClientes(true);
  const sess = getSession();

  let trabajadorId = '';
  if (sess && sess.rol === 'trabajador') {
    trabajadorId = sess.cedula;
  } else {
    trabajadorId = document.getElementById('clienteTrabajador') ? document.getElementById('clienteTrabajador').value : '';
  }

  const existingClient = id ? clientes.find(c => c.id === id) : null;

  const data = {
    id: id || uid(),
    codigo, nombre,
    poblacion: document.getElementById('clientePoblacion').value.trim(),
    dia: document.getElementById('clienteDia').value,
    telefono: document.getElementById('clienteTelefono').value.trim(),
    notas: document.getElementById('clienteNotas').value.trim(),
    trabajadorId: trabajadorId || (existingClient ? existingClient.trabajadorId : ''),
    creadoEn: existingClient ? existingClient.creadoEn || Date.now() : Date.now()
  };

  if (id) {
    const idx = clientes.findIndex(c => c.id === id);
    if (idx >= 0) clientes[idx] = data; else clientes.push(data);
  } else { clientes.push(data); }
  saveClientes(clientes);
  closeModal('modalCliente');
  showToast(id ? 'Cliente actualizado ✓' : 'Cliente agregado ✓', 'success');
  renderClientes();
  renderDashboard();
}

function deleteCliente(id) {
  if (!confirm('¿Eliminar este cliente?')) return;
  const clientes = loadClientes().filter(c => c.id !== id);
  saveClientes(clientes);
  renderClientes();
  renderDashboard();
  showToast('Cliente eliminado', 'warning');
}

// ── PRODUCTOS CATÁLOGO ─────────────────────────────────────────
function renderProductos(q = '') {
  let productos = loadProductos();
  if (q) {
    const ql = q.toLowerCase();
    productos = productos.filter(p =>
      p.nombre.toLowerCase().includes(ql) ||
      p.codigo.toLowerCase().includes(ql) ||
      (p.categoria || '').toLowerCase().includes(ql)
    );
  }
  const list = document.getElementById('productosList');
  if (productos.length === 0) {
    list.innerHTML = emptyState('Sin productos', 'Agrega productos al catálogo.');
    return;
  }
  list.innerHTML = productos.map(p => `
    <div class="product-card">
      <span class="product-code">${p.codigo}</span>
      <span class="product-name">${p.nombre}</span>
      ${p.categoria ? `<span class="product-cat">${p.categoria}</span>` : ''}
      <span class="product-price">${fmt$(p.precio)}</span>
      <button class="btn-edit-sm" data-edit="${p.id}" title="Editar">✏️</button>
      <button class="btn-del-sm" data-del="${p.id}" title="Eliminar">🗑</button>
    </div>
  `).join('');
  list.querySelectorAll('[data-edit]').forEach(btn =>
    btn.addEventListener('click', () => openProductoModal(btn.dataset.edit))
  );
  list.querySelectorAll('[data-del]').forEach(btn =>
    btn.addEventListener('click', () => deleteProducto(btn.dataset.del))
  );
}

function openProductoModal(id) {
  const productos = loadProductos();
  const p = id ? productos.find(x => x.id === id) : null;
  document.getElementById('modalProductoTitle').textContent = p ? 'Editar Producto' : 'Nuevo Producto';
  document.getElementById('productoId').value = p ? p.id : '';
  document.getElementById('productoCodigo').value = p ? p.codigo : '';
  document.getElementById('productoNombre').value = p ? p.nombre : '';
  document.getElementById('productoPrecio').value = p ? p.precio : '';
  document.getElementById('productoCategoria').value = p ? p.categoria || '' : '';
  openModal('modalProducto');
}

function saveProducto() {
  const id = document.getElementById('productoId').value;
  const codigo = document.getElementById('productoCodigo').value.trim();
  const nombre = document.getElementById('productoNombre').value.trim();
  if (!codigo || !nombre) { showToast('Código y nombre son obligatorios', 'error'); return; }
  const productos = loadProductos();
  const data = {
    id: id || codigo,
    codigo, nombre,
    precio: parseFloat(document.getElementById('productoPrecio').value) || 0,
    categoria: document.getElementById('productoCategoria').value.trim()
  };
  if (id) {
    const idx = productos.findIndex(p => p.id === id);
    if (idx >= 0) productos[idx] = data; else productos.push(data);
  } else { productos.push(data); }
  saveProductos(productos);
  closeModal('modalProducto');
  showToast(id ? 'Producto actualizado ✓' : 'Producto agregado ✓', 'success');
  renderProductos();
}

function deleteProducto(id) {
  if (!confirm('¿Eliminar este producto del catálogo?')) return;
  saveProductos(loadProductos().filter(p => p.id !== id));
  renderProductos();
  showToast('Producto eliminado', 'warning');
}

// ── PICK PRODUCTOS (modal en visita) ──────────────────────────
function renderPickProductos(q = '') {
  let productos = loadProductos();
  if (q) {
    const ql = q.toLowerCase();
    productos = productos.filter(p =>
      p.nombre.toLowerCase().includes(ql) || p.codigo.toLowerCase().includes(ql)
    );
  }
  const list = document.getElementById('pickProductoList');
  list.innerHTML = productos.map(p => `
    <div class="pick-item" data-pid="${p.id}">
      <div class="pick-item-left">
        <span class="pick-code">${p.codigo}</span>
        <span class="pick-name">${p.nombre}</span>
      </div>
      <span class="pick-price">${fmt$(p.precio)}</span>
    </div>
  `).join('');
  list.querySelectorAll('.pick-item').forEach(item => {
    item.addEventListener('click', () => {
      addProductoToVisita(item.dataset.pid);
      closeModal('modalPickProducto');
      document.getElementById('searchPickProducto').value = '';
      renderPickProductos();
    });
  });
}

function addProductoToVisita(pid) {
  const productos = loadProductos();
  const p = productos.find(x => x.id === pid);
  if (!p) return;
  if (visitaProductos.find(x => x.productoId === pid)) {
    showToast('Producto ya en la lista', 'warning');
    return;
  }
  visitaProductos.push({ productoId: pid, tiene: 0, pedira: 0, agotado: 0, vencido: 0 });
  renderVisitaTable();
}

// ── VISITAS ────────────────────────────────────────────────────
function openVisitaModal(clienteId, visitaId = null) {
  const clientes = loadClientes();
  const visitas = loadVisitas();
  const hoy = todayISO();

  let cliente = null;
  let visita = null;

  if (visitaId) {
    visita = visitas.find(v => v.id === visitaId);
    cliente = visita ? clientes.find(c => c.id === visita.clienteId) : null;
  } else if (clienteId) {
    cliente = clientes.find(c => c.id === clienteId);
    // ¿Hay visita de hoy?
    const existente = visitas
      .filter(v => v.clienteId === clienteId && v.fecha === hoy)
      .sort((a,b) => b.creadoEn - a.creadoEn)[0];
    visita = existente || null;
  }

  document.getElementById('visitaId').value = visita ? visita.id : '';
  document.getElementById('visitaClienteId').value = cliente ? cliente.id : (visita ? visita.clienteId : '');
  document.getElementById('visitaFecha').value = visita ? visita.fecha : hoy;
  document.getElementById('visitaEstado').value = visita ? visita.estado : 'en_curso';
  document.getElementById('visitaNotas').value = visita ? visita.notas || '' : '';

  document.getElementById('modalVisitaTitle').textContent = visita ? 'Editar Visita' : 'Nueva Visita';

  // Encabezado con asesor comercial + datos del cliente (igual que el Excel)
  const sess = getSession();
  const codAsesor  = sess ? (sess.codigoVentas || sess.cedula) : '';
  const nomAsesor  = sess ? sess.nombre : '';
  const asesorStr  = codAsesor ? `Asesor Comercial: ${codAsesor} – ${nomAsesor}` : nomAsesor;
  const clienteStr = cliente
    ? `${cliente.codigo}  ${cliente.nombre}  |  ${cliente.poblacion || ''}  |  ${diasLabel(cliente.dia)}`
    : 'Visita general';
  document.getElementById('modalVisitaMeta').innerHTML =
    `<span class="meta-asesor">📋 ${asesorStr}</span>` +
    `<span class="meta-sep"> &nbsp;·&nbsp; </span>` +
    `<span class="meta-cliente">🏪 ${clienteStr}</span>`;

  // Cargar productos en la visita
  visitaProductos = visita ? JSON.parse(JSON.stringify(visita.productos || [])) : [];

  if (visitaProductos.length === 0) {
    // Cargar TODO el catálogo con valores en cero — listos para llenar
    const todosProductos = loadProductos();
    visitaProductos = todosProductos.map(p => ({
      productoId: p.id, tiene: 0, pedira: 0, agotado: 0, vencido: 0
    }));
  }

  renderVisitaTable();
  openModal('modalVisita');
}

function renderVisitaTable(filtro = '') {
  const productos = loadProductos();
  const tbody = document.getElementById('visitaProductosTbody');

  // Thead siempre actualizado
  const thead = tbody.closest('table').querySelector('thead');
  if (thead) {
    thead.innerHTML = `<tr>
      <th style="min-width:80px">Código</th>
      <th style="min-width:170px">Producto</th>
      <th style="text-align:right">Precio</th>
      <th class="th-tiene" style="text-align:center">Stock</th>
      <th class="th-pide" style="text-align:center">A pedir</th>
      <th class="th-agotado" style="text-align:center">Agotado</th>
      <th class="th-vencido" style="text-align:center">Vencido</th>
    </tr>`;
  }

  // Filtrar filas si hay búsqueda activa
  let filas = visitaProductos;
  if (filtro) {
    const fl = filtro.toLowerCase();
    filas = visitaProductos.filter(vp => {
      const p = productos.find(x => x.id === vp.productoId);
      return p && (p.nombre.toLowerCase().includes(fl) || p.codigo.includes(fl) || (p.categoria||'').toLowerCase().includes(fl));
    });
  }

  tbody.innerHTML = filas.map((vp) => {
    const idx = visitaProductos.indexOf(vp);
    const p = productos.find(x => x.id === vp.productoId);
    if (!p) return '';
    const rowClass = (vp.vencido > 0) ? 'row-vencido' : (vp.agotado > 0) ? 'row-agotado' : '';
    // Resaltar filas con algún dato ingresado
    const touched = vp.tiene > 0 || vp.pedira > 0 || vp.agotado > 0 || vp.vencido > 0;
    return `<tr class="${rowClass}${touched ? ' row-touched' : ''}" data-idx="${idx}">
      <td class="td-code">${p.codigo}</td>
      <td class="td-name">
        ${p.categoria ? `<span class="prod-cat-badge">${p.categoria}</span>` : ''}
        ${p.nombre}
      </td>
      <td class="td-price">${fmt$(p.precio)}</td>
      <td class="td-tiene">
        <input type="number" class="qty-tiene qty-input" data-field="tiene"
          value="${vp.tiene || ''}" min="0" placeholder="—"/>
      </td>
      <td class="td-pide">
        <input type="number" class="qty-pide qty-input" data-field="pedira"
          value="${vp.pedira || ''}" min="0" placeholder="—"/>
      </td>
      <td class="td-agotado">
        <input type="number" class="qty-agotado qty-input" data-field="agotado"
          value="${vp.agotado || ''}" min="0" placeholder="—"/>
      </td>
      <td class="td-vencido">
        <input type="number" class="qty-vencido qty-input" data-field="vencido"
          value="${vp.vencido || ''}" min="0" placeholder="—"/>
      </td>
    </tr>`;
  }).join('');

  // Eventos
  tbody.querySelectorAll('.qty-input').forEach(inp => {
    const handler = e => {
      const idx = parseInt(e.target.closest('tr').dataset.idx);
      visitaProductos[idx][e.target.dataset.field] = parseFloat(e.target.value) || 0;
      const row = e.target.closest('tr');
      row.classList.remove('row-agotado', 'row-vencido', 'row-touched');
      const vp = visitaProductos[idx];
      if (vp.vencido > 0)       row.classList.add('row-vencido');
      else if (vp.agotado > 0)  row.classList.add('row-agotado');
      if (vp.tiene > 0 || vp.pedira > 0 || vp.agotado > 0 || vp.vencido > 0)
        row.classList.add('row-touched');
      renderVisitaSummary();
    };
    inp.addEventListener('change', handler);
    inp.addEventListener('input', handler);
  });

  renderVisitaSummary();
}

function renderVisitaSummary() {
  const productos = loadProductos();
  let totalPedido = 0, agotados = 0, vencidos = 0, conDatos = 0;
  visitaProductos.forEach(vp => {
    const p = productos.find(x => x.id === vp.productoId);
    if (p && vp.pedira > 0) totalPedido += p.precio * vp.pedira;
    agotados  += (vp.agotado || 0);
    vencidos  += (vp.vencido || 0);
    if (vp.tiene > 0 || vp.pedira > 0 || vp.agotado > 0 || vp.vencido > 0) conDatos++;
  });

  // Badge con cuántos productos tienen algún dato
  const badge = document.getElementById('prodCountBadge');
  if (badge) badge.textContent = conDatos > 0 ? `${conDatos} completados` : `${visitaProductos.length} productos`;

  document.getElementById('visitaSummary').innerHTML = `
    <div class="summary-item"><span class="summary-label">Con datos</span><span class="summary-val">${conDatos}</span></div>
    <div class="summary-item"><span class="summary-label">Total a pedir</span><span class="summary-val">${fmt$(totalPedido)}</span></div>
    ${agotados > 0 ? `<div class="summary-item"><span class="summary-label">⚠️ Agotados</span><span class="summary-val red">${agotados}</span></div>` : ''}
    ${vencidos > 0 ? `<div class="summary-item"><span class="summary-label">🚫 Vencidos</span><span class="summary-val red">${vencidos}</span></div>` : ''}
  `;
}

function saveVisita(estadoForzado = null) {
  const id = document.getElementById('visitaId').value;
  const clienteId = document.getElementById('visitaClienteId').value;
  const fecha = document.getElementById('visitaFecha').value || todayISO();
  const estado = estadoForzado || document.getElementById('visitaEstado').value;
  const notas = document.getElementById('visitaNotas').value.trim();

  const productos = loadProductos();
  const totalPedido = visitaProductos.reduce((s, vp) => {
    const p = productos.find(x => x.id === vp.productoId);
    return s + (p ? p.precio * (vp.pedira || 0) : 0);
  }, 0);

  const visitas = loadVisitas();
  const data = {
    id: id || uid(),
    clienteId, fecha, estado, notas,
    productos: JSON.parse(JSON.stringify(visitaProductos)),
    totalPedido,
    creadoEn: id ? (visitas.find(v=>v.id===id)||{}).creadoEn || Date.now() : Date.now(),
    actualizadoEn: Date.now()
  };

  if (id) {
    const idx = visitas.findIndex(v => v.id === id);
    if (idx >= 0) visitas[idx] = data; else visitas.push(data);
  } else { visitas.push(data); }
  saveVisitas(visitas);

  // Sincronizar con Supabase si está disponible
  const sess = getSession();
  const dataConTrabajador = { ...data, trabajadorId: sess ? sess.cedula : '' };
  if (typeof syncVisita === 'function') {
    syncVisita(dataConTrabajador).then(ok => {
      if (ok && typeof updateSyncBadge === 'function') updateSyncBadge(true);
    });
  }

  closeModal('modalVisita');
  showToast(estado === 'completada' ? 'Visita completada ✓' : 'Borrador guardado', estado === 'completada' ? 'success' : '');

  // Refrescar vista activa
  if (currentView === 'dashboard') renderDashboard();
  if (currentView === 'visitas') renderVisitasHoy();
  if (currentView === 'semana') renderSemana();
  if (currentView === 'clientes') renderClientes();
}

// ── VISITAS HOY ────────────────────────────────────────────────
function renderVisitasHoy() {
  const hoy = todayISO();
  const diaHoy = todayDia();
  document.getElementById('visitasDay').textContent = diaHoy;

  const clientes = loadClientes();
  const visitas = loadVisitas();
  const clientesHoy = clientes.filter(c => c.dia === diaHoy);

  const list = document.getElementById('visitasList');
  if (clientesHoy.length === 0) {
    list.innerHTML = emptyState('No hay clientes para hoy', 'Asigna clientes al día de hoy.');
    return;
  }

  list.innerHTML = clientesHoy.map(c => {
    const vis = visitas
      .filter(v => v.clienteId === c.id && v.fecha === hoy)
      .sort((a,b) => b.creadoEn - a.creadoEn)[0];
    const estado = vis ? vis.estado : 'sin_visita';
    const estLabel = { 'sin_visita':'Sin visitar','pendiente':'Pendiente','en_curso':'En curso','completada':'Completada','no_visitado':'No visitado' };
    const totalPed = vis && vis.totalPedido ? fmt$(vis.totalPedido) : '';
    return `<div class="visit-card ${estado}">
      <div class="visit-status-dot"></div>
      <div class="visit-body">
        <div class="visit-client">${c.nombre}</div>
        <div class="visit-meta">
          ${c.codigo} &nbsp;·&nbsp; ${c.poblacion || ''}
          ${totalPed ? `&nbsp;·&nbsp; 💰 ${totalPed}` : ''}
          ${vis ? `<span class="status-badge ${vis.estado}" style="margin-left:4px">${estLabel[vis.estado]||vis.estado}</span>` : ''}
        </div>
        ${vis && vis.notas ? `<div class="visit-meta" style="margin-top:4px;color:#616161">📝 ${vis.notas}</div>` : ''}
      </div>
      <div class="visit-actions">
        <button class="btn-visit" data-cid="${c.id}" ${vis ? `data-vid="${vis.id}"` : ''}>
          ${vis ? '✏️' : '📋'}
        </button>
      </div>
    </div>`;
  }).join('');

  list.querySelectorAll('.btn-visit').forEach(btn => {
    btn.addEventListener('click', () => {
      const vid = btn.dataset.vid;
      openVisitaModal(btn.dataset.cid, vid || null);
    });
  });
}

// ── VISTA SEMANAL ──────────────────────────────────────────────
let semanaTabActivo = todayDia();

function renderSemana() {
  if (!DIAS.includes(semanaTabActivo)) semanaTabActivo = DIAS[0];

  const tabs = document.getElementById('weekTabs');
  tabs.innerHTML = DIAS.map(d =>
    `<button class="week-tab${d === semanaTabActivo ? ' active' : ''}" data-dia="${d}">${diasLabel(d)}</button>`
  ).join('');
  tabs.querySelectorAll('.week-tab').forEach(t => {
    t.addEventListener('click', () => { semanaTabActivo = t.dataset.dia; renderSemana(); });
  });

  const clientes = loadClientes();
  const visitas = loadVisitas();
  const clientesDelDia = clientes.filter(c => c.dia === semanaTabActivo);
  const content = document.getElementById('weekContent');

  if (clientesDelDia.length === 0) {
    content.innerHTML = emptyState(`No hay clientes asignados al ${semanaTabActivo}`);
    return;
  }

  content.innerHTML = clientesDelDia.map(c => {
    const todasVisitas = visitas
      .filter(v => v.clienteId === c.id)
      .sort((a,b) => b.fecha.localeCompare(a.fecha))
      .slice(0, 5);
    const estLabel = { 'pendiente':'Pendiente','en_curso':'En curso','completada':'Completada','no_visitado':'No visitado' };
    return `<div class="client-card" style="flex-direction:column;align-items:stretch;gap:10px">
      <div style="display:flex;align-items:center;gap:12px">
        <div class="client-icon">${c.nombre[0].toUpperCase()}</div>
        <div class="client-body">
          <div class="client-code">${c.codigo}</div>
          <div class="client-name">${c.nombre}</div>
          <div class="client-meta">${c.poblacion || ''}</div>
        </div>
        <button class="btn-visit" data-cid="${c.id}">📋 Visitar</button>
      </div>
      ${todasVisitas.length > 0 ? `
        <div style="border-top:1px solid #EEE;padding-top:10px">
          <div style="font-size:0.75rem;font-weight:600;color:#9E9E9E;text-transform:uppercase;margin-bottom:8px">Historial</div>
          ${todasVisitas.map(v => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #F5F5F5;font-size:0.82rem">
              <span style="color:#616161">${fmtDate(v.fecha)}</span>
              <span class="status-badge ${v.estado}">${estLabel[v.estado]||v.estado}</span>
              <span style="font-weight:600;color:#E65100">${v.totalPedido ? fmt$(v.totalPedido) : '-'}</span>
              <button class="btn-edit-sm" data-vid="${v.id}" data-cid="${c.id}" style="padding:4px 8px;font-size:0.75rem">✏️</button>
            </div>
          `).join('')}
        </div>
      ` : '<div style="font-size:0.82rem;color:#9E9E9E;padding-top:4px">Sin visitas registradas</div>'}
    </div>`;
  }).join('');

  content.querySelectorAll('.btn-visit[data-cid]').forEach(btn =>
    btn.addEventListener('click', () => openVisitaModal(btn.dataset.cid))
  );
  content.querySelectorAll('[data-vid]').forEach(btn =>
    btn.addEventListener('click', () => openVisitaModal(btn.dataset.cid, btn.dataset.vid))
  );
}

// ── REPORTES Y ACUMULADOS CON FILTROS ───────────────────────────
function getDateBounds(rango, customDesde, customHasta) {
  const now = new Date();
  const today = now.toISOString().split('T')[0];

  if (rango === 'todas') return { desde: null, hasta: null };

  if (rango === 'semana_actual') {
    const dayOfWeek = now.getDay(); // 0 Dom, 1 Lun, ...
    const diffToMonday = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek);
    const monday = new Date(now);
    monday.setDate(now.getDate() + diffToMonday);
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);
    return { desde: monday.toISOString().split('T')[0], hasta: saturday.toISOString().split('T')[0] };
  }

  if (rango === 'semana_pasada') {
    const dayOfWeek = now.getDay();
    const diffToMonday = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek) - 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diffToMonday);
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);
    return { desde: monday.toISOString().split('T')[0], hasta: saturday.toISOString().split('T')[0] };
  }

  if (rango === 'mes_actual') {
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
    return { desde: firstDay, hasta: lastDay };
  }

  if (rango === 'personalizado') {
    return { desde: customDesde || null, hasta: customHasta || null };
  }

  return { desde: null, hasta: null };
}

function initReportFilters() {
  const selRango = document.getElementById('reportRango');
  const selTrab = document.getElementById('reportTrabajador');
  const customWrap = document.getElementById('reportDatesCustom');

  if (!selRango || selRango.dataset.bound) return;
  selRango.dataset.bound = '1';

  // Llenar combo de asesores si es Admin
  if (selTrab) {
    const trabajadores = loadTrabajadores();
    selTrab.innerHTML = '<option value="todos">👥 Todos los Asesores</option>' +
      trabajadores.map(t => `<option value="${t.cedula}">${t.nombre} (CC: ${t.cedula})</option>`).join('');
  }

  const onChange = () => {
    if (selRango.value === 'personalizado') {
      customWrap.classList.remove('hidden');
    } else {
      customWrap.classList.add('hidden');
    }
    renderReportes();
  };

  selRango.addEventListener('change', onChange);
  if (selTrab) selTrab.addEventListener('change', onChange);
  document.getElementById('reportFechaDesde')?.addEventListener('change', onChange);
  document.getElementById('reportFechaHasta')?.addEventListener('change', onChange);
}

function renderReportes() {
  initReportFilters();

  const selRango = document.getElementById('reportRango')?.value || 'semana_actual';
  const selTrab = document.getElementById('reportTrabajador')?.value || 'todos';
  const customDesde = document.getElementById('reportFechaDesde')?.value;
  const customHasta = document.getElementById('reportFechaHasta')?.value;

  const bounds = getDateBounds(selRango, customDesde, customHasta);

  let clientes = loadClientes(true);
  let visitas = loadVisitas();
  const productos = loadProductos();
  const sess = getSession();

  // Filtrar por asesor
  if (sess.rol !== 'admin') {
    clientes = clientes.filter(c => c.trabajadorId === sess.cedula);
    visitas = visitas.filter(v => clientes.some(c => c.id === v.clienteId));
  } else if (selTrab !== 'todos') {
    clientes = clientes.filter(c => c.trabajadorId === selTrab);
    visitas = visitas.filter(v => clientes.some(c => c.id === v.clienteId));
  }

  // Filtrar por fechas
  if (bounds.desde) visitas = visitas.filter(v => v.fecha >= bounds.desde);
  if (bounds.hasta) visitas = visitas.filter(v => v.fecha <= bounds.hasta);

  const totalVisitas = visitas.length;
  const completadas = visitas.filter(v => v.estado === 'completada').length;
  const pct = totalVisitas ? Math.round(completadas / totalVisitas * 100) : 0;
  const totalPedido = visitas.filter(v => v.estado === 'completada').reduce((s,v) => s + (v.totalPedido||0), 0);
  const agotadosTot = visitas.reduce((s,v) => s + (v.productos||[]).reduce((a,p) => a + (p.agotado||0), 0), 0);
  const vencidosTot = visitas.reduce((s,v) => s + (v.productos||[]).reduce((a,p) => a + (p.vencido||0), 0), 0);

  // Top productos pedidos
  const pedMap = {};
  visitas.filter(v => v.estado === 'completada').forEach(v => {
    (v.productos||[]).forEach(vp => {
      if (vp.pedira > 0) {
        const p = productos.find(x => x.id === vp.productoId);
        const key = vp.productoId;
        if (!pedMap[key]) pedMap[key] = { nombre: p ? p.nombre : key, total: 0, valor: 0 };
        pedMap[key].total += vp.pedira;
        if (p) pedMap[key].valor += p.precio * vp.pedira;
      }
    });
  });
  const topProd = Object.values(pedMap).sort((a,b) => b.valor - a.valor).slice(0,8);

  // Desglose por Día de la Semana
  const porDia = DIAS.map(dia => {
    const clsDia = clientes.filter(c => c.dia === dia);
    const visDia = visitas.filter(v => { const cl = clientes.find(c=>c.id===v.clienteId); return cl && cl.dia === dia && v.estado === 'completada'; });
    const ventaDia = visDia.reduce((s,v) => s + (v.totalPedido || 0), 0);
    return { dia, cnt: clsDia.length, vis: visDia.length, ventaDia };
  });

  const rangoTexto = {
    semana_actual: 'Esta Semana (Lunes a Sábado)',
    semana_pasada: 'Semana Pasada',
    mes_actual: 'Este Mes',
    todas: 'Histórico Completo',
    personalizado: `Del ${bounds.desde || 'inicio'} al ${bounds.hasta || 'final'}`
  }[selRango] || 'Rango Seleccionado';

  document.getElementById('reportesContent').innerHTML = `
    <div class="report-card">
      <h4>📊 Acumulado y Resumen (${rangoTexto})</h4>
      <div class="report-row"><span>Total clientes base</span><strong>${clientes.length}</strong></div>
      <div class="report-row"><span>Total visitas en el período</span><strong>${totalVisitas}</strong></div>
      <div class="report-row"><span>Visitas completadas</span><strong style="color:#2E7D32">${completadas}</strong></div>
      <div class="report-row"><span>Efectividad de visitas</span><strong>${pct}%</strong></div>
      <div class="progress-bar-wrap" style="margin-top:8px"><div class="progress-bar" style="width:${pct}%"></div></div>
      <div class="report-row" style="margin-top:14px;padding-top:8px;border-top:1px solid #EEE">
        <span>💰 Total Facturado / Pedidos:</span>
        <strong style="color:#E65100;font-size:1.15rem">${fmt$(totalPedido)}</strong>
      </div>
      <div class="report-row"><span>⚠️ Novedades de Agotados</span><strong style="color:#C62828">${agotadosTot}</strong></div>
      <div class="report-row"><span>🚫 Novedades de Vencidos</span><strong style="color:#673AB7">${vencidosTot}</strong></div>
    </div>

    <div class="report-card">
      <h4>📅 Acumulado por Día de la Semana</h4>
      ${porDia.map(d => `
        <div class="report-row" style="align-items:center">
          <div>
            <strong>${d.dia}</strong>
            <span style="color:#9E9E9E;font-size:0.78rem;margin-left:6px">(${d.cnt} clientes)</span>
          </div>
          <div style="text-align:right">
            <span style="font-weight:700;color:#E65100;margin-right:10px">${fmt$(d.ventaDia)}</span>
            <span class="badge-day" style="font-size:0.75rem">${d.vis} ✓</span>
          </div>
        </div>
      `).join('')}
    </div>

    ${topProd.length > 0 ? `
    <div class="report-card">
      <h4>🏆 Top Productos Más Pedidos en el Período</h4>
      ${topProd.map((p,i) => `
        <div class="report-row">
          <span><strong>${i+1}.</strong> ${p.nombre.length > 38 ? p.nombre.substring(0,36)+'…' : p.nombre} <small style="color:#757575">(${p.total} un.)</small></span>
          <strong style="color:#E65100">${fmt$(p.valor)}</strong>
        </div>
      `).join('')}
    </div>` : '<div class="report-card"><p style="color:#9E9E9E;margin:0;text-align:center">Sin pedidos en este rango de fecha</p></div>'}
  `;
}

// ── CONFIGURACIÓN ──────────────────────────────────────────────
function openConfigModal() {
  const cfg = loadConfig();
  document.getElementById('cfgCodigo').value = cfg.codigo || '';
  document.getElementById('cfgNombre').value = cfg.nombre || '';
  document.getElementById('cfgZona').value   = cfg.zona   || '';
  openModal('modalConfig');
}

function saveConfigData() {
  const cfg = {
    codigo: document.getElementById('cfgCodigo').value.trim(),
    nombre: document.getElementById('cfgNombre').value.trim() || 'Asesor',
    zona:   document.getElementById('cfgZona').value.trim()
  };
  saveConfig(cfg);
  renderPerfil();
  closeModal('modalConfig');
  showToast('Configuración guardada ✓', 'success');
}

function clearAllData() {
  if (!confirm('⚠️ Se eliminarán TODOS los datos (clientes, visitas y configuración). ¿Continuar?')) return;
  localStorage.removeItem('ap_clientes');
  localStorage.removeItem('ap_visitas');
  localStorage.removeItem('ap_config');
  localStorage.removeItem('ap_productos');
  closeModal('modalConfig');
  renderDashboard();
  showToast('Datos eliminados', 'warning');
  renderPerfil();
}

// ── EXPORTAR RESUMEN ──────────────────────────────────────────
function exportarResumen() {
  const hoy = todayISO();
  const diaHoy = todayDia();
  const clientes = loadClientes();
  const visitas = loadVisitas();
  const productos = loadProductos();
  const cfg = loadConfig();

  const visitasHoy = visitas.filter(v => v.fecha === hoy);
  const clientesHoy = clientes.filter(c => c.dia === diaHoy);

  let texto = `╔══════════════════════════════════════╗\n`;
  texto += `║         ZenUp – RESUMEN DÍA       ║\n`;
  texto += `╚══════════════════════════════════════╝\n`;
  texto += `Asesor: ${cfg.nombre}  |  Zona: ${cfg.zona || 'N/A'}\n`;
  texto += `Fecha: ${fmtDate(hoy)}  |  Día: ${diaHoy}\n`;
  texto += `────────────────────────────────────────\n\n`;

  let totalGeneral = 0;

  clientesHoy.forEach(c => {
    texto += `▸ ${c.codigo} – ${c.nombre}\n`;
    texto += `  ${c.poblacion || ''}\n`;
    const vis = visitasHoy.filter(v => v.clienteId === c.id).sort((a,b) => b.creadoEn - a.creadoEn)[0];
    if (!vis) {
      texto += `  ● Estado: Sin visitar\n\n`;
      return;
    }
    const estLabel = { pendiente:'Pendiente', en_curso:'En curso', completada:'Completada', no_visitado:'No visitado' };
    texto += `  ● Estado: ${estLabel[vis.estado] || vis.estado}\n`;
    if (vis.notas) texto += `  📝 ${vis.notas}\n`;

    if (vis.productos && vis.productos.length > 0) {
      texto += `\n  PRODUCTOS:\n`;
      texto += `  ${'─'.repeat(60)}\n`;
      texto += `  ${'CÓDIGO'.padEnd(12)} ${'PRODUCTO'.padEnd(28)} ${'TIENE'.padStart(6)} ${'PIDE'.padStart(6)} ${'AGOT'.padStart(5)} ${'VENC'.padStart(5)}\n`;
      texto += `  ${'─'.repeat(68)}\n`;

      let totalCliente = 0;
      vis.productos.forEach(vp => {
        const p = productos.find(x => x.id === vp.productoId);
        if (!p) return;
        const flags = [];
        if (vp.agotado > 0) flags.push(`AGOTADO:${vp.agotado}`);
        if (vp.vencido > 0) flags.push(`VENCIDO:${vp.vencido}`);
        const flagStr = flags.length > 0 ? ` [${flags.join(',')}]` : '';
        const agotStr = String(vp.agotado||0).padStart(5);
        const vencStr = String(vp.vencido||0).padStart(5);
        texto += `  ${p.codigo.padEnd(12)} ${p.nombre.substring(0,28).padEnd(28)} ${String(vp.tiene||0).padStart(6)} ${String(vp.pedira||0).padStart(6)} ${agotStr} ${vencStr}${flagStr}\n`;
        if (vp.pedira > 0) totalCliente += p.precio * vp.pedira;
      });

      if (totalCliente > 0) {
        texto += `\n  TOTAL PEDIDO: ${fmt$(totalCliente)}\n`;
        totalGeneral += totalCliente;
      }
    }
    texto += `\n`;
  });

  texto += `════════════════════════════════════════\n`;
  texto += `TOTAL GENERAL DEL DÍA: ${fmt$(totalGeneral)}\n`;
  texto += `Visitados: ${visitasHoy.filter(v => v.estado === 'completada').length} / ${clientesHoy.length} clientes\n`;
  texto += `════════════════════════════════════════\n`;
  texto += `Generado con ZenUp · ${new Date().toLocaleString('es-CO')}\n`;

  // Intentar compartir (móvil) o descargar
  if (navigator.share) {
    navigator.share({ title: `Resumen ${fmtDate(hoy)}`, text: texto }).catch(() => descargarTxt(texto, hoy));
  } else {
    descargarTxt(texto, hoy);
  }
}

function descargarTxt(texto, fecha) {
  const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `resumen_${fecha}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Resumen exportado', 'success');
}

// ── HISTORIAL DE CLIENTE ──────────────────────────────────────
function openHistorialModal(clienteId) {
  const clientes = loadClientes(true);
  const c = clientes.find(x => x.id === clienteId);
  if (!c) return;

  const visitas = loadVisitas()
    .filter(v => v.clienteId === clienteId)
    .sort((a, b) => b.fecha.localeCompare(a.fecha)); // más reciente primero

  const productos = loadProductos();

  document.getElementById('historialClienteNombre').textContent = c.nombre;
  document.getElementById('historialClienteCodigo').textContent = c.codigo + ' · ' + (c.poblacion || '') + ' · ' + (c.dia || '');

  const cont = document.getElementById('historialBody');

  if (visitas.length === 0) {
    cont.innerHTML = `<div class="empty-state" style="padding:2rem;text-align:center;color:#9E9E9E">📭 Sin visitas registradas aún</div>`;
    openModal('modalHistorial');
    return;
  }

  // Calcular acumulado por producto
  const prodSummary = {};
  visitas.forEach(v => {
    (v.productos || []).forEach(vp => {
      if ((vp.pedira || 0) > 0 || (vp.tiene || 0) > 0) {
        const p = productos.find(x => x.id === vp.productoId);
        if (!prodSummary[vp.productoId]) {
          prodSummary[vp.productoId] = { nombre: p ? p.nombre : vp.productoId, pedira: 0, stock: vp.tiene || 0 };
        }
        prodSummary[vp.productoId].pedira += (vp.pedira || 0);
        prodSummary[vp.productoId].stock = vp.tiene || prodSummary[vp.productoId].stock;
      }
    });
  });

  const prodsConVenta = Object.values(prodSummary).sort((a,b) => b.pedira - a.pedira);
  const maxPed = prodsConVenta.length ? Math.max(...prodsConVenta.map(x => x.pedira)) : 1;

  let topProdsHtml = '';
  if (prodsConVenta.length > 0) {
    topProdsHtml = `
      <div style="background: linear-gradient(135deg, #0F172A, #1E293B); color: white; border-radius: 14px; padding: 16px 18px; margin: 12px 16px 18px 16px; box-shadow: 0 4px 14px rgba(15,23,42,0.15);">
        <div style="font-weight:700; font-size:0.92rem; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
          <span>📊 Acumulado de Productos hasta el momento</span>
          <span style="font-size:0.75rem; color:#94A3B8; font-weight:normal;">${prodsConVenta.length} producto(s) pedidos</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${prodsConVenta.map(p => {
            const pct = maxPed ? Math.round((p.pedira / maxPed) * 100) : 0;
            return `
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; margin-bottom:3px;">
                  <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:240px;">${p.nombre}</span>
                  <span style="color:#FFB74D;">${p.pedira} und. pedidos (Stock: ${p.stock})</span>
                </div>
                <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:10px; overflow:hidden;">
                  <div style="height:100%; width:${Math.max(pct, 5)}%; background:linear-gradient(90deg, #FF6B00, #FFA726); border-radius:10px;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  cont.innerHTML = topProdsHtml + visitas.map((v, idx) => {
    const prev = visitas[idx + 1]; // visita anterior (más antigua)
    const fecha = fmtDate(v.fecha);
    const estadoClass = v.estado === 'completada' ? 'hist-badge-completada' : 'hist-badge-pendiente';
    const estadoBadge = { completada: '✅ Completada', pendiente: '⏳ Pendiente', en_curso: '🔄 En curso' }[v.estado] || v.estado;

    // Filtrar para destacar productos con movimiento o novedades
    const productosConInfo = v.productos.filter(vp => (vp.tiene || 0) > 0 || (vp.pedira || 0) > 0 || vp.agotado || vp.vencido);
    const productosAMostrar = productosConInfo.length > 0 ? productosConInfo : v.productos;

    const filas = productosAMostrar.map(vp => {
      const p = productos.find(x => x.id === vp.productoId);
      if (!p) return '';
      const prevVp = prev ? prev.productos.find(x => x.productoId === vp.productoId) : null;

      function trend(cur, old) {
        if (!prevVp) return '';
        const diff = cur - old;
        if (diff > 0) return `<span class="trend-up">▲+${diff}</span>`;
        if (diff < 0) return `<span class="trend-down">▼${diff}</span>`;
        return `<span class="trend-eq">=</span>`;
      }

      const tTiene  = trend(vp.tiene  || 0, prevVp ? prevVp.tiene  || 0 : 0);
      const tPedira = trend(vp.pedira || 0, prevVp ? prevVp.pedira || 0 : 0);

      const agotadoBadge = vp.agotado ? '<span class="badge-agotado">Agotado</span>' : '';
      const vencidoBadge = vp.vencido ? '<span class="badge-vencido">Vencido</span>' : '';
      const estadoStr = [agotadoBadge, vencidoBadge].filter(Boolean).join(' ') || '<span class="text-muted font-sm">Ok</span>';

      return `<tr>
        <td class="hist-prod-name"><strong>${p.nombre}</strong></td>
        <td class="text-center font-mono"><strong>${vp.tiene || 0}</strong> ${tTiene}</td>
        <td class="text-center font-mono highlight-pide"><strong>${vp.pedira || 0}</strong> ${tPedira}</td>
        <td class="text-center">${estadoStr}</td>
      </tr>`;
    }).filter(Boolean).join('');

    const totalFmt = fmt$(v.totalPedido || 0);

    return `
      <div class="hist-entry">
        <div class="hist-entry-head">
          <div class="hist-head-left">
            <span class="hist-icon">📅</span>
            <span class="hist-fecha">${fecha}</span>
            <span class="hist-badge ${estadoClass}">${estadoBadge}</span>
          </div>
          <div class="hist-total-badge">
            <span class="hist-total-label">Total Pedido:</span>
            <strong>${totalFmt}</strong>
          </div>
        </div>
        ${filas ? `
        <div class="hist-table-wrap">
          <table class="hist-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th class="text-center">Stock</th>
                <th class="text-center">A Pedir</th>
                <th class="text-center">Estado</th>
              </tr>
            </thead>
            <tbody>${filas}</tbody>
          </table>
        </div>` : '<p class="hist-empty-msg">Sin productos registrados en esta visita</p>'}
        ${v.notas ? `<div class="hist-notas">💡 <strong>Nota:</strong> ${v.notas}</div>` : ''}
      </div>`;
  }).join('');

  openModal('modalHistorial');
}

// ── SERVICE WORKER ────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
