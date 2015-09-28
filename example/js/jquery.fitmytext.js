/**
 * @preserve  FitMyText
 * @name      jquery.fitmytext.js
 * @author    Oleksandr Bezruchenko
 * @date      2015-09-28
 * @version   0.0.1
 * @copyright (c) 2015 Oleksandr Bezruchenko
 * @homepage  https://github.com/handl3ss/fitmytext
 * @example   https://handl3ss.github.io/fitmytext
 */
(function($){
  jQuery.fn.fittext = function(options){
  jQuery.fn.fittext.options = settings;  
    var settings = $.extend({
     minFontSize: 5,
     maxFontSize: false //set 43 and its work correctly
    }, options);

    this.each(function(){
        
        var $div = $(this);
        if(!jQuery.fn.fittext.standartDivFontSize){
                var standartDivFontSize = parseFloat(settings.maxFontSize || $div.css('font-size'), 10);
                jQuery.fn.fittext.standartDivFontSize = standartDivFontSize;  
        } 
        var divFontSize = parseFloat(settings.maxFontSize || $div.css('font-size'), 10);
        if(jQuery.fn.fittext.standartDivFontSize > divFontSize){
            divFontSize =jQuery.fn.fittext.standartDivFontSize
        }
        var width   = $div.width();
        var clone   = $div.data('divFitTester-clone');

        var $input = $(txtInput);
        $input.off('keydown.fittext keyup.fittext');


        if (!clone) {
                clone = $('<div></div>', {
                    css : {
                        fontSize   : $div.css('font-size'),
                        fontFamily : $div.css('font-family'), // font family like Arial , Helvetica
                        fontStyle  : $div.css('font-style'), // normal, italic and etc
                        fontWeight : $div.css('font-weight'), // bold
                        fontVariant: $div.css('font-variant'), // CAPITAL LETTER or not
                        position   : 'absolute',
                        left       : '-9999px',
                        visibility : 'hidden'
                    }
                }).insertAfter($div);

                $div.data('divFitTester-clone', clone);
            }

        $input.on('keydown.fittext keyup.fittext',function(){
          $div.html($input.val());
          clone.html($div.html().replace(/ /g, '&nbsp;'));

          var ratio = width / (clone.width() || 1),
              currentFontSize = parseInt( $div.css('font-size'), 10 ),
              fontSize = Math.floor(currentFontSize * ratio);

              if (fontSize > divFontSize) { fontSize = divFontSize; }
              if (fontSize < settings.minFontSize) { fontSize = settings.minSize; }

              $div.css('font-size', fontSize);
              clone.css('font-size', fontSize);

        }).triggerHandler('keyup.fittext');
  
            
    })

     return this;

  };
})(jQuery);
