hexo.extend.injector.register('body_end', `<script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
  new Crate({
    server: '762627112867725403',
    channel: '914360488723382352',
    avatar: 'https://media.discordapp.net/attachments/949275617520660490/987323589185388575/AddText_09-19-10.11.17.png',
    glyph: ['https://media.discordapp.net/attachments/949275617520660490/987323589185388575/AddText_09-19-10.11.17.png', '100%']
  })
</script>`, 'default');

hexo.extend.injector.register('head_begin', `<link rel="icon" href="https://media.discordapp.net/attachments/949275617520660490/986589107792773210/1653318260408.png">`, 'default');
hexo.extend.injector.register('head_end', `<meta property="og:image" content="https://media.discordapp.net/attachments/949275617520660490/986589107792773210/1653318260408.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="256">
<meta property="og:image:height" content="256">`, 'default');

<script>
$(function() {
  if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
    YOUTUBE_VIDEO_MARGIN=5;
  }
  $('iframe').each(function(index,item) {
    if($(item).attr('src').match(/http(s)?:\/\/www\.youtube\.com/)) {
      var w=$(item).attr('width');
      var h=$(item).attr('height');
      var ar = h/w*100;
      ar=ar.toFixed(2);
      //Style iframe   
      $(item).css('position','absolute');
      $(item).css('top','0');
      $(item).css('left','0');   
      $(item).css('width','100%');
      $(item).css('height','100%');
      $(item).css('max-width',w+'px');
      $(item).css('max-height', h+'px');       
      $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:'+YOUTUBE_VIDEO_MARGIN+'px;" />');
      $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
    }
  });
});
</script>
