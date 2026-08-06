/* ============================================================
   ZenUp – Capa de sincronización con Supabase
   Los datos se guardan primero en localStorage (offline-first)
   y luego se sincronizan con Supabase cuando hay conexión.
   ============================================================ */

'use strict';

// ── CONFIGURACIÓN SUPABASE ────────────────────────────────────
// Reemplaza estos valores con los de tu proyecto en supabase.com
const SUPABASE_URL = 'https://cjmsmooskigmxidtcibd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqbXNtb29za2lnbXhpZHRjaWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3ODMwNTgsImV4cCI6MjEwMTM1OTA1OH0.SRrEAq_9tmp4GDC7F2wvgagsLtqYLS10jR3hPcMJ_lo';

let supabaseClient = null;

function initSupabase() {
  try {
    if (typeof window.supabase !== 'undefined' &&
        SUPABASE_URL !== 'https://TU_PROYECTO.supabase.co') {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      console.log('✅ Supabase conectado');
    } else {
      console.warn('⚠️ Supabase no configurado — modo local activado');
    }
  } catch (e) {
    console.warn('Supabase no disponible:', e.message);
  }
}

function isSupabaseReady() {
  return supabaseClient !== null && navigator.onLine;
}

// ── SINCRONIZACIÓN DE VISITAS ─────────────────────────────────

async function syncVisita(visita) {
  if (!isSupabaseReady()) return false;
  try {
    const { error } = await supabaseClient
      .from('visitas')
      .upsert({
        id:             visita.id,
        cliente_id:     visita.clienteId,
        trabajador_id:  visita.trabajadorId || '',
        fecha:          visita.fecha,
        estado:         visita.estado,
        notas:          visita.notas || '',
        productos:      JSON.stringify(visita.productos || []),
        total_pedido:   visita.totalPedido || 0,
        creado_en:      new Date(visita.creadoEn || Date.now()).toISOString(),
        actualizado_en: new Date(visita.actualizadoEn || Date.now()).toISOString()
      }, { onConflict: 'id' });
    if (error) throw error;
    return true;
  } catch (e) {
    console.warn('Error sincronizando visita:', e.message);
    return false;
  }
}

async function syncCliente(cliente) {
  if (!isSupabaseReady()) return false;
  try {
    const { error } = await supabaseClient
      .from('clientes')
      .upsert({
        id:            cliente.id,
        codigo:        cliente.codigo,
        nombre:        cliente.nombre,
        poblacion:     cliente.poblacion || '',
        dia:           cliente.dia,
        telefono:      cliente.telefono || '',
        notas:         cliente.notas || '',
        trabajador_id: cliente.trabajadorId || '',
        creado_en:     new Date(cliente.creadoEn || Date.now()).toISOString()
      }, { onConflict: 'id' });
    if (error) throw error;
    return true;
  } catch (e) {
    console.warn('Error sincronizando cliente:', e.message);
    return false;
  }
}

// ── PULL: traer datos del servidor al dispositivo ─────────────

async function pullVisitas(trabajadorId) {
  if (!isSupabaseReady()) return null;
  try {
    let query = supabaseClient.from('visitas').select('*');
    if (trabajadorId && trabajadorId !== '0000') {
      query = query.eq('trabajador_id', trabajadorId);
    }
    const { data, error } = await query.order('fecha', { ascending: false }).limit(500);
    if (error) throw error;
    return data.map(r => ({
      id:           r.id,
      clienteId:    r.cliente_id,
      trabajadorId: r.trabajador_id,
      fecha:        r.fecha,
      estado:       r.estado,
      notas:        r.notas,
      productos:    typeof r.productos === 'string' ? JSON.parse(r.productos) : (r.productos || []),
      totalPedido:  r.total_pedido || 0,
      creadoEn:     new Date(r.creado_en).getTime(),
      actualizadoEn: new Date(r.actualizado_en).getTime()
    }));
  } catch (e) {
    console.warn('Error trayendo visitas:', e.message);
    return null;
  }
}

async function pullClientes() {
  if (!isSupabaseReady()) return null;
  try {
    const { data, error } = await supabaseClient
      .from('clientes').select('*').order('nombre');
    if (error) throw error;
    return data.map(r => ({
      id:           r.id,
      codigo:       r.codigo,
      nombre:       r.nombre,
      poblacion:    r.poblacion || '',
      dia:          r.dia,
      telefono:     r.telefono || '',
      notas:        r.notas || '',
      trabajadorId: r.trabajador_id || '',
      creadoEn:     new Date(r.creado_en).getTime()
    }));
  } catch (e) {
    console.warn('Error trayendo clientes:', e.message);
    return null;
  }
}

