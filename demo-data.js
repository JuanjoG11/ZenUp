/* ============================================================
   ZenUp – Datos de demostración
   Asesores reales Zenú – Pereira
   ============================================================ */

(function loadDemoData() {
  // Lista completa de asesores reales
  const trabajadores = [
    { id: 't-001', cedula: '1005021309',  codigoVentas: '25027', nombre: 'ADRIANA CALLE ALVAREZ',              zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-002', cedula: '1112774849',  codigoVentas: '25028', nombre: 'ANYIE VIVIANA CARDONA DUQUE',         zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-003', cedula: '1112783158',  codigoVentas: '25029', nombre: 'BRAYAN CAMILO ALZATE BUSTAMANTE',     zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-004', cedula: '1088327362',  codigoVentas: '25030', nombre: 'YEISSON STIVEN GAÑAN NIETO',          zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-005', cedula: '1088008480',  codigoVentas: '25031', nombre: 'ANA MARIA ACERO OCAMPO',             zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-006', cedula: '1088252454',  codigoVentas: '25032', nombre: 'ALBA YANETH SANCHEZ SOSSA',           zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-007', cedula: '1004719311',  codigoVentas: '25033', nombre: 'JUAN MANUEL RESTREPO ORREGO',         zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-008', cedula: '42016714',    codigoVentas: '25034', nombre: 'LUZ ANDREA (GEMELA) ALVAREZ MONTOYA', zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-009', cedula: '1112764385',  codigoVentas: '25035', nombre: 'JUAN GABRIEL OCAMPO MARIN',           zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-010', cedula: '1087493266',  codigoVentas: '25036', nombre: 'TANIA ALEJANDRA ISAZA ARICAPA',       zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-011', cedula: '1112785365',  codigoVentas: '25037', nombre: 'ANGIE TATIANA BEDOYA CORREA',         zona: 'Pereira - Cuba / Perla del Sur', telefono: '', rol: 'trabajador' },
    { id: 't-012', cedula: '1088334239',  codigoVentas: '25038', nombre: 'CRISTHIAN DAVID CASTAÑO CORREA',      zona: '', telefono: '', rol: 'trabajador' },
  ];
  localStorage.setItem('ap_trabajadores', JSON.stringify(trabajadores));

  // Lista completa de clientes de Angie (se irá completando día a día)
  const clientes = [
    // ── LUNES ──────────────────────────────────────────────────
    {
      id: 'c-l-001',
      codigo: '600000551030',
      nombre: 'AUTOSERVICIO LA GRAN COLOMBIA',
      poblacion: 'PEREIRA - PERLA DEL SUR CUBA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-l-002',
      codigo: '600000560986',
      nombre: 'MISCELANEA PERLA HORIZONTE',
      poblacion: 'PEREIRA - PERLA DEL SUR CUBA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-l-003',
      codigo: '600000155290',
      nombre: 'TIENDA XIOMY',
      poblacion: 'PEREIRA - PERLA DEL SUR CUBA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },

    // ── MARTES ─────────────────────────────────────────────────
    {
      id: 'c-m-001',
      codigo: '600000589255',
      nombre: 'HUEVOS Y LACTEOS DEL CAMPO',
      poblacion: 'PEREIRA - COROCITO',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-m-002',
      codigo: '600000081211',
      nombre: 'TIENDA OREGON',
      poblacion: 'PEREIRA - VILLAVICENCIO',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },

    // ── MARTES – ADRIANA CALLE (cédula: 1005021309) ───────────
    {
      id: 'ca-m-001',
      codigo: '600000586025',
      nombre: 'MISCELANEA SANCHEZ',
      poblacion: 'PEREIRA - VILLA SANTANA',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-m-002',
      codigo: '600000549618',
      nombre: 'MINIMERCADO LAS BRISAS',
      poblacion: 'PEREIRA - LAS BRISAS',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-m-003',
      codigo: '600000521074',
      nombre: 'MERCATODO LAS BRISAS EN',
      poblacion: 'PEREIRA - LAS BRISAS',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-m-004',
      codigo: '600000331267',
      nombre: 'TIENDA EL JARDIN',
      poblacion: 'DOSQUEBRADAS',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-m-005',
      codigo: '600000288581',
      nombre: 'SURTI MARKET',
      poblacion: 'DOSQUEBRADAS',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },

    // ── LUNES – ADRIANA CALLE ─────────────────────────────────
    {
      id: 'ca-l-001',
      codigo: '600000365284',
      nombre: 'SUPERMERCADO EL ARRIERO',
      poblacion: 'PEREIRA - ALTAGRACIA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-l-002',
      codigo: '600000344542',
      nombre: 'REVUELTERIA LA CAMPESINITA',
      poblacion: 'PEREIRA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },

    // ── SÁBADO – ADRIANA CALLE ────────────────────────────────
    {
      id: 'ca-s-001',
      codigo: '600000542172',
      nombre: 'RAPITIENDA LOS PAISAS M A',
      poblacion: 'SANTA ROSA DE CABAL',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    // ── MIÉRCOLES – ADRIANA CALLE ─────────────────────────────
    {
      id: 'ca-x-001',
      codigo: '600000590932',
      nombre: 'SALSAMENTARIA SALSARIAS',
      poblacion: 'DOSQUEBRADAS - FRAILES',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-x-002',
      codigo: '',
      nombre: 'AUTOSERVICIO MERCAFRAILES',
      poblacion: 'DOSQUEBRADAS - FRAILES',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: 'Código pendiente de confirmar',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-x-003',
      codigo: '600000487495',
      nombre: 'MINIMERCADO EL SAMANEÑO',
      poblacion: 'DOSQUEBRADAS - FRAILES',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    },
    {
      id: 'ca-x-004',
      codigo: '600000439117',
      nombre: 'RAPITIENDA LOS GARCIA',
      poblacion: 'DOSQUEBRADAS - FRAILES',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1005021309',
      creadoEn: Date.now()
    }

    // ── MIÉRCOLES ──────────────────────────────────────────────
    ,{
      id: 'c-x-001',
      codigo: '600000498278',
      nombre: 'LA CHARCUTERIA DEL CAMPO',
      poblacion: 'DOSQUEBRADAS - EL CRUCERO',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-x-002',
      codigo: '600000098544',
      nombre: 'CARNICERIA PESCADOS Y ALGO MAS',
      poblacion: 'DOSQUEBRADAS - LAS VIOLETAS',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    }

    // ── JUEVES ─────────────────────────────────────────────────
    ,{
      id: 'c-j-001',
      codigo: '600000582240',
      nombre: 'TIENDA MIXTA EL MANA',
      poblacion: 'PEREIRA - LAS MERCEDES CUBA',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    }

    // ── VIERNES ────────────────────────────────────────────────
    ,{
      id: 'c-v-001',
      codigo: '600000542251',
      nombre: 'MISCELANEA EL COLISEO',
      poblacion: 'PEREIRA - CENTRO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-v-002',
      codigo: '600000595354',
      nombre: 'QUESOS LA 12',
      poblacion: 'PEREIRA - CENTRO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-v-003',
      codigo: '600000542187',
      nombre: 'MERCADIARIO LA 22',
      poblacion: 'PEREIRA - CENTRO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-v-004',
      codigo: '600000448640',
      nombre: 'TIENDA EL BUEN PRECIO',
      poblacion: 'PEREIRA - CENTRO SANTA TERESITA',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    }

    // ── SÁBADO ─────────────────────────────────────────────────
    ,{
      id: 'c-s-001',
      codigo: '600000472634',
      nombre: 'CONGUSTO TIENDA Y PANADERIA',
      poblacion: 'SANTA ROSA - LA HERMOSA',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    },
    {
      id: 'c-s-002',
      codigo: '600000423721',
      nombre: 'AUTOSERVICIO Y LICORES LA 23',
      poblacion: 'SANTA ROSA - LA HERMOSA',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1112785365',
      creadoEn: Date.now()
    }
  ];

  // Siempre actualizar trabajadores (para que codigoVentas quede actualizado)
  localStorage.setItem('ap_trabajadores', JSON.stringify(trabajadores));

  // Merge de clientes — agregar solo los que no existen por id
  const existentes = JSON.parse(localStorage.getItem('ap_clientes') || '[]');
  const merged = [...existentes];
  let agregados = 0;
  clientes.forEach(c => {
    if (!merged.find(e => e.id === c.id)) {
      merged.push(c);
      agregados++;
    }
  });
  localStorage.setItem('ap_clientes', JSON.stringify(merged));
  console.log(`✅ ZenUp Demo: trabajadores actualizados, ${agregados} clientes nuevos agregados (total: ${merged.length})`);

  if (typeof renderDashboard === 'function') {
    renderDashboard();
    if (typeof renderPerfil === 'function') renderPerfil();
  }
})();
