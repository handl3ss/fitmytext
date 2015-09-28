# Fit My Text
  
## Usage

![](http://i.imgur.com/sjUTjDn.gifv)

```js
<input type="text" class="form-control" id="txtInput">
<div id="outputDiv"></div>
<script>
    $('#outputDiv').fittext();
</script>
```

## It can be improved
1 Another method of font size determination can be used
        I define font size based on width ratio. This method is not completely accurate.
        This approach can be changed, for example
        
        
  - Daniel Hoffman`s approach can be used http://stackoverflow.com/a/17433451 
  -  Another way is brute force size with a given step but it will slow down the work.
	      
	      
	      
2 We can make settings more flexible – we can set from what input we`ll take text and in what div it will be put.

### Todos

 - Write Tests
 - Flexible settings
 - Change method what calculate font-size
 
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request



