import template from 'lodash.template'

const STYLE = {
  background: '#f9f9f9',
  text: '#444',
  mainBackground: '#fff',
  buttonBackground: '#346df1',
  buttonBorder: '#346df1',
  buttonText: '#fff',
  baseFont: 'Helvetica, Arial, sans-serif',
}

const Templates = {
  base: template(
    `<body style="background: ${STYLE.background};">
      <table width="100%" border="0" cellspacing="20" cellpadding="0"
        style="background: ${STYLE.mainBackground}; max-width: 600px; margin: auto;">
        <%= content %>
      </table>
    </body>`
  ),
  title: template(`
    <%= title %>
    <% if(subtitle) { %><p style="font-size: 16px; padding: 0; margin: 0;"><%= subtitle %></p><% } %>
  `),
  link: template(
    `<a href="<%= url %>" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${STYLE.buttonText}; text-decoration: none; padding: 10px 20px; border: 1px solid ${STYLE.buttonBorder}; display: inline-block; font-weight: bold; background-color: ${STYLE.buttonBackground}"><%= text %></a>`
  ),
  section: template(`
    <tr>
      <td align="<%= align %>" style="<%= styles %>">
        <%= content %>
      </td>
    </tr>
  `),
  table: template(`
    <table width="100%" border="0" cellspacing="<%= cellspacing %>" cellpadding="<%= cellpadding %>">
      <%= content %>
    </table>
  `),
  tableRow: template(
    `<tr><% _.forEach(rows, function(row) { %><td><%= row %></td><% }) %></tr>`
  ),
}

const EmailTemplates = () => {
  return {
    button: ({ url, text }: { url: string; text: string }) => {
      return Templates.link({ url, text })
    },
    title: ({
      title,
      subtitle = false,
    }: {
      title: string
      subtitle?: string | boolean
    }) => {
      return Templates.section({
        styles: `padding: 10px 0; font-size: 22px; font-family: ${STYLE.baseFont}`,
        align: 'center',
        content: Templates.title({ title, subtitle }),
      })
    },
    footer: ({
      content = 'If you did not request this email you can safely ignore it.',
    }: {
      content?: string
    }) => {
      return Templates.section({
        styles: 'padding: 10px 0; font-size: 12px;',
        align: 'center',
        content,
      })
    },
    section: ({
      styles = 'padding: 10px 0;',
      align = 'center',
      ...others
    }: {
      styles?: string
      align?: 'left' | 'right' | 'center'
      content: string
    }) => {
      return Templates.section({ styles, align, ...others })
    },
    table: ({
      cellspacing = 0,
      cellpadding = 0,
      rows,
    }: {
      cellspacing?: number
      cellpadding?: number
      rows: string[]
    }) => {
      const compiledContent = rows.reduce((compilation, row) => {
        return compilation + row
      }, '')

      return Templates.table({
        cellspacing,
        cellpadding,
        content: compiledContent,
      })
    },
    tableRow: ({ rows }: { rows: string[] }) => {
      return Templates.tableRow({ rows })
    },
    compile: (sections: string[]) => {
      const compiledContent = sections.reduce((compilation, section) => {
        return compilation + section
      }, '')

      return Templates.base({ content: compiledContent })
    },
  }
}

export default EmailTemplates

/*
  example code:

  Template.compile([
    Template.title({
      title: "Sign in to Rentals App",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }),
    Template.section({
      content: Template.button({ url: "http://localhost:3000/", text: "Sign in!" }),
    }),
    Template.footer({
      content: `This was requested on ${dayjs().format(
        "MMM DD, YYYY hh:mm A"
      )}. Ignore if this wasn't you.`,
    }),
  ])
*/