async function pullClientesPorAsesor(cedula) {
  if (!isSupabaseReady()) return null;
  try {
    const { data, error } = await supabaseClient
      .from('clientes').select('*').eq('trabajador_id', cedula).order('nombre');
    if (error) throw error;
    return data.map(r => ({
      id:           r.id,
      codigo:       r.codigo,
      nombre:       r.nombre,
      poblacion:    r.poblacion || '',
      dia:          r.dia,
      telefono:     r.telefono || '',
      notas:        r.notas || '',
      trabajadorId: r.trabajador_id || '',
      creadoEn:     new Date(r.creado_en).getTime()
    }));
  } catch (e) {
    console.warn('Error trayendo clientes del asesor:', e.message);
    return null;
  }
}

async function pullTrabajadores() {
  if (!isSupabaseReady()) return null;
  try {
    const { data, error } = await supabaseClient
      .from('trabajadores').select('*');
    if (error) throw error;
    return data.map(r => ({
      id:            r.id,
      cedula:        r.cedula,
      codigoVentas:  r.codigo_ventas || '',
      nombre:        r.nombre,
      zona:          r.zona || '',
      telefono:      r.telefono || '',
      rol:           r.rol || 'trabajador'
    }));
  } catch (e) {
    console.warn('Error trayendo trabajadores:', e.message);
    return null;
  }
}

async function pullProductos() {
  if (!isSupabaseReady()) return null;
  try {
    const { data, error } = await supabaseClient
      .from('productos').select('*').order('nombre');
    if (error) throw error;
    return data.map(r => ({
      id:        r.id,
      codigo:    r.codigo || '',
      nombre:    r.nombre,
      precio:    r.precio || 0,
      categoria: r.categoria || ''
    }));
  } catch (e) {
    console.warn('Error trayendo productos:', e.message);
    return null;
  }
}

async function syncProducto(producto) {
  if (!isSupabaseReady()) return false;
  try {
    const { error } = await supabaseClient
      .from('productos')
      .upsert({
        id:        producto.id,
        codigo:    producto.codigo || '',
        nombre:    producto.nombre,
        precio:    producto.precio || 0,
        categoria: producto.categoria || ''
      }, { onConflict: 'id' });
    if (error) throw error;
    return true;
  } catch (e) {
    console.warn('Error sincronizando producto:', e.message);
    return false;
  }
}

// ── CARGA INICIAL: subir todos los datos locales al servidor ──

async function uploadAllLocalData() {
  if (!isSupabaseReady()) return;
  updateSyncBadge('syncing');

  // Subir trabajadores
  const trabajadores = JSON.parse(localStorage.getItem('ap_trabajadores') || '[]');
  if (trabajadores.length > 0) {
    const rows = trabajadores.map(t => ({
      id:           t.id,
      cedula:       t.cedula,
      codigo_ventas: t.codigoVentas || '',
      nombre:       t.nombre,
      zona:         t.zona || '',
      telefono:     t.telefono || '',
      rol:          t.rol || 'trabajador'
    }));
    const { error } = await supabaseClient.from('trabajadores').upsert(rows, { onConflict: 'id' });
    if (error) console.warn('Error subiendo trabajadores:', error.message);
    else console.log(`✅ ${rows.length} trabajadores subidos`);
  }

  // Subir clientes
  const clientes = JSON.parse(localStorage.getItem('ap_clientes') || '[]');
  if (clientes.length > 0) {
    // Supabase tiene límite de 1000 por request, subir en lotes
    const BATCH = 200;
    for (let i = 0; i < clientes.length; i += BATCH) {
      const batch = clientes.slice(i, i + BATCH).map(c => ({
        id:            c.id,
        codigo:        c.codigo || '',
        nombre:        c.nombre,
        poblacion:     c.poblacion || '',
        dia:           c.dia,
        telefono:      c.telefono || '',
        notas:         c.notas || '',
        trabajador_id: c.trabajadorId || ''
      }));
      const { error } = await supabaseClient.from('clientes').upsert(batch, { onConflict: 'id' });
      if (error) console.warn('Error subiendo clientes:', error.message);
    }
    console.log(`✅ ${clientes.length} clientes subidos`);
  }

  // Subir productos del catálogo
  const productos = JSON.parse(localStorage.getItem('ap_productos') || '[]');
  if (productos.length > 0) {
    const BATCH = 200;
    for (let i = 0; i < productos.length; i += BATCH) {
      const batch = productos.slice(i, i + BATCH).map(p => ({
        id:        p.id,
        codigo:    p.codigo || '',
        nombre:    p.nombre,
        precio:    p.precio || 0,
        categoria: p.categoria || ''
      }));
      const { error } = await supabaseClient.from('productos').upsert(batch, { onConflict: 'id' });
      if (error) console.warn('Error subiendo productos:', error.message);
    }
    console.log(`✅ ${productos.length} productos subidos`);
  }

  // Subir visitas existentes
  await pushAllPendingVisitas();

  updateSyncBadge(true);
  if (typeof showToast === 'function') showToast(`✅ Datos subidos al servidor`, 'success');
}

