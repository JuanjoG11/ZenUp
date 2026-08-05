-- ============================================================
-- ZenUp – Script de creación de tablas en Supabase
-- Pega esto en: supabase.com → tu proyecto → SQL Editor → Run
-- ============================================================

-- 1. TRABAJADORES
create table if not exists trabajadores (
  id              text primary key,
  cedula          text unique not null,
  codigo_ventas   text default '',
  nombre          text not null,
  zona            text default '',
  telefono        text default '',
  rol             text default 'trabajador',
  creado_en       timestamptz default now()
);

-- 2. CLIENTES
create table if not exists clientes (
  id              text primary key,
  codigo          text default '',
  nombre          text not null,
  poblacion       text default '',
  dia             text not null,
  telefono        text default '',
  notas           text default '',
  trabajador_id   text default '',
  creado_en       timestamptz default now()
);

-- 3. VISITAS
create table if not exists visitas (
  id              text primary key,
  cliente_id      text,
  trabajador_id   text default '',
  fecha           date not null,
  estado          text default 'pendiente',
  notas           text default '',
  productos       jsonb default '[]'::jsonb,
  total_pedido    numeric default 0,
  creado_en       timestamptz default now(),
  actualizado_en  timestamptz default now()
);

-- 4. SEGURIDAD: habilitar RLS y permitir acceso con anon key
alter table trabajadores enable row level security;
alter table clientes      enable row level security;
alter table visitas       enable row level security;

drop policy if exists "allow_all_trabajadores" on trabajadores;
drop policy if exists "allow_all_clientes"     on clientes;
drop policy if exists "allow_all_visitas"      on visitas;

create policy "allow_all_trabajadores" on trabajadores for all using (true) with check (true);
create policy "allow_all_clientes"     on clientes     for all using (true) with check (true);
create policy "allow_all_visitas"      on visitas      for all using (true) with check (true);

-- ✅ Listo. Recarga ZenUp y los datos se sincronizarán automáticamente.
