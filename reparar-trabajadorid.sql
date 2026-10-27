-- ============================================================
-- REPARACIÓN: corregir visitas con trabajador_id vacío o '0000'
-- Pega esto en: supabase.com → tu proyecto → SQL Editor → Run
-- ============================================================

-- 1. Ver cuántas visitas tienen trabajador_id vacío o '0000'
SELECT
  trabajador_id,
  COUNT(*) AS total_visitas,
  MIN(fecha) AS fecha_mas_antigua,
  MAX(fecha) AS fecha_mas_reciente
FROM visitas
GROUP BY trabajador_id
ORDER BY total_visitas DESC;

-- ============================================================
-- 2. Reparar: asignar el trabajador_id correcto usando la tabla clientes
--    (cada visita tiene cliente_id → el cliente tiene trabajador_id)
--    Solo actualiza las visitas que tienen trabajador_id vacío o '0000'
-- ============================================================
UPDATE visitas v
SET trabajador_id = c.trabajador_id
FROM clientes c
WHERE v.cliente_id = c.id
  AND (v.trabajador_id = '' OR v.trabajador_id = '0000' OR v.trabajador_id IS NULL)
  AND c.trabajador_id IS NOT NULL
  AND c.trabajador_id != '';

-- Verificar resultado después de la reparación:
SELECT
  trabajador_id,
  COUNT(*) AS total_visitas,
  MAX(fecha) AS ultima_visita
FROM visitas
GROUP BY trabajador_id
ORDER BY total_visitas DESC;