// Exponer globalmente para llamar desde consola o botón admin
window.uploadAllLocalData = uploadAllLocalData;

async function pushAllPendingVisitas() {
  if (!isSupabaseReady()) return;
  const visitas = JSON.parse(localStorage.getItem('ap_visitas') || '[]');
  const sess = JSON.parse(localStorage.getItem('ap_session') || 'null');
  let count = 0;
  for (const v of visitas) {
    const vConTrabajador = { ...v, trabajadorId: sess ? sess.cedula : '' };
    const ok = await syncVisita(vConTrabajador);
    if (ok) count++;
  }
  if (count > 0) console.log(`✅ Sincronizadas ${count} visitas`);
}

async function fullSync() {
  if (!isSupabaseReady()) {
    updateSyncBadge(false);
    return;
  }
  updateSyncBadge('syncing');

  // Push visitas locales primero
  await pushAllPendingVisitas();

  const sess = JSON.parse(localStorage.getItem('ap_session') || 'null');
  const isAdmin = sess && sess.rol === 'admin';

  if (isAdmin) {
    // Admin: traer todo del servidor
    const remoteTrab = await pullTrabajadores();
    if (remoteTrab && remoteTrab.length > 0) {
      localStorage.setItem('ap_trabajadores', JSON.stringify(remoteTrab));
    }

    const remoteClients = await pullClientes();
    if (remoteClients && remoteClients.length > 0) {
      localStorage.setItem('ap_clientes', JSON.stringify(remoteClients));
    }

    // Productos: servidor es fuente de verdad (compartido entre todos)
    const remoteProductos = await pullProductos();
    if (remoteProductos && remoteProductos.length > 0) {
      localStorage.setItem('ap_productos', JSON.stringify(remoteProductos));
    }

    const remoteVisitas = await pullVisitas(null);
    if (remoteVisitas) {
      const local = JSON.parse(localStorage.getItem('ap_visitas') || '[]');
      // Merge: el más reciente (actualizadoEn) gana
      const mapaRemoto = {};
      remoteVisitas.forEach(rv => { mapaRemoto[rv.id] = rv; });
      const mapaLocal = {};
      local.forEach(lv => { mapaLocal[lv.id] = lv; });
      // Unir todos los IDs
      const todosIds = new Set([...Object.keys(mapaRemoto), ...Object.keys(mapaLocal)]);
      const merged = [];
      todosIds.forEach(id => {
        const r = mapaRemoto[id];
        const l = mapaLocal[id];
        if (r && l) {
          // Gana el más reciente
          merged.push((l.actualizadoEn || 0) > (r.actualizadoEn || 0) ? l : r);
        } else {
          merged.push(r || l);
        }
      });
      localStorage.setItem('ap_visitas', JSON.stringify(merged));
    }
  } else if (sess) {
    // Asesor: push primero, luego traer SUS clientes, productos y visitas del servidor

    // 1. Clientes asignados a este asesor
    const remoteClientes = await pullClientesPorAsesor(sess.cedula);
    if (remoteClientes && remoteClientes.length > 0) {
      // Merge con locales: conservar locales de otros asesores (si el cel fue compartido)
      const localAll = JSON.parse(localStorage.getItem('ap_clientes') || '[]');
      const localOtros = localAll.filter(c => c.trabajadorId && c.trabajadorId !== sess.cedula);
      const mapaRemoto = {};
      remoteClientes.forEach(rc => { mapaRemoto[rc.id] = rc; });
      const mapaLocal = {};
      localAll.filter(c => !c.trabajadorId || c.trabajadorId === sess.cedula)
               .forEach(lc => { mapaLocal[lc.id] = lc; });
      const todosIds = new Set([...Object.keys(mapaRemoto), ...Object.keys(mapaLocal)]);
      const mergedClientes = [];
      todosIds.forEach(id => {
        const r = mapaRemoto[id];
        const l = mapaLocal[id];
        mergedClientes.push(r || l); // servidor siempre es la fuente de verdad para clientes
      });
      localStorage.setItem('ap_clientes', JSON.stringify([...localOtros, ...mergedClientes]));
    }

    // 2. Productos del catálogo (compartido, mismo para todos los asesores)
    const remoteProductos = await pullProductos();
    if (remoteProductos && remoteProductos.length > 0) {
      localStorage.setItem('ap_productos', JSON.stringify(remoteProductos));
    }

    // 3. Visitas del asesor
    const remoteVisitas = await pullVisitas(sess.cedula);
    if (remoteVisitas) {
      const local = JSON.parse(localStorage.getItem('ap_visitas') || '[]');

      // Solo conservar locales que pertenecen a este asesor
      // (por si el dispositivo fue usado por otro asesor antes)
      const localDelAsesor = local.filter(lv =>
        !lv.trabajadorId || lv.trabajadorId === sess.cedula
      );

      const mapaRemoto = {};
      remoteVisitas.forEach(rv => { mapaRemoto[rv.id] = rv; });
      const mapaLocal = {};
      localDelAsesor.forEach(lv => { mapaLocal[lv.id] = lv; });

      const todosIds = new Set([...Object.keys(mapaRemoto), ...Object.keys(mapaLocal)]);
      const merged = [];
      todosIds.forEach(id => {
        const r = mapaRemoto[id];
        const l = mapaLocal[id];
        if (r && l) {
          merged.push((l.actualizadoEn || 0) > (r.actualizadoEn || 0) ? l : r);
        } else {
          merged.push(r || l);
        }
      });
      localStorage.setItem('ap_visitas', JSON.stringify(merged));
    }
  }

  updateSyncBadge(true);

  // Refrescar solo la vista activa
  if (typeof currentView !== 'undefined' && typeof renderDashboard === 'function') {
    if (currentView === 'dashboard')    renderDashboard();
    if (currentView === 'clientes'     && typeof renderClientes    === 'function') renderClientes();
    if (currentView === 'visitas'      && typeof renderVisitasHoy  === 'function') renderVisitasHoy();
    if (currentView === 'reportes'     && typeof renderReportes    === 'function') renderReportes();
    if (currentView === 'trabajadores' && typeof renderTrabajadores=== 'function') renderTrabajadores();
    if (currentView === 'semana'       && typeof renderSemana      === 'function') renderSemana();
  }
}

// ── BADGE DE ESTADO DE SYNC ───────────────────────────────────
function updateSyncBadge(status) {
  const badge = document.getElementById('syncStatusBadge');
  if (!badge) return;
  if (status === 'syncing') {
    badge.textContent = '🔄 Sincronizando...';
    badge.className = 'sync-badge syncing';
  } else if (status === true) {
    badge.textContent = '✅ Sincronizado';
    badge.className = 'sync-badge ok';
    setTimeout(() => { badge.textContent = ''; badge.className = 'sync-badge'; }, 3000);
  } else {
    badge.textContent = '📴 Sin conexión';
    badge.className = 'sync-badge offline';
  }
}

// ── INICIALIZAR ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();

  // Sincronizar al recuperar conexión
  window.addEventListener('online', () => {
    if (typeof showToast === 'function') showToast('Conexión restaurada — sincronizando...', '');
    setTimeout(fullSync, 1000);
  });

  // Sincronización inicial
  setTimeout(fullSync, 2000);

  // Auto-sync cada 60 segundos si hay sesión activa y conexión
  setInterval(() => {
    const sess = JSON.parse(localStorage.getItem('ap_session') || 'null');
    if (sess && navigator.onLine) {
      fullSync();
    }
  }, 60000);
});
