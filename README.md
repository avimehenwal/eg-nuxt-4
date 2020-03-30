# eg-nuxt-4

* works with both public and private sheets
* Ranges could extend

```bash
# Google sheets
curl -H "Accept: application/json" -H "Authorization: Bearer ya29.a0Ae4lvC1HgrRIG1qkXC135g8GJyJXPagwrtgwQfoJqfq2ZfiIMR9I1M7-2GFrz38f034SuKK5u159RV6JfsnT0DnozMpDphlO-P0Kloh6Hwfttc6ZBANORiJJTrSHSowE8p9lBdziouy9BOu9g_8OJYwDd4fuxKU5rbY" https://sheets.googleapis.com/v4/spreadsheets/1e-s4_8qx5rdKg2ABfd_WUfnYuOrRN0TvgAlsBLTiaeY/values/Sheet1!A1:D3

# Google drive
curl \
  'https://www.googleapis.com/drive/v3/about?fields=*&key=ya29.a0Adw1xeVM1gEzhaYHH-a6Fb829YqLhW6RRd6JTBAVJZ7z6o21rxcVYpcLbSvlV0YzZbXJPsPw0k1RiCaJa4dg1bFLHieiCPBXFnytVAc2q7KiY6rTuccfVKooQxYA9RkccFxxor7ioEzxg6l0RkpMgxVv0sw7nvt1Ats' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer ya29.a0Adw1xeVM1gEzhaYHH-a6Fb829YqLhW6RRd6JTBAVJZ7z6o21rxcVYpcLbSvlV0YzZbXJPsPw0k1RiCaJa4dg1bFLHieiCPBXFnytVAc2q7KiY6rTuccfVKooQxYA9RkccFxxor7ioEzxg6l0RkpMgxVv0sw7nvt1Ats' \
  --compressed


```

> My awe-inspiring Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
