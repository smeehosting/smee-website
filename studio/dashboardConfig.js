export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62427e6573bcd16a1fd84d07',
                  title: 'Sanity Studio',
                  name: 'smee-website-studio',
                  apiId: '00e1d11f-d1f8-443a-8cd9-67a49609e1a0'
                },
                {
                  buildHookId: '62427e6529733f633adf3fc8',
                  title: 'Landing pages Website',
                  name: 'smee-website',
                  apiId: '7a4f3297-41a3-45e6-975b-d7251a83c9d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smeehosting/smee-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://smee-website.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
