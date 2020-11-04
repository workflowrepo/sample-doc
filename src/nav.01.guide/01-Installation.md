# Installation

Follow setps below to setup your markdown based documentation environment.

## Install NodeJS

Install NodeJS using [Node Version Manager (nvm)](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-%E2%80%94-installing-node-using-the-node-version-manager)
::: tip
NodeJS version >= v12.18.4 is recomended.
:::

## Install VuePress

```bash
$ npm install -g vuepress
```

## Install Dependencies

```bash
$ npm install
```

## Run site in Development mode

<code-group>
<code-block title="NPM" active>
```bash
$ npm run dev
```
</code-block>

<code-block title="YARN">
```bash
$ yarn dev
```
</code-block>
</code-group>

## Build Static Site

<code-group>
<code-block title="NPM" active>
```bash
$ npm run build
```
</code-block>

<code-block title="YARN">
```bash
$ yarn build
```
</code-block>
</code-group>

::: tip
Static site can be found in 'site-build' directory.
:::
