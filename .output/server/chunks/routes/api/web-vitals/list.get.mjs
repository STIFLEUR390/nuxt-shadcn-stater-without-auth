import { d as defineEventHandler, c as createError, u as useStorage } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'undio';
import 'jose';
import 'consola';
import 'vue-router';
import 'node:url';

const list_get = defineEventHandler(async (event) => {
  const { can } = event.context.$authorization;
  if (can && !await can("manage-dashboard").catch(() => false)) {
    throw createError({ statusCode: 403, statusMessage: "Acc\xE8s refus\xE9" });
  }
  const storage = useStorage("web-vitals");
  const keys = await storage.getKeys();
  const metrics = (await Promise.all(keys.map((k) => storage.getItem(k)))).filter(Boolean);
  metrics.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  return { metrics: metrics.slice(0, 500) };
});

export { list_get as default };
//# sourceMappingURL=list.get.mjs.map
