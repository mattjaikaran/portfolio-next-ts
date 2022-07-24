---
to: components/<%= h.changeCase.lower(type) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.module.scss
unless_exists: true
---

.<%= h.changeCase.camel(name) %> {}