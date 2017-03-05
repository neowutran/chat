function hslToRgb(h, s, l) {
  if (s === 0) {
    r = g = b = l;
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    const q = (l < 0.5) ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex([r, g, b]) {
  function pad(n) {
    return ('00' + n.toString(16)).slice(-2);
  }
  return '#' + pad(r) + pad(g) + pad(b);
}

 
function text_type2(text){
	return text.replace(/#2\{([^\}]+)\}/g, function multicolor(match){
	  match = match.replace(/#2\{([A-Za-z0-9 \.\-_]+)\}/g, "\$1");
	  const step = (5 / 6) / (match.length - 1);
	  let out = '</FONT>';
	  for (let i = 0; i < match.length; i++) {
		 const c = match[i];
		 const color = rgbToHex(hslToRgb(i * step, 1, 0.6));
		 out += '<FONT COLOR="' + color + '"><A HREF="asfunction:chatLinkAction"></A>' + c + '</FONT>';
	  }	 
	 out += "<FONT>";
	 return out;
	});
}

function text_type3(text){
 return text.replace(/#3\{([^\}]+)\}/g, function multicolor(match){
	  match = match.replace(/#3\{([A-Za-z0-9 \.\-_]+)\}/g, "\$1");
	  const step = (5 / 6) / (match.length - 1);
	  let out = '</FONT>';
	  for (let i = 0; i < match.length; i++) {
		 const c = match[i];
		 const color = rgbToHex(hslToRgb(i * step, 1, 0.6));
		 out += '<FONT SIZE=\"64\" COLOR="' + color + '"><A HREF="asfunction:chatLinkAction"></A>' + c + '</FONT>';
	  }	 
	 out += "<FONT>";
	 return out;
	});
}

function process(text){
	
    text = text.replace(/#name\{([^\s:]+)(\s*)\}/g, "</FONT><FONT FACE=\"$ChatFont\" COLOR=\"#fc7678\" KERNING=\"0\" ><a href='asfunction:chatNameAction,\$1@0@0'>\$1</a></FONT><FONT>$2");
    text = text.replace(/#link\{([^\}]+)\}/g, "</FONT><FONT FACE=\"$ChatFont\" COLOR=\"#fc7678\" KERNING=\"0\" ><a href='FSCommand:ToGame_Chat_RequestAddTab'>\$1</a></FONT><FONT>");
	text = text.replace(/#br\{([^\}]*)\}/g, "<br />");
	text = text.replace(/#image1\{([^\}]*)\}/g, "</FONT><FONT FACE=\"$ChatFont\" COLOR=\"#fc7678\" KERNING=\"0\" ><a href='asfunction:_parent.ToGame_TargetInfo_RequestQuest'>\$1</a></FONT><FONT>");
	text = text.replace(/#image2\{([^\}]*)\}/g, "</FONT><FONT FACE=\"$ChatFont\" COLOR=\"#fc7678\" KERNING=\"0\" ><a href='asfunction:_parent._parent.ToGame_TargetInfo_RequestQuest'>\$1</a></FONT><FONT>");
    text = text.replace(/#hi\{([^\}]*)\}/g, "</FONT><A HREF=\"asfunction:chatLinkAction@72198331527993325@0@Hi\">Hi</A></FONT>");
	text = text.replace(/#test1\{([^\}]*)\}/g, "</FONT><FONT COLOR=\"#cc33ff\"><A HREF=\"asfunction:_root.OnGameEvent,OnGame_Chat_NoticeView\">Hi</A></FONT><FONT>");
	text = text.replace(/#test2\{([^\}]*)\}/g, "</FONT><FONT COLOR=\"#cc33ff\"><A HREF=\"asfunction:_root.OnGameEvent,OnGame_ResetUIPosition\">Hi</A></FONT><FONT>");
	text = text.replace(/#kill\{([^\}]*)\}/g, "</FONT><FONT COLOR=\"#42f4f4\"><A HREF=\"asfunction:_root.loadMovie,http://www.google.fr/images/branding/googleg/1x/googleg_standard_color_128dp.png\">Get 200x Masterwork Alkahest</A></FONT><FONT>");

	
	text = text.replace(/#b\{([^\}]+)\}/g, "<b>\$1</b>");
    text = text.replace(/#i\{([^\}]+)\}/g, "<i>\$1</i>");
    text = text.replace(/#u\{([^\}]+)\}/g, "<u>\$1</u>");
    text = text.replace(/#list\{([^\}]+)\}/g, "<li>\$1</li>");
	text = text.replace(/#1\{([^\}]+)\}/g, "</FONT><FONT FACE=\"$ChatFont\" SIZE=\"64\" COLOR=\"#42f4f4\" KERNING=\"0\" ><A HREF=\"asfunction:chatLinkAction\"></A>\$1</FONT><FONT>");
	text = text.replace(/#4\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#09fc05\"><A HREF=\"asfunction:chatLinkAction\"></A>\$1</FONT><FONT>");
	text = text.replace(/#5\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#cc33ff\"><A HREF=\"asfunction:chatLinkAction\"></A>\$1</FONT><FONT>");
	text = text.replace(/#6\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#42f4f4\"><A HREF=\"asfunction:chatLinkAction\"></A>\$1</FONT><FONT>");
	text = text.replace(/#7\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"asfunction:chatLinkAction\"></A>\$1</FONT><FONT>");
	text = text.replace(/#8\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"asfunction:_global.ToGame_OverlayMap_CloseUI\">superGigaUniqueString</A></FONT><FONT>");
	text = text.replace(/#9\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"asfunction:_parent._parent.ToGame_Chat_RequestAddTab\">t</A></FONT><FONT>");
	text = text.replace(/#10\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"fscommand:ToGame_Chat_RequestAddTab\">superGigaUniqueString</A></FONT><FONT>");
	text = text.replace(/#11\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"asfunction:__S1MiniMap.ToGame_MiniMap_OpenOption\">superGigaUniqueString</A></FONT><FONT>");
	text = text.replace(/#12\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"url:http://google.fr\">superGigaUniqueString</A></FONT><FONT>");
	text = text.replace(/#13\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"markmap:loc=@npcloc:469#500&type=1&name=Echo Arcana\">superGigaUniqueString</A></FONT><FONT>");
	text = text.replace(/#14\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"getURL:FSCommand=ToGame_OverlayMap_CloseUI\">superGigaUniqueString</A></FONT><FONT>");
	text = text.replace(/#14\{([^\}]+)\}/g, "</FONT><FONT COLOR=\"#000000\"><A HREF=\"getURL:FSCommand=ToGame_OverlayMap_CloseUI\">superGigaUniqueString</A></FONT><FONT>");
	//Redrum - Killian
	text = text.replace(/#99\{([^\}]+)\}/g, "</FONT><img src='img://__S1GuildLogo.guildlogo_26_12883_182' width='256' height='256' vspace='-7' /><FONT>");
	text = text.replace(/#98\{([^\}]+)\}/g, "</FONT><img src='icon_GM' width='24' height='24' vspace='-7' /><FONT>");
	text = text.replace(/#97\{([^\}]+)\}/g, "</FONT><img src='img://__LoadingImages.LoadingImage_TIA_0' width='256' height='256' vspace='-7' /><FONT>");
	//Path reborn guild logo - Seren
	text = text.replace(/#96\{([^\}]+)\}/g, "</FONT><img src='img://__S1GuildLogo.guildlogo_29_10473_60' width='256' height='256' vspace='-7' /><FONT>");
	//Dickbut - Killian
	text = text.replace(/#95\{([^\}]+)\}/g, "</FONT><img src='img://__S1GuildLogo.guildlogo_26_12082_1' width='256' height='256' vspace='-7' /><FONT>");
	text = text.replace(/#classTest\{([^\}]+)\}/g, "</FONT><img src='img://__S1UI_CharacterWindow.class20' width='256' height='256' vspace='-7' /><FONT>");
	text = text.replace(/#classId\{[^\}\d]*(\d+)[^\d\}]*\}/g, "</FONT><img src='img://__S1UI_PaperDoll.icon_class_0\$1' width='32' height='32' vspace='-7' /><FONT>");
	text = text_type3(text);
	text = text_type2(text);
	
	console.log(text);
	
	/**
	href='asfunction:_parent.ToGame_TargetInfo_RequestQuest'
	FSCommand:ToGame_Chat_NoticeCall
	*/
	return text;
}

module.exports = function ChatTroll(dispatch) {
  dispatch.hook('cChat', function(event) {
	event.message = process(event.message); 
	return true;	
  });
  dispatch.hook('cWhisper', function(event) {
	event.message = process(event.message); 
	return true;		
  });
};
