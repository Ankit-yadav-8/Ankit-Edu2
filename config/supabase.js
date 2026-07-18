const { createClient } = require("@supabase/supabase-js");

/**
 * Server-side Supabase client.
 *
 * Uses the SERVICE ROLE key, which BYPASSES Row Level Security. This is safe
 * because it only ever runs on the trusted backend (Render) and the key lives
 * in server-side env vars — it must NEVER be shipped to the browser.
 *
 * All database access for the whole site funnels through this one client.
 */
const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;

if (!url || !serviceKey || url.includes("your-project")) {
  console.warn(
    "\n⚠️  SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set in .env.\n" +
      "    Auth & contact storage are disabled until you add them.\n"
  );
} else {
  supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  console.log("✅ Supabase client initialised");
}

/** True when the DB is configured and ready to accept queries. */
function dbReady() {
  return Boolean(supabase);
}

module.exports = { supabase, dbReady };
