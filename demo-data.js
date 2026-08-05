/* ============================================================
   ZenUp – Datos de demostración
   Asesores reales Zenú – Pereira
   ============================================================ */

(function loadDemoData() {
  // Lista completa de asesores reales
  const trabajadores = [
    { id: 't-001', cedula: '1005021309',  codigoVentas: '25027', nombre: 'ADRIANA CALLE ALVAREZ',              zona: '', telefono: '', rol: 'trabajador' },
    { id: 't-002', cedula: '1112774849',  codigoVentas: '25028', nombre: 'ANYIE VIVIANA CARDONA DUQUE',         zona: '', telefono: '', rol: 'trabajador' },
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
