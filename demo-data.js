/* ============================================================
   ZenUp – Datos de demostración
   Asesores reales Zenú – Pereira
   ============================================================ */

(function loadDemoData() {
  // Lista completa de asesores reales
  const trabajadores = [
    { id: 't-001', cedula: '1005021309',  nombre: 'ADRIANA CALLE ALVAREZ',              zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-002', cedula: '1112774849',  nombre: 'ANYIE VIVIANA CARDONA DUQUE',         zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-003', cedula: '1112783158',  nombre: 'BRAYAN CAMILO ALZATE BUSTAMANTE',     zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-004', cedula: '1088327362',  nombre: 'YEISSON STIVEN GAÑAN NIETO',          zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-005', cedula: '1088008480',  nombre: 'ANA MARIA ACERO OCAMPO',             zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-006', cedula: '1088252454',  nombre: 'ALBA YANETH SANCHEZ SOSSA',           zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-007', cedula: '1004719311',  nombre: 'JUAN MANUEL RESTREPO ORREGO',         zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-008', cedula: '42016714',    nombre: 'LUZ ANDREA (GEMELA) ALVAREZ MONTOYA', zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-009', cedula: '1112764385',  nombre: 'JUAN GABRIEL OCAMPO MARIN',           zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-010', cedula: '1087493266',  nombre: 'TANIA ALEJANDRA ISAZA ARICAPA',       zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-011', cedula: '1112785365',  nombre: 'ANGIE TATIANA BEDOYA CORREA',         zona: 'Pereira - Cuba / Perla del Sur', telefono: '', rol: 'trabajador' },
    { id: 't-012', cedula: '1088334239',  nombre: 'CRISTHIAN DAVID CASTAÑO CORREA',      zona: '', telefono: '', rol: 'trabajador' },
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

  localStorage.setItem('ap_clientes', JSON.stringify(clientes));
  console.log('✅ Clientes de Angie Tatiana Bedoya cargados:', clientes.length, 'clientes.');

  if (typeof renderDashboard === 'function') {
    renderDashboard();
    if (typeof renderPerfil === 'function') renderPerfil();
  }
})();
