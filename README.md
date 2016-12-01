# About
knockout-selectize is a knockout adapter for the popular [selectize.js](https://github.com/selectize/selectize.js) library. This adapter is capable of two-way-databinding the selected value as well as its options.

# Install
`> npm install knockout-selectize`

# Usage

With minimal setup:
```html
<select data-bind="selectize: selected, selectizeOptions: availableOptions"></select>
```

With all available properties:
```html
<select data-bind="selectize: selected, selectizeOptions: availableOptions, optionsText: 'name', optionsSearch: 'name', optionsValue: 'id'"></select>
```

# Configure

### selectize

### selectizeOptions

### optionsText

### optionsSearch

### optionsValue

# Thanks
A big thanks goes to DrSammyD with his gist: https://gist.github.com/DrSammyD/3ae055ca1280ccd9a4ae.
Also I was able to reuse some of the thoughts that were put in this angular directive: https://github.com/machineboy2045/angular-selectize/blob/master/dist/angular-selectize.js
