const connectActions = (fc, models) => {
  const actions = {};
  const { g_app } = window;
  const { _store } = g_app || {};
  const { dispatch } = _store || {};

  if (!dispatch) {
    throw "window has no dispatch methods!";
  }

  Object.keys(models).forEach(
    name =>
      Array.isArray(models[name]) &&
      models[name].forEach(effect => {
        const type = `${name}/${effect}`;
        const fn = payload =>
          new Promise((resolve, reject) =>
            dispatch({
              type,
              payload
            })
              .then(data => {
                resolve(data);
              })
              .catch(err => {
                reject(err);
              })
          );

        actions[effect] = fn;
      })
  );

  return props => {
    const newProps = {
      ...props,
      actions
    };
    return fc(newProps);
  };
};

export default { connectActions };
