import { RouteComponentProps } from '@reach/router'

export const Route = (
  props: { component: JSX.Element } & RouteComponentProps
) => props.component
