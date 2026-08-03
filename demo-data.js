/* ============================================================
   ZenUp – Datos de demostración
   Asesora: ANGIE TATIANA BEDOYA (25022)
   ============================================================ */

(function loadDemoData() {
  // Siempre sobreescribir trabajadores con la asesora única
  const trabajadores = [
    { id: 't-001', cedula: '25022', nombre: 'ANGIE TATIANA BEDOYA', zona: 'Pereira - Cuba / Perla del Sur', telefono: '', rol: 'trabajador' }
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
      trabajadorId: '25022',
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
