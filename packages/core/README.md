<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">FORMAT STRING</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ReisSouza/format-string.svg)](https://github.com/ReisSouza/format-string/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ReisSouza/format-string.svg)](https://github.com/ReisSouza/format-string/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<h6 align="center"> 
functionality that allows adding or removing mask to string, working with any react library, or html, react, and javascript</h6>
<h5 align="center"> Available transform string:</h5>
<p align="center">
  | cnpj
  | cpf
  | phone
  | postalCode
  | cpfOurCnpj
  | currency
  | rg
  | credCard
  | obscureEmail
  | number
  | telephone
  | cardExpirationDate
</p>



# Table of Contents
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Properties setMask](#properties-setmask)
- [Type](#type)
- [Usage single visit](#usage-single-visit)
  - [✍️ Authors ](#️-authors-)
- [Thanks](#thanks)


# Installation
<h6>NPM use case</h6>

```npm i @format-string/core```

<h6>Yarn use case</h6>

```yarn add @format-string/core```

# Usage

```
import { formatString } from '@format-string/core'

const formatStringCPF = formatString({ type: 'cpf', value: '00000000000' })

console.log({ formatStringCPF })


Result = { formatStringCPF: 000.000.000-00 }

```

# Properties setMask
|                           Name                            |               Type                | Default | Description |
|        :-----------------------------------------:        |    :-------------------------:    | :-----: | :--------------------------------------------------------------------- |
|                    **[`type`](#type)**                    |            [`string`](#type)             |   -      | Mask format |
|                          **value**                        |            `string | Number | undefined`             |   -      | string to be formatted |
|                         

# Type

<h6>The typo is an enum in the following format:</h6>

```
  | cnpj
  | cpf
  | phone
  | postalCode
  | cpfOurCnpj
  | currency
  | rg
  | credCard
  | obscureEmail
  | number
  | telephone
  | cardExpirationDate
```

# Usage single visit

<p align="center">
   
formatRemove : [npm i @format-string/removeCPF](https://www.npmjs.com/package/@format-string/remove) 
</p>
<p align="center">
   
formatStringCPF : [npm i @format-string/cpf](https://www.npmjs.com/package/@format-string/cpf) 
</p>
<p align="center">
   
formatStringCNPJ : [npm i @format-string/cnpj](https://www.npmjs.com/package/@format-string/cnpj) 
</p>
<p align="center">
   
formatStringSingleDocument : [npm i @format-string/single-document](https://www.npmjs.com/package/@format-string/single-document) 
</p>
<p align="center">
   
formatStringNumber : [npm i @format-string/number](https://www.npmjs.com/package/@format-string/number) 
</p>
<p align="center">
   
formatStringCurrency : [npm i @format-string/currency](https://www.npmjs.com/package/@format-string/currency) 
</p>
<p align="center">
   
formatStringCredCardExpirationDate : [npm i @format-string/cred-card-expiration-date](https://www.npmjs.com/package/@format-string/cred-card-expiration-date) 
</p>
<p align="center">
   
formatStringTelephone : [npm i @format-string/telephone](https://www.npmjs.com/package/@format-string/telephone) 
</p>
<p align="center">
   
formatStringObscureEmail : [npm i @format-string/obscure-email](https://www.npmjs.com/package/@format-string/obscure-email) 
</p>
<p align="center">
   
formatStringPostalCode: [npm i @format-string/postal-code](https://www.npmjs.com/package/@format-string/postal-code) 
</p>
<p align="center">
   
formatStringRG : [npm i @format-string/rg](https://www.npmjs.com/package/@format-string/rg) 
</p>
<p align="center">
   
formatStringPhone : [npm i @format-string/phone](https://www.npmjs.com/package/@format-string/phone) 
</p>
<p align="center">
   
formatStringCredCard : [npm i @format-string/cred-card](https://www.npmjs.com/package/@format-string/cred-card) 
</p>


```
```

## ✍️ Authors <a name = "authors"></a>

- [@ReisSouza](https://github.com/ReisSouza) - Idea & Initial work

See also the list of [contributors](https://https://github.com/ReisSouza) who participated in this project.


# Thanks
Thanks to [BrowserStack](https://www.browserstack.com/) for the help with testing on real devices
