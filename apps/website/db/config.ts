import { defineDb, defineTable, column   } from 'astro:db';

const PageView = defineTable({
  columns: {
    timestamp: column.date(),
    page: column.text(),
  }
})

export default defineDb({
  tables: { PageView }
});
