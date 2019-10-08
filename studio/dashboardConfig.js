export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9c823eba5a8b89b98f0d0a',
                  title: 'Sanity Studio',
                  name: 'dev-sanity-nextjs-studio',
                  apiId: '84e3c4fb-6bcc-447c-aef4-4a9bb0600bb0'
                },
                {
                  buildHookId: '5d9c823f46a6a0f879c964c5',
                  title: 'Landing pages Website',
                  name: 'dev-sanity-nextjs',
                  apiId: 'e41a896f-af49-4362-8cda-463fdd2a9c15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbuddhi/dev-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dev-sanity-nextjs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
