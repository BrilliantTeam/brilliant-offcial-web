hexo.extend.injector.register('body_end', `<script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
  new Crate({
    server: '762627112867725403',
    channel: '914360488723382352',
    avatar: 'https://media.discordapp.net/attachments/949275617520660490/987323589185388575/AddText_09-19-10.11.17.png',
    glyph: ['https://media.discordapp.net/attachments/949275617520660490/987323589185388575/AddText_09-19-10.11.17.png', '100%']
  })
</script>`, 'default');

hexo.extend.injector.register('head_begin', `<link rel="icon" href="http://example.com/favicon.png">`, 'default');
