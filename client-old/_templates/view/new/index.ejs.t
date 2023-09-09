---
to: views/<%= h.changeCase.lower(type) %>/<%= h.changeCase.pascal(name) %>/index.tsx
arbitrary: <% name = null, type = null, hasStyles = false %>
---
<% if ( hasStyles ) { %>
import styles from './<%= h.changeCase.pascal(name)%>.module.scss'
<% } %>
const <%= h.changeCase.pascal(name) %> = () => {
  return (
    <div className={<%= hasStyles ? `styles.${h.changeCase.camel(name)}` : '' %>}>
      <h5><%= h.changeCase.pascal(name) %></h5>
    </div>
  )
}

export default <%= h.changeCase.pascal(name) %>