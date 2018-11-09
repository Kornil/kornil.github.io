import React, { createContext } from "react";

interface ContextInterface {
  [key: string]: any;
}

type createContextFactoryInterface = (
  name: string,
  contextParam: any,
  onContextUpdateParam?: () => any
) => {
  Provider: React.ComponentType<React.ProviderProps<ContextInterface>>;
  connect: (
    Component: React.SFC<any> | typeof React.Component
  ) => React.StatelessComponent<any>;
};

const createContextFactory: createContextFactoryInterface = (
  name,
  contextParam,
  onContextUpdateParam
) => {
  const { Consumer, Provider } = createContext({
    [`${name}Context`]: contextParam,
    [`on${name}ContextUpdate`]: onContextUpdateParam
  });

  const connect = (Component: React.SFC<any> | typeof React.Component) => {
    const WithContext: React.SFC<{}> = (props: any) => (
      <Consumer>
        {(contextPayload: ContextInterface) => {
          const context = { [`${name}Context`]: { ...contextPayload } };
          return <Component {...props} {...context} />;
        }}
      </Consumer>
    );

    WithContext.displayName = `connect(${Component.name})`;
    return WithContext;
  };

  return { Provider, connect };
};

export default createContextFactory;
