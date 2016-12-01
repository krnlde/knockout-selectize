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

# Configuring with knockout bindingHandlers

### selectize
This will initialize the selectize in the background. The value provided will be the selected value. It is recommended to put in a knockout observable in there.

### selectizeOptions
An array of objects that'll be passed to selectize.js. If this array is a knockout observableArray the options will be modifiable at runtime.

### selectizePlaceholder (Default: `null`)
Defines a placeholder when nothing is selected.

### optionsText (Default: `"title"`)
Defines which object key to use for the option text / label.

### optionsSearch (Default: `"title"`)
Defines which object key to use for search.

### optionsValue (Default: `"id"`)
Defines which object key to used as form value.

# Thanks
A big thanks goes to DrSammyD with his gist: https://gist.github.com/DrSammyD/3ae055ca1280ccd9a4ae.
Also I was able to reuse some of the thoughts that were put in this angular directive: https://github.com/machineboy2045/angular-selectize/blob/master/dist/angular-selectize.js
