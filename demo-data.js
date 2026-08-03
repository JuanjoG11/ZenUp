/* ============================================================
   ZenUp – Datos de demostración
   Ejecutar en consola del navegador para cargar datos de prueba
   O se carga automáticamente en el primer uso
   ============================================================ */

(function loadDemoData() {
  const existing = localStorage.getItem('ap_clientes');
  if (existing && JSON.parse(existing).length > 0) {
    console.log('Ya hay datos, no se cargan demos.');
    return;
  }

  const clientes = [
    {
      id: 'demo-001',
      codigo: '600000551030',
      nombre: 'AUTOSERVICIO LA GRAN COLOMBIA',
      poblacion: 'PEREIRA - PERLA DEL SUR CUBA',
      dia: 'LUNES',
      telefono: '3104567890',
      notas: 'Pedir siempre en la mañana',
      creadoEn: Date.now()
    },
    {
      id: 'demo-002',
      codigo: '600000560986',
      nombre: 'MISCELANEA PERLA HORIZONTE',
      poblacion: 'PEREIRA - PERLA DEL SUR CUBA',
      dia: 'LUNES',
      telefono: '3115678901',
      notas: '',
      creadoEn: Date.now()
    },
    {
      id: 'demo-003',
      codigo: '600000155290',
      nombre: 'TIENDA XIOMY',
      poblacion: 'PEREIRA - PERLA DEL SUR CUBA',
      dia: 'LUNES',
      telefono: '',
      notas: 'Cliente nuevo, muy potencial',
      creadoEn: Date.now()
    },
    {
      id: 'demo-004',
      codigo: '600000112233',
      nombre: 'SUPERMERCADO EL PROGRESO',
      poblacion: 'PEREIRA - CENTRO',
      dia: 'MARTES',
      telefono: '3126789012',
      notas: '',
      creadoEn: Date.now()
    },
    {
      id: 'demo-005',
      codigo: '600000445566',
      nombre: 'MINIMERCADO LA ESPERANZA',
      poblacion: 'DOSQUEBRADAS',
      dia: 'MARTES',
      telefono: '3137890123',
      notas: 'Prefiere visitas después de las 10am',
      creadoEn: Date.now()
    },
    {
      id: 'demo-006',
      codigo: '600000778899',
      nombre: 'TIENDA DOÑA ROSA',
      poblacion: 'PEREIRA - CUBA',
      dia: 'MIÉRCOLES',
      telefono: '3148901234',
      notas: '',
      creadoEn: Date.now()
    },
    {
      id: 'demo-007',
      codigo: '600000334455',
      nombre: 'AUTOSERVICIO KENNEDY',
      poblacion: 'PEREIRA - KENNEDY',
      dia: 'JUEVES',
      telefono: '',
      notas: '',
      creadoEn: Date.now()
    },
    {
      id: 'demo-008',
      codigo: '600000667788',
      nombre: 'CARNICERÍA EL BUEN SABOR',
      poblacion: 'PEREIRA - OLIMPICA',
      dia: 'VIERNES',
      telefono: '3159012345',
      notas: 'Compra grandes volúmenes de salchicha',
      creadoEn: Date.now()
    }
  ];

  localStorage.setItem('ap_clientes', JSON.stringify(clientes));
  localStorage.setItem('ap_config', JSON.stringify({ nombre: 'Carlos Ramírez', zona: 'Pereira - Risaralda' }));
  console.log('✅ Datos de demo cargados. Recarga la página.');
  if (typeof renderDashboard === 'function') {
    renderDashboard();
    if (typeof renderPerfil === 'function') renderPerfil();
  }
})();
