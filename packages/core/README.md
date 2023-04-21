<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">react-input-mask-br</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ReisSouza/mask-Input-react-ptbr.svg)](https://github.com/ReisSouza/mask-Input-react-ptbr/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ReisSouza/mask-Input-react-ptbr.svg)](https://github.com/ReisSouza/mask-Input-react-ptbr/pulls)
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
- [Usage single](#usage-single)
  - [✍️ Authors ](#️-authors-)
- [Thanks](#thanks)


# Installation
<h6>NPM use case</h6>

```npm i @format-string/core```

<h6>Yarn use case</h6>

```yarn add @format-string/core```

# Usage

```
import {setMask } from "@format-string/core" 

```

# Properties setMask
|                           Name                            |               Type                | Default | Description |
|        :-----------------------------------------:        |    :-------------------------:    | :-----: | :--------------------------------------------------------------------- |
|                    **[`type`](#type)**                    |            `{String}`             |         | Mask format |
|                          **value**                        |            `string | Number | undefined`             |         | string to be formatted |
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

# Usage single

```
```

## ✍️ Authors <a name = "authors"></a>

- [@ReisSouza](https://github.com/ReisSouza) - Idea & Initial work

See also the list of [contributors](https://https://github.com/ReisSouza) who participated in this project.


# Thanks
Thanks to [BrowserStack](https://www.browserstack.com/) for the help with testing on real devices
