export default (target, propertyKey, descriptor) => {
  const fn = descriptor.value;

  return {
    async value(req, res, next) {
      try {
        await fn.call(this, req, res, next);
      } catch (error) {
        next(error);
      }
    }
  };
};
