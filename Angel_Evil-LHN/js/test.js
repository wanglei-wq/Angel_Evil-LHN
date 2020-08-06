$(function() {
    let $url = "";
    $.get('./statics/js/wl.json', function(responseText, textStatus, XMLHttpRequest) {
        switch (textStatus) {
            case 'success':
                $url = responseText.protocol + responseText.domain + responseText.port + responseText.context;
                alert($url)
				break;
            case 'error':
                layer.msg('走丢了', {
                    icon: 2,
                    shade: 0.01
                })
                break;
            default:
                break;
        }
    });
})