import { ActionError, defineAction } from 'astro:actions';
import { db, PageView } from 'astro:db';
import { z } from 'astro:schema';
import { isbot } from 'isbot';

export const server = {
  logPageView: defineAction({
    input: z.object({
      page: z.string()
    }),
    handler: async ({ page }, context) => {
      const userAgent = context.request.headers.get('user-agent');

      if (isbot(userAgent)) {
        throw new ActionError({code: "FORBIDDEN"})
      }

      try {
        await db.insert(PageView).values({
          page: page,
          timestamp: new Date()
        })
      } catch (e) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
        })
      }
    }
  })
}