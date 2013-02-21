var attachementsBaseUrl = 'https://forum.gamenet.ru/attachment.php?attachmentid=';

convertAttachements = function() {	
	console.log('running');
	var $target = $(this).closest('table').find('textarea')
	var data = $target.val();
	var re = /\[ATTACH=CONFIG\](\d+)\[\/ATTACH\]/g;
	var data = data.replace(re, "[URL="+baseUrl+"$1][IMG]"+baseUrl+"$1[/IMG][/URL]");
	$target.val( data );
}

/**
 * Add a converter from ATTACH to IMG BBcode tag with link to the original image
 */
function addAttachementsConverter() {
	$('.cke_top').append('<span class="attachements-converter">Хочу картинки!</span>').click(convertAttachements);
}

/**
 * Main handler
 */
function start() {
	chatListener();
}

start();