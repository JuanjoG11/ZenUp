// supabase.js – inicializa el cliente Supabase
// Project ID: cjmsmooskigmxidtcibd
const SUPABASE_URL = 'https://cjmsmooskigmxidtcibd.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_4RcwJzYwDMAGqVlZu09RSA_bRC7bDxq';
// La librería cargada desde el CDN expone `supabase` con el método `createClient`
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
