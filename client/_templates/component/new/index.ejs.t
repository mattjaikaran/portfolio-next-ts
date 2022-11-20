---
to: components/<%= h.changeCase.lower(type) %>/<%= h.changeCase.pascal(name) %>/index.tsx
arbitrary: <% name = null, type = null, hasStyles = false %>
---
import { Title } from '@mantine/core';
<% if ( hasStyles ) { %>
import styles from './<%= h.changeCase.pascal(name)%>.module.scss'
<% } %>
const <%= h.changeCase.pascal(name) %> = () => {
  return (
    <div className={<%= hasStyles ? `styles.${h.changeCase.camel(name)}` : '' %>}>
      <Title><%= h.changeCase.pascal(name) %></Title>
    </div>
  )
}

export default <%= h.changeCase.pascal(name) %>