### Background color from theme
1. Navigate index file, all backround variables defined there.
2. Use sx props to define bgcolor
```
<Box sx={{ bgcolor: "background.auto" }}>
  Your div here.
</Box>
```
### Typography color from theme
1. Use color props
```
  <Typography color="text.nav">Text</Typography>
```
### Typography font styling
1. Font-weight-600-semibold <-- h1,h2,h3,h4,h5,h6
2. Font-weight-500-medium <-- body1, body2
3. Font-weight-400-regular <-- subtitle1, subtitle2, caption