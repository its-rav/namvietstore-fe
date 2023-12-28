export default {
  server: {
    watch: {
      ignored: ['!**/node_modules/@namviet-fe/core-ui/**/*'],
    },
  },
  // The watched package must be excluded from optimization,
  // so that it can appear in the dependency graph and trigger hot reload.
  optimizeDeps: {
    exclude: ['@namviet-fe/core-ui'],
  },
};
