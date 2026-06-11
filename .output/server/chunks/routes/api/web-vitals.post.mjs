import { d as defineEventHandler, r as readBody, u as useStorage } from '../../nitro/nitro.mjs';
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

const webVitals_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const metric = {
    id: body.id || crypto.randomUUID(),
    name: body.name,
    value: body.value,
    rating: body.rating || "good",
    delta: body.delta,
    href: body.href,
    navigationType: body.navigationType || "navigate",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  const storage = useStorage("web-vitals");
  await storage.setItem(metric.id, metric);
  return { success: true };
});

export { webVitals_post as default };
//# sourceMappingURL=web-vitals.post.mjs.map
