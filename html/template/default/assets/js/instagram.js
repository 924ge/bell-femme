
// ----- Instagramメディアの取得 -----
function getInstagramMedia() {
	$.ajax({
		url					: '/' ,
		type				: 'GET' ,
		cache				: false ,
		dataType	: 'json'
	}).done(function(json){
		if (json.status == 'success') {
			var tag = '<ul class="instagram_list">';
			if (json.data) {
				for(i=0; i<json.data.length; i++) {
					if (i == 12) break;
					var row = json.data[i];
					tag += ('<li><a href="' + row.permalink + '" target="_blank" title="' + row.caption + '">');
					if (row.media_type == 'VIDEO') {
						if (row.thumbnail_url === undefined) {
							tag += ('<video src="' + row.media_url + '" autoplay muted playsinline loop></video>');
						}
						else {
							tag += ('<img src="' + row.thumbnail_url + '" />');
						}
					}
					else {
						tag += ('<img src="' + row.media_url + '" />');
					}
					tag += ('<div>' + row.caption + '</div></a></li>');
				}
			}
			tag +=('</ul>');
			$('#instagram_list').html(tag);
		}
		else {
			$('#instagram_list').html('<span class="text-muted">取得できません</span>');
			if (json.instagram_error !== undefined) {
				$('#instagram_list').html(json.instagram_error);
			}
			else {
				if (json.reason == 'curl_init_failed') {
					$('#instagram_list').html('このサーバーではcURLが使用できません。サーバー管理者にお問合せください。');
				}
				else if (json.reason == 'instagram_token_refresh_faild') {
					$('#instagram_list').html('長期ページトークンの更新に失敗しました。サーバー管理者にお問合せください。');
				}
			}
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
		console.log('[getInstagramMedia] jqXHR.status[' + jqXHR.status + '] textStatus[' + textStatus + ']  errorThrowm[' + errorThrown + ']');
	});
}