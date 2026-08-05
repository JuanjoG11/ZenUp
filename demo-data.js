/* ============================================================
   ZenUp – Datos de demostración
   Asesores reales Zenú – Pereira
   ============================================================ */

(function loadDemoData() {
  // Lista completa de asesores reales
  const trabajadores = [
    { id: 't-001', cedula: '1005021309',  codigoVentas: '25027', nombre: 'ADRIANA CALLE ALVAREZ',              zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-002', cedula: '1112774849',  codigoVentas: '25024', nombre: 'ANYIE VIVIANA CARDONA DUQUE',         zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-003', cedula: '1112783158',  codigoVentas: '25021', nombre: 'BRAYAN CAMILO ALZATE BUSTAMANTE',     zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-004', cedula: '1088327362',  codigoVentas: '25030', nombre: 'YEISSON STIVEN GAÑAN NIETO',          zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-005', cedula: '1088008480',  codigoVentas: '25031', nombre: 'ANA MARIA ACERO OCAMPO',             zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-006', cedula: '1088252454',  codigoVentas: '25028', nombre: 'ALBA YANETH SANCHEZ SOSSA',           zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-007', cedula: '1004719311',  codigoVentas: '25028', nombre: 'JUAN MANUEL RESTREPO ORREGO',         zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-008', cedula: '42016714',    codigoVentas: '25034', nombre: 'LUZ ANDREA (GEMELA) ALVAREZ MONTOYA', zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-009', cedula: '1112764385',  codigoVentas: '25035', nombre: 'JUAN GABRIEL OCAMPO MARIN',           zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-010', cedula: '1087493266',  codigoVentas: '25023', nombre: 'TANIA ALEJANDRA ISAZA ARICAPA',       zona: '', telefono: '', rol: 'trabajador' },
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
    },

    // ── LUNES – ALBA YANETH SANCHEZ (cédula: 1088252454, cód: 25028) ──
    {
      id: 'ay-l-001',
      codigo: '600000589183',
      nombre: 'MINIMARKET EL PARAISO',
      poblacion: 'PEREIRA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-l-002',
      codigo: '600000585780',
      nombre: 'NICO Y SEBAS',
      poblacion: 'PEREIRA - LAURELES',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-l-003',
      codigo: '600000583424',
      nombre: 'MISCELANEA LA 80',
      poblacion: 'PEREIRA - 30 DE AGOSTO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-l-004',
      codigo: '600000561220',
      nombre: 'MERCAFACIL LA TRINIDAD',
      poblacion: 'PEREIRA - VILLA LIGIA CUBA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-l-005',
      codigo: '600000525071',
      nombre: 'FRUTAS Y VERDURAS LA CUCHILLA',
      poblacion: 'PEREIRA - CUCHILLA DE LOS CASTROS CUBA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },

    // ── MARTES – ALBA YANETH SANCHEZ ──────────────────────────
    {
      id: 'ay-m-001',
      codigo: '600000589148',
      nombre: 'SUPERTIENDA SUPERMAX',
      poblacion: 'PEREIRA - SAN JUDAS',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-m-002',
      codigo: '600000542213',
      nombre: 'MERCARAPIDO SAM',
      poblacion: 'PEREIRA - ALFONSO LÓPEZ',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },

    // ── MIÉRCOLES – ALBA YANETH SANCHEZ ───────────────────────
    {
      id: 'ay-x-001',
      codigo: '600000545587',
      nombre: 'FRUVER FAMILIAR',
      poblacion: 'DOSQUEBRADAS - LOS NARANJOS',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-x-002',
      codigo: '600000507339',
      nombre: 'DISTRITODO GUADALUPE',
      poblacion: 'DOSQUEBRADAS - GUADALUPE',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-x-003',
      codigo: '600000123930',
      nombre: 'MISCELANEA JAPON',
      poblacion: 'DOSQUEBRADAS - BUENOS AIRES',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },

    // ── JUEVES – ALBA YANETH SANCHEZ ──────────────────────────
    {
      id: 'ay-j-001',
      codigo: '600000589266',
      nombre: 'TIENDA EL PARAÍSO L.Y',
      poblacion: 'PEREIRA - ALFONSO LÓPEZ',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-j-002',
      codigo: '600000589145',
      nombre: 'MISCELANEA DON LUIS',
      poblacion: 'PEREIRA - EL POBLADO',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },
    {
      id: 'ay-j-003',
      codigo: '600000584004',
      nombre: 'MINIMERCADO CENTENARIO',
      poblacion: 'PEREIRA - EL POBLADO',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },

    // ── SÁBADO – ALBA YANETH SANCHEZ ──────────────────────────
    {
      id: 'ay-s-001',
      codigo: '600000506163',
      nombre: 'VARIEDADES LA GRAN ESQUINA',
      poblacion: 'DOSQUEBRADAS - LA INDEPENDENCIA',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1088252454',
      creadoEn: Date.now()
    },

    // ── LUNES – BRAYAN CAMILO ALZATE (cédula: 1112783158, cód: 25021) ──
    {
      id: 'bc-l-001',
      codigo: '600000586042',
      nombre: 'TIENDA Y FRUTERIA TATY',
      poblacion: 'APIA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-l-002',
      codigo: '600000507942',
      nombre: 'SUPERTIENDA DONDE MARA',
      poblacion: 'APIA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-l-003',
      codigo: '600000445622',
      nombre: 'SUPERMERCADO MERCAPLAZA',
      poblacion: 'APIA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-l-004',
      codigo: '600000494776',
      nombre: 'SUPERMERCADO SAN ISIDRO LABRADOR',
      poblacion: 'SANTUARIO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },

    // ── MARTES – BRAYAN CAMILO ALZATE ─────────────────────────
    {
      id: 'bc-m-001',
      codigo: '600000588817',
      nombre: 'SUPERMERCADO LA CAMPINA L J O',
      poblacion: 'LA CELIA',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-m-002',
      codigo: '600000496360',
      nombre: 'SUPERMERCADO CENTRAL LA CELIA',
      poblacion: 'LA CELIA',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-m-003',
      codigo: '600000288587',
      nombre: 'AUTOSERVICIO LA PRINCIPAL',
      poblacion: 'LA CELIA',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },

    // ── MIÉRCOLES – BRAYAN CAMILO ALZATE ──────────────────────
    {
      id: 'bc-x-001',
      codigo: '600000552300',
      nombre: 'KLICHE',
      poblacion: 'LA VIRGINIA',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },

    // ── JUEVES – BRAYAN CAMILO ALZATE ─────────────────────────
    {
      id: 'bc-j-001',
      codigo: '600000558736',
      nombre: 'MINI MARKET SHARA',
      poblacion: 'SANTA MÓNICA',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },

    // ── VIERNES – BRAYAN CAMILO ALZATE ────────────────────────
    {
      id: 'bc-v-001',
      codigo: '600000584086',
      nombre: 'GRANERO LA ECONOMIA DE PUEBLO RICO',
      poblacion: 'PUEBLO RICO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-v-002',
      codigo: '600000583255',
      nombre: 'SUPER TIENDA LA LORENA PUEBLO RICO',
      poblacion: 'PUEBLO RICO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },
    {
      id: 'bc-v-003',
      codigo: '600000543606',
      nombre: 'TIENDA EL DESCUENTO',
      poblacion: 'PUEBLO RICO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },

    // ── SÁBADO – BRAYAN CAMILO ALZATE ─────────────────────────
    {
      id: 'bc-s-001',
      codigo: '600000542156',
      nombre: 'SUPERMERCADO LOS OLIVOS',
      poblacion: 'DOSQUEBRADAS',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1112783158',
      creadoEn: Date.now()
    },

    // ── LUNES – JUAN MANUEL RESTREPO (cédula: 1004719311, cód: 25028) ──
    {
      id: 'jm-l-001',
      codigo: '600000615566',
      nombre: 'AUTOSERVICIO HORIZONTE',
      poblacion: 'PEREIRA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-l-002',
      codigo: '600000582307',
      nombre: 'CARNICOS DE TODITO',
      poblacion: 'PEREIRA - MONTELÍBANO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-l-003',
      codigo: '600000525043',
      nombre: 'MISCELANEA RV',
      poblacion: 'PEREIRA - 2500 LOTES',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-l-004',
      codigo: '600000501195',
      nombre: 'RAPITIENDA VILLA SOL Y MAS',
      poblacion: 'PEREIRA - LA VILLA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },

    // ── MARTES – JUAN MANUEL RESTREPO ─────────────────────────
    {
      id: 'jm-m-001',
      codigo: '600000589205',
      nombre: 'TIENDA LA ECONOMIA',
      poblacion: 'PEREIRA',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-m-002',
      codigo: '600000549616',
      nombre: 'AUTOSERVICIO MERCA RAPI',
      poblacion: 'PEREIRA - GUACARÍ',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-m-003',
      codigo: '600000435677',
      nombre: 'LOS COSTEÑOS',
      poblacion: 'PEREIRA - COMFAMILIAR',
      dia: 'MARTES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },

    // ── MIÉRCOLES – JUAN MANUEL RESTREPO ──────────────────────
    {
      id: 'jm-l-005',
      codigo: '600000589295',
      nombre: 'SUPERALDY',
      poblacion: 'PEREIRA',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-x-001',
      codigo: '600000589227',
      nombre: 'MERCAFRUVER PLAYA RICA',
      poblacion: 'DOSQUEBRADAS - PLAYA RICA',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-x-002',
      codigo: '600000538074',
      nombre: 'MINIMERCADO MARFIL',
      poblacion: 'DOSQUEBRADAS - VILLA DEL CAMPO',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-x-003',
      codigo: '600000327919',
      nombre: 'TIENDA EL RECREO',
      poblacion: 'DOSQUEBRADAS - SAN FÉLIX',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-x-004',
      codigo: '600000149967',
      nombre: 'TIENDA JUAMPA',
      poblacion: 'DOSQUEBRADAS - SAN FÉLIX',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },

    // ── JUEVES – JUAN MANUEL RESTREPO ─────────────────────────
    {
      id: 'jm-j-001',
      codigo: '600000589179',
      nombre: 'LA GREEN EXPRESS',
      poblacion: 'PEREIRA - EL NOGAL',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },
    {
      id: 'jm-j-002',
      codigo: '600000304158',
      nombre: 'RAPITIENDA BK',
      poblacion: 'PEREIRA - LA VILLA',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },

    // ── SÁBADO – JUAN MANUEL RESTREPO ─────────────────────────
    {
      id: 'jm-s-001',
      codigo: '600000589183',
      nombre: 'MINIMARKET EL PARAISO',
      poblacion: 'PEREIRA',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1004719311',
      creadoEn: Date.now()
    },

    // ── LUNES – TANIA ALEJANDRA ISAZA (cédula: 1087493266, cód: 25023) ──
    {
      id: 'ti-l-001',
      codigo: '600000585454',
      nombre: 'FRUTAS Y VERDURAS TOBIAS',
      poblacion: 'BELÉN',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1087493266',
      creadoEn: Date.now()
    },

    // ── JUEVES – TANIA ALEJANDRA ISAZA ────────────────────────
    {
      id: 'ti-j-001',
      codigo: '600000448679',
      nombre: 'SUPERMERCADO TRIUNFO DE BELEN',
      poblacion: 'BELÉN',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1087493266',
      creadoEn: Date.now()
    },
    {
      id: 'ti-j-002',
      codigo: '600000448666',
      nombre: 'AUTOSERVICIO MERCAHORRO',
      poblacion: 'BELÉN',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1087493266',
      creadoEn: Date.now()
    },

    // ── VIERNES – TANIA ALEJANDRA ISAZA ───────────────────────
    {
      id: 'ti-v-001',
      codigo: '600000487231',
      nombre: 'COMPARE',
      poblacion: 'VITERBO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1087493266',
      creadoEn: Date.now()
    },
    {
      id: 'ti-v-002',
      codigo: '600000448853',
      nombre: 'MERCA PLUS VITERBO',
      poblacion: 'VITERBO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1087493266',
      creadoEn: Date.now()
    },
    {
      id: 'ti-v-003',
      codigo: '600000448803',
      nombre: 'SUPERMERCADO MERCATODO DE OCCIDENTE',
      poblacion: 'VITERBO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1087493266',
      creadoEn: Date.now()
    },

    // ── LUNES – ANGIE VIVIANA CARDONA (cédula: 1112774849, cód: 25024) ──
    {
      id: 'av-l-001',
      codigo: '600000582330',
      nombre: 'SUPERMERCADO LA QUINTA',
      poblacion: 'EL CAIRO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-l-002',
      codigo: '600000582205',
      nombre: 'RAPITIENDA ALBAN',
      poblacion: 'EL CAIRO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-l-003',
      codigo: '600000581814',
      nombre: 'SUPERMERCADO LA COSECHA',
      poblacion: 'EL CAIRO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-l-004',
      codigo: '600000304045',
      nombre: 'ECO TIENDA',
      poblacion: 'EL CAIRO',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-l-005',
      codigo: '600000154786',
      nombre: 'SUPERMERCADO CAMPESINO',
      poblacion: 'LA ARGELIA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-l-006',
      codigo: '600000099138',
      nombre: 'TIENDA PASCANO',
      poblacion: 'LA ARGELIA',
      dia: 'LUNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },

    // ── MIÉRCOLES – ANGIE VIVIANA CARDONA ─────────────────────
    {
      id: 'av-x-001',
      codigo: '600000549579',
      nombre: 'MAXI AVICOLA',
      poblacion: 'EL CAIRO',
      dia: 'MIÉRCOLES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },

    // ── JUEVES – ANGIE VIVIANA CARDONA ────────────────────────
    {
      id: 'av-j-001',
      codigo: '600000585081',
      nombre: 'AUTOSERVICIO MERCADITO',
      poblacion: 'ANSERMA NUEVO',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-j-002',
      codigo: '600000448776',
      nombre: 'SUPERMERCADO LA TIENDA',
      poblacion: 'ANSERMA NUEVO',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-j-003',
      codigo: '600000448648',
      nombre: 'AUTOSERVICIO CLARET',
      poblacion: 'ANSERMA NUEVO',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },

    // ── VIERNES – ANGIE VIVIANA CARDONA ───────────────────────
    {
      id: 'av-v-001',
      codigo: '600000589229',
      nombre: 'DISTRIBUIDORA DOÑA YEMA',
      poblacion: 'CARTAGO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-v-002',
      codigo: '600000589222',
      nombre: 'MEGA TIENDA MARISCAL',
      poblacion: 'CARTAGO - MARISCAL ROBLEDO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-v-003',
      codigo: '600000505719',
      nombre: 'SALSAMENTARIA COMBO K Y C',
      poblacion: 'CARTAGO - MARISCAL ROBLEDO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },
    {
      id: 'av-v-004',
      codigo: '600000448649',
      nombre: 'TIENDA LA ESPERANZA',
      poblacion: 'CARTAGO - EL LLANO',
      dia: 'VIERNES',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
      creadoEn: Date.now()
    },

    // ── SÁBADO – ANGIE VIVIANA CARDONA ────────────────────────
    {
      id: 'av-s-001',
      codigo: '600000288511',
      nombre: 'TIENDA LA AVENIDA',
      poblacion: 'CARTAGO - LAS VERANERAS',
      dia: 'SÁBADO',
      telefono: '',
      notas: '',
      trabajadorId: '1112774849',
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

  // ── CATÁLOGO COMPLETO (siempre actualizar) ──────────────────
  const catalogo = [
    { id:'1041755', codigo:'1041755', nombre:'CBNO. RANCHERA X 160 G',               precio:22462, categoria:'CHORIZO' },
    { id:'1091875', codigo:'1091875', nombre:'CHORIZO PARRILLERO RICA X 800 G',       precio:24290, categoria:'CHORIZO' },
    { id:'1070501', codigo:'1070501', nombre:'CHORIZO TIPO CHUZO X 450G',             precio:17125, categoria:'CHORIZO' },
    { id:'1070502', codigo:'1070502', nombre:'CHORIZO TIPO CHUZO X 500G',             precio:17695, categoria:'CHORIZO' },
    { id:'1000195', codigo:'1000195', nombre:'CHRZ. AQUENO. ZENU X 500 G',            precio:22254, categoria:'CHORIZO' },
    { id:'1089614', codigo:'1089614', nombre:'CHRZ. IDEAL RICA X 1000 G',             precio:28373, categoria:'CHORIZO' },
    { id:'1089617', codigo:'1089617', nombre:'CHRZ. IDEAL RICA X 200 G',              precio:6950,  categoria:'CHORIZO' },
    { id:'1089615', codigo:'1089615', nombre:'CHRZ. IDEAL RICA X 400 G',              precio:13511, categoria:'CHORIZO' },
    { id:'1038382', codigo:'1038382', nombre:'CHRZ. RANCHERA X 520 G',                precio:23839, categoria:'CHORIZO' },
    { id:'1080677', codigo:'1080677', nombre:'CHRZ. SANTARROSANO ZENU X 250G',        precio:9134,  categoria:'CHORIZO' },
    { id:'1080678', codigo:'1080678', nombre:'CHRZ. SANTARROSANO ZENU X 480G',        precio:17455, categoria:'CHORIZO' },
    { id:'1063597', codigo:'1063597', nombre:'CHRZ. TERNERA GDE. ZENU X 450 G',       precio:19418, categoria:'CHORIZO' },
    { id:'1083633', codigo:'1083633', nombre:'CHRZ. TERNERA ZENU X 250G',             precio:10354, categoria:'CHORIZO' },
    { id:'1063595', codigo:'1063595', nombre:'CHRZ. TERNERA ZENU X 440 G',            precio:18222, categoria:'CHORIZO' },
    { id:'1059276', codigo:'1059276', nombre:'CHRZ. RANCHERA PRLLA. DUOPACK 96G',     precio:5847,  categoria:'CHORIZO' },
    { id:'1063593', codigo:'1063593', nombre:'CHRZ. TERNERA ZENU PARPACK X 100 GRS',  precio:3953,  categoria:'CHORIZO' },
    { id:'1034259', codigo:'1034259', nombre:'NV CHRZ. RICA X 400 G',                 precio:13511, categoria:'CHORIZO' },
    { id:'1042549', codigo:'1042549', nombre:'EMPA. CNE. ZENU X 180G',                precio:9813,  categoria:'EMPANADA' },
    { id:'1070250', codigo:'1070250', nombre:'EMPA. CNE. ZENZ X 420G',                precio:21726, categoria:'EMPANADA' },
    { id:'1070199', codigo:'1070199', nombre:'EMPA. CNE. ZENZ X 500 G',               precio:25354, categoria:'EMPANADA' },
    { id:'1070251', codigo:'1070251', nombre:'EMPA. PLL. ZENU X 500 G',               precio:25354, categoria:'EMPANADA' },
    { id:'1037734', codigo:'1037734', nombre:'EMPAN. CNE. ZENU PLTO. QSO. HORN. X546G', precio:29760, categoria:'EMPANADA' },
    { id:'1075722', codigo:'1075722', nombre:'EMPANADA COCTEL ZENU X 300G',           precio:9702,  categoria:'EMPANADA' },
    { id:'1075721', codigo:'1075721', nombre:'PASTEL DE POLLO ZENU X 300G',           precio:9744,  categoria:'EMPANADA' },
    { id:'1082840', codigo:'1082840', nombre:'FILETE DE TRUCHA PIETRAN X 420G',       precio:25000, categoria:'MARISCOS' },
    { id:'1080896', codigo:'1080896', nombre:'HAMBURG. PROFS. ZENU X 500G',           precio:14661, categoria:'HAMBURGUESA' },
    { id:'1000878', codigo:'1000878', nombre:'HAMBURG. RANCHERA X 130 G',             precio:6456,  categoria:'HAMBURGUESA' },
    { id:'1000873', codigo:'1000873', nombre:'HAMBURG. RANCHERA X 400 G',             precio:24534, categoria:'HAMBURGUESA' },
    { id:'1060292', codigo:'1060292', nombre:'HAMBURG. RICA X 900 G',                 precio:24200, categoria:'HAMBURGUESA' },
    { id:'1012544', codigo:'1012544', nombre:'HAMBURG. ZENU X 3 KG',                  precio:102513,categoria:'HAMBURGUESA' },
    { id:'1020417', codigo:'1020417', nombre:'HAMBURG. ZENU X 400 G',                 precio:22796, categoria:'HAMBURGUESA' },
    { id:'1067782', codigo:'1067782', nombre:'HAMBURG. PLL. APAN. ZENU X 425 G',      precio:22908, categoria:'HAMBURGUESA' },
    { id:'1028548', codigo:'1028548', nombre:'JAMON RICACHEF RICA X 500G',            precio:16888, categoria:'JAMÓN' },
    { id:'1039655', codigo:'1039655', nombre:'JMN SERRANO MONTICELLO X 80G',          precio:19088, categoria:'JAMÓN' },
    { id:'1000418', codigo:'1000418', nombre:'JMN. IDEAL RICA X 230 G',               precio:8215,  categoria:'JAMÓN' },
    { id:'1009621', codigo:'1009621', nombre:'JMN. IDEAL RICA X 400 G',               precio:11760, categoria:'JAMÓN' },
    { id:'1044596', codigo:'1044596', nombre:'JMN. PIETRAN ESTD. 167G SIN C',         precio:10230, categoria:'JAMÓN' },
    { id:'1035356', codigo:'1035356', nombre:'JMN. PIETRAN ESTD. 230 G SIN C',        precio:13608, categoria:'JAMÓN' },
    { id:'1047407', codigo:'1047407', nombre:'JMN. PIETRAN ESTD. 431 G SIN C',        precio:24117, categoria:'JAMÓN' },
    { id:'1035355', codigo:'1035355', nombre:'JMN. PIETRAN ESTD. X 100 G SIN C',      precio:5692,  categoria:'JAMÓN' },
    { id:'1035368', codigo:'1035368', nombre:'JMN. PIETRAN PAVO 225 G SIN C',         precio:23755, categoria:'JAMÓN' },
    { id:'1035363', codigo:'1035363', nombre:'JMN. PIETRAN SNACK SURT. 210G SIN C',   precio:19988, categoria:'JAMÓN' },
    { id:'1035366', codigo:'1035366', nombre:'JMN. PLL. PIETRAN 230 G SIN C',         precio:15443, categoria:'JAMÓN' },
    { id:'1033261', codigo:'1033261', nombre:'JMN. SDW ZENU X 111G',                  precio:4555,  categoria:'JAMÓN' },
    { id:'1000395', codigo:'1000395', nombre:'JMN. SDW. ZENU X 230 G',                precio:8932,  categoria:'JAMÓN' },
    { id:'1000445', codigo:'1000445', nombre:'JMN. SDW. ZENU X 450 G',                precio:18280, categoria:'JAMÓN' },
    { id:'1052999', codigo:'1052999', nombre:'LGNA. ZENU CNE. X 320G NP',             precio:17374, categoria:'LASAÑA' },
    { id:'1053001', codigo:'1053001', nombre:'LGNA. ZENU MIXTA X 320G NP',            precio:17374, categoria:'LASAÑA' },
    { id:'1053000', codigo:'1053000', nombre:'LGNA. ZENU PLL. X 320G NP',             precio:17374, categoria:'LASAÑA' },
    { id:'1058591', codigo:'1058591', nombre:'MASA DE HOJALDRE HORN. ZENU 500G',      precio:13817, categoria:'OTROS' },
    { id:'1039654', codigo:'1039654', nombre:'MIX MADURADOS MONTICELLO X 115G',       precio:20456, categoria:'OTROS' },
    { id:'1059834', codigo:'1059834', nombre:'PRACTI SANDUCHE ZENU X 388 G',          precio:26646, categoria:'OTROS' },
    { id:'1016004', codigo:'1016004', nombre:'PRACTICARNE ZENU X 200G',               precio:8493,  categoria:'OTROS' },
    { id:'1065158', codigo:'1065158', nombre:'PLTO. CHOCOL. HORN. ZENU X 480G',       precio:24770, categoria:'OTROS' },
    { id:'1070253', codigo:'1070253', nombre:'PLTO. QSO. ZENZ X 252G',                precio:13539, categoria:'OTROS' },
    { id:'1070245', codigo:'1070245', nombre:'PLTO. QSO. ZENZ X 440G',                precio:20879, categoria:'OTROS' },
    { id:'1070244', codigo:'1070244', nombre:'PLTO. SLCH. ZENZ X 540G',               precio:23755, categoria:'OTROS' },
    { id:'1000548', codigo:'1000548', nombre:'MORCILLA ZENU X 500 G',                 precio:14692, categoria:'MORCILLA' },
    { id:'1079080', codigo:'1079080', nombre:'MORTADELA RAPIYA PRECOCIDA RICA X 300G',precio:6290,  categoria:'MORTADELA' },
    { id:'1042587', codigo:'1042587', nombre:'MTDELA. JAMON. RICACHEF RICA X 500G',   precio:10553, categoria:'MORTADELA' },
    { id:'1000555', codigo:'1000555', nombre:'MTDELA. RICA X 250 G',                  precio:5817,  categoria:'MORTADELA' },
    { id:'1000577', codigo:'1000577', nombre:'MTDELA. RICA X 450 G',                  precio:8673,  categoria:'MORTADELA' },
    { id:'1001155', codigo:'1001155', nombre:'MTDELA. TRADI. ZENU X 100 G',           precio:3168,  categoria:'MORTADELA' },
    { id:'1000581', codigo:'1000581', nombre:'MTDELA. TRADI. ZENU X 250 G',           precio:6468,  categoria:'MORTADELA' },
    { id:'1000582', codigo:'1000582', nombre:'MTDELA. TRADI. ZENU X 450 G',           precio:10427, categoria:'MORTADELA' },
    { id:'1000571', codigo:'1000571', nombre:'MTDELA. ZENU PLL. X 250 G',             precio:6783,  categoria:'MORTADELA' },
    { id:'1000572', codigo:'1000572', nombre:'MTDELA. ZENU PLL. X 450 G',             precio:10731, categoria:'MORTADELA' },
    { id:'1067804', codigo:'1067804', nombre:'MTDELA. JAMON. RICA X 345G',            precio:8054,  categoria:'MORTADELA' },
    { id:'1072462', codigo:'1072462', nombre:'MTDLA 250 ZENU + SCHON 225G',           precio:15876, categoria:'MORTADELA' },
    { id:'1072464', codigo:'1072464', nombre:'MTDLA 250G RICA + SCHON 250G',          precio:10668, categoria:'MORTADELA' },
    { id:'1062716', codigo:'1062716', nombre:'NUGGETS PLL. APAN. ZENU X 160G',        precio:11626, categoria:'APANADOS' },
    { id:'1062717', codigo:'1062717', nombre:'NUGGETS PLL. APAN. ZENU X 320G',        precio:19242, categoria:'APANADOS' },
    { id:'1082556', codigo:'1082556', nombre:'NUGGETS PLL. APAN. ZENU X 320G GRT 100G', precio:19242, categoria:'APANADOS' },
    { id:'1064512', codigo:'1064512', nombre:'PALITOS PLL. APAN. ZENU X 330G',        precio:21004, categoria:'APANADOS' },
    { id:'1064514', codigo:'1064514', nombre:'PALITOS PLL. APAN. ZENU X 608G',        precio:36521, categoria:'APANADOS' },
    { id:'1067783', codigo:'1067783', nombre:'PINCHO PLL. APAN. ZENU X 300 G',        precio:21991, categoria:'APANADOS' },
    { id:'2012795', codigo:'2012795', nombre:'PAPAS DELGADAS ZENU 500 GR',            precio:9068,  categoria:'PAPAS' },
    { id:'2012794', codigo:'2012794', nombre:'PAPAS DELGADAS ZENU 900 GR',            precio:14982, categoria:'PAPAS' },
    { id:'2012050', codigo:'2012050', nombre:'PAPAS EN CASCOS ZENU 1 KG',             precio:16755, categoria:'PAPAS' },
    { id:'2012051', codigo:'2012051', nombre:'PAPAS EN CASCOS ZENU 500G',             precio:9294,  categoria:'PAPAS' },
    { id:'1046380', codigo:'1046380', nombre:'NV TCTA. AHUM. CERDO ZENU X 200 G',     precio:17719, categoria:'TOCINETA' },
    { id:'1046381', codigo:'1046381', nombre:'NV TCTA. AHUM. CERDO ZENU X 400 G',     precio:31666, categoria:'TOCINETA' },
    { id:'1044566', codigo:'1044566', nombre:'TCTA. RICACHEF RICA X 250 GR',           precio:16555, categoria:'TOCINETA' },
    { id:'1075645', codigo:'1075645', nombre:'TOCINETA RICA X 120G',                   precio:8562,  categoria:'TOCINETA' },
    { id:'1064817', codigo:'1064817', nombre:'SALCH SUIZA PREMIUM ZENU X 1 KG',        precio:42228, categoria:'SALCHICHA' },
    { id:'1045787', codigo:'1045787', nombre:'SALCH. BIG RICA PLL. XL X 1700G',        precio:3172,  categoria:'SALCHICHA' },
    { id:'1053497', codigo:'1053497', nombre:'SALCH. BIG RICA X 1 KG X 11 UND',        precio:2242,  categoria:'SALCHICHA' },
    { id:'1076747', codigo:'1076747', nombre:'SALCH. LLANERA RICA X 218 G',            precio:8146,  categoria:'SALCHICHA' },
    { id:'1001311', codigo:'1001311', nombre:'SALCH. LLANERA RICA X 500 G',            precio:18474, categoria:'SALCHICHA' },
    { id:'1000820', codigo:'1000820', nombre:'SALCH. LONG ZENU LB.',                   precio:15534, categoria:'SALCHICHA' },
    { id:'1000821', codigo:'1000821', nombre:'SALCH. LONG ZENU X 2.2 KG',             precio:56740, categoria:'SALCHICHA' },
    { id:'1092023', codigo:'1092023', nombre:'SALCH. LONG ZENU X 2.420G',             precio:56740, categoria:'SALCHICHA' },
    { id:'1068977', codigo:'1068977', nombre:'SALCH. PAVO PIETRAN 225G 5 UN',          precio:17375, categoria:'SALCHICHA' },
    { id:'1015605', codigo:'1015605', nombre:'SALCH. PERRO CLNTE. ZENU X 240G',        precio:8682,  categoria:'SALCHICHA' },
    { id:'1012343', codigo:'1012343', nombre:'SALCH. PERRO CLNTE. ZENU X 480 G',       precio:17347, categoria:'SALCHICHA' },
    { id:'1068976', codigo:'1068976', nombre:'SALCH. PLL. PIETRAN 225 G 5 UN',         precio:12969, categoria:'SALCHICHA' },
    { id:'1045313', codigo:'1045313', nombre:'SALCH. RANCHERA PICANTE X 272 G',        precio:13983, categoria:'SALCHICHA' },
    { id:'1029973', codigo:'1029973', nombre:'SALCH. RANCHERA TRIPACK X 75 GR',        precio:4389,  categoria:'SALCHICHA' },
    { id:'1031534', codigo:'1031534', nombre:'SALCH. RANCHERA X 230 G 7UN',            precio:13817, categoria:'SALCHICHA' },
    { id:'1031533', codigo:'1031533', nombre:'SALCH. RANCHERA X 480 G',                precio:25020, categoria:'SALCHICHA' },
    { id:'1074986', codigo:'1074986', nombre:'SALCH. RICA X 340G',                     precio:6700,  categoria:'SALCHICHA' },
    { id:'1012331', codigo:'1012331', nombre:'SALCH. RICA X 500 G',                    precio:12357, categoria:'SALCHICHA' },
    { id:'1017925', codigo:'1017925', nombre:'SALCH. SP. PERRO ZENU X 1280 G',         precio:48275, categoria:'SALCHICHA' },
    { id:'1027817', codigo:'1027817', nombre:'SALCH. SP. PERRO ZENU X 1440 GR',        precio:48928, categoria:'SALCHICHA' },
    { id:'1092024', codigo:'1092024', nombre:'SALCH. SP. PERRO ZENU X 1600G',          precio:48928, categoria:'SALCHICHA' },
    { id:'1012347', codigo:'1012347', nombre:'SALCH. SP. PERRO ZENU X 640 G',          precio:26118, categoria:'SALCHICHA' },
    { id:'1043327', codigo:'1043327', nombre:'SALCH. TRAD ZENU TRIPACK 102 G',         precio:3656,  categoria:'SALCHICHA' },
    { id:'1000852', codigo:'1000852', nombre:'SALCH. TRADI. ZENU X 225 G',             precio:8104,  categoria:'SALCHICHA' },
    { id:'1000853', codigo:'1000853', nombre:'SALCH. TRADI. ZENU X 450 G',             precio:14998, categoria:'SALCHICHA' },
    { id:'1000814', codigo:'1000814', nombre:'SALCH. ZENU POP X 1 KG',                 precio:27662, categoria:'SALCHICHA' },
    { id:'1046292', codigo:'1046292', nombre:'SALCH. RANCHERA PENTAPACK X 115 GRM',    precio:5848,  categoria:'SALCHICHA' },
    { id:'1067860', codigo:'1067860', nombre:'SALCH. RANCHERA X 377 G',                precio:21004, categoria:'SALCHICHA' },
    { id:'1078717', codigo:'1078717', nombre:'SALCH. SP. PERRO BARBACOA HOT X160G',    precio:6088,  categoria:'SALCHICHA' },
    { id:'1078711', codigo:'1078711', nombre:'SALCH. SP. PERRO BARBACOA HOT X480G',    precio:19589, categoria:'SALCHICHA' },
    { id:'1043643', codigo:'1043643', nombre:'SALCH. TRAD ZENU PENTAPACK 170 G',       precio:5796,  categoria:'SALCHICHA' },
    { id:'1071193', codigo:'1071193', nombre:'SALCHICHA MANGUERA RICA X 360G',         precio:6422,  categoria:'SALCHICHA' },
    { id:'1074059', codigo:'1074059', nombre:'SALCHICHA MANGUERA RICA X 500G',         precio:7979,  categoria:'SALCHICHA' },
    { id:'1089641', codigo:'1089641', nombre:'SALCHICHA PENTAPACK RANCHERA X 115G',    precio:5848,  categoria:'SALCHICHA' },
    { id:'1074987', codigo:'1074987', nombre:'SALCHICHA RICA TRIPACK 63 GR',           precio:1872,  categoria:'SALCHICHA' },
    { id:'1074057', codigo:'1074057', nombre:'SCHA MANGUERA 200 GR RICA',              precio:2672,  categoria:'SALCHICHA' },
    { id:'1076867', codigo:'1076867', nombre:'RANCHERA SALCHICHA PENTA PACK X 138G',   precio:5848,  categoria:'SALCHICHA' },
    { id:'1089585', codigo:'1089585', nombre:'RANCHERA SALCHICHA QUESO TOCINETA X 68G',precio:4159,  categoria:'SALCHICHA' },
    { id:'1051494', codigo:'1051494', nombre:'SCHON. CERVEC. RICA X 450 G',            precio:8883,  categoria:'SALCHICHÓN' },
    { id:'1032954', codigo:'1032954', nombre:'SCHON. CERVEC. RICA X 700 G',            precio:13734, categoria:'SALCHICHÓN' },
    { id:'1040866', codigo:'1040866', nombre:'SCHON. CERVEC. RICA X 950G',             precio:17850, categoria:'SALCHICHÓN' },
    { id:'1042555', codigo:'1042555', nombre:'SCHON. CERVEC. SNACK. ZENU X 300G',      precio:11981, categoria:'SALCHICHÓN' },
    { id:'1028494', codigo:'1028494', nombre:'SCHON. CERVEC. PREMIUM RANCHERA X 480G', precio:21641, categoria:'SALCHICHÓN' },
    { id:'1040852', codigo:'1040852', nombre:'SCHON. CERVERONI ZENU X 1000 G',         precio:24707, categoria:'SALCHICHÓN' },
    { id:'1040851', codigo:'1040851', nombre:'SCHON. CERVERONI ZENU X 500G',           precio:14228, categoria:'SALCHICHÓN' },
    { id:'1028490', codigo:'1028490', nombre:'SCHON. CERVERONI ZENU X 900 G',          precio:23237, categoria:'SALCHICHÓN' },
    { id:'1056206', codigo:'1056206', nombre:'SCHON. PLL. ZENU COLLARIN X 100 G',      precio:2044,  categoria:'SALCHICHÓN' },
    { id:'1000862', codigo:'1000862', nombre:'SCHON. RICA X 250 G',                    precio:3691,  categoria:'SALCHICHÓN' },
    { id:'1040683', codigo:'1040683', nombre:'SCHON. RICA X 480 G',                    precio:6605,  categoria:'SALCHICHÓN' },
    { id:'1040684', codigo:'1040684', nombre:'SCHON. RICA X 850 G',                    precio:7979,  categoria:'SALCHICHÓN' },
    { id:'1000054', codigo:'1000054', nombre:'SCHON. TRADI. ZENU COLLARIN X 100 G',    precio:2413,  categoria:'SALCHICHÓN' },
    { id:'1000889', codigo:'1000889', nombre:'SCHON. TRADI. ZENU X 225 G',             precio:4704,  categoria:'SALCHICHÓN' },
    { id:'1000890', codigo:'1000890', nombre:'SCHON. TRADI. ZENU X 450 G',             precio:8001,  categoria:'SALCHICHÓN' },
    { id:'1040682', codigo:'1040682', nombre:'SCHON. TRADI. ZENU X 620 G',             precio:8778,  categoria:'SALCHICHÓN' },
    { id:'1040681', codigo:'1040681', nombre:'SCHON. TRADI. ZENU X 850 G',             precio:11393, categoria:'SALCHICHÓN' },
    { id:'1000872', codigo:'1000872', nombre:'SCHON. ZENU PLL. X 250 G',               precio:5072,  categoria:'SALCHICHÓN' },
    { id:'1000871', codigo:'1000871', nombre:'SCHON. ZENU PLL. X 500 G',               precio:9681,  categoria:'SALCHICHÓN' },
    { id:'1000860', codigo:'1000860', nombre:'SCHON. ZENU PLL. X 750 G',               precio:12432, categoria:'SALCHICHÓN' },
    { id:'1043468', codigo:'1043468', nombre:'SCHON. CERVECERO SNACK ZENU X 100G',     precio:4648,  categoria:'SALCHICHÓN' },
    { id:'1071405', codigo:'1071405', nombre:'SCHON. TRAD. ZENU COLLARIN X 100G GT 25G',precio:2413, categoria:'SALCHICHÓN' },
    { id:'1077408', codigo:'1077408', nombre:'ZENU SALCHICHON CERVERONI X 40G',        precio:1322,  categoria:'SALCHICHÓN' },
    { id:'1037764', codigo:'1037764', nombre:'VEGGIE BITES PIETRAN 200 G',             precio:14998, categoria:'VEGGIE' },
    { id:'1037765', codigo:'1037765', nombre:'VEGGIE BURGER PIETRAN 360 G',            precio:23353, categoria:'VEGGIE' },
  ];
  // Siempre sobreescribir el catálogo con la versión completa y actualizada
  localStorage.setItem('ap_productos', JSON.stringify(catalogo));
  console.log(`✅ Catálogo actualizado: ${catalogo.length} productos`);

  if (typeof renderDashboard === 'function') {
    renderDashboard();
    if (typeof renderPerfil === 'function') renderPerfil();
  }
})();
