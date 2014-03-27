# MC Icons

A sprited Minecraft icons CSS sheet.

#### Usage
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MyMCPage</title>
  <link rel="stylesheet" href="css/mc-icons.min.css" type="text/css" media="screen" title="no title" charset="utf-8">
</head>
<body>
  ...
  <span class="mc-icon mc-icon-wood_axe"></span>
  <span class="mc-icon mc-icon-wood_pickaxe"></span>
  ...
</body>
</html>
```
All production files can be found in the ```build/``` folder. You just have to put the content of it into your ```css/``` folder at the root of your project.

#### Last features

*27/03/2014* - Add multiple sizes support (8px, 16px, 32px, 64px and 128px):
```html
<span class="mc-icon-8 mc-icon-wood_axe"></span>
<span class="mc-icon mc-icon-wood_axe"></span>
<span class="mc-icon-32 mc-icon-wood_axe"></span>
<span class="mc-icon-64 mc-icon-wood_axe"></span>
<span class="mc-icon-128 mc-icon-wood_axe"></span>
```

The full classname list can be found http://caligone.github.io/mc-icons.
