# Building and hosting DebitMyData Docs

The site is plain files: you build it once on any computer, then any web server can serve it.
Below, `docs.example.com` stands for your own name.

## Trying it on your computer

With [Node.js](https://nodejs.org) 22.23 or later:

```sh
git clone https://github.com/DebitMyData-PoW/debitmydata-docs.git
cd debitmydata-docs
npm ci
npm run dev          # http://localhost:4321, the page reloads as you edit
```

## Building it

```sh
npm ci
npm run build        # the finished site, in dist/
npm run check-links  # every link inside the site leads somewhere
```

To copy it to a server in one file:

```sh
cd dist && zip -r ../docs-site.zip . && cd ..
```

## Putting it online

Any web server works. With **nginx** on Ubuntu, behind Cloudflare with a Cloudflare origin
certificate (in Cloudflare: your domain, **SSL/TLS**, **Origin Server**, **Create Certificate**;
encryption mode **Full (strict)**), saved as `/etc/ssl/cloudflare/example.com.pem` and
`/etc/ssl/cloudflare/example.com.key`:

1. **The site's folder and nginx:**

   ```sh
   sudo apt-get install -y nginx
   sudo mkdir -p /var/www/docs
   ```

2. **The nginx site**, in `/etc/nginx/sites-available/docs.example.com`:

   ```nginx
   server {
       listen 443 ssl http2;
       listen [::]:443 ssl http2;
       server_name docs.example.com;

       ssl_certificate     /etc/ssl/cloudflare/example.com.pem;
       ssl_certificate_key /etc/ssl/cloudflare/example.com.key;

       root /var/www/docs;
       absolute_redirect off;
       error_page 404 /404.html;

       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "strict-origin-when-cross-origin" always;
       add_header X-Frame-Options "DENY" always;
       add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
       add_header Strict-Transport-Security "max-age=31536000" always;

       location / {
           try_files $uri $uri/ $uri.html =404;
       }

       location ~ ^/(_astro|fonts)/ {
           add_header Cache-Control "public, max-age=31536000, immutable" always;
           add_header X-Content-Type-Options "nosniff" always;
           try_files $uri =404;
       }

       location ~ ^/llms(-full)?\.txt$ {
           add_header Access-Control-Allow-Origin "*" always;
           add_header X-Content-Type-Options "nosniff" always;
       }
   }

   server {
       listen 80;
       listen [::]:80;
       server_name docs.example.com;
       return 301 https://$host$request_uri;
   }
   ```

   These are the headers [`public/_headers`](public/_headers) lists, for hosts that read that
   file instead (Cloudflare Pages, Netlify). Then:

   ```sh
   sudo ln -s /etc/nginx/sites-available/docs.example.com /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

3. **Each new version:** empty the folder (`sudo rm -rf /var/www/docs/*`), then put the zip's
   contents in it (with `scp`, `rsync` or an SFTP client, then `unzip`). Nothing needs restarting.

The site changes only when you upload a new version: nothing links this repository to the server.

## Your own site

The site's address (`site` in [`astro.config.mjs`](astro.config.mjs)), where the live figures come
from (`STATS` in `src/components/CoinFigures.astro` and `RichList.astro`), the footer's links
(`src/components/Footer.astro`) and the links in `src/pages/llms.txt.ts` are DebitMyData's: change
them for a site of your own. The pages themselves are in `src/content/docs/`
([CONTRIBUTING.md](CONTRIBUTING.md)).
